'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Sparkles, 
  Globe, 
  Users, 
  Zap, 
  Shield, 
  Heart,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import Link from 'next/link'

const tips = [
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Connect with customers across Africa and beyond',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Users,
    title: 'Community First',
    description: 'Join millions of MSMEs building the future of African commerce',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Zap,
    title: 'AI-Powered',
    description: 'Leverage cutting-edge AI to grow your business',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Shield,
    title: 'Secure & Trusted',
    description: 'Bank-grade security protecting your transactions',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Heart,
    title: 'Made for Africa',
    description: 'Built by Africans, for Africans, empowering local businesses',
    color: 'from-indigo-500 to-purple-500'
  }
]

const WelcomePage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [currentTip, setCurrentTip] = useState(0)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
      setShowContent(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isLoading) {
      const tipInterval = setInterval(() => {
        setCurrentTip((prev) => (prev + 1) % tips.length)
      }, 2000)

      return () => clearInterval(tipInterval)
    }
  }, [isLoading])

  const renderIcon = (icon: any, className: string) => {
    const IconComponent = icon
    return <IconComponent className={className} />
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 flex items-center justify-center">
        <div className="text-center">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="relative mx-auto w-24 h-24 sm:w-32 sm:h-32 bg-white/20 rounded-full flex items-center justify-center shadow-2xl">
              <img 
                src="/images/blog/Annita's Logo.png" 
                alt="Annita Logo" 
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
              />
              <div className="absolute -inset-2 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full blur opacity-30"></div>
            </div>
          </motion.div>

          {/* Welcome Text */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Welcome to Annita
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-white/90 mb-8 max-w-md mx-auto"
          >
            Africa's first all-in-one digital platform
          </motion.p>

          {/* Spinner */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-8"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto"></div>
          </motion.div>

          {/* Loading Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-white/80 text-sm sm:text-base"
          >
            Loading amazing features...
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <AnimatePresence>
      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:bg-gray-900"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-8 sm:py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <div className="relative mx-auto w-20 h-20 sm:w-24 sm:h-24 bg-white/20 rounded-full flex items-center justify-center shadow-xl">
                  <img 
                    src="/images/blog/Annita's Logo.png" 
                    alt="Annita Logo" 
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                  />
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full blur opacity-30"></div>
                </div>
              </motion.div>

              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
              >
                Welcome to Annita!
              </motion.h1>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto"
              >
                Your gateway to Africa's digital future. Discover powerful tools designed to transform your business.
              </motion.p>
            </div>
          </div>

          {/* Tips Section */}
          <div className="py-12 sm:py-16 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Why Choose Annita?
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Experience the power of Africa's most comprehensive digital platform
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
                {tips.map((tip, index) => (
                  <motion.div
                    key={tip.title}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-gray-100 dark:border-gray-700"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${tip.color} rounded-xl flex items-center justify-center mb-4`}>
                      {renderIcon(tip.icon, "w-6 h-6 text-white")}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {tip.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {tip.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 py-12 sm:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="max-w-3xl mx-auto"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
                  Join thousands of businesses already transforming their operations with Annita
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <span>Explore Platform</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  
                  <Link
                    href="/download"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-500 text-primary-500 font-semibold rounded-xl hover:bg-primary-500 hover:text-white transition-all duration-300"
                  >
                    <span>Download App</span>
                    <CheckCircle className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default WelcomePage
