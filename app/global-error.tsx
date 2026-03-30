"use client"

import { useEffect } from "react"
import { AlertCircle, RefreshCcw } from "lucide-react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html>
      <body className="flex min-h-screen flex-col items-center justify-center p-6 bg-black text-white font-sans overflow-hidden relative">
        {/* Simple recovery UI for global errors */}
        <div className="flex flex-col items-center text-center max-w-lg">
          <div className="mb-8 p-4 rounded-3xl bg-red-500/10 border border-red-500/20 text-red-500">
            <AlertCircle size={64} />
          </div>

          <h1 className="text-4xl font-bold mb-6 leading-tight">
            Erreur Critique
          </h1>

          <p className="text-white/60 text-lg mb-10 leading-relaxed px-4">
            Une erreur critique est survenue. Veuillez rafraîchir la page ou réessayer plus tard.
          </p>

          <button
            onClick={() => reset()}
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold hover:scale-105 active:scale-95 transition-all text-sm"
          >
            <RefreshCcw size={20} />
            Réinitialiser l'application
          </button>
        </div>
      </body>
    </html>
  )
}
