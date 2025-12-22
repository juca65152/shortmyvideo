// Main Stripe integration exports

export * from './config'
export * from './utils'
export * from './webhooks'

// Re-export commonly used functions
export { 
  calculateCreditPrice, 
  formatPrice, 
  getUnitPriceText,
  validateCreditPurchase,
  getSuggestedAmounts,
  prepareCheckoutMetadata,
} from './utils'

export {
  handleCheckoutCompleted,
  handleInvoicePaid,
  handlePaymentFailed,
  isEventProcessed,
  markEventProcessed,
} from './webhooks'

export { STRIPE_CONFIG } from './config'
export type { StripeCurrency, StripeProductType, StripeMetadata } from './config'
