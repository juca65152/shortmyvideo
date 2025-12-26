import { NextResponse } from "next/server"
import Stripe from "stripe"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
})

export async function POST(req: Request) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: "Stripe not configured" },
        { status: 500 }
      )
    }

    const body = await req.json()
    const { plan, billing } = body

    if (!plan || !billing) {
      return NextResponse.json(
        { error: "Missing plan or billing cycle" },
        { status: 400 }
      )
    }

    // 🔐 Mapear planos + billing → Price IDs
    const PRICE_MAP: Record<string, Record<string, string | undefined>> = {
      Pro: {
        monthly: process.env.STRIPE_PRICE_PRO_MONTHLY,
        annual: process.env.STRIPE_PRICE_PRO_ANNUAL,
      },
      "Creator+": {
        monthly: process.env.STRIPE_PRICE_CREATOR_MONTHLY,
        annual: process.env.STRIPE_PRICE_CREATOR_ANNUAL,
      },
    }

    const priceId = PRICE_MAP[plan]?.[billing]

    if (!priceId) {
      return NextResponse.json(
        { error: "Invalid plan or billing configuration" },
        { status: 400 }
      )
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/billing/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing`,
      metadata: {
        plan,
        billing,
        source: "pricing_page",
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error("Stripe subscription checkout error:", error)
    return NextResponse.json(
      { error: "Failed to create subscription checkout" },
      { status: 500 }
    )
  }
}
