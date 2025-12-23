"use client"

import { useState, useEffect } from "react"
import { BuyCreditPack } from "@/components/custom/buy-credit-pack"
import { CreditBalance } from "@/components/custom/credit-balance"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Zap, Shield, Clock, AlertTriangle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { analytics } from "@/lib/analytics"

export default function ExtraCreditsPage() {
  const language = 'en'
  const [isLoading, setIsLoading] = useState(true)
  const [userCredits, setUserCredits] = useState({
    monthly: 150,
    extra: 0,
    maxMonthly: 1500,
    plan: "pro"
  })
  const [canPurchase, setCanPurchase] = useState(false)

  useEffect(() => {
    // Track page view
    analytics.trackPageView('/extra-credits')

    // Simulate loading user data
    const loadUserData = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        
        // Mock user data - replace with actual user data
        const mockUserData = {
          monthly: 150,
          extra: 0,
          maxMonthly: 1500,
          plan: "pro" // Change to "free" to test guard
        }
        
        setUserCredits(mockUserData)
        
        // Check if user can purchase extra credits
        // Only paid plans can buy extra credits
        const paidPlans = ["pro", "creator+", "creator-pro"]
        setCanPurchase(paidPlans.includes(mockUserData.plan))
        
      } catch (error) {
        console.error("Failed to load user data:", error)
        analytics.trackError(error as Error, { context: 'loadUserData' })
      } finally {
        setIsLoading(false)
      }
    }
    
    loadUserData()
  }, [])

  const handlePurchase = (credits: number, currency: string) => {
    analytics.trackClick('purchase-button', { credits, currency })
    console.log("Initiating purchase:", { credits, currency })
    // TODO: Implement Stripe checkout redirect
    // This should:
    // 1. Create Stripe checkout session with metadata
    // 2. Redirect user to Stripe checkout
    // 3. Handle success/cancel callbacks
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-blue-600" />
          <p className="text-gray-600">Loading your credits...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Extra Credits
            </h1>
            <p className="text-xl text-gray-600">
              Boost your creativity with additional AI credits
            </p>
          </div>

          {/* Current Balance */}
          <div className="mb-8">
            <CreditBalance credits={userCredits} />
          </div>

          {/* Purchase Section */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Buy Credits */}
            <div>
              <Card className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Purchase Extra Credits</h2>
                
                {canPurchase ? (
                  <BuyCreditPack onPurchase={handlePurchase} />
                ) : (
                  <div className="text-center py-8">
                    <AlertTriangle className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Upgrade Required
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Extra credits are only available for Pro and Creator plans.
                    </p>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Upgrade Plan
                    </Button>
                  </div>
                )}
              </Card>
            </div>

            {/* Benefits */}
            <div>
              <Card className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Why Extra Credits?</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Zap className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-900">Instant Access</h3>
                      <p className="text-gray-600 text-sm">Credits are added immediately to your account</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Shield className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-900">Secure Payment</h3>
                      <p className="text-gray-600 text-sm">Powered by Stripe for secure transactions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-900">No Expiration</h3>
                      <p className="text-gray-600 text-sm">Extra credits never expire</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-900">Flexible Usage</h3>
                      <p className="text-gray-600 text-sm">Use for any AI generation feature</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}