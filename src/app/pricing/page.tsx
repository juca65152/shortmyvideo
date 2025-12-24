"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Sparkles, Zap, Crown } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type BillingCycle = "monthly" | "annual"

type Plan = {
  name: string
  subtitle: string
  price: {
    monthly: number
    annual: number
  }
  description: string
  features: string[]
  cta: string
  highlighted: boolean
  icon?: LucideIcon
  color: string
  badge?: string
}

export default function PricingPage() {
  const router = useRouter()
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly")

  const plans: Plan[] = [
    {
      name: "Free",
      subtitle: "Get Started",
      price: { monthly: 0, annual: 0 },
      description: "Perfect for trying out ShortClip AI",
      features: [
        "Up to 2 videos per month",
        "15-second shorts only",
        "Automatic subtitles",
        "Auto-detected language",
        "Subtle watermark",
        "7-day library retention",
        "No credit card required"
      ],
      cta: "Start Free",
      highlighted: false,
      icon: Sparkles,
      color: "from-gray-600 to-gray-800"
    },
    {
      name: "Pro",
      subtitle: "Most Popular",
      price: { monthly: 39, annual: 29 },
      description: "For serious content creators",
      features: [
        "Up to 50 videos per month",
        "15s, 30s, and 3-minute shorts",
        "Advanced intelligent clipping",
        "Multilingual subtitles",
        "No watermark",
        "Unlimited downloads",
        "Priority support"
      ],
      cta: "Unlock Pro",
      highlighted: true,
      icon: Zap,
      color: "from-[#0066FF] to-[#FF0080]",
      badge: "⭐ Most used by creators"
    },
    {
      name: "Creator+",
      subtitle: "For Scale",
      price: { monthly: 79, annual: 59 },
      description: "Maximum power for professionals",
      features: [
        "Unlimited videos",
        "All Pro features",
        "Priority processing",
        "Advanced language support",
        "White-label options"
      ],
      cta: "Scale My Creation",
      highlighted: false,
      icon: Crown,
      color: "from-purple-600 to-pink-600"
    }
  ]

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <section className="text-center mb-16 px-4">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Choose the plan that matches
          <br />
          <span className="bg-gradient-to-r from-[#0066FF] to-[#FF0080] bg-clip-text text-transparent">
            your creation pace
          </span>
        </h1>

        <div className="inline-flex bg-gray-100 p-2 rounded-full">
          {(["monthly", "annual"] as BillingCycle[]).map(cycle => (
            <button
              key={cycle}
              onClick={() => setBillingCycle(cycle)}
              className={`px-6 py-2 rounded-full font-medium transition ${
                billingCycle === cycle
                  ? "bg-white shadow text-gray-900"
                  : "text-gray-600"
              }`}
            >
              {cycle === "monthly" ? "Monthly" : "Annual"}
            </button>
          ))}
        </div>
      </section>

      {/* Plans */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {plans.map(plan => {
            const IconComponent = plan.icon
            const price =
              billingCycle === "monthly"
                ? plan.price.monthly
                : plan.price.annual

            return (
              <Card
                key={plan.name}
                className={`relative p-8 ${
                  plan.highlighted
                    ? "border-2 border-[#0066FF] shadow-xl scale-105"
                    : "border"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#0066FF] to-[#FF0080] text-white px-4 py-1 rounded-full text-sm">
                    {plan.badge}
                  </div>
                )}

                {/* Icon — BLINDADO */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-6`}
                >
                  {typeof IconComponent === "function" ? (
                    <IconComponent className="w-7 h-7 text-white" />
                  ) : null}
                </div>

                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.subtitle}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold">${price}</span>
                  {price > 0 && <span className="text-gray-600"> / mo</span>}
                </div>

                <Button
                  className="w-full mb-6"
                  onClick={() => router.push("/extra-credits")}
                >
                  Comprar
                </Button>

                <div className="space-y-3">
                  {plan.features.map(feature => (
                    <div key={feature} className="flex gap-2 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-[#0066FF]" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="mt-20 text-center">
        <Link href="/">
          <Button variant="outline">Back to Home</Button>
        </Link>
      </section>
    </div>
  )
}
