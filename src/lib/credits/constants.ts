// Credit system constants and pricing

import { CreditCost, Plan, CreditPack } from "./types"

// Short generation costs
export const SHORT_COSTS: Record<string, number> = {
  "15s": 10,
  "30s": 20,
  "3min": 100
}

// Subtitle action costs
export const SUBTITLE_COSTS = {
  CHANGE_LANGUAGE: 5,
  REGENERATE: 5
}

// Reprocessing discount
export const REPROCESSING_DISCOUNT = 0.5 // 50% of original cost

// Plan definitions
export const PLANS: Record<string, Plan> = {
  free: {
    id: "free",
    name: "Free",
    monthlyCredits: 200,
    price: {
      monthly: 0,
      annual: 0
    },
    features: [
      "200 credits per month",
      "15-second shorts only",
      "Automatic subtitles",
      "Auto-detected language",
      "Subtle watermark",
      "7-day library retention",
      "No credit card required"
    ]
  },
  pro: {
    id: "pro",
    name: "Pro",
    monthlyCredits: 1500,
    price: {
      monthly: 39,
      annual: 29
    },
    features: [
      "1,500 credits per month",
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
    ]
  },
  creator: {
    id: "creator",
    name: "Creator+",
    monthlyCredits: 3500,
    price: {
      monthly: 79,
      annual: 59
    },
    features: [
      "3,500 credits per month",
      "All Pro features",
      "Priority processing",
      "Advanced language support",
      "Custom subtitle templates",
      "Extended commercial usage rights",
      "Early access to new features",
      "Dedicated account manager",
      "API access (coming soon)",
      "White-label options"
    ]
  },
  creatorPro: {
    id: "creatorPro",
    name: "Creator Pro",
    monthlyCredits: 20000,
    price: {
      monthly: 599,
      annual: 449
    },
    features: [
      "20,000 credits per month",
      "All Creator+ features",
      "Maximum priority processing",
      "Advanced AI models",
      "Custom integrations",
      "Team collaboration tools",
      "Advanced analytics dashboard",
      "Custom branding options",
      "SLA guarantee",
      "24/7 premium support",
      "Dedicated success manager"
    ]
  }
}

// Credit packs (one-time purchases)
export const CREDIT_PACKS: CreditPack[] = [
  {
    id: "pack_500",
    credits: 500,
    price: 29.90,
    currency: "BRL",
    popular: false
  },
  {
    id: "pack_1500",
    credits: 1500,
    price: 79.90,
    currency: "BRL",
    popular: true
  },
  {
    id: "pack_5000",
    credits: 5000,
    price: 199.90,
    currency: "BRL",
    popular: false
  },
  {
    id: "pack_10000",
    credits: 10000,
    price: 349.90,
    currency: "BRL",
    popular: false
  }
]

// Non-consuming actions (free operations)
export const FREE_ACTIONS = [
  "upload",
  "preview",
  "download",
  "library_browse",
  "delete"
]

// Credit consumption rules
export const CREDIT_RULES = {
  // Purchased credits are consumed before monthly credits
  CONSUMPTION_ORDER: ["purchased", "monthly"],
  
  // Credits never expire
  PURCHASED_CREDITS_EXPIRE: false,
  
  // Monthly credits reset on subscription renewal
  MONTHLY_CREDITS_RESET: true,
  
  // Minimum credit balance warning threshold (15%)
  LOW_BALANCE_THRESHOLD: 0.15,
  
  // Credit packs only available for paid subscribers
  PACKS_REQUIRE_SUBSCRIPTION: true
}
