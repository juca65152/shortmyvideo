import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { headers } from 'next/headers'
import { validateEnv } from '@/lib/env'
import { supabase } from '@/lib/supabase'

// Initialize Stripe with live secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
})

// Stripe webhook secret for live mode
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(request: NextRequest) {
  try {
    // Validate environment variables
    validateEnv()

    const body = await request.text()
    const sig = headers().get('stripe-signature')

    if (!sig) {
      return NextResponse.json({ error: 'No signature' }, { status: 400 })
    }

    let event: Stripe.Event

    try {
      // Verify webhook signature
      event = stripe.webhooks.constructEvent(body, sig, endpointSecret)
    } catch (err) {
      console.error('Webhook signature verification failed:', err)
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
    }

    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object as Stripe.Checkout.Session

        // Extract metadata
        const credits = parseInt(session.metadata?.credits || '0')
        const userId = session.metadata?.userId
        const userEmail = session.metadata?.userEmail
        const packageType = session.metadata?.packageType

        if (!credits || !userId || packageType !== 'extra_credits') {
          console.error('Invalid metadata in webhook:', session.metadata)
          return NextResponse.json({ error: 'Invalid metadata' }, { status: 400 })
        }

        // Prevent duplicate processing using idempotency
        const { data: existingPayment } = await supabase
          .from('payments')
          .select('id')
          .eq('stripe_session_id', session.id)
          .single()

        if (existingPayment) {
          console.log('Payment already processed:', session.id)
          return NextResponse.json({ received: true })
        }

        // Record the payment
        const { error: paymentError } = await supabase
          .from('payments')
          .insert({
            stripe_session_id: session.id,
            user_id: userId,
            amount: session.amount_total,
            currency: session.currency,
            credits_purchased: credits,
            status: 'completed',
            metadata: session.metadata,
            created_at: new Date().toISOString(),
          })

        if (paymentError) {
          console.error('Failed to record payment:', paymentError)
          return NextResponse.json({ error: 'Failed to record payment' }, { status: 500 })
        }

        // Add credits to user account
        const { error: creditError } = await supabase.rpc('add_user_credits', {
          p_user_id: userId,
          p_credits: credits,
        })

        if (creditError) {
          console.error('Failed to add credits:', creditError)
          // Note: In production, you might want to implement a retry mechanism or manual intervention
          return NextResponse.json({ error: 'Failed to add credits' }, { status: 500 })
        }

        console.log(`Successfully added ${credits} credits to user ${userId}`)
        break

      case 'payment_intent.payment_failed':
        const paymentIntent = event.data.object as Stripe.PaymentIntent
        console.error('Payment failed:', paymentIntent.id)
        // Handle failed payment (optional: send notification, update status, etc.)
        break

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })

  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    )
  }
}