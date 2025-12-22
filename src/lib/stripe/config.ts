// Stripe configuration and constants

export const STRIPE_CONFIG = {
  // Unit pricing for extra credits (Stripe is source of truth)
  UNIT_PRICES: {
    BRL: 0.25, // R$ 0.25 per credit
    USD: 0.05, // USD 0.05 per credit
  },
  
  // Webhook events to handle
  WEBHOOK_EVENTS: {
    CHECKOUT_COMPLETED: 'checkout.session.completed',
    SUBSCRIPTION_CREATED: 'customer.subscription.created',
    INVOICE_PAID: 'invoice.paid',
    PAYMENT_FAILED: 'invoice.payment_failed',
  },
  
  // Metadata keys
  METADATA_KEYS: {
    TYPE: 'type',
    CREDITS: 'credits',
    CURRENCY: 'currency',
    USER_ID: 'userId',
  },
  
  // Product types
  PRODUCT_TYPES: {
    CREDIT_PACK: 'credit_pack',
    SUBSCRIPTION: 'subscription',
  },
} as const

export type StripeCurrency = 'BRL' | 'USD'
export type StripeProductType = 'credit_pack' | 'subscription'

export interface StripeMetadata {
  type: StripeProductType
  credits?: string
  currency?: StripeCurrency
  userId?: string
  planId?: string
}
