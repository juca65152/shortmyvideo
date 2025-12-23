'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
          <div className="max-w-md w-full mx-4 text-center">
            <div className="mb-8">
              <h1 className="text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Critical Error
              </h1>
              <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
                Application crashed
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                A critical error occurred. Please refresh the page or try again later.
              </p>
            </div>
            
            <div className="space-y-4">
              <button 
                onClick={reset}
                className="w-full px-4 py-2 bg-gradient-to-r from-[#0066FF] to-[#FF0080] text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Try Again
              </button>
              
              <button 
                onClick={() => window.location.reload()}
                className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Refresh Page
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}