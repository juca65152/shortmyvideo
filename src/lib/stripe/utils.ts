// Stripe client utilities

import { STRIPE_CONFIG, StripeCurrency } from './config'

/**
 * Calculate total price for extra credits
 * Uses unit pricing: BRL 0.25 or USD 0.05 per credit
 */
export function calculateCreditPrice(
  credits: number,
  currency: StripeCurrency
): number {
  const unitPrice = STRIPE_CONFIG.UNIT_PRICES[currency]
  return credits * unitPrice
}

/**
 * Format price for display
 */
export function formatPrice(amount: number, currency: StripeCurrency): string {
  const formatter = new Intl.NumberFormat(currency === 'BRL' ? 'pt-BR' : 'en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
  })
  
  return formatter.format(amount)
}

/**
 * Get unit price text for display
 */
export function getUnitPriceText(currency: StripeCurrency, locale: 'en' | 'pt'): string {
  const price = STRIPE_CONFIG.UNIT_PRICES[currency]
  const formatted = formatPrice(price, currency)
  
  if (locale === 'pt') {
    return `Créditos extras custam ${formatted} por crédito`
  }
  
  return `Extra credits cost ${formatted} per credit`
}

/**
 * Create Stripe checkout session for credit purchase
 * Note: This is a client-side helper. Actual session creation happens server-side.
 */
export interface CreateCheckoutParams {
  credits: number
  currency: StripeCurrency
  userId: string
  successUrl: string
  cancelUrl: string
}

export function prepareCheckoutMetadata(params: CreateCheckoutParams) {
  return {
    type: STRIPE_CONFIG.PRODUCT_TYPES.CREDIT_PACK,
    credits: params.credits.toString(),
    currency: params.currency,
    userId: params.userId,
  }
}

/**
 * Validate credit purchase amount
 */
export function validateCreditPurchase(
  credits: number,
  currency: StripeCurrency
): { valid: boolean; error?: string } {
  if (credits < 1) {
    return { valid: false, error: 'Minimum 1 credit required' }
  }
  
  if (credits > 100000) {
    return { valid: false, error: 'Maximum 100,000 credits per purchase' }
  }
  
  if (!Number.isInteger(credits)) {
    return { valid: false, error: 'Credits must be a whole number' }
  }
  
  const validCurrencies: StripeCurrency[] = ['BRL', 'USD']
  if (!validCurrencies.includes(currency)) {
    return { valid: false, error: 'Invalid currency' }
  }
  
  return { valid: true }
}

/**
 * Get suggested credit amounts for quick selection
 */
export function getSuggestedAmounts(): number[] {
  return [100, 500, 1000, 2500, 5000, 10000]
}
