'use client'

import { useState, useEffect } from 'react'
import { Settings, Cookie, X, Shield, BarChart3, Target, Save, RotateCcw } from 'lucide-react'
import Button from '@/components/ui/Button'

interface CookiePreferences {
  essential: boolean
  analytics: boolean
  marketing: boolean
  functional: boolean
}

interface CookieSettingsManagerProps {
  isOpen: boolean
  onClose: () => void
  onPreferencesChange?: (preferences: CookiePreferences) => void
}

const CookieSettingsManager = ({ 
  isOpen, 
  onClose, 
  onPreferencesChange 
}: CookieSettingsManagerProps) => {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
    functional: false
  })
  const [hasChanges, setHasChanges] = useState(false)

  useEffect(() => {
    if (isOpen) {
      // Load current preferences
      const existingConsent = localStorage.getItem('annita-cookie-consent')
      if (existingConsent) {
        try {
          const savedPreferences = JSON.parse(existingConsent)
          setPreferences(savedPreferences)
        } catch (error) {
          console.error('Error parsing saved cookie preferences:', error)
        }
      }
    }
  }, [isOpen])

  const handlePreferenceChange = (category: keyof CookiePreferences, value: boolean) => {
    if (category === 'essential') return // Essential cannot be changed
    
    const newPreferences = { ...preferences, [category]: value }
    setPreferences(newPreferences)
    setHasChanges(true)
  }

  const applyCookiePreferences = (prefs: CookiePreferences) => {
    // Apply analytics tracking based on preferences
    if (prefs.analytics) {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('consent', 'update', {
          'analytics_storage': 'granted'
        })
      }
    } else {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('consent', 'update', {
          'analytics_storage': 'denied'
        })
      }
    }

    // Apply marketing tracking
    if (prefs.marketing) {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('consent', 'update', {
          'ad_storage': 'granted',
          'ad_user_data': 'granted',
          'ad_personalization': 'granted'
        })
      }
    } else {
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

  const savePreferences = () => {
    const consentData = {
      preferences,
      timestamp: new Date().toISOString(),
      version: '1.0'
    }
    
    localStorage.setItem('annita-cookie-consent', JSON.stringify(preferences))
    localStorage.setItem('annita-cookie-consent-date', new Date().toISOString())
    localStorage.setItem('annita-cookie-consent-full', JSON.stringify(consentData))
    
    applyCookiePreferences(preferences)
    setHasChanges(false)
    onClose()
  }

  const resetToDefaults = () => {
    const defaults = {
      essential: true,
      analytics: false,
      marketing: false,
      functional: false
    }
    setPreferences(defaults)
    setHasChanges(true)
  }

  const acceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
      functional: true
    }
    setPreferences(allAccepted)
    setHasChanges(true)
  }

  const declineAll = () => {
    const declined = {
      essential: true, // Essential cookies cannot be declined
      analytics: false,
      marketing: false,
      functional: false
    }
    setPreferences(declined)
    setHasChanges(true)
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      
      {/* Settings Modal */}
      <div className="fixed inset-0 flex items-center justify-center p-2 sm:p-4 z-50 pointer-events-none">
        <div className="pointer-events-auto w-full max-w-[95vw] sm:max-w-2xl lg:max-w-3xl transform scale-90 sm:scale-95 lg:scale-100 transition-transform duration-200">
          <div className="bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 w-full max-h-[85vh] sm:max-h-[90vh] overflow-hidden">
            
            {/* Header */}
            <div className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-5 border-b border-gray-100 dark:border-gray-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-7 h-7 sm:w-8 lg:w-10 h-7 sm:h-8 lg:h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center shadow-sm">
                    <Cookie className="w-3 h-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 dark:text-white">
                      Cookie Settings
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      Manage your cookie preferences
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-6 h-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                >
                  <X className="w-3 h-3 sm:w-3.5 lg:w-4 h-3 sm:h-3.5 lg:h-4 text-gray-500 dark:text-gray-400" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-5 overflow-y-auto max-h-[calc(85vh-80px)] sm:max-h-[calc(90vh-100px)] lg:max-h-[calc(90vh-120px)]">
              
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Customize your cookie preferences. Essential cookies are required for the website to function properly. 
                You can change these settings at any time.
              </p>

              {/* Quick Actions */}
              <div className="mb-4 sm:mb-6">
                <h4 className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white mb-2 sm:mb-3">Quick Actions</h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  <button
                    onClick={acceptAll}
                    className="px-2 sm:px-3 py-1 sm:py-1.5 bg-green-100 hover:bg-green-200 dark:bg-green-900/30 dark:hover:bg-green-900/50 text-green-700 dark:text-green-300 text-xs font-medium rounded-md sm:rounded-lg transition-colors duration-200"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={declineAll}
                    className="px-2 sm:px-3 py-1 sm:py-1.5 bg-red-100 hover:bg-red-200 dark:bg-red-900/30 dark:hover:bg-red-900/50 text-red-700 dark:text-red-300 text-xs font-medium rounded-md sm:rounded-lg transition-colors duration-200"
                  >
                    Decline All
                  </button>
                  <button
                    onClick={resetToDefaults}
                    className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-md sm:rounded-lg transition-colors duration-200 flex items-center gap-1"
                  >
                    <RotateCcw className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    Reset
                  </button>
                </div>
              </div>

              {/* Cookie Categories */}
              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                {/* Essential Cookies */}
                <div className="border border-gray-200 dark:border-gray-700 rounded-md sm:rounded-lg p-3 sm:p-4">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 dark:bg-blue-900/30 rounded-md sm:rounded-lg flex items-center justify-center">
                        <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-medium text-gray-900 dark:text-white">Essential Cookies</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Required for basic functionality</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">Always on</span>
                      <div className="w-8 h-5 sm:w-10 sm:h-6 bg-blue-600 rounded-full flex items-center justify-start px-0.5 sm:px-1">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    These cookies are necessary for the website to function and cannot be disabled. They include session management, security, and basic functionality.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="border border-gray-200 dark:border-gray-700 rounded-md sm:rounded-lg p-3 sm:p-4">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 dark:bg-green-900/30 rounded-md sm:rounded-lg flex items-center justify-center">
                        <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-medium text-gray-900 dark:text-white">Analytics Cookies</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Help us improve our services</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handlePreferenceChange('analytics', !preferences.analytics)}
                      className={`w-8 h-5 sm:w-10 sm:h-6 rounded-full transition-colors duration-200 ${
                        preferences.analytics
                          ? 'bg-green-600'
                          : 'bg-gray-300 dark:bg-gray-600'
                      } flex items-center justify-start px-0.5 sm:px-1`}
                    >
                      <div className={`w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full transition-transform duration-200 ${
                        preferences.analytics ? 'translate-x-3 sm:translate-x-4' : ''
                      }`}></div>
                    </button>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    These cookies help us understand how visitors interact with our website, including page views, user behavior, and performance metrics.
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div className="border border-gray-200 dark:border-gray-700 rounded-md sm:rounded-lg p-3 sm:p-4">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-100 dark:bg-purple-900/30 rounded-md sm:rounded-lg flex items-center justify-center">
                        <Target className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-medium text-gray-900 dark:text-white">Marketing Cookies</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Personalized content and ads</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handlePreferenceChange('marketing', !preferences.marketing)}
                      className={`w-8 h-5 sm:w-10 sm:h-6 rounded-full transition-colors duration-200 ${
                        preferences.marketing
                          ? 'bg-purple-600'
                          : 'bg-gray-300 dark:bg-gray-600'
                      } flex items-center justify-start px-0.5 sm:px-1`}
                    >
                      <div className={`w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full transition-transform duration-200 ${
                        preferences.marketing ? 'translate-x-3 sm:translate-x-4' : ''
                      }`}></div>
                    </button>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    These cookies are used to deliver relevant advertisements and track marketing campaigns effectiveness.
                  </p>
                </div>

                {/* Functional Cookies */}
                <div className="border border-gray-200 dark:border-gray-700 rounded-md sm:rounded-lg p-3 sm:p-4">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-100 dark:bg-orange-900/30 rounded-md sm:rounded-lg flex items-center justify-center">
                        <Settings className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600 dark:text-orange-400" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-medium text-gray-900 dark:text-white">Functional Cookies</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Enhanced functionality</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handlePreferenceChange('functional', !preferences.functional)}
                      className={`w-8 h-5 sm:w-10 sm:h-6 rounded-full transition-colors duration-200 ${
                        preferences.functional
                          ? 'bg-orange-600'
                          : 'bg-gray-300 dark:bg-gray-600'
                      } flex items-center justify-start px-0.5 sm:px-1`}
                    >
                      <div className={`w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full transition-transform duration-200 ${
                        preferences.functional ? 'translate-x-3 sm:translate-x-4' : ''
                      }`}></div>
                    </button>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    These cookies enable enhanced functionality and personalization, such as language preferences and theme settings.
                  </p>
                </div>
              </div>

              {/* Current Status */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-md sm:rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
                <h4 className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white mb-2">Current Status</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Essential:</span>
                    <span className="text-green-600 dark:text-green-400 font-medium">Enabled</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Analytics:</span>
                    <span className={`font-medium ${preferences.analytics ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                      {preferences.analytics ? 'Enabled' : 'Disabled'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Marketing:</span>
                    <span className={`font-medium ${preferences.marketing ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                      {preferences.marketing ? 'Enabled' : 'Disabled'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Functional:</span>
                    <span className={`font-medium ${preferences.functional ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                      {preferences.functional ? 'Enabled' : 'Disabled'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <button
                  onClick={savePreferences}
                  disabled={!hasChanges}
                  className={`flex-1 flex items-center justify-center gap-1.5 sm:gap-2 font-medium py-2 sm:py-2.5 px-3 sm:px-4 rounded-md sm:rounded-lg transition-colors duration-200 text-xs sm:text-sm ${
                    hasChanges
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <Save className="w-3 h-3 sm:w-4 sm:h-4" />
                  Save Changes
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium py-2 sm:py-2.5 px-3 sm:px-4 rounded-md sm:rounded-lg transition-colors duration-200 text-xs sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CookieSettingsManager
