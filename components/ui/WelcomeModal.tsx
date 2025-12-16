'use client'

import { X, Sparkles, ArrowRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'

interface WelcomeModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function WelcomeModal({ isOpen, onClose }: WelcomeModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full text-gray-600 dark:text-gray-300 hover:bg-white/20 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 text-center">
          {/* Icon */}
          <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Sparkles className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to Annita!
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">
            Africa's first all-in-one digital platform. Explore our comprehensive features and see how we're transforming business across the continent.
          </p>

          <div className="flex flex-col gap-3">
            <Link
              href="/features"
              onClick={onClose}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg flex items-center justify-center"
            >
              Explore Features
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>

            <Link
              href="/maintenance"
              onClick={onClose}
              className="w-full border-2 border-orange-500 text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-200 flex items-center justify-center"
            >
              Try V1.0 Now
              <ExternalLink className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Footer */}
          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={() => {
                localStorage.setItem('annita-welcome-seen', 'true')
                onClose()
              }}
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-orange-600 transition-colors"
            >
              Don't show again
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}