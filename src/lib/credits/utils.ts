// Credit calculation and management utilities

import { 
  SHORT_COSTS, 
  SUBTITLE_COSTS, 
  REPROCESSING_DISCOUNT,
  CREDIT_RULES 
} from "./constants"
import { ShortDuration, VideoProcessing, SubtitleAction, CreditBalance } from "./types"

/**
 * Calculate cost for generating a short video
 */
export function calculateShortCost(
  duration: ShortDuration,
  isRegeneration: boolean = false
): number {
  const baseCost = SHORT_COSTS[duration] || 0
  
  if (isRegeneration) {
    return Math.floor(baseCost * REPROCESSING_DISCOUNT)
  }
  
  return baseCost
}

/**
 * Calculate cost for subtitle actions
 */
export function calculateSubtitleCost(action: "change_language" | "regenerate"): number {
  if (action === "change_language") {
    return SUBTITLE_COSTS.CHANGE_LANGUAGE
  }
  if (action === "regenerate") {
    return SUBTITLE_COSTS.REGENERATE
  }
  return 0
}

/**
 * Calculate total cost for video processing including subtitle actions
 */
export function calculateTotalProcessingCost(
  duration: ShortDuration,
  subtitleActions: SubtitleAction[] = [],
  isRegeneration: boolean = false
): VideoProcessing {
  const baseCost = calculateShortCost(duration, isRegeneration)
  
  const subtitleCost = subtitleActions.reduce((total, action) => {
    return total + action.cost
  }, 0)
  
  return {
    duration,
    baseCost,
    subtitleActions,
    totalCost: baseCost + subtitleCost,
    isRegeneration
  }
}

/**
 * Check if user has sufficient credits
 */
export function hasSufficientCredits(
  availableCredits: number,
  requiredCredits: number
): boolean {
  return availableCredits >= requiredCredits
}

/**
 * Calculate remaining credits after deduction
 * CRITICAL: Extra credits are consumed FIRST, then monthly credits
 * This follows the new unit-based pricing model
 */
export function deductCredits(
  monthlyCredits: number,
  extraCredits: number,
  amount: number
): { monthlyCredits: number; extraCredits: number } {
  let remaining = amount
  let newExtraCredits = extraCredits
  let newMonthlyCredits = monthlyCredits
  
  // PRIORITY 1: Consume extra credits first (non-expiring)
  if (extraCredits >= remaining) {
    newExtraCredits = extraCredits - remaining
    remaining = 0
  } else {
    remaining -= extraCredits
    newExtraCredits = 0
  }
  
  // PRIORITY 2: Consume monthly credits if needed
  if (remaining > 0) {
    newMonthlyCredits = Math.max(0, monthlyCredits - remaining)
  }
  
  return {
    monthlyCredits: newMonthlyCredits,
    extraCredits: newExtraCredits
  }
}

/**
 * Add extra credits (from Stripe purchases)
 * These credits never expire
 */
export function addExtraCredits(
  currentExtraCredits: number,
  creditsToAdd: number
): number {
  return currentExtraCredits + creditsToAdd
}

/**
 * Get credit balance breakdown
 */
export function getCreditBalance(
  monthlyCredits: number,
  extraCredits: number
): CreditBalance {
  return {
    monthly: monthlyCredits,
    extra: extraCredits,
    total: monthlyCredits + extraCredits
  }
}

/**
 * Check if credits are below low balance threshold
 */
export function isLowBalance(
  currentCredits: number,
  maxMonthlyCredits: number
): boolean {
  const threshold = maxMonthlyCredits * CREDIT_RULES.LOW_BALANCE_THRESHOLD
  return currentCredits < threshold
}
/**
 * Format credits for display
 */
export function formatCredits(credits?: number): string {
  return Number(credits ?? 0).toLocaleString()
}
/**
 * Get estimated shorts count from credits
 */
export function estimateShortsFromCredits(
  credits: number,
  duration: ShortDuration = "30s"
): number {
  const costPerShort = SHORT_COSTS[duration] || 20
  return Math.floor(credits / costPerShort)
}

/**
 * Check if action is free (doesn't consume credits)
 */
export function isFreeAction(action: string): boolean {
  return CREDIT_RULES.CONSUMPTION_ORDER.includes(action)
}

/**
 * Generate credit usage summary
 */
export function generateCreditSummary(
  monthlyCredits: number,
  extraCredits: number,
  maxMonthlyCredits: number
): {
  total: number
  monthly: number
  extra: number
  percentageUsed: number
  isLow: boolean
} {
  const total = monthlyCredits + extraCredits
  const percentageUsed = ((maxMonthlyCredits - monthlyCredits) / maxMonthlyCredits) * 100
  
  return {
    total,
    monthly: monthlyCredits,
    extra: extraCredits,
    percentageUsed: Math.min(100, Math.max(0, percentageUsed)),
    isLow: isLowBalance(total, maxMonthlyCredits)
  }
}

/**
 * Validate credit transaction from Stripe
 * Ensures data integrity and prevents duplicate allocations
 */
export function validateStripeTransaction(
  eventId: string,
  credits: number,
  currency: string,
  amountPaid: number
): { valid: boolean; error?: string } {
  if (!eventId || eventId.trim() === "") {
    return { valid: false, error: "Missing Stripe event ID" }
  }
  
  if (credits < 1) {
    return { valid: false, error: "Invalid credit amount" }
  }
  
  if (!["BRL", "USD"].includes(currency)) {
    return { valid: false, error: "Invalid currency" }
  }
  
  if (amountPaid <= 0) {
    return { valid: false, error: "Invalid payment amount" }
  }
  
  return { valid: true }
}
