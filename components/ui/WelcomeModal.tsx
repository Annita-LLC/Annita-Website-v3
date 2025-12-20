'use client'

import { X, Sparkles, ArrowRight, ExternalLink, Award } from 'lucide-react'
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

          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
            Africa's first all-in-one digital platform. Explore our comprehensive features and see how we're transforming business across the continent.
          </p>

          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3 mb-6 border border-purple-200 dark:border-purple-800">
            <p className="text-purple-800 dark:text-purple-200 text-xs leading-relaxed">
              <strong>Need something custom?</strong> We build tailored tech solutions including web apps, mobile apps, system integrations, and cloud solutions specifically designed for your unique business needs.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <Link
              href="/features"
              onClick={onClose}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2.5 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg flex items-center justify-center text-sm"
            >
              Explore Features
              <ArrowRight className="w-3.5 h-3.5 ml-2" />
            </Link>

            <Link
              href="/solutions"
              onClick={onClose}
              className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2.5 rounded-lg font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-200 shadow-lg flex items-center justify-center text-sm"
            >
              Custom Solutions
              <ArrowRight className="w-3.5 h-3.5 ml-2" />
            </Link>

            <Link
              href="/awards"
              onClick={onClose}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2.5 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-lg flex items-center justify-center text-sm"
            >
              Awards & Recognition
              <Award className="w-3.5 h-3.5 ml-2" />
            </Link>

            <Link
              href="/maintenance"
              onClick={onClose}
              className="w-full border-2 border-orange-500 text-orange-600 px-4 py-2.5 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-200 flex items-center justify-center text-sm"
            >
              Try V1.0 Now
              <ExternalLink className="w-3.5 h-3.5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}