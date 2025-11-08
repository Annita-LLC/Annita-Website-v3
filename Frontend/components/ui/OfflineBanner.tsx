'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Wifi, WifiOff, RefreshCw, AlertCircle } from 'lucide-react'

const OfflineBanner = () => {
  const [isOnline, setIsOnline] = useState(true)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true)
      // Hide banner after a short delay when coming back online
      setTimeout(() => setIsVisible(false), 2000)
    }

    const handleOffline = () => {
      setIsOnline(false)
      setIsVisible(true)
    }

    // Check initial online status
    setIsOnline(navigator.onLine)
    setIsVisible(!navigator.onLine)

    // Add event listeners
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  const handleRetry = () => {
    window.location.reload()
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {isOnline ? (
                  <Wifi className="w-5 h-5 text-green-300" />
                ) : (
                  <WifiOff className="w-5 h-5 text-red-200" />
                )}
                <div className="flex items-center space-x-2">
                  <span className="text-sm sm:text-base font-medium">
                    {isOnline ? 'Connection Restored' : 'You are currently offline'}
                  </span>
                  {!isOnline && (
                    <AlertCircle className="w-4 h-4 text-red-200" />
                  )}
                </div>
              </div>
              
              {!isOnline && (
                <button
                  onClick={handleRetry}
                  className="flex items-center space-x-2 px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-200 text-sm font-medium"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Retry</span>
                </button>
              )}
            </div>
            
            {!isOnline && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-2 text-xs sm:text-sm text-red-100"
              >
                Please check your internet connection and try again. Some features may not be available while offline.
              </motion.p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default OfflineBanner
