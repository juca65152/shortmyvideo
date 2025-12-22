"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/i18n/i18n-context"
import { BuyCreditPack } from "@/components/custom/buy-credit-pack"
import { CreditBalance } from "@/components/custom/credit-balance"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Zap, Shield, Clock } from "lucide-react"

export default function ExtraCreditsPage() {
  const { t, locale } = useLanguage()
  
  // Mock user data - replace with actual user data
  const [userCredits] = useState({
    monthly: 150,
    extra: 0,
    maxMonthly: 1500,
    plan: "pro"
  })
  
  const handlePurchase = (credits: number, currency: string) => {
    console.log("Initiating purchase:", { credits, currency })
    // TODO: Implement Stripe checkout redirect
    // This should:
    // 1. Create Stripe checkout session with metadata
    // 2. Redirect user to Stripe checkout
    // 3. Handle success/cancel callbacks
  }
  
  const benefits = [
    {
      icon: Clock,
      title: locale === "pt" ? "Nunca Expiram" : "Never Expire",
      description: locale === "pt" 
        ? "Créditos extras permanecem na sua conta indefinidamente"
        : "Extra credits remain in your account indefinitely"
    },
    {
      icon: Zap,
      title: locale === "pt" ? "Prioridade no Uso" : "Priority Usage",
      description: locale === "pt"
        ? "Consumidos antes dos créditos mensais do plano"
        : "Consumed before monthly plan credits"
    },
    {
      icon: Shield,
      title: locale === "pt" ? "Pagamento Seguro" : "Secure Payment",
      description: locale === "pt"
        ? "Processado com segurança via Stripe"
        : "Securely processed via Stripe"
    }
  ]
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#0066FF] to-[#FF0080] bg-clip-text text-transparent">
            {locale === "pt" ? "Créditos Extras" : "Extra Credits"}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {locale === "pt"
              ? "Compre créditos adicionais quando precisar. Eles nunca expiram e são consumidos antes dos seus créditos mensais."
              : "Purchase additional credits when you need them. They never expire and are consumed before your monthly credits."}
          </p>
        </div>
        
        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Credit Balance */}
          <div className="space-y-6">
            <CreditBalance
              monthlyCredits={userCredits.monthly}
              extraCredits={userCredits.extra}
              maxMonthlyCredits={userCredits.maxMonthly}
              showUpgrade={false}
              locale={locale}
            />
            
            {/* Benefits */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {locale === "pt" ? "Por que comprar créditos extras?" : "Why buy extra credits?"}
              </h3>
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0066FF]/10 to-[#FF0080]/10 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-[#0066FF]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Right Column - Purchase Form */}
          <div>
            <BuyCreditPack
              userId="user_123" // Replace with actual user ID
              currentCurrency="BRL"
              onPurchaseClick={handlePurchase}
            />
          </div>
        </div>
        
        {/* FAQ Section */}
        <Card className="p-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            {locale === "pt" ? "Perguntas Frequentes" : "Frequently Asked Questions"}
          </h3>
          
          <div className="space-y-6">
            <div>
              <div className="flex items-start gap-2 mb-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                  {locale === "pt" 
                    ? "Os créditos extras expiram?" 
                    : "Do extra credits expire?"}
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400 ml-7">
                {locale === "pt"
                  ? "Não! Créditos extras nunca expiram e permanecem na sua conta indefinidamente."
                  : "No! Extra credits never expire and remain in your account indefinitely."}
              </p>
            </div>
            
            <div>
              <div className="flex items-start gap-2 mb-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                  {locale === "pt"
                    ? "Qual a ordem de consumo dos créditos?"
                    : "What is the credit consumption order?"}
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400 ml-7">
                {locale === "pt"
                  ? "Créditos extras são sempre consumidos primeiro, antes dos créditos mensais do seu plano."
                  : "Extra credits are always consumed first, before your monthly plan credits."}
              </p>
            </div>
            
            <div>
              <div className="flex items-start gap-2 mb-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                  {locale === "pt"
                    ? "Posso comprar créditos extras sem assinatura?"
                    : "Can I buy extra credits without a subscription?"}
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400 ml-7">
                {locale === "pt"
                  ? "Créditos extras estão disponíveis apenas para usuários com planos pagos ativos (Pro, Creator+ ou Creator Pro)."
                  : "Extra credits are available only for users with active paid plans (Pro, Creator+, or Creator Pro)."}
              </p>
            </div>
            
            <div>
              <div className="flex items-start gap-2 mb-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                  {locale === "pt"
                    ? "Como funciona o pagamento?"
                    : "How does payment work?"}
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400 ml-7">
                {locale === "pt"
                  ? "Pagamentos são processados de forma segura via Stripe. É uma compra única (não recorrente) e os créditos são adicionados imediatamente após a confirmação do pagamento."
                  : "Payments are securely processed via Stripe. It's a one-time purchase (not recurring) and credits are added immediately after payment confirmation."}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
