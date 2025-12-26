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

    const { priceId } = await req.json()

    if (!priceId) {
      return NextResponse.json(
        { error: "Missing priceId" },
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
