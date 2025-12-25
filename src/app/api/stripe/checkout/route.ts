import { NextResponse } from "next/server"
import { stripe } from "@/lib/stripe/server"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const plan = searchParams.get("plan")
  const billing = searchParams.get("billing")

  if (!plan || !billing) {
    return NextResponse.json({ error: "Missing parameters" }, { status: 400 })
  }

  const PRICE_IDS: Record<string, { monthly: string; annual: string }> = {
    Pro: {
      monthly: process.env.STRIPE_PRICE_PRO_MONTHLY!,
      annual: process.env.STRIPE_PRICE_PRO_ANNUAL!,
    },
    "Creator+": {
      monthly: process.env.STRIPE_PRICE_CREATOR_MONTHLY!,
      annual: process.env.STRIPE_PRICE_CREATOR_ANNUAL!,
    },
  }

  const priceId = PRICE_IDS[plan]?.[billing as "monthly" | "annual"]

  if (!priceId) {
    return NextResponse.json({ error: "Invalid plan" }, { status: 400 })
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
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing`,
    metadata: {
      plan,
      billing,
    },
  })

  return NextResponse.redirect(session.url!)
}
