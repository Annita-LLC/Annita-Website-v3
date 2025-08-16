'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface WelcomeLoaderProps {
  onComplete: () => void
}

const WelcomeLoader = ({ onComplete }: WelcomeLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const [showWelcome, setShowWelcome] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    // Check if user has seen the welcome screen before
    const hasSeenWelcome = localStorage.getItem('annita-welcome-seen')
    
    if (hasSeenWelcome) {
      // Skip welcome screen if user has seen it before
      onComplete()
      return
    }

    // Show welcome screen after a short delay
    const showTimer = setTimeout(() => {
      setShowWelcome(true)
    }, 500)

    // Simulate loading progress over 12 seconds
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + Math.random() * 8 + 2 // Slower progress
      })
    }, 200)

    // Complete loading after 12 seconds
    const timer = setTimeout(() => {
      localStorage.setItem('annita-welcome-seen', 'true')
      onComplete()
    }, 12000) // 12 seconds total

    return () => {
      clearTimeout(timer)
      clearTimeout(showTimer)
      clearInterval(progressInterval)
    }
  }, [onComplete, isClient])

  if (!isClient || !showWelcome) {
    return null
  }

  return (
    <div className="fixed inset-0 z-[70] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-500/30 rounded-full"
            initial={{
              x: isClient ? Math.random() * window.innerWidth : 0,
              y: isClient ? Math.random() * window.innerHeight : 0,
            }}
            animate={{
              x: isClient ? Math.random() * window.innerWidth : 0,
              y: isClient ? Math.random() * window.innerHeight : 0,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center">
          {/* Animated Logo Container */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              duration: 1.2, 
              ease: "easeOut",
              type: "spring",
              stiffness: 100
            }}
            className="mb-12"
          >
            <div className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40">
              {/* Outer Ring */}
              <motion.div
                className="absolute inset-0 border-4 border-orange-500/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Middle Ring */}
              <motion.div
                className="absolute inset-2 border-4 border-purple-500/30 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Inner Ring */}
              <motion.div
                className="absolute inset-4 border-4 border-blue-500/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Logo */}
              <div className="absolute inset-6 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-2xl">
                <img 
                  src="/images/blog/Annita's Logo.png" 
                  alt="Annita Logo" 
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
                />
              </div>
              
              {/* Glow Effect */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-xl opacity-30"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
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
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-8"
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
                Welcome to Annita
              </span>
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Africa's first all-in-one digital platform
            </motion.p>
          </motion.div>

          {/* Advanced Progress Bar */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="max-w-md mx-auto mb-8"
          >
            <div className="relative">
              {/* Background Track */}
              <div className="w-full h-3 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm">
                {/* Animated Gradient Fill */}
                <motion.div
                  className="h-full bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 rounded-full relative"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
              </div>
              
              {/* Progress Text */}
              <motion.div
                className="absolute -bottom-8 left-0 right-0 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <span className="text-sm text-gray-400 font-medium">
                  Loading amazing features... {Math.round(progress)}%
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Floating Action Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex justify-center space-x-8"
          >
            {[
              { icon: "🚀", label: "Fast" },
              { icon: "🔒", label: "Secure" },
              { icon: "🤖", label: "AI-Powered" },
              { icon: "🌍", label: "Global" }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 1.8 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-xs text-gray-400 font-medium">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ width: 0 }}
        animate={{ width: "200px" }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
      </motion.div>
    </div>
  )
}

export default WelcomeLoader
