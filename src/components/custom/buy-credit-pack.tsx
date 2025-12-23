const handlePurchase = async () => {
  setIsLoading(true)
  setError("")

  try {
    analytics.trackEvent({
      name: "purchase_attempt",
      properties: { credits, currency, totalPrice }
    })

    const res = await fetch("/api/stripe/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ credits, currency })
    })

    if (!res.ok) {
      throw new Error("Failed to create checkout session")
    }

    const data = await res.json()

    if (!data?.url) {
      throw new Error("Stripe checkout URL not returned")
    }

    window.location.href = data.url
  } catch (err) {
    console.error("Purchase error:", err)
    setError("Purchase failed. Please try again.")
  } finally {
    setIsLoading(false)
  }
}
