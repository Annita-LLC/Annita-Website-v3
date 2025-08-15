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
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)
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
      <div className="fixed bottom-4 left-4 right-4 lg:left-8 lg:right-8 lg:bottom-8 z-50">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 max-w-2xl mx-auto">
          {/* Header */}
          <div className="flex items-start justify-between p-6 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Cookie className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">We Value Your Privacy</h3>
                <p className="text-sm text-gray-600">Help us improve your experience</p>
              </div>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            <p className="text-gray-700 mb-4">
              We use cookies and similar technologies to provide you with the best possible experience 
              on our website. This includes essential cookies for functionality, analytics cookies to 
              understand how you use our site, and marketing cookies to show you relevant content.
            </p>

            {/* Cookie Categories */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-medium text-gray-900">Essential Cookies</div>
                    <div className="text-sm text-gray-600">Required for website functionality</div>
                  </div>
                </div>
                <div className="text-sm text-gray-500">Always Active</div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Settings className="w-5 h-5 text-gray-600" />
                  <div>
                    <div className="font-medium text-gray-900">Analytics & Functional</div>
                    <div className="text-sm text-gray-600">Help us improve our services</div>
                  </div>
                </div>
                <div className="text-sm text-gray-500">Optional</div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Info className="w-5 h-5 text-gray-600" />
                  <div>
                    <div className="font-medium text-gray-900">Marketing</div>
                    <div className="text-sm text-gray-600">Personalized content and ads</div>
                  </div>
                </div>
                <div className="text-sm text-gray-500">Optional</div>
              </div>
            </div>

            {/* Learn More Link */}
            <div className="mb-6">
              <Link 
                href="/cookies" 
                className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                <span>Learn more about our cookie policy</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="gradient"
                size="lg"
                onClick={acceptAll}
                className="flex-1 text-center"
              >
                Accept All Cookies
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={acceptEssential}
                className="flex-1 text-center"
              >
                Essential Only
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={decline}
                className="flex-1 text-center text-gray-600 hover:text-gray-800"
              >
                Decline
              </Button>
            </div>

            {/* Additional Info */}
            <div className="mt-4 text-xs text-gray-500 text-center">
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
