import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { validateEnv } from '@/lib/env'

// Credit packages configuration
const CREDIT_PACKAGES = {
  '100': { credits: 100, price: 499, currency: 'usd' }, // $4.99
  '250': { credits: 250, price: 1199, currency: 'usd' }, // $11.99
  '500': { credits: 500, price: 2299, currency: 'usd' }, // $22.99
  '1000': { credits: 1000, price: 4199, currency: 'usd' }, // $41.99
} as const

export async function POST(request: NextRequest) {
  try {
    // Validate environment variables
    validateEnv()

    // Validate Stripe secret key before initializing
    if (!process.env.STRIPE_SECRET_KEY) {
      console.error('STRIPE_SECRET_KEY is not defined')
      return NextResponse.json(
        { error: 'Stripe configuration error' },
        { status: 500 }
      )
    }

    // Initialize Stripe only after validation
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2024-12-18.acacia',
    })

    const body = await request.json()
    const { credits, userId, userEmail } = body

    // Validate input
    if (!credits || !userId || !userEmail) {
      return NextResponse.json(
        { error: 'Missing required fields: credits, userId, userEmail' },
        { status: 400 }
      )
    }

    const packageInfo = CREDIT_PACKAGES[credits as keyof typeof CREDIT_PACKAGES]
    if (!packageInfo) {
      return NextResponse.json(
        { error: 'Invalid credit package' },
        { status: 400 }
      )
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: packageInfo.currency,
            product_data: {
              name: `${packageInfo.credits} Extra Credits`,
              description: `Add ${packageInfo.credits} credits to your account`,
            },
            unit_amount: packageInfo.price,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/extra-credits?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/extra-credits?canceled=true`,
      metadata: {
        credits: packageInfo.credits.toString(),
        userId: userId,
        userEmail: userEmail,
        packageType: 'extra_credits',
      },
      customer_email: userEmail,
      // Enable idempotency with session ID
      idempotency_key: `checkout_${userId}_${credits}_${Date.now()}`,
    })

    return NextResponse.json({
      sessionId: session.id,
      url: session.url,
    })

  } catch (error) {
    console.error('Stripe checkout error:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}