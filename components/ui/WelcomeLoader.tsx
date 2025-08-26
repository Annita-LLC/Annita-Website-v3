'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface WelcomeLoaderProps {
  onComplete: () => void
}

const WelcomeLoader = ({ onComplete }: WelcomeLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [isClient, setIsClient] = useState(false)

  // Memoized completion handler
  const handleComplete = useCallback(() => {
    setIsLoading(false)
    setTimeout(onComplete, 500) // Small delay for smooth exit
  }, [onComplete])

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    // Smooth progress animation over 3 seconds
    const startTime = Date.now()
    const duration = 3000 // 3 seconds
    
    const updateProgress = () => {
      const elapsed = Date.now() - startTime
      const newProgress = Math.min((elapsed / duration) * 100, 100)
      
      setProgress(newProgress)
      
      if (newProgress >= 100) {
        handleComplete()
      } else {
        requestAnimationFrame(updateProgress)
      }
    }
    
    const progressTimer = setTimeout(() => {
      requestAnimationFrame(updateProgress)
    }, 500)

    return () => {
      clearTimeout(progressTimer)
    }
  }, [isClient, handleComplete])

  if (!isClient) {
    return (
      <div className="fixed inset-0 z-[70] bg-white flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[70] bg-white overflow-hidden"
        >
          {/* Main Content Container */}
          <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-md mx-auto">
              
              {/* WhatsApp-style Logo with Spinner */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.8, 
                  ease: "easeOut"
                }}
                className="mb-8"
              >
                <div className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40">
                  
                  {/* WhatsApp-style Spinner Ring */}
                  <motion.div
                    className="absolute inset-0 border-4 border-gray-200 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Progress Spinner Ring */}
                  <motion.div
                    className="absolute inset-0 border-4 border-transparent border-t-green-500 rounded-full"
                    style={{
                      background: `conic-gradient(from 0deg, #10b981 ${progress * 3.6}deg, transparent ${progress * 3.6}deg)`
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Inner Circle with Logo */}
                  <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <img 
                      src="/images/blog/Annita's Logo.png" 
                      alt="Annita Logo"
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
                    />
                  </div>
                  
                  {/* Pulse Effect */}
                  <motion.div
                    className="absolute inset-0 border-2 border-green-500/30 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </motion.div>

              {/* Welcome Text */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="mb-6"
              >
                <motion.h1
                  className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Welcome to Annita
                </motion.h1>

                <motion.p
                  className="text-lg text-gray-600 max-w-sm mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  Africa's first all-in-one digital platform
                </motion.p>
              </motion.div>

              {/* Progress Text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="h-6"
              >
                <AnimatePresence mode="wait">
                  {progress < 25 && (
                    <motion.p
                      key="security"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="text-gray-500 text-sm"
                    >
                      Securing your experience...
                    </motion.p>
                  )}
                  {progress >= 25 && progress < 50 && (
                    <motion.p
                      key="features"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="text-gray-500 text-sm"
                    >
                      Loading powerful features...
                    </motion.p>
                  )}
                  {progress >= 50 && progress < 75 && (
                    <motion.p
                      key="interface"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="text-gray-500 text-sm"
                    >
                      Preparing your interface...
                    </motion.p>
                  )}
                  {progress >= 75 && progress < 100 && (
                    <motion.p
                      key="ready"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="text-gray-500 text-sm"
                    >
                      Almost ready to launch...
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default WelcomeLoader