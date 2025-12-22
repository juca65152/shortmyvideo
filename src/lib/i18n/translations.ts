// Translations for the application
export const translations = {
  en: {
    // Navbar
    nav: {
      features: "Features",
      howItWorks: "How It Works",
      pricing: "Pricing",
      startFree: "Start Free"
    },
    // Hero Section
    hero: {
      badge: "AI-Powered Video Creation",
      title: "Turn Long Videos Into",
      titleHighlight: "Viral Shorts",
      description: "Transform your long-form content into engaging 15s, 30s, or 3-minute shorts with intelligent clipping and automatic multilingual subtitles. Ready for TikTok, Instagram Reels, and YouTube Shorts.",
      ctaPrimary: "Start Creating Free",
      ctaSecondary: "Watch Demo",
      stats: {
        shorts: "Shorts Created",
        languages: "Languages Supported",
        timeSaved: "Time Saved"
      }
    },
    // Features Section
    features: {
      title: "Everything You Need to Go Viral",
      subtitle: "Powerful features designed to help content creators save time and maximize engagement",
      items: {
        clipping: {
          title: "Intelligent Clipping",
          description: "AI automatically detects the most engaging moments in your videos based on speech patterns, emotional intensity, and narrative flow."
        },
        subtitles: {
          title: "Multilingual Subtitles",
          description: "Automatic subtitle generation in 50+ languages with perfect timing. Enable, disable, or regenerate before export."
        },
        durations: {
          title: "Flexible Durations",
          description: "Create shorts in 15s, 30s, or up to 3 minutes. Perfect for TikTok, Instagram Reels, YouTube Shorts, and more."
        },
        sources: {
          title: "Multiple Input Sources",
          description: "Upload local videos or paste YouTube links. We support all major video formats and platforms."
        },
        library: {
          title: "Content Library",
          description: "Visual library of all your generated shorts with in-app preview, download tracking, and easy management."
        },
        export: {
          title: "Export Options",
          description: "Download with or without burned-in subtitles. Full control over your final output for maximum flexibility."
        }
      }
    },
    // How It Works Section
    howItWorks: {
      title: "Create Viral Shorts in 4 Simple Steps",
      subtitle: "From upload to download in minutes. No editing skills required.",
      steps: {
        upload: {
          title: "Upload Video",
          description: "Upload your video or paste a YouTube link"
        },
        select: {
          title: "Select Duration",
          description: "Choose 15s, 30s, or up to 3 minutes"
        },
        process: {
          title: "AI Processing",
          description: "Our AI clips highlights and adds subtitles"
        },
        download: {
          title: "Download & Share",
          description: "Preview, download, and publish instantly"
        }
      }
    },
    // CTA Section
    cta: {
      title: "Ready to Create Viral Content?",
      subtitle: "Join thousands of creators who are saving time and growing their audience with ShortClip AI",
      primary: "Start Free Trial",
      secondary: "View Pricing",
      disclaimer: "No credit card required • 200 free credits • Cancel anytime"
    },
    // Pricing Page
    pricing: {
      title: "Choose the plan that matches",
      titleHighlight: "your creation pace",
      subtitle: "Turn long videos into publish-ready shorts with intelligent cuts and automatic subtitles.",
      billingToggle: {
        monthly: "Monthly",
        annual: "Annual"
      },
      savingsBadge: "💰 Save up to 25% with annual billing",
      plans: {
        free: {
          name: "Free",
          subtitle: "Get Started",
          description: "Perfect for trying out ShortClip AI",
          cta: "Start Free",
          credits: "200 credits/month",
          features: [
            "200 credits per month",
            "15-second shorts only",
            "Automatic subtitles",
            "Auto-detected language",
            "Subtle watermark",
            "7-day library retention",
            "No credit card required"
          ]
        },
        pro: {
          name: "Pro",
          subtitle: "Most Popular",
          badge: "⭐ Most used by creators",
          description: "For serious content creators",
          cta: "Unlock Pro",
          credits: "1,500 credits/month",
          features: [
            "1,500 credits per month",
            "15s, 30s, and 3-minute shorts",
            "Advanced intelligent clipping",
            "Multilingual subtitles (50+ languages)",
            "Manual language selection",
            "Subtitle regeneration",
            "No watermark",
            "Unlimited downloads",
            "Full library access",
            "Video deletion controls",
            "Priority support"
          ]
        },
        creator: {
          name: "Creator+",
          subtitle: "For Scale",
          description: "Maximum power for professionals",
          cta: "Scale My Creation",
          credits: "3,500 credits/month",
          features: [
            "3,500 credits per month",
            "All Pro features",
            "Priority processing",
            "Advanced language support",
            "Custom subtitle templates",
            "Extended commercial usage rights",
            "Early access to new features",
            "Dedicated account manager",
            "API access (coming soon)",
            "White-label options"
          ]
        },
        creatorPro: {
          name: "Creator Pro",
          subtitle: "Enterprise",
          description: "Ultimate power for teams and agencies",
          cta: "Go Enterprise",
          credits: "20,000 credits/month",
          features: [
            "20,000 credits per month",
            "All Creator+ features",
            "Maximum priority processing",
            "Advanced AI models",
            "Custom integrations",
            "Team collaboration tools",
            "Advanced analytics dashboard",
            "Custom branding options",
            "SLA guarantee",
            "24/7 premium support",
            "Dedicated success manager"
          ]
        }
      },
      creditPacks: {
        title: "Need More Credits?",
        subtitle: "Top up your account with one-time credit packs. Credits never expire and are used before monthly credits.",
        packs: [
          {
            credits: "500",
            creditsLabel: "credits",
            price: "R$29,90",
            oneTime: "one-time payment",
            cta: "Buy Now",
            note: "Never expires",
            popular: false
          },
          {
            credits: "1,500",
            creditsLabel: "credits",
            price: "R$79,90",
            oneTime: "one-time payment",
            cta: "Buy Now",
            note: "Never expires",
            popular: true,
            popularLabel: "Most Popular"
          },
          {
            credits: "5,000",
            creditsLabel: "credits",
            price: "R$199,90",
            oneTime: "one-time payment",
            cta: "Buy Now",
            note: "Never expires",
            popular: false
          },
          {
            credits: "10,000",
            creditsLabel: "credits",
            price: "R$349,90",
            oneTime: "one-time payment",
            cta: "Buy Now",
            note: "Never expires",
            popular: false
          }
        ],
        disclaimer: "💡 Credit packs are available only for users with active paid subscriptions. Credits are consumed before your monthly credits."
      },
      billedAnnually: "Billed ${amount} annually",
      perMonth: "mo",
      faq: {
        title: "Frequently Asked Questions",
        items: [
          {
            q: "Can I switch plans anytime?",
            a: "Yes! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately."
          },
          {
            q: "What happens to my credits after the free trial?",
            a: "Free plan credits reset monthly. Upgrade to Pro or higher for more credits and advanced features."
          },
          {
            q: "Do you offer refunds?",
            a: "Yes, we offer a 14-day money-back guarantee on all paid plans. No questions asked."
          },
          {
            q: "What video formats do you support?",
            a: "We support all major video formats including MP4, MOV, AVI, and direct YouTube links."
          },
          {
            q: "How accurate are the automatic subtitles?",
            a: "Our AI achieves 95%+ accuracy across 50+ languages. You can also regenerate subtitles if needed."
          }
        ]
      },
      bottomCta: {
        title: "Still have questions?",
        subtitle: "Our team is here to help you choose the perfect plan",
        contact: "Contact Sales",
        backHome: "Back to Home"
      }
    },
    // Footer
    footer: {
      tagline: "Transform your content into viral shorts with AI-powered clipping and multilingual subtitles.",
      product: "Product",
      features: "Features",
      pricing: "Pricing",
      howItWorks: "How It Works",
      company: "Company",
      about: "About Us",
      blog: "Blog",
      careers: "Careers",
      contact: "Contact",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      cookies: "Cookie Policy",
      allRightsReserved: "All rights reserved."
    }
  },
  pt: {
    // Navbar
    nav: {
      features: "Recursos",
      howItWorks: "Como Funciona",
      pricing: "Preços",
      startFree: "Começar Grátis"
    },
    // Hero Section
    hero: {
      badge: "Criação de Vídeos com IA",
      title: "Transforme Vídeos Longos em",
      titleHighlight: "Shorts Virais",
      description: "Transforme seu conteúdo longo em shorts envolventes de 15s, 30s ou 3 minutos com cortes inteligentes e legendas multilíngues automáticas. Pronto para TikTok, Instagram Reels e YouTube Shorts.",
      ctaPrimary: "Começar a Criar Grátis",
      ctaSecondary: "Ver Demonstração",
      stats: {
        shorts: "Shorts Criados",
        languages: "Idiomas Suportados",
        timeSaved: "Tempo Economizado"
      }
    },
    // Features Section
    features: {
      title: "Tudo que Você Precisa para Viralizar",
      subtitle: "Recursos poderosos projetados para ajudar criadores de conteúdo a economizar tempo e maximizar o engajamento",
      items: {
        clipping: {
          title: "Cortes Inteligentes",
          description: "A IA detecta automaticamente os momentos mais envolventes dos seus vídeos com base em padrões de fala, intensidade emocional e fluxo narrativo."
        },
        subtitles: {
          title: "Legendas Multilíngues",
          description: "Geração automática de legendas em mais de 50 idiomas com sincronização perfeita. Ative, desative ou regenere antes de exportar."
        },
        durations: {
          title: "Durações Flexíveis",
          description: "Crie shorts de 15s, 30s ou até 3 minutos. Perfeito para TikTok, Instagram Reels, YouTube Shorts e muito mais."
        },
        sources: {
          title: "Múltiplas Fontes de Entrada",
          description: "Faça upload de vídeos locais ou cole links do YouTube. Suportamos todos os principais formatos de vídeo e plataformas."
        },
        library: {
          title: "Biblioteca de Conteúdo",
          description: "Biblioteca visual de todos os seus shorts gerados com visualização no app, rastreamento de downloads e gerenciamento fácil."
        },
        export: {
          title: "Opções de Exportação",
          description: "Baixe com ou sem legendas incorporadas. Controle total sobre sua saída final para máxima flexibilidade."
        }
      }
    },
    // How It Works Section
    howItWorks: {
      title: "Crie Shorts Virais em 4 Passos Simples",
      subtitle: "Do upload ao download em minutos. Sem necessidade de habilidades de edição.",
      steps: {
        upload: {
          title: "Enviar Vídeo",
          description: "Faça upload do seu vídeo ou cole um link do YouTube"
        },
        select: {
          title: "Selecionar Duração",
          description: "Escolha 15s, 30s ou até 3 minutos"
        },
        process: {
          title: "Processamento IA",
          description: "Nossa IA corta os destaques e adiciona legendas"
        },
        download: {
          title: "Baixar e Compartilhar",
          description: "Visualize, baixe e publique instantaneamente"
        }
      }
    },
    // CTA Section
    cta: {
      title: "Pronto para Criar Conteúdo Viral?",
      subtitle: "Junte-se a milhares de criadores que estão economizando tempo e aumentando sua audiência com ShortClip AI",
      primary: "Começar Teste Grátis",
      secondary: "Ver Preços",
      disclaimer: "Sem cartão de crédito • 200 créditos grátis • Cancele quando quiser"
    },
    // Pricing Page
    pricing: {
      title: "Escolha o plano que combina com",
      titleHighlight: "seu ritmo de criação",
      subtitle: "Transforme vídeos longos em shorts prontos para publicar com cortes inteligentes e legendas automáticas.",
      billingToggle: {
        monthly: "Mensal",
        annual: "Anual"
      },
      savingsBadge: "💰 Economize até 25% com cobrança anual",
      plans: {
        free: {
          name: "Grátis",
          subtitle: "Comece Agora",
          description: "Perfeito para experimentar o ShortClip AI",
          cta: "Começar Grátis",
          credits: "200 créditos/mês",
          features: [
            "200 créditos por mês",
            "Shorts de 15 segundos apenas",
            "Legendas automáticas",
            "Idioma detectado automaticamente",
            "Marca d'água sutil",
            "Retenção de biblioteca por 7 dias",
            "Sem necessidade de cartão de crédito"
          ]
        },
        pro: {
          name: "Pro",
          subtitle: "Mais Popular",
          badge: "⭐ Mais usado por criadores",
          description: "Para criadores de conteúdo sérios",
          cta: "Desbloquear Pro",
          credits: "1.500 créditos/mês",
          features: [
            "1.500 créditos por mês",
            "Shorts de 15s, 30s e 3 minutos",
            "Cortes inteligentes avançados",
            "Legendas multilíngues (50+ idiomas)",
            "Seleção manual de idioma",
            "Regeneração de legendas",
            "Sem marca d'água",
            "Downloads ilimitados",
            "Acesso completo à biblioteca",
            "Controles de exclusão de vídeo",
            "Suporte prioritário"
          ]
        },
        creator: {
          name: "Creator+",
          subtitle: "Para Escala",
          description: "Máximo poder para profissionais",
          cta: "Escalar Minha Criação",
          credits: "3.500 créditos/mês",
          features: [
            "3.500 créditos por mês",
            "Todos os recursos Pro",
            "Processamento prioritário",
            "Suporte avançado de idiomas",
            "Templates personalizados de legendas",
            "Direitos comerciais estendidos",
            "Acesso antecipado a novos recursos",
            "Gerente de conta dedicado",
            "Acesso à API (em breve)",
            "Opções de marca branca"
          ]
        },
        creatorPro: {
          name: "Creator Pro",
          subtitle: "Empresarial",
          description: "Poder máximo para equipes e agências",
          cta: "Ir para Empresarial",
          credits: "20.000 créditos/mês",
          features: [
            "20.000 créditos por mês",
            "Todos os recursos Creator+",
            "Processamento com máxima prioridade",
            "Modelos de IA avançados",
            "Integrações personalizadas",
            "Ferramentas de colaboração em equipe",
            "Dashboard de análises avançadas",
            "Opções de marca personalizada",
            "Garantia de SLA",
            "Suporte premium 24/7",
            "Gerente de sucesso dedicado"
          ]
        }
      },
      creditPacks: {
        title: "Precisa de Mais Créditos?",
        subtitle: "Recarregue sua conta com pacotes de créditos únicos. Créditos nunca expiram e são usados antes dos créditos mensais.",
        packs: [
          {
            credits: "500",
            creditsLabel: "créditos",
            price: "R$29,90",
            oneTime: "pagamento único",
            cta: "Comprar Agora",
            note: "Nunca expira",
            popular: false
          },
          {
            credits: "1.500",
            creditsLabel: "créditos",
            price: "R$79,90",
            oneTime: "pagamento único",
            cta: "Comprar Agora",
            note: "Nunca expira",
            popular: true,
            popularLabel: "Mais Popular"
          },
          {
            credits: "5.000",
            creditsLabel: "créditos",
            price: "R$199,90",
            oneTime: "pagamento único",
            cta: "Comprar Agora",
            note: "Nunca expira",
            popular: false
          },
          {
            credits: "10.000",
            creditsLabel: "créditos",
            price: "R$349,90",
            oneTime: "pagamento único",
            cta: "Comprar Agora",
            note: "Nunca expira",
            popular: false
          }
        ],
        disclaimer: "💡 Pacotes de créditos estão disponíveis apenas para usuários com assinaturas pagas ativas. Créditos são consumidos antes dos seus créditos mensais."
      },
      billedAnnually: "Cobrado ${amount} anualmente",
      perMonth: "mês",
      faq: {
        title: "Perguntas Frequentes",
        items: [
          {
            q: "Posso mudar de plano a qualquer momento?",
            a: "Sim! Você pode fazer upgrade, downgrade ou cancelar seu plano a qualquer momento. As mudanças entram em vigor imediatamente."
          },
          {
            q: "O que acontece com meus créditos após o teste grátis?",
            a: "Os créditos do plano gratuito são renovados mensalmente. Faça upgrade para Pro ou superior para mais créditos e recursos avançados."
          },
          {
            q: "Vocês oferecem reembolso?",
            a: "Sim, oferecemos garantia de reembolso de 14 dias em todos os planos pagos. Sem perguntas."
          },
          {
            q: "Quais formatos de vídeo vocês suportam?",
            a: "Suportamos todos os principais formatos de vídeo incluindo MP4, MOV, AVI e links diretos do YouTube."
          },
          {
            q: "Quão precisas são as legendas automáticas?",
            a: "Nossa IA alcança mais de 95% de precisão em mais de 50 idiomas. Você também pode regenerar legendas se necessário."
          }
        ]
      },
      bottomCta: {
        title: "Ainda tem dúvidas?",
        subtitle: "Nossa equipe está aqui para ajudá-lo a escolher o plano perfeito",
        contact: "Contatar Vendas",
        backHome: "Voltar ao Início"
      }
    },
    // Footer
    footer: {
      tagline: "Transforme seu conteúdo em shorts virais com cortes inteligentes e legendas multilíngues.",
      product: "Produto",
      features: "Recursos",
      pricing: "Preços",
      howItWorks: "Como Funciona",
      company: "Empresa",
      about: "Sobre Nós",
      blog: "Blog",
      careers: "Carreiras",
      contact: "Contato",
      legal: "Legal",
      privacy: "Política de Privacidade",
      terms: "Termos de Serviço",
      cookies: "Política de Cookies",
      allRightsReserved: "Todos os direitos reservados."
    }
  }
} as const

export type Locale = keyof typeof translations
export type TranslationKeys = typeof translations.en
