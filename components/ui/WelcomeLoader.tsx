'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Zap, Shield, Globe, Rocket } from 'lucide-react'

interface WelcomeLoaderProps {
  onComplete: () => void
}

const WelcomeLoader = ({ onComplete }: WelcomeLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    { icon: Shield, text: 'Securing your experience...', color: 'from-blue-500 to-cyan-500' },
    { icon: Zap, text: 'Loading powerful features...', color: 'from-purple-500 to-pink-500' },
    { icon: Globe, text: 'Connecting to Africa...', color: 'from-green-500 to-emerald-500' },
    { icon: Rocket, text: 'Almost ready to launch...', color: 'from-orange-500 to-red-500' }
  ]

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
      
      // Update step based on progress
      if (newProgress < 25) {
        setCurrentStep(0)
      } else if (newProgress < 50) {
        setCurrentStep(1)
      } else if (newProgress < 75) {
        setCurrentStep(2)
      } else {
        setCurrentStep(3)
      }
      
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
      <div className="fixed inset-0 z-[70] bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-orange-300 border-t-orange-600 rounded-full animate-spin" />
      </div>
    )
  }

  const CurrentIcon = steps[currentStep].icon

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[70] bg-gradient-to-br from-orange-50 via-white to-orange-100 overflow-hidden"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-gradient-to-br from-orange-200/20 to-orange-300/20"
                style={{
                  width: `${100 + i * 50}px`,
                  height: `${100 + i * 50}px`,
                  left: `${10 + i * 15}%`,
                  top: `${10 + i * 10}%`,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>

          {/* Main Content Container */}
          <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-md mx-auto">
              
              {/* Modern Logo with Advanced Animation */}
              <motion.div
                initial={{ scale: 0, opacity: 0, rotate: -180 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ 
                  duration: 1, 
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 100
                }}
                className="mb-8"
              >
                <div className="relative mx-auto w-40 h-40 sm:w-48 sm:h-48">
                  
                  {/* Outer Glow Ring */}
                  <motion.div
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${steps[currentStep].color} opacity-20 blur-xl`}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  
                  {/* Rotating Outer Ring */}
                  <motion.div
                    className="absolute inset-0 border-4 border-orange-200 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Progress Ring with Gradient */}
                  <motion.div
                    className={`absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-br ${steps[currentStep].color}`}
                    style={{
                      background: `conic-gradient(from 0deg, ${progress >= 25 ? '#10b981' : '#f97316'} ${progress * 3.6}deg, transparent ${progress * 3.6}deg)`,
                      mask: 'radial-gradient(farthest-side, transparent calc(100% - 4px), black calc(100% - 4px))',
                      WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 4px), black calc(100% - 4px))',
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Middle Ring with Icon */}
                  <motion.div
                    className={`absolute inset-4 bg-gradient-to-br ${steps[currentStep].color} rounded-full flex items-center justify-center shadow-2xl`}
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <CurrentIcon className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
                    </motion.div>
                  </motion.div>
                  
                  {/* Inner Circle with Logo */}
                  <motion.div
                    className="absolute inset-8 bg-white rounded-full flex items-center justify-center shadow-xl"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <img 
                      src="/images/blog/Annita's Logo.png" 
                      alt="Annita Logo"
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
                    />
                  </motion.div>
                  
                  {/* Floating Particles */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-2 h-2 rounded-full bg-gradient-to-br ${steps[currentStep].color}`}
                      style={{
                        left: '50%',
                        top: '50%',
                        x: 0,
                        y: 0,
                      }}
                      animate={{
                        x: [0, Math.cos((i * Math.PI) / 4) * 60],
                        y: [0, Math.sin((i * Math.PI) / 4) * 60],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Welcome Text with Animation */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="mb-6"
              >
                <motion.h1
                  className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Welcome to Annita
                </motion.h1>

                <motion.p
                  className="text-lg sm:text-xl text-gray-700 max-w-sm mx-auto leading-relaxed font-medium"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  Africa's first all-in-one digital platform
                </motion.p>
              </motion.div>

              {/* Progress Text with Step Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="h-8 sm:h-10"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, y: 8, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-center space-x-2"
                  >
                    <CurrentIcon className={`w-5 h-5 text-transparent bg-gradient-to-br ${steps[currentStep].color} bg-clip-text`} />
                    <p className="text-gray-600 text-sm sm:text-base font-medium">
                      {steps[currentStep].text}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* Progress Bar */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="mt-6 w-64 mx-auto"
              >
                <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${steps[currentStep].color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <motion.p
                  className="text-xs text-gray-500 mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  {Math.round(progress)}%
                </motion.p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default WelcomeLoader
