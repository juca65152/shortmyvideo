"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Coins, AlertCircle, TrendingUp } from "lucide-react"
import { formatCredits, generateCreditSummary } from "@/lib/credits"
import Link from "next/link"

interface CreditBalanceProps {
  monthlyCredits: number
  extraCredits: number // Updated from purchasedCredits
  maxMonthlyCredits: number
  showUpgrade?: boolean
  locale?: "en" | "pt"
}

export function CreditBalance({
  monthlyCredits,
  extraCredits, // Updated from purchasedCredits
  maxMonthlyCredits,
  showUpgrade = true,
  locale = "en"
}: CreditBalanceProps) {
  const summary = generateCreditSummary(monthlyCredits, extraCredits, maxMonthlyCredits)
  
  const translations = {
    en: {
      title: "Credit Balance",
      total: "Total Credits",
      monthly: "Monthly",
      extra: "Extra", // Updated from "Purchased"
      lowBalance: "You're running low on credits",
      lowBalanceDesc: "Add extra credits or upgrade your plan to keep creating.",
      buyExtraCredits: "Buy Extra Credits", // Updated
      upgradePlan: "Upgrade Plan",
      creditsRemaining: "credits remaining",
      neverExpire: "Never expire" // New
    },
    pt: {
      title: "Saldo de Créditos",
      total: "Total de Créditos",
      monthly: "Mensais",
      extra: "Extras", // Updated from "Comprados"
      lowBalance: "Seus créditos estão acabando",
      lowBalanceDesc: "Adicione créditos extras ou faça upgrade do seu plano para continuar criando.",
      buyExtraCredits: "Comprar Créditos Extras", // Updated
      upgradePlan: "Fazer Upgrade",
      creditsRemaining: "créditos restantes",
      neverExpire: "Nunca expiram" // New
    }
  }
  
  const t = translations[locale]
  
  return (
    <div className="space-y-4">
      {/* Main Balance Card */}
      <Card className="p-6 bg-gradient-to-br from-[#0066FF]/5 to-[#FF0080]/5 border-2">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0066FF] to-[#FF0080] flex items-center justify-center">
              <Coins className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{t.title}</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                {formatCredits(summary.total)}
              </p>
            </div>
          </div>
          
          {/* Progress indicator */}
          <div className="text-right">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{t.monthly}</p>
            <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#0066FF] to-[#FF0080] transition-all duration-300"
                style={{ width: `${(monthlyCredits / maxMonthlyCredits) * 100}%` }}
              />
            </div>
          </div>
        </div>
        
        {/* Breakdown */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{t.monthly}</p>
            <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {formatCredits(monthlyCredits)}
            </p>
          </div>
          <div>
            <div className="flex items-center gap-1 mb-1">
              <p className="text-xs text-gray-500 dark:text-gray-400">{t.extra}</p>
              <span className="text-[10px] text-green-600 dark:text-green-400 font-medium">
                ({t.neverExpire})
              </span>
            </div>
            <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {formatCredits(extraCredits)}
            </p>
          </div>
        </div>
      </Card>
      
      {/* Low Balance Warning */}
      {summary.isLow && showUpgrade && (
        <Card className="p-4 bg-orange-50 dark:bg-orange-950/20 border-2 border-orange-200 dark:border-orange-800">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{t.lowBalance}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{t.lowBalanceDesc}</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/pricing#extra-credits">
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-[#0066FF] to-[#FF0080] hover:opacity-90 text-white"
                  >
                    <TrendingUp className="w-4 h-4 mr-2" />
                    {t.buyExtraCredits}
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button size="sm" variant="outline">
                    {t.upgradePlan}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  )
}
