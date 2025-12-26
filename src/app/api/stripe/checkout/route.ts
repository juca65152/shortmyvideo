import { NextResponse } from "next/server"
import Stripe from "stripe"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
})

export async function POST(req: Request) {
  try {
    const { plan, billingCycle } = await req.json()

    if (!plan || !billingCycle) {
      return NextResponse.json(
        { error: "Missing plan or billing cycle" },
        { status: 400 }
      )
    }

    let priceId: string | undefined

    if (plan === "pro" && billingCycle === "monthly") {
      priceId = process.env.STRIPE_PRICE_PRO_MONTHLY
    }

    if (plan === "pro" && billingCycle === "annual") {
      priceId = process.env.STRIPE_PRICE_PRO_ANNUAL
    }

    if (plan === "creator" && billingCycle === "monthly") {
      priceId = process.env.STRIPE_PRICE_CREATOR_MONTHLY
    }

    if (plan === "creator" && billingCycle === "annual") {
      priceId = process.env.STRIPE_PRICE_CREATOR_ANNUAL
    }

    if (!priceId) {
      return NextResponse.json(
        { error: "Invalid plan configuration" },
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
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing?canceled=true`,
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error("Stripe checkout error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
