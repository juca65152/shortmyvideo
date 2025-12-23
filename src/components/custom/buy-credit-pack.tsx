  const handlePurchase = async () => {
    const validation = validateCreditPurchase(credits, currency)

    if (!validation.valid) {
      setError(validation.error || "Invalid purchase")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      // Track purchase attempt
      analytics.trackEvent({
        name: 'purchase_attempt',
        properties: { credits, currency, totalPrice }
      })

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Call parent handler or redirect to Stripe checkout
      if (onPurchaseClick) {
        onPurchaseClick(credits, currency)
      } else {
        // TODO: Implement Stripe checkout redirect
        console.log("Purchase:", { credits, currency, totalPrice, userId })
      }
    } catch (err) {
      setError("Purchase failed. Please try again.")
      console.error("Purchase error:", err)
      analytics.trackError(err as Error, { context: 'handlePurchase', credits, currency })
    } finally {
      setIsLoading(false)
    }
  }