"use client"

import { Card } from "@/components/ui/card"
import { Info } from "lucide-react"
import { calculateTotalProcessingCost, formatCredits } from "@/lib/credits"
import type { ShortDuration, SubtitleAction } from "@/lib/credits"

interface CreditEstimatorProps {
  duration: ShortDuration
  subtitleActions?: SubtitleAction[]
  isRegeneration?: boolean
  locale?: "en" | "pt"
}

export function CreditEstimator({
  duration,
  subtitleActions = [],
  isRegeneration = false,
  locale = "en"
}: CreditEstimatorProps) {
  const processing = calculateTotalProcessingCost(duration, subtitleActions, isRegeneration)
  
  const translations = {
    en: {
      title: "Estimated Cost",
      baseCost: "Video generation",
      subtitleChange: "Language change",
      subtitleRegen: "Subtitle regeneration",
      regenerationDiscount: "Regeneration discount (50%)",
      total: "Total",
      credits: "credits"
    },
    pt: {
      title: "Custo Estimado",
      baseCost: "Geração de vídeo",
      subtitleChange: "Mudança de idioma",
      subtitleRegen: "Regeneração de legendas",
      regenerationDiscount: "Desconto regeneração (50%)",
      total: "Total",
      credits: "créditos"
    }
  }
  
  const t = translations[locale]
  
  return (
    <Card className="p-4 bg-blue-50 border-2 border-blue-200">
      <div className="flex items-start gap-3">
        <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <p className="font-semibold text-gray-900 mb-3">{t.title}</p>
          
          <div className="space-y-2 text-sm">
            {/* Base cost */}
            <div className="flex justify-between items-center">
              <span className="text-gray-600">
                {t.baseCost} ({duration})
              </span>
              <span className="font-medium text-gray-900">
                {formatCredits(processing.baseCost)} {t.credits}
              </span>
            </div>
            
            {/* Regeneration discount */}
            {isRegeneration && (
              <div className="flex justify-between items-center text-green-600">
                <span>{t.regenerationDiscount}</span>
                <span className="font-medium">-50%</span>
              </div>
            )}
            
            {/* Subtitle actions */}
            {subtitleActions.map((action, idx) => (
              <div key={idx} className="flex justify-between items-center">
                <span className="text-gray-600">
                  {action.type === "change_language" ? t.subtitleChange : t.subtitleRegen}
                </span>
                <span className="font-medium text-gray-900">
                  {formatCredits(action.cost)} {t.credits}
                </span>
              </div>
            ))}
            
            {/* Total */}
            <div className="pt-2 border-t border-blue-300 flex justify-between items-center">
              <span className="font-semibold text-gray-900">{t.total}</span>
              <span className="text-xl font-bold bg-gradient-to-r from-[#0066FF] to-[#FF0080] bg-clip-text text-transparent">
                {formatCredits(processing.totalCost)} {t.credits}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
