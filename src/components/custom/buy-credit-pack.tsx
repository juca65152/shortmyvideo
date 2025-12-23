  const handlePurchase = async () => {
    const validation = validateCreditPurchase(credits, currency)

    if (!validation.valid) {
      setError(validation.error || "Invalid purchase")
      return
    }

    setIsLoading(true)
    setError("")

try {
  analytics.trackEvent({
    name: 'purchase_attempt',
    properties: { credits, currency, totalPrice }
  })

  const res = await fetch('/api/stripe/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ credits, currency })
  })

  if (!res.ok) {
    throw new Error('Failed to create checkout session')
  }

  const data = await res.json()

  if (!data.url) {
    throw new Error('Stripe checkout URL not returned')
  }

  window.location.href = data.url
 catch (err) {
  setError("Purchase failed. Please try again.")
  console.error("Purchase error:", err)
  analytics.trackError(err as Error, {
    context: 'handlePurchase',
    credits,
    currency
  })
} finally {
  setIsLoading(false)
}
