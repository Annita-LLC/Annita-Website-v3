'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  Cookie, 
  X, 
  Settings, 
  CheckCircle,
  Info,
  ArrowRight
} from 'lucide-react'
import Button from '@/components/ui/Button'

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    // Check if user has already given consent
    const hasConsented = localStorage.getItem('annita-cookie-consent')
    if (!hasConsented) {
      // Show popup after a longer delay to be less intrusive
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem('annita-cookie-consent', 'all')
    localStorage.setItem('annita-cookie-consent-date', new Date().toISOString())
    setIsVisible(false)
  }

  const acceptEssential = () => {
    localStorage.setItem('annita-cookie-consent', 'essential')
    localStorage.setItem('annita-cookie-consent-date', new Date().toISOString())
    setIsVisible(false)
  }

  const decline = () => {
    localStorage.setItem('annita-cookie-consent', 'declined')
    localStorage.setItem('annita-cookie-consent-date', new Date().toISOString())
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
        onClick={() => setIsVisible(false)}
      />
      
      {/* Cookie Popup */}
      <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
        <div className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 max-w-md sm:max-w-lg lg:max-w-2xl w-full mx-auto">
          {/* Header */}
          <div className="flex items-start justify-between p-3 sm:p-4 lg:p-6 border-b border-gray-100 dark:border-gray-700">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                <Cookie className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-orange-600 dark:text-orange-400">We Value Your Privacy</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">Help us improve your experience</p>
              </div>
            </div>
                          <button
                onClick={() => setIsVisible(false)}
                className="p-1 sm:p-1.5 lg:p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
              >
                <X className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-gray-500 dark:text-gray-400" />
              </button>
          </div>

          {/* Content */}
          <div className="p-3 sm:p-4 lg:p-6">
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
              We use cookies and similar technologies to provide you with the best possible experience 
              on our website. This includes essential cookies for functionality, analytics cookies to 
              understand how you use our site, and marketing cookies to show you relevant content.
            </p>

            {/* Cookie Categories */}
            <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4 lg:mb-6">
              <div className="flex items-center justify-between p-2 sm:p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400" />
                  <div>
                    <div className="text-sm sm:text-base font-medium text-gray-900 dark:text-white">Essential Cookies</div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Required for website functionality</div>
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Always Active</div>
              </div>

              <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Settings className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-400" />
                  <div>
                    <div className="text-sm sm:text-base font-medium text-gray-900 dark:text-white">Analytics & Functional</div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Help us improve our services</div>
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Optional</div>
              </div>

              <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Info className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-400" />
                  <div>
                    <div className="text-sm sm:text-base font-medium text-gray-900 dark:text-white">Marketing</div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Personalized content and ads</div>
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Optional</div>
              </div>
            </div>

            {/* Learn More Link */}
            <div className="mb-3 sm:mb-4 lg:mb-6">
              <Link 
                href="/cookies" 
                className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-xs sm:text-sm"
              >
                <span>Learn more about our cookie policy</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </Link>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
              <Button
                variant="gradient"
                size="md"
                onClick={acceptAll}
                className="flex-1 text-center text-sm"
              >
                Accept All Cookies
              </Button>
              <Button
                variant="outline"
                size="md"
                onClick={acceptEssential}
                className="flex-1 text-center text-sm"
              >
                Essential Only
              </Button>
              <Button
                variant="ghost"
                size="md"
                onClick={decline}
                className="flex-1 text-center text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
              >
                Decline
              </Button>
            </div>

            {/* Additional Info */}
            <div className="mt-2 sm:mt-3 lg:mt-4 text-xs text-gray-500 dark:text-gray-400 text-center">
              By clicking "Accept All Cookies", you consent to our use of cookies as described in our{' '}
              <Link href="/cookies" className="text-blue-600 hover:underline">
                Cookie Policy
              </Link>
              . You can change your preferences at any time.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CookieConsent
