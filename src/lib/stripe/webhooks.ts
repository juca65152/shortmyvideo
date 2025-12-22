// Stripe webhook handler utilities

import Stripe from 'stripe'
import { STRIPE_CONFIG, StripeMetadata } from './config'

/**
 * Process checkout.session.completed event
 * Allocates credits based on Stripe metadata
 */
export async function handleCheckoutCompleted(
  session: Stripe.Checkout.Session
): Promise<{
  success: boolean
  userId?: string
  creditsAdded?: number
  currency?: string
  amountPaid?: number
  error?: string
}> {
  try {
    const metadata = session.metadata as StripeMetadata
    
    // Validate metadata
    if (!metadata || metadata.type !== STRIPE_CONFIG.PRODUCT_TYPES.CREDIT_PACK) {
      return { success: false, error: 'Not a credit pack purchase' }
    }
    
    const userId = metadata.userId
    const credits = parseInt(metadata.credits || '0')
    const currency = metadata.currency
    
    if (!userId || !credits || !currency) {
      return { success: false, error: 'Missing required metadata' }
    }
    
    // Get confirmed amount from Stripe (source of truth)
    const amountPaid = session.amount_total ? session.amount_total / 100 : 0
    
    // TODO: Implement database logic to add credits
    // This should:
    // 1. Add credits to user's extra (non-expiring) balance
    // 2. Mark credits as source: 'extra', expiration: null
    // 3. Log transaction with: credits, currency, amount paid
    
    console.log('Credit allocation:', {
      userId,
      credits,
      currency,
      amountPaid,
      source: 'extra',
      expiration: null,
    })
    
    return {
      success: true,
      userId,
      creditsAdded: credits,
      currency,
      amountPaid,
    }
  } catch (error) {
    console.error('Error handling checkout completed:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }
  }
}

/**
 * Process invoice.paid event
 * Allocates monthly subscription credits
 */
export async function handleInvoicePaid(
  invoice: Stripe.Invoice
): Promise<{
  success: boolean
  userId?: string
  creditsAdded?: number
  planId?: string
  error?: string
}> {
  try {
    const metadata = invoice.subscription_details?.metadata as StripeMetadata
    
    if (!metadata || metadata.type !== STRIPE_CONFIG.PRODUCT_TYPES.SUBSCRIPTION) {
      return { success: false, error: 'Not a subscription payment' }
    }
    
    const userId = metadata.userId
    const planId = metadata.planId
    
    if (!userId || !planId) {
      return { success: false, error: 'Missing required metadata' }
    }
    
    // TODO: Implement database logic to allocate monthly credits
    // This should:
    // 1. Reset monthly credits based on plan
    // 2. Keep purchased credits intact
    // 3. Log transaction
    
    console.log('Monthly credit allocation:', {
      userId,
      planId,
      source: 'monthly',
    })
    
    return {
      success: true,
      userId,
      planId,
    }
  } catch (error) {
    console.error('Error handling invoice paid:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }
  }
}

/**
 * Process payment_failed event
 * Pauses credit renewal but keeps existing credits
 */
export async function handlePaymentFailed(
  invoice: Stripe.Invoice
): Promise<{
  success: boolean
  userId?: string
  error?: string
}> {
  try {
    const metadata = invoice.subscription_details?.metadata as StripeMetadata
    
    if (!metadata) {
      return { success: false, error: 'Missing metadata' }
    }
    
    const userId = metadata.userId
    
    if (!userId) {
      return { success: false, error: 'Missing userId' }
    }
    
    // TODO: Implement database logic
    // This should:
    // 1. Mark subscription as payment_failed
    // 2. Pause monthly credit renewal
    // 3. Keep existing credits intact (no deduction)
    // 4. Send notification to user
    
    console.log('Payment failed:', {
      userId,
      action: 'pause_renewal',
      keepCredits: true,
    })
    
    return {
      success: true,
      userId,
    }
  } catch (error) {
    console.error('Error handling payment failed:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }
  }
}

/**
 * Idempotency check to prevent duplicate credit allocation
 * Uses Stripe event ID as idempotency key
 */
export async function isEventProcessed(eventId: string): Promise<boolean> {
  // TODO: Implement database check
  // Check if event ID exists in processed_events table
  
  console.log('Checking idempotency for event:', eventId)
  return false // Placeholder
}

/**
 * Mark event as processed
 */
export async function markEventProcessed(eventId: string): Promise<void> {
  // TODO: Implement database insert
  // Insert event ID into processed_events table with timestamp
  
  console.log('Marking event as processed:', eventId)
}
