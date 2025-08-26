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
  const [showWelcome, setShowWelcome] = useState(false)

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

    // Show welcome screen after a short delay
    const showTimer = setTimeout(() => {
      setShowWelcome(true)
    }, 300)

    // Smooth progress animation over 4 seconds
    const startTime = Date.now()
    const duration = 4000 // 4 seconds
    
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
    }, 800)

    return () => {
      clearTimeout(showTimer)
      clearTimeout(progressTimer)
    }
  }, [isClient, handleComplete])

  if (!isClient) {
    return (
      <div className="fixed inset-0 z-[70] bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin" />
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
          className="fixed inset-0 z-[70] bg-gradient-to-r from-primary-500 to-accent-500 overflow-hidden"
        >
          {/* Background Elements - Same as contact page */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          {/* Main Content Container */}
          <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              
              {/* Modern Logo - Same as Header */}
              <motion.div
                initial={{ scale: 0, rotate: -90, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ 
                  duration: 1.2, 
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 80
                }}
                className="mb-8"
              >
                <div className="relative mx-auto w-24 h-24 sm:w-32 sm:h-32">
                  
                  {/* Main Logo Circle - Same as Header */}
                  <motion.div
                    className="relative w-full h-full bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    
                    {/* Custom Annita Logo - Same as Header */}
                    <motion.div
                      className="z-10"
                      animate={{ 
                        filter: [
                          'drop-shadow(0 0 8px rgba(255,255,255,0.4))',
                          'drop-shadow(0 0 16px rgba(255,255,255,0.7))',
                          'drop-shadow(0 0 8px rgba(255,255,255,0.4))'
                        ],
                        rotate: [0, -360]
                      }}
                      transition={{ 
                        filter: { duration: 2, repeat: Infinity },
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                      }}
                    >
                      <img 
                        src="/images/blog/Annita's Logo.png" 
                        alt="Annita Logo"
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                      />
                    </motion.div>

                    {/* Inner Gradient Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-full"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.div>
                  
                  {/* Glow Effect - Same as Header */}
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                    animate={{
                      scale: [1, 1.15, 1],
                      opacity: [0.2, 0.4, 0.2],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Floating Orbital Ring */}
                  <motion.div
                    className="absolute -inset-4 border border-orange-400/30 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Dynamic Glow */}
                  <motion.div
                    className="absolute -inset-8 bg-gradient-to-r from-orange-500/30 via-red-500/30 to-purple-500/30 rounded-full blur-xl"
                    animate={{
                      scale: [1, 1.15, 1],
                      opacity: [0.3, 0.7, 0.3],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </motion.div>

              {/* Welcome Text */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                className="mb-8"
              >
                <motion.h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  Welcome to Annita
                </motion.h1>

                <motion.p
                  className="text-xl sm:text-2xl text-white/90 max-w-lg mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.3 }}
                >
                  Africa's first{' '}
                  <span className="text-orange-400 font-semibold">
                    all-in-one digital platform
                  </span>
                </motion.p>
              </motion.div>

              {/* Progress Bar */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="max-w-md mx-auto mb-8"
              >
                <div className="relative">
                  {/* Progress Container */}
                  <div className="relative bg-white/20 rounded-full overflow-hidden backdrop-blur-sm border border-white/20 h-3">
                    {/* Animated Progress Fill */}
                    <motion.div
                      className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full relative"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      {/* Shimmer Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                        animate={{ x: ["-200%", "200%"] }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity, 
                          ease: "easeInOut",
                          repeatDelay: 1
                        }}
                      />
                    </motion.div>
                  </div>
                  
                  {/* Progress Percentage */}
                  <motion.div
                    className="absolute left-0 right-0 text-center -bottom-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                  >
                    <motion.span 
                      className="font-medium text-white/90 text-sm"
                      key={Math.round(progress)}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      Initializing platform... {Math.round(progress)}%
                    </motion.span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Loading Status Messages */}
              <motion.div
                className="h-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
              >
                <AnimatePresence mode="wait">
                  {progress < 25 && (
                    <motion.p
                      key="security"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="text-white/70 text-sm"
                    >
                      🔐 Securing your experience...
                    </motion.p>
                  )}
                  {progress >= 25 && progress < 50 && (
                    <motion.p
                      key="features"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="text-white/70 text-sm"
                    >
                      ⚡ Loading powerful features...
                    </motion.p>
                  )}
                  {progress >= 50 && progress < 75 && (
                    <motion.p
                      key="interface"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="text-white/70 text-sm"
                    >
                      🎨 Preparing your interface...
                    </motion.p>
                  )}
                  {progress >= 75 && progress < 100 && (
                    <motion.p
                      key="ready"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="text-white/70 text-sm"
                    >
                      🚀 Almost ready to launch...
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>

          {/* Bottom Accent Line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 bottom-8"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "200px", opacity: 1 }}
            transition={{ duration: 1.5, delay: 2.5, ease: "easeOut" }}
          >
            <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default WelcomeLoader