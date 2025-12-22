// Credit system types and interfaces

export type PlanType = "free" | "pro" | "creator" | "creatorPro"

export type ShortDuration = "15s" | "30s" | "3min"

export type CreditSource = "monthly" | "extra" | "bonus"

export interface CreditCost {
  duration: ShortDuration
  cost: number
}

export interface Plan {
  id: PlanType
  name: string
  monthlyCredits: number
  price: {
    monthly: number
    annual: number
  }
  features: string[]
}

export interface CreditPack {
  id: string
  credits: number
  price: number
  currency: string
  popular?: boolean
}

export interface UserCredits {
  userId: string
  monthlyCredits: number
  extraCredits: number // New: non-expiring credits from purchases
  purchasedCredits: number // Deprecated: use extraCredits instead
  totalCredits: number
  lastReset: Date
  plan: PlanType
}

export interface CreditBalance {
  monthly: number
  extra: number
  total: number
}

export interface CreditTransaction {
  id: string
  userId: string
  type: "deduct" | "add" | "reset"
  amount: number
  source: CreditSource
  reason: string
  timestamp: Date
  metadata?: Record<string, any>
  // Stripe-specific fields
  stripeEventId?: string
  currency?: string
  amountPaid?: number
}

export interface SubtitleAction {
  type: "change_language" | "regenerate"
  cost: number
}

export interface VideoProcessing {
  duration: ShortDuration
  baseCost: number
  subtitleActions: SubtitleAction[]
  totalCost: number
  isRegeneration?: boolean
}
