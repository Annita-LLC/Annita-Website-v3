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
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [isMobile, setIsMobile] = useState(false)

  // Memoized completion handler
  const handleComplete = useCallback(() => {
    setIsLoading(false)
    setTimeout(onComplete, 500) // Small delay for smooth exit
  }, [onComplete])

  useEffect(() => {
    setIsClient(true)
    if (typeof window !== 'undefined') {
      const updateDimensions = () => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight })
        setIsMobile(window.innerWidth < 768)
      }
      
      updateDimensions()
      window.addEventListener('resize', updateDimensions)
      return () => window.removeEventListener('resize', updateDimensions)
    }
  }, [])

  useEffect(() => {
    if (!isClient) return

    // Show welcome screen after a short delay
    const showTimer = setTimeout(() => {
      setShowWelcome(true)
    }, 300)

    // Smooth progress animation over 6 seconds
    const startTime = Date.now()
    const duration = 6000 // 6 seconds
    
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

  // Responsive values
  const logoSizes = {
    mobile: { base: 'w-20 h-20', text: 'text-xl', dots: { large: 'w-1.5 h-1.5', small: 'w-1 h-1' } },
    tablet: { base: 'w-28 h-28', text: 'text-2xl', dots: { large: 'w-2 h-2', small: 'w-1.5 h-1.5' } },
    desktop: { base: 'w-36 h-36', text: 'text-4xl', dots: { large: 'w-2.5 h-2.5', small: 'w-2 h-2' } },
    large: { base: 'w-44 h-44', text: 'text-5xl', dots: { large: 'w-3 h-3', small: 'w-2.5 h-2.5' } }
  }

  const textSizes = {
    title: 'text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl',
    subtitle: 'text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl',
    progress: 'text-xs sm:text-sm',
    status: 'text-xs sm:text-sm'
  }

  if (!isClient) {
    return (
      <div className="fixed inset-0 z-[70] bg-slate-900 flex items-center justify-center">
        <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  const particleCount = isMobile ? 6 : dimensions.width < 1024 ? 10 : 15

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[70] bg-gradient-to-br from-slate-900 via-purple-900/80 to-slate-900 overflow-hidden"
        >
          {/* Dynamic Background Grid */}
          <div className="absolute inset-0 opacity-10 sm:opacity-20">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 25% 25%, #f97316 0%, transparent 50%),
                  radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%),
                  linear-gradient(45deg, transparent 49%, rgba(249, 115, 22, 0.1) 50%, transparent 51%)
                `
              }}
            />
          </div>

          {/* Responsive Floating Particles */}
          {showWelcome && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(particleCount)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute rounded-full ${
                    isMobile ? 'w-0.5 h-0.5' : 'w-1 h-1 md:w-1.5 md:h-1.5'
                  } ${
                    i % 3 === 0 ? 'bg-orange-400/60' : 
                    i % 3 === 1 ? 'bg-purple-400/60' : 'bg-blue-400/60'
                  }`}
                  initial={{
                    x: Math.random() * dimensions.width,
                    y: dimensions.height + 20,
                    scale: 0
                  }}
                  animate={{
                    x: Math.random() * dimensions.width,
                    y: -20,
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: Math.random() * (isMobile ? 6 : 8) + (isMobile ? 4 : 6),
                    repeat: Infinity,
                    ease: "linear",
                    delay: Math.random() * 3
                  }}
                />
              ))}
            </div>
          )}

          {/* Responsive Ambient Glow Orbs */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className={`absolute top-1/3 left-1/3 bg-gradient-to-r from-orange-500/20 via-red-500/20 to-purple-500/20 rounded-full blur-2xl ${
                isMobile ? 'w-32 h-32' : 'w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96'
              }`}
              animate={{
                scale: [1, 1.2, 1],
                x: [-30, 30, -30],
                y: [-20, 20, -20],
              }}
              transition={{
                duration: isMobile ? 8 : 12,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className={`absolute bottom-1/3 right-1/3 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-2xl ${
                isMobile ? 'w-28 h-28' : 'w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80'
              }`}
              animate={{
                scale: [1.1, 0.9, 1.1],
                x: [20, -20, 20],
                y: [30, -15, 30],
              }}
              transition={{
                duration: isMobile ? 6 : 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
          </div>

          {/* Main Content Container */}
          <div className="relative z-10 flex items-center justify-center min-h-screen px-3 xs:px-4 sm:px-6">
            <div className="text-center max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto w-full">
              
              {/* Responsive Modern Logo */}
              <motion.div
                initial={{ scale: 0, rotate: -90, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ 
                  duration: 1.5, 
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 80
                }}
                className="mb-6 xs:mb-8 sm:mb-10 md:mb-12"
              >
                <div className={`relative mx-auto ${
                  isMobile ? logoSizes.mobile.base : 
                  dimensions.width < 640 ? logoSizes.tablet.base :
                  dimensions.width < 1024 ? logoSizes.desktop.base :
                  logoSizes.large.base
                }`}>
                  
                  {/* Main Logo Circle */}
                  <motion.div
                    className="relative w-full h-full bg-gradient-to-br from-orange-500 via-red-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg sm:shadow-2xl overflow-hidden"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    
                    {/* Custom Annita Logo */}
                    <motion.div
                      className={`text-white font-black tracking-tight z-10 ${
                        isMobile ? logoSizes.mobile.text : 
                        dimensions.width < 640 ? logoSizes.tablet.text :
                        dimensions.width < 1024 ? logoSizes.desktop.text :
                        logoSizes.large.text
                      }`}
                      animate={{ 
                        textShadow: [
                          '0 0 8px rgba(255,255,255,0.4)',
                          '0 0 16px rgba(255,255,255,0.7)',
                          '0 0 8px rgba(255,255,255,0.4)'
                        ],
                        rotate: [0, -360]
                      }}
                      transition={{ 
                        textShadow: { duration: 2, repeat: Infinity },
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                      }}
                    >
                      A
                    </motion.div>
                    
                    {/* Responsive Decorative Elements */}
                    <motion.div
                      className={`absolute ${isMobile ? 'top-1 right-1' : 'top-1.5 right-1.5 sm:top-2 sm:right-2'} ${
                        isMobile ? logoSizes.mobile.dots.large : 
                        dimensions.width < 640 ? logoSizes.tablet.dots.large :
                        dimensions.width < 1024 ? logoSizes.desktop.dots.large :
                        logoSizes.large.dots.large
                      } bg-yellow-300 rounded-full z-10`}
                      animate={{ 
                        scale: [1, 1.4, 1], 
                        opacity: [1, 0.6, 1],
                        rotate: [0, -360]
                      }}
                      transition={{ 
                        scale: { duration: 1.5, repeat: Infinity, delay: 0.3 },
                        opacity: { duration: 1.5, repeat: Infinity, delay: 0.3 },
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                      }}
                    />
                    <motion.div
                      className={`absolute ${isMobile ? 'bottom-1 left-1' : 'bottom-1.5 left-1.5 sm:bottom-2 sm:left-2'} ${
                        isMobile ? logoSizes.mobile.dots.small : 
                        dimensions.width < 640 ? logoSizes.tablet.dots.small :
                        dimensions.width < 1024 ? logoSizes.desktop.dots.small :
                        logoSizes.large.dots.small
                      } bg-cyan-300 rounded-full z-10`}
                      animate={{ 
                        scale: [1, 1.2, 1], 
                        opacity: [1, 0.7, 1],
                        rotate: [0, -360]
                      }}
                      transition={{ 
                        scale: { duration: 2, repeat: Infinity, delay: 0.8 },
                        opacity: { duration: 2, repeat: Infinity, delay: 0.8 },
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                      }}
                    />

                    {/* Inner Gradient Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-full"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.div>
                  
                  {/* Responsive Floating Orbital Rings */}
                  <motion.div
                    className={`absolute border border-orange-400/30 rounded-full ${
                      isMobile ? '-inset-2' : '-inset-2 sm:-inset-3'
                    }`}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                  
                  <motion.div
                    className={`absolute border border-purple-400/20 rounded-full ${
                      isMobile ? '-inset-4' : '-inset-4 sm:-inset-6'
                    }`}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Responsive Dynamic Glow */}
                  <motion.div
                    className={`absolute bg-gradient-to-r from-orange-500/30 via-red-500/30 to-purple-500/30 rounded-full blur-xl ${
                      isMobile ? '-inset-6' : '-inset-6 sm:-inset-8'
                    }`}
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

              {/* Responsive Welcome Text */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                className="mb-6 xs:mb-8 sm:mb-10"
              >
                <motion.h1
                  className={`font-black mb-3 xs:mb-4 sm:mb-6 leading-tight ${textSizes.title}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  <motion.span
                    className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent"
                    animate={{ 
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    Welcome to Annita
                  </motion.span>
                </motion.h1>

                <motion.p
                  className={`text-gray-300 max-w-full leading-relaxed font-light px-2 ${textSizes.subtitle}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.3 }}
                >
                  Africa's first{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-medium">
                    all-in-one digital platform
                  </span>
                </motion.p>
              </motion.div>

              {/* Responsive Progress Bar */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg mx-auto mb-6 sm:mb-8"
              >
                <div className="relative px-2">
                  {/* Progress Container */}
                  <div className={`relative bg-slate-800/60 rounded-full overflow-hidden backdrop-blur-sm border border-slate-700/50 ${
                    isMobile ? 'h-1.5' : 'h-2'
                  }`}>
                    {/* Animated Progress Fill */}
                    <motion.div
                      className="h-full bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 rounded-full relative"
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
                      
                      {/* Progress Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-purple-600 blur-sm opacity-60" />
                    </motion.div>
                  </div>
                  
                  {/* Progress Percentage */}
                  <motion.div
                    className={`absolute left-0 right-0 text-center ${isMobile ? '-bottom-6' : '-bottom-8'}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                  >
                    <motion.span 
                      className={`font-medium text-gray-300 ${textSizes.progress}`}
                      key={Math.round(progress)}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      Initializing platform... {Math.round(progress)}%
                    </motion.span>
                  </motion.div>

                  {/* Responsive Progress Indicators */}
                  <div className={`absolute left-0 right-0 flex justify-between text-gray-500 ${
                    isMobile ? '-top-6 text-xs' : '-top-8 text-xs'
                  }`}>
                    {(isMobile ? ['Secure', 'Load', 'UI', 'Ready'] : ['Security', 'Features', 'Interface', 'Ready']).map((label, index) => (
                      <motion.span
                        key={label}
                        className={`transition-colors duration-300 ${
                          progress >= (index + 1) * 25 ? 'text-orange-400' : ''
                        }`}
                        animate={progress >= (index + 1) * 25 ? { scale: [1, 1.1, 1] } : {}}
                        transition={{ duration: 0.3 }}
                      >
                        {label}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Responsive Loading Status Messages */}
              <motion.div
                className={`${isMobile ? 'h-4' : 'h-6'}`}
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
                      className={`text-gray-400 ${textSizes.status}`}
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
                      className={`text-gray-400 ${textSizes.status}`}
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
                      className={`text-gray-400 ${textSizes.status}`}
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
                      className={`text-gray-400 ${textSizes.status}`}
                    >
                      🚀 Almost ready to launch...
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>

          {/* Responsive Bottom Accent Line */}
          <motion.div
            className={`absolute left-1/2 transform -translate-x-1/2 ${isMobile ? 'bottom-4' : 'bottom-6 sm:bottom-8'}`}
            initial={{ width: 0, opacity: 0 }}
            animate={{ 
              width: isMobile ? "120px" : "160px sm:200px md:240px", 
              opacity: 1 
            }}
            transition={{ duration: 1.5, delay: 2.5, ease: "easeOut" }}
          >
            <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mt-0.5 sm:mt-1 opacity-60" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default WelcomeLoader