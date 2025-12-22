'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'pt' | 'en'

interface LanguageContextProps {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt')
  const [mounted, setMounted] = useState(false)

  // Detectar idioma do navegador e carregar preferência salva
  useEffect(() => {
    setMounted(true)
    
    // Tentar carregar idioma salvo do localStorage
    const savedLanguage = localStorage.getItem('preferred-language') as Language
    
    if (savedLanguage && (savedLanguage === 'pt' || savedLanguage === 'en')) {
      setLanguage(savedLanguage)
    } else {
      // Detectar idioma do navegador
      const browserLanguage = navigator.language.toLowerCase()
      const detectedLanguage = browserLanguage.startsWith('pt') ? 'pt' : 'en'
      setLanguage(detectedLanguage)
      localStorage.setItem('preferred-language', detectedLanguage)
    }
  }, [])

  // Salvar preferência quando idioma mudar
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    if (mounted) {
      localStorage.setItem('preferred-language', lang)
    }
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }

  return context
}
