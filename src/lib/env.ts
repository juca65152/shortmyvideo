/**
 * Environment variables helper with safe defaults
 */

export const env = {
  // Public environment variables (accessible in browser)
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',

  // Private environment variables (server-side only)
  SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY || '',
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY || '',
  STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET || '',
  DATABASE_URL: process.env.DATABASE_URL || '',

  // Feature flags with defaults
  ENABLE_ANALYTICS: process.env.ENABLE_ANALYTICS === 'true' || false,
  ENABLE_LOGGING: process.env.ENABLE_LOGGING === 'true' || true,

  // Node environment
  NODE_ENV: process.env.NODE_ENV || 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isDevelopment: process.env.NODE_ENV === 'development',
}

/**
 * Validate required environment variables
 * Call this in server-side code to ensure required vars are set
 */
export function validateEnv() {
  const required = [
    'NEXT_PUBLIC_SUPABASE_URL',
    'NEXT_PUBLIC_SUPABASE_ANON_KEY',
  ]

  const missing = required.filter(key => !env[key as keyof typeof env])

  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`)
  }
}

/**
 * Get environment variable with fallback
 */
export function getEnv(key: string, fallback: string = ''): string {
  return process.env[key] || fallback
}

/**
 * Get boolean environment variable
 */
export function getEnvBool(key: string, fallback: boolean = false): boolean {
  const value = process.env[key]
  if (value === undefined) return fallback
  return value === 'true' || value === '1'
}