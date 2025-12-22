"use client"

import { useState } from "react"
import {
  calculateCreditPrice,
  formatPrice,
  getUnitPriceText,
  validateCreditPurchase,
  getSuggestedAmounts,
  type StripeCurrency
} from "@/lib/stripe"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { CreditCard, Zap, AlertCircle } from "lucide-react"

interface BuyCreditPackProps {
  userId: string
  currentCurrency?: StripeCurrency
  onPurchaseClick?: (credits: number, currency: StripeCurrency) => void
}

export function BuyCreditPack({
  userId,
  currentCurrency = "BRL",
  onPurchaseClick
}: BuyCreditPackProps) {
  const locale = 'en'
  const [credits, setCredits] = useState<number>(500)
  const [currency, setCurrency] = useState<StripeCurrency>(currentCurrency)
  const [error, setError] = useState<string>("")

  const suggestedAmounts = getSuggestedAmounts()
  const totalPrice = calculateCreditPrice(credits, currency)
  const unitPriceText = getUnitPriceText(currency, locale)

  const handleCreditsChange = (value: string) => {
    const numValue = parseInt(value) || 0
    setCredits(numValue)

    const validation = validateCreditPurchase(numValue, currency)
    if (!validation.valid) {
      setError(validation.error || "")
    } else {
      setError("")
    }
  }

  const handlePurchase = () => {
    const validation = validateCreditPurchase(credits, currency)

    if (!validation.valid) {
      setError(validation.error || "Invalid purchase")
      return
    }

    // Call parent handler or redirect to Stripe checkout
    if (onPurchaseClick) {
      onPurchaseClick(credits, currency)
    } else {
      // TODO: Implement Stripe checkout redirect
      console.log("Purchase:", { credits, currency, totalPrice, userId })
    }
  }

  return (
    <Card className="p-6 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-orange-500" />
          <h3 className="text-xl font-semibold">
            Buy Extra Credits
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {unitPriceText}
        </p>
      </div>

      {/* Currency Selector */}
      <div className="space-y-2">
        <Label>
          Currency
        </Label>
        <div className="flex gap-2">
          <Button
            variant={currency === "BRL" ? "default" : "outline"}
            onClick={() => setCurrency("BRL")}
            className="flex-1"
          >
            🇧🇷 BRL (R$)
          </Button>
          <Button
            variant={currency === "USD" ? "default" : "outline"}
            onClick={() => setCurrency("USD")}
            className="flex-1"
          >
            🇺🇸 USD ($)
          </Button>
        </div>
      </div>

      {/* Quick Select Buttons */}
      <div className="space-y-2">
        <Label>
          Quick Select
        </Label>
        <div className="grid grid-cols-3 gap-2">
          {suggestedAmounts.map((amount) => (
            <Button
              key={amount}
              variant={credits === amount ? "default" : "outline"}
              onClick={() => {
                setCredits(amount)
                setError("")
              }}
              className="text-sm"
            >
              {amount.toLocaleString()}
            </Button>
          ))}
        </div>
      </div>

      {/* Custom Amount Input */}
      <div className="space-y-2">
        <Label htmlFor="credits">
          Custom Amount
        </Label>
        <Input
          id="credits"
          type="number"
          min="1"
          max="100000"
          value={credits}
          onChange={(e) => handleCreditsChange(e.target.value)}
          placeholder="Enter amount"
        />
        {error && (
          <div className="flex items-center gap-2 text-sm text-red-500">
            <AlertCircle className="w-4 h-4" />
            <span>{error}</span>
          </div>
        )}
      </div>

      {/* Price Summary */}
      <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">
            Credits:
          </span>
          <span className="font-medium">{credits.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">
            Unit price:
          </span>
          <span className="font-medium">
            {formatPrice(
              currency === "BRL" ? 0.25 : 0.05,
              currency
            )}
          </span>
        </div>
        <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-between">
            <span className="font-semibold">
              Total:
            </span>
            <span className="text-xl font-bold text-orange-500">
              {formatPrice(totalPrice, currency)}
            </span>
          </div>
        </div>
      </div>

      {/* Purchase Button */}
      <Button
        onClick={handlePurchase}
        disabled={!!error || credits < 1}
        className="w-full"
        size="lg"
      >
        <CreditCard className="w-4 h-4 mr-2" />
        Buy Now
      </Button>

      {/* Info Text */}
      <p className="text-xs text-center text-gray-500 dark:text-gray-400">
        Extra credits never expire and are consumed before monthly credits.
      </p>
    </Card>
  )
}