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
  Target,
  ChevronDown,
  ChevronUp,
  Shield,
  Eye,
  Clock
} from 'lucide-react'
import Button from '@/components/ui/Button'

interface CookiePreferences {
  essential: boolean
  analytics: boolean
  marketing: boolean
  functional: boolean
}

interface CookieConsentProps {
  onPreferencesChange?: (preferences: CookiePreferences) => void
}

const CookieConsent = ({ onPreferencesChange }: CookieConsentProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Always true
    analytics: false,
    marketing: false,
    functional: false
  })

  useEffect(() => {
    // Check for existing consent in localStorage (persistent)
    const existingConsent = localStorage.getItem('annita-cookie-consent')
    const consentDate = localStorage.getItem('annita-cookie-consent-date')
    
    // Check if popup has been shown in this session (new website load)
    const hasShownInSession = sessionStorage.getItem('annita-cookie-shown')
    
    if (!existingConsent && !hasShownInSession) {
      // Show popup after 5 seconds to allow fundraising popup to show first
      const timer = setTimeout(() => {
        setIsVisible(true)
        sessionStorage.setItem('annita-cookie-shown', 'true')
      }, 5000)
      return () => clearTimeout(timer)
    } else if (existingConsent) {
      // Load existing preferences
      try {
        const savedPreferences = JSON.parse(existingConsent)
        setPreferences(savedPreferences)
        
        // Apply preferences to tracking
        applyCookiePreferences(savedPreferences)
      } catch (error) {
        console.error('Error parsing saved cookie preferences:', error)
      }
    }
  }, [])

  const applyCookiePreferences = (prefs: CookiePreferences) => {
    // Apply analytics tracking based on preferences
    if (prefs.analytics) {
      // Enable Google Analytics
      if (typeof window !== 'undefined') {
        (window as any).gtag = (window as any).gtag || function() {
          ((window as any).gtag as any).q = ((window as any).gtag as any).q || []
          ;((window as any).gtag as any).q.push(arguments)
        }
        // Initialize GA if not already done
        if ((window as any).gtag) {
          (window as any).gtag('consent', 'update', {
            'analytics_storage': 'granted'
          })
        }
      }
    } else {
      // Disable analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('consent', 'update', {
          'analytics_storage': 'denied'
        })
      }
    }

    // Apply marketing tracking
    if (prefs.marketing) {
      // Enable marketing cookies
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('consent', 'update', {
          'ad_storage': 'granted',
          'ad_user_data': 'granted',
          'ad_personalization': 'granted'
        })
      }
    } else {
      // Disable marketing cookies
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('consent', 'update', {
          'ad_storage': 'denied',
          'ad_user_data': 'denied',
          'ad_personalization': 'denied'
        })
      }
    }

    // Call callback if provided
    if (onPreferencesChange) {
      onPreferencesChange(prefs)
    }
  }

  const savePreferences = (newPreferences: CookiePreferences) => {
    const consentData = {
      preferences: newPreferences,
      timestamp: new Date().toISOString(),
      version: '1.0'
    }
    
    localStorage.setItem('annita-cookie-consent', JSON.stringify(newPreferences))
    localStorage.setItem('annita-cookie-consent-date', new Date().toISOString())
    localStorage.setItem('annita-cookie-consent-full', JSON.stringify(consentData))
    
    setPreferences(newPreferences)
    applyCookiePreferences(newPreferences)
    setIsVisible(false)
    setShowSettings(false)
  }

  const acceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
      functional: true
    }
    savePreferences(allAccepted)
  }

  const acceptEssential = () => {
    const essentialOnly = {
      essential: true,
      analytics: false,
      marketing: false,
      functional: false
    }
    savePreferences(essentialOnly)
  }

  const decline = () => {
    const declined = {
      essential: true, // Essential cookies cannot be declined
      analytics: false,
      marketing: false,
      functional: false
    }
    savePreferences(declined)
  }

  const handlePreferenceChange = (category: keyof CookiePreferences, value: boolean) => {
    if (category === 'essential') return // Essential cannot be changed
    
    const newPreferences = { ...preferences, [category]: value }
    setPreferences(newPreferences)
  }

  const openSettings = () => {
    setShowSettings(true)
    setIsExpanded(true)
  }

  if (!isVisible) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={() => {
          if (!showSettings) {
            // Auto-accept essential cookies if user closes without accepting
            const essentialOnly = {
              essential: true,
              analytics: false,
              marketing: false,
              functional: false
            }
            savePreferences(essentialOnly)
            
            // Show notification that cookies were auto-accepted
            if (typeof window !== 'undefined') {
              setTimeout(() => {
                const notification = document.createElement('div')
                notification.className = 'fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-3 rounded-lg shadow-lg z-50 max-w-sm'
                notification.innerHTML = `
                  <div class="flex items-center space-x-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span class="text-sm font-medium">Essential cookies have been automatically enabled for site functionality.</span>
                  </div>
                `
                document.body.appendChild(notification)
                setTimeout(() => {
                  notification.style.opacity = '0'
                  notification.style.transition = 'opacity 0.3s'
                  setTimeout(() => notification.remove(), 300)
                }, 5000)
              }, 300)
            }
          }
        }}
      />
      
      {/* Cookie Popup */}
      <div className="fixed inset-0 flex items-center justify-center p-2 sm:p-4 z-50 pointer-events-none">
        <div className="pointer-events-auto w-full max-w-[95vw] sm:max-w-lg lg:max-w-xl">
          <div className="bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 w-full max-h-[85vh] sm:max-h-[90vh] overflow-hidden">
            
            {/* Header */}
            <div className="px-4 sm:px-6 py-4 sm:py-5 border-b border-gray-100 dark:border-gray-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-sm">
                    <Cookie className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                      {showSettings ? 'Cookie Settings' : 'Cookie Consent'}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      {showSettings ? 'Customize your cookie preferences' : 'We use cookies to enhance your experience'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    if (showSettings) {
                      setShowSettings(false)
                      setIsExpanded(false)
                    } else {
                      // Auto-accept essential cookies if user closes without accepting
                      const essentialOnly = {
                        essential: true,
                        analytics: false,
                        marketing: false,
                        functional: false
                      }
                      savePreferences(essentialOnly)
                      
                      // Show notification that cookies were auto-accepted
                      if (typeof window !== 'undefined') {
                        setTimeout(() => {
                          const notification = document.createElement('div')
                          notification.className = 'fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-3 rounded-lg shadow-lg z-50 max-w-sm'
                          notification.innerHTML = `
                            <div class="flex items-center space-x-2">
                              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                              <span class="text-sm font-medium">Essential cookies have been automatically enabled for site functionality.</span>
                            </div>
                          `
                          document.body.appendChild(notification)
                          setTimeout(() => {
                            notification.style.opacity = '0'
                            notification.style.transition = 'opacity 0.3s'
                            setTimeout(() => notification.remove(), 300)
                          }, 5000)
                        }, 300)
                      }
                    }
                  }}
                  className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                >
                  <X className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 dark:text-gray-400" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="px-4 sm:px-6 py-4 sm:py-5 overflow-y-auto max-h-[calc(85vh-100px)] sm:max-h-[calc(90vh-120px)]">
              
              {!showSettings ? (
                // Simple consent view
                <>
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                    We use cookies to provide you with a better experience, analyze site traffic, and personalize content. 
                    You can choose which types of cookies to allow below.
                  </p>

                  {/* Quick Cookie Overview */}
                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 dark:bg-gray-800 rounded-lg sm:rounded-xl">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 dark:bg-blue-900/30 rounded-md sm:rounded-lg flex items-center justify-center">
                          <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />
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
                        onClick={openSettings}
                        className="flex-1 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 font-medium py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl transition-colors duration-200 text-xs sm:text-sm"
                      >
                        Customize
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                // Detailed settings view
                <>
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                    Customize your cookie preferences. Essential cookies are required for the website to function properly.
                  </p>

                  {/* Cookie Categories with Toggles */}
                  <div className="space-y-4 mb-6">
                    {/* Essential Cookies */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                            <Shield className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white">Essential Cookies</h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400">Required for basic functionality</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">Always on</span>
                          <div className="w-10 h-6 bg-blue-600 rounded-full flex items-center justify-start px-1">
                            <div className="w-4 h-4 bg-white rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        These cookies are necessary for the website to function and cannot be disabled.
                      </p>
                    </div>

                    {/* Analytics Cookies */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                            <BarChart3 className="w-4 h-4 text-green-600 dark:text-green-400" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white">Analytics Cookies</h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400">Help us improve our services</p>
                          </div>
                        </div>
                        <button
                          onClick={() => handlePreferenceChange('analytics', !preferences.analytics)}
                          className={`w-10 h-6 rounded-full transition-colors duration-200 ${
                            preferences.analytics 
                              ? 'bg-green-600' 
                              : 'bg-gray-300 dark:bg-gray-600'
                          } flex items-center justify-start px-1`}
                        >
                          <div className={`w-4 h-4 bg-white rounded-full transition-transform duration-200 ${
                            preferences.analytics ? 'translate-x-4' : ''
                          }`}></div>
                        </button>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        These cookies help us understand how visitors interact with our website.
                      </p>
                    </div>

                    {/* Marketing Cookies */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                            <Target className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white">Marketing Cookies</h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400">Personalized content and ads</p>
                          </div>
                        </div>
                        <button
                          onClick={() => handlePreferenceChange('marketing', !preferences.marketing)}
                          className={`w-10 h-6 rounded-full transition-colors duration-200 ${
                            preferences.marketing 
                              ? 'bg-purple-600' 
                              : 'bg-gray-300 dark:bg-gray-600'
                          } flex items-center justify-start px-1`}
                        >
                          <div className={`w-4 h-4 bg-white rounded-full transition-transform duration-200 ${
                            preferences.marketing ? 'translate-x-4' : ''
                          }`}></div>
                        </button>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        These cookies are used to deliver relevant advertisements and track marketing campaigns.
                      </p>
                    </div>

                    {/* Functional Cookies */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                            <Settings className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white">Functional Cookies</h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400">Enhanced functionality</p>
                          </div>
                        </div>
                        <button
                          onClick={() => handlePreferenceChange('functional', !preferences.functional)}
                          className={`w-10 h-6 rounded-full transition-colors duration-200 ${
                            preferences.functional 
                              ? 'bg-orange-600' 
                              : 'bg-gray-300 dark:bg-gray-600'
                          } flex items-center justify-start px-1`}
                        >
                          <div className={`w-4 h-4 bg-white rounded-full transition-transform duration-200 ${
                            preferences.functional ? 'translate-x-4' : ''
                          }`}></div>
                        </button>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        These cookies enable enhanced functionality and personalization.
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2 sm:space-y-3">
                    <button
                      onClick={() => savePreferences(preferences)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl transition-colors duration-200 shadow-sm text-sm sm:text-base"
                    >
                      Save Preferences
                    </button>
                    <div className="flex space-x-2 sm:space-x-3">
                      <button
                        onClick={acceptAll}
                        className="flex-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl transition-colors duration-200 text-xs sm:text-sm"
                      >
                        Accept All
                      </button>
                      <button
                        onClick={decline}
                        className="flex-1 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 font-medium py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl transition-colors duration-200 text-xs sm:text-sm"
                      >
                        Decline All
                      </button>
                    </div>
                  </div>
                </>
              )}

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
