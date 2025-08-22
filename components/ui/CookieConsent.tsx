'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  Cookie, 
  X, 
  Settings, 
  CheckCircle,
  Info,
  ArrowRight,
  BarChart3,
  Target
} from 'lucide-react'
import Button from '@/components/ui/Button'

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [timeUntilShow, setTimeUntilShow] = useState<number | null>(null)

  useEffect(() => {
    // Check if user has already given consent
    const hasConsented = localStorage.getItem('annita-cookie-consent')
    const consentVersion = localStorage.getItem('annita-cookie-consent-version')
    
    // Only show if user hasn't consented or if consent version is outdated
    if (!hasConsented || !consentVersion) {
      const startTime = Date.now()
      const delay = 30000 // 30 seconds
      
      // Update countdown every second
      const countdownInterval = setInterval(() => {
        const elapsed = Date.now() - startTime
        const remaining = Math.max(0, delay - elapsed)
        setTimeUntilShow(Math.ceil(remaining / 1000))
        
        if (remaining <= 0) {
          clearInterval(countdownInterval)
          setTimeUntilShow(null)
          setIsVisible(true)
        }
      }, 1000)
      
      // Show popup after 30 seconds
      const timer = setTimeout(() => {
        setIsVisible(true)
        setTimeUntilShow(null)
      }, delay)
      
      return () => {
        clearTimeout(timer)
        clearInterval(countdownInterval)
      }
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem('annita-cookie-consent', 'all')
    localStorage.setItem('annita-cookie-consent-date', new Date().toISOString())
    localStorage.setItem('annita-cookie-consent-version', '1.0') // Track consent version
    setIsVisible(false)
  }

  const acceptEssential = () => {
    localStorage.setItem('annita-cookie-consent', 'essential')
    localStorage.setItem('annita-cookie-consent-date', new Date().toISOString())
    localStorage.setItem('annita-cookie-consent-version', '1.0') // Track consent version
    setIsVisible(false)
  }

  const decline = () => {
    localStorage.setItem('annita-cookie-consent', 'declined')
    localStorage.setItem('annita-cookie-consent-date', new Date().toISOString())
    localStorage.setItem('annita-cookie-consent-version', '1.0') // Track consent version
    setIsVisible(false)
  }

  // Function to reset cookie consent (for testing purposes)
  const resetCookieConsent = () => {
    localStorage.removeItem('annita-cookie-consent')
    localStorage.removeItem('annita-cookie-consent-date')
    localStorage.removeItem('annita-cookie-consent-version')
  }

  // Expose reset function globally for testing (remove in production)
  if (typeof window !== 'undefined') {
    (window as any).resetCookieConsent = resetCookieConsent
  }

  // Show countdown indicator for development (remove in production)
  if (!isVisible && timeUntilShow !== null && timeUntilShow > 0) {
    return (
      <div className="fixed bottom-4 right-4 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm z-40">
        Cookie consent in {timeUntilShow}s
      </div>
    )
  }

  if (!isVisible) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={() => setIsVisible(false)}
      />
      
      {/* Cookie Popup */}
      <div className="fixed inset-0 flex items-center justify-center p-2 sm:p-4 z-50 pointer-events-none">
        <div className="pointer-events-auto w-full max-w-[95vw] sm:max-w-md">
        <div className="bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 w-full max-h-[85vh] sm:max-h-[90vh] overflow-hidden">
          {/* Header */}
          <div className="px-4 sm:px-6 py-4 sm:py-5 border-b border-gray-100 dark:border-gray-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-sm">
                  <Cookie className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Cookie Settings</h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">We use cookies to enhance your experience</p>
                </div>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                <X className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 dark:text-gray-400" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="px-4 sm:px-6 py-4 sm:py-5 overflow-y-auto max-h-[calc(85vh-100px)] sm:max-h-[calc(90vh-120px)]">
            <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
              We use cookies to provide you with a better experience, analyze site traffic, and personalize content. 
              You can choose which types of cookies to allow below.
            </p>

            {/* Cookie Categories */}
            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 dark:bg-gray-800 rounded-lg sm:rounded-xl">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 dark:bg-blue-900/30 rounded-md sm:rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">Essential</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Required for basic functionality</div>
                  </div>
                </div>
                <div className="text-xs font-medium text-blue-600 dark:text-blue-400">Always on</div>
              </div>

              <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 dark:bg-gray-800 rounded-lg sm:rounded-xl">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 dark:bg-green-900/30 rounded-md sm:rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">Analytics</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Help us improve our services</div>
                  </div>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Optional</div>
              </div>

              <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 dark:bg-gray-800 rounded-lg sm:rounded-xl">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-100 dark:bg-purple-900/30 rounded-md sm:rounded-lg flex items-center justify-center">
                    <Target className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">Marketing</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Personalized content and ads</div>
                  </div>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Optional</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 sm:space-y-3">
              <button
                onClick={acceptAll}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl transition-colors duration-200 shadow-sm text-sm sm:text-base"
              >
                Accept All
              </button>
              <div className="flex space-x-2 sm:space-x-3">
                <button
                  onClick={acceptEssential}
                  className="flex-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl transition-colors duration-200 text-xs sm:text-sm"
                >
                  Essential Only
                </button>
                <button
                  onClick={decline}
                  className="flex-1 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 font-medium py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl transition-colors duration-200 text-xs sm:text-sm"
                >
                  Decline
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100 dark:border-gray-800">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-gray-500 dark:text-gray-400 space-y-1 sm:space-y-0">
                <Link 
                  href="/cookies" 
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
                >
                  Cookie Policy
                </Link>
                <span className="text-xs">You can change settings anytime</span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default CookieConsent
