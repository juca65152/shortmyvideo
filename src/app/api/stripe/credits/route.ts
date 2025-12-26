import { NextResponse } from "next/server"
import { getStripe } from "@/lib/stripe/server"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function POST(req: Request) {
  try {
    const stripe = getStripe()
    const { priceId, customerId } = await req.json()

    if (!priceId || !customerId) {
      return NextResponse.json(
        { error: "Missing priceId or customerId" },
        { status: 400 }
      )
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      customer: customerId,
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/credits/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/extra-credits`,
    })

    return NextResponse.json({ url: session.url })
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message ?? "Stripe error" },
      { status: 500 }
    )
  }
}
