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
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 w-80 sm:w-96 max-h-96 overflow-hidden">
          {/* Header */}
          <div className="flex items-start justify-between p-2 sm:p-3 lg:p-4 border-b border-gray-100 dark:border-gray-700">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                <Cookie className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-white" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm lg:text-base font-bold text-orange-600 dark:text-orange-400">We Value Your Privacy</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">Help us improve your experience</p>
              </div>
            </div>
                                               <button
                       onClick={() => setIsVisible(false)}
                       className="p-1 sm:p-1.5 lg:p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                     >
                       <X className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-gray-500 dark:text-gray-400" />
                     </button>
          </div>

          {/* Content */}
          <div className="p-3 sm:p-4 overflow-y-auto max-h-48">
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              We use cookies and similar technologies to provide you with the best possible experience 
              on our website. This includes essential cookies for functionality, analytics cookies to 
              understand how you use our site, and marketing cookies to show you relevant content.
            </p>

            {/* Cookie Categories */}
            <div className="space-y-2 mb-3">
              <div className="flex items-center justify-between p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">Essential Cookies</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Required for website functionality</div>
                  </div>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Always Active</div>
              </div>

              <div className="flex items-center justify-between p-2 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="flex items-center space-x-2">
                  <BarChart3 className="w-4 h-4 text-green-600 dark:text-green-400" />
                  <div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">Analytics Cookies</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Help us improve our services</div>
                  </div>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Optional</div>
              </div>

              <div className="flex items-center justify-between p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Target className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">Marketing Cookies</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Personalized content and ads</div>
                  </div>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Optional</div>
              </div>
            </div>

            {/* Learn More Link */}
            <div className="mb-3">
              <Link 
                href="/cookies" 
                className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                <span>Learn more about our cookie policy</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2">
              <Button
                variant="gradient"
                size="sm"
                onClick={acceptAll}
                className="flex-1 text-center text-sm"
              >
                Accept All Cookies
              </Button>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={acceptEssential}
                  className="flex-1 text-center text-sm"
                >
                  Essential Only
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={decline}
                  className="flex-1 text-center text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  Decline
                </Button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 text-center">
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
