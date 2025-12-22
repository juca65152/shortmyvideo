"use client"

import Link from "next/link"
import { Menu, X, Sparkles, Globe } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/i18n-context"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, setLanguage } = useLanguage()

  const translations = {
    pt: {
      features: "Recursos",
      pricing: "Preços",
      howItWorks: "Como Funciona",
      signIn: "Entrar",
      startFree: "Começar Grátis"
    },
    en: {
      features: "Features",
      pricing: "Pricing",
      howItWorks: "How it Works",
      signIn: "Sign In",
      startFree: "Start Free"
    }
  }

  const t = translations[language]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0066FF] to-[#FF0080] flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#0066FF] to-[#FF0080] bg-clip-text text-transparent">
              ShortClip AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-gray-700 hover:text-[#0066FF] transition-colors font-medium">
              {t.features}
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-[#0066FF] transition-colors font-medium">
              {t.pricing}
            </Link>
            <Link href="#how-it-works" className="text-gray-700 hover:text-[#0066FF] transition-colors font-medium">
              {t.howItWorks}
            </Link>
            
            {/* Language Selector */}
            <button
              onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 hover:border-[#0066FF] hover:bg-gray-50 transition-all group"
              title={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
            >
              <Globe className="w-4 h-4 text-gray-600 group-hover:text-[#0066FF] transition-colors" />
              <span className="text-sm font-medium text-gray-700 group-hover:text-[#0066FF] transition-colors uppercase">
                {language}
              </span>
            </button>

            <Button variant="outline" className="border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF] hover:text-white">
              {t.signIn}
            </Button>
            <Button className="bg-gradient-to-r from-[#0066FF] to-[#FF0080] hover:opacity-90 text-white shadow-lg shadow-[#FF0080]/30">
              {t.startFree}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            <Link
              href="#features"
              className="block text-gray-700 hover:text-[#0066FF] transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.features}
            </Link>
            <Link
              href="/pricing"
              className="block text-gray-700 hover:text-[#0066FF] transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.pricing}
            </Link>
            <Link
              href="#how-it-works"
              className="block text-gray-700 hover:text-[#0066FF] transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.howItWorks}
            </Link>
            
            {/* Mobile Language Selector */}
            <button
              onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
              className="flex items-center gap-2 w-full px-3 py-2 rounded-lg border border-gray-300 hover:border-[#0066FF] hover:bg-gray-50 transition-all"
            >
              <Globe className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">
                {language === 'pt' ? 'English' : 'Português'}
              </span>
            </button>

            <div className="pt-4 space-y-3">
              <Button variant="outline" className="w-full border-[#0066FF] text-[#0066FF]">
                {t.signIn}
              </Button>
              <Button className="w-full bg-gradient-to-r from-[#0066FF] to-[#FF0080] text-white">
                {t.startFree}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}