"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Sparkles, Zap, Crown } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly")

  const plans = [
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
        "Multilingual subtitles (50+ languages)",
        "Manual language selection",
        "Subtitle regeneration",
        "No watermark",
        "Unlimited downloads",
        "Full library access",
        "Video deletion controls",
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
        "Custom subtitle templates",
        "Extended commercial usage rights",
        "Early access to new features",
        "Dedicated account manager",
        "API access (coming soon)",
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
      {/* Header Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Choose the plan that matches
            <br />
            <span className="bg-gradient-to-r from-[#0066FF] to-[#FF0080] bg-clip-text text-transparent">
              your creation pace
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Turn long videos into publish-ready shorts with intelligent cuts and automatic subtitles.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 p-2 bg-gray-100 rounded-full">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                billingCycle === "monthly"
                  ? "bg-white text-gray-900 shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                billingCycle === "annual"
                  ? "bg-white text-gray-900 shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Annual
            </button>
          </div>

          {billingCycle === "annual" && (
            <p className="text-sm text-[#FF0080] font-medium mt-4 animate-in fade-in duration-300">
              💰 Save up to 25% with annual billing
            </p>
          )}
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {plans.map((plan, idx) => {
              const Icon = plan.icon
              const price = billingCycle === "monthly" ? plan.price.monthly : plan.price.annual
              
              return (
                <Card
                  key={idx}
                  className={`relative p-8 transition-all duration-300 ${
                    plan.highlighted
                      ? "border-2 border-[#0066FF] shadow-2xl shadow-[#0066FF]/20 scale-105 md:scale-110"
                      : "border-2 hover:border-gray-300 hover:shadow-xl"
                  }`}
                >
                  {/* Badge */}
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#0066FF] to-[#FF0080] text-white text-sm font-medium rounded-full shadow-lg whitespace-nowrap">
                      {plan.badge}
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-6`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Plan Name */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                    <p className="text-sm text-gray-600">{plan.subtitle}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-gray-900">${price}</span>
                      {price > 0 && (
                        <span className="text-gray-600">
                          /{billingCycle === "monthly" ? "mo" : "mo"}
                        </span>
                      )}
                    </div>
                    {billingCycle === "annual" && price > 0 && (
                      <p className="text-sm text-gray-600 mt-2">
                        Billed ${price * 12} annually
                      </p>
                    )}
                    <p className="text-sm text-gray-600 mt-2">{plan.description}</p>
                  </div>

                  {/* CTA Button */}
                  <Button
                    className={`w-full mb-8 ${
                      plan.highlighted
                        ? "bg-gradient-to-r from-[#0066FF] to-[#FF0080] hover:opacity-90 text-white shadow-lg shadow-[#FF0080]/30"
                        : "bg-gray-900 hover:bg-gray-800 text-white"
                    }`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>

                  {/* Features */}
                  <div className="space-y-4">
                    {plan.features.map((feature, featureIdx) => (
                      <div key={featureIdx} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          plan.highlighted ? "text-[#0066FF]" : "text-gray-400"
                        }`} />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {[
              {
                q: "Can I switch plans anytime?",
                a: "Yes! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately."
              },
              {
                q: "What happens to my videos after the free trial?",
                a: "Free plan videos are retained for 7 days. Upgrade to Pro or Creator+ for unlimited library access."
              },
              {
                q: "Do you offer refunds?",
                a: "Yes, we offer a 14-day money-back guarantee on all paid plans. No questions asked."
              },
              {
                q: "What video formats do you support?",
                a: "We support all major video formats including MP4, MOV, AVI, and direct YouTube links."
              },
              {
                q: "How accurate are the automatic subtitles?",
                a: "Our AI achieves 95%+ accuracy across 50+ languages. You can also regenerate subtitles if needed."
              }
            ].map((faq, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-4xl mx-auto">
          <Card className="p-12 bg-gradient-to-br from-[#0066FF] to-[#FF0080] border-0 shadow-2xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Still have questions?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Our team is here to help you choose the perfect plan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#0066FF] hover:bg-gray-100">
                Contact Sales
              </Button>
              <Link href="/">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                  Back to Home
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
