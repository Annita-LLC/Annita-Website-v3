import { useState, useEffect } from 'react'

export interface CookiePreferences {
  essential: boolean
  analytics: boolean
  marketing: boolean
  functional: boolean
}

export interface CookieConsentData {
  preferences: CookiePreferences
  timestamp: string
  version: string
}

export function useCookieConsent() {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
    functional: false
  })
  const [hasConsented, setHasConsented] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load existing consent from localStorage
    const existingConsent = localStorage.getItem('annita-cookie-consent')
    const consentDate = localStorage.getItem('annita-cookie-consent-date')
    
    if (existingConsent) {
      try {
        const savedPreferences = JSON.parse(existingConsent)
        setPreferences(savedPreferences)
        setHasConsented(true)
        
        // Apply preferences to tracking
        applyCookiePreferences(savedPreferences)
      } catch (error) {
        console.error('Error parsing saved cookie preferences:', error)
      }
    }
    
    setIsLoading(false)
  }, [])

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
  }

  const savePreferences = (newPreferences: CookiePreferences) => {
    const consentData: CookieConsentData = {
      preferences: newPreferences,
      timestamp: new Date().toISOString(),
      version: '1.0'
    }
    
    localStorage.setItem('annita-cookie-consent', JSON.stringify(newPreferences))
    localStorage.setItem('annita-cookie-consent-date', new Date().toISOString())
    localStorage.setItem('annita-cookie-consent-full', JSON.stringify(consentData))
    
    setPreferences(newPreferences)
    setHasConsented(true)
    applyCookiePreferences(newPreferences)
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

  const resetConsent = () => {
    localStorage.removeItem('annita-cookie-consent')
    localStorage.removeItem('annita-cookie-consent-date')
    localStorage.removeItem('annita-cookie-consent-full')
    
    setPreferences({
      essential: true,
      analytics: false,
      marketing: false,
      functional: false
    })
    setHasConsented(false)
  }

  const getConsentData = (): CookieConsentData | null => {
    const fullData = localStorage.getItem('annita-cookie-consent-full')
    if (fullData) {
      try {
        return JSON.parse(fullData)
      } catch (error) {
        console.error('Error parsing full consent data:', error)
        return null
      }
    }
    return null
  }

  const hasAnalyticsConsent = () => preferences.analytics
  const hasMarketingConsent = () => preferences.marketing
  const hasFunctionalConsent = () => preferences.functional
  const hasEssentialConsent = () => preferences.essential

  return {
    preferences,
    hasConsented,
    isLoading,
    savePreferences,
    acceptAll,
    acceptEssential,
    decline,
    resetConsent,
    getConsentData,
    hasAnalyticsConsent,
    hasMarketingConsent,
    hasFunctionalConsent,
    hasEssentialConsent,
    applyCookiePreferences
  }
}
