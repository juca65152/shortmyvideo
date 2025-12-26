import { NextResponse } from "next/server"
import Stripe from "stripe"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY

  if (!key) {
    throw new Error("STRIPE_SECRET_KEY is missing")
  }

  return new Stripe(key, {
    apiVersion: "2024-06-20",
  })
}
export async function POST(req: Request) {
  try {
    const stripe = getStripe()
    const { plan, billing } = await req.json()

    if (!plan || !billing) {
      return NextResponse.json(
        { error: "Missing plan or billing" },
        { status: 400 }
      )
    }

    const PRICE_MAP: Record<string, string | undefined> = {
      "Pro_monthly": process.env.STRIPE_PRICE_PRO_MONTHLY,
      "Pro_annual": process.env.STRIPE_PRICE_PRO_ANNUAL,
      "Creator_monthly": process.env.STRIPE_PRICE_CREATOR_MONTHLY,
      "Creator_annual": process.env.STRIPE_PRICE_CREATOR_ANNUAL,
    }

    const priceId = PRICE_MAP[`${plan}_${billing}`]

    if (!priceId) {
      return NextResponse.json(
        { error: "Invalid plan or billing" },
        { status: 400 }
      )
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing`,
    })

    return NextResponse.json({ url: session.url })
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message ?? "Stripe error" },
      { status: 500 }
    )
  }
}
