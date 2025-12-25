import { NextResponse } from "next/server"
import Stripe from "stripe"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function POST(req: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY

  if (!secretKey) {
    return NextResponse.json(
      { error: "Stripe not configured" },
      { status: 500 }
    )
  }

  const stripe = new Stripe(secretKey, {
    apiVersion: "2024-06-20",
  })

  // por enquanto apenas retorne algo simples
  return NextResponse.json({ ok: true })
}
