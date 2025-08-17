'use client'

import { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Users, 
  TrendingUp, 
  Globe, 
  Shield,
  Star,
  Award,
  Activity,
  Zap,
  Target,
  Heart
} from 'lucide-react'

const HeroStats = () => {
  const [stats, setStats] = useState({
    users: 0,
    countries: 0,
    transactions: 0,
    satisfaction: 0
  })

  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('hero-stats')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  useEffect(() => {
    if (isInView) {
      const targetStats = {
        users: 450000000,
        countries: 54,
        transactions: 25000000,
        satisfaction: 99.8
      }

      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps

      let currentStep = 0
      const interval = setInterval(() => {
        currentStep++
        const progress = currentStep / steps

        setStats({
          users: Math.floor(targetStats.users * progress),
          countries: Math.floor(targetStats.countries * progress),
          transactions: Math.floor(targetStats.transactions * progress),
          satisfaction: parseFloat((targetStats.satisfaction * progress).toFixed(1))
        })

        if (currentStep >= steps) {
          clearInterval(interval)
        }
      }, stepDuration)

      return () => clearInterval(interval)
    }
  }, [isInView])

  const statItems = [
    {
      icon: Users,
      value: stats.users.toLocaleString(),
      label: 'MSMEs Empowered',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: Globe,
      value: stats.countries,
      label: 'Countries Reached',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-200'
    },
    {
      icon: TrendingUp,
      value: stats.transactions.toLocaleString(),
      label: 'Transactions Processed',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      borderColor: 'border-purple-200'
    },
    {
      icon: Star,
      value: `${stats.satisfaction}%`,
      label: 'Customer Satisfaction',
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50',
      borderColor: 'border-orange-200'
    }
  ]

  return (
    <div id="hero-stats" className="relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-orange-50 rounded-3xl"></div>
      
      <div className="relative z-10 p-8 lg:p-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Trusted by <span className="text-orange-600">Millions</span> Across Africa
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join the digital revolution that's transforming how businesses operate and grow across the continent.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {statItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${item.bgColor} rounded-2xl p-6 border ${item.borderColor} hover:shadow-lg transition-all duration-300 group`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <motion.div
                  animate={isInView ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  className="w-8 h-8 bg-white/50 rounded-full flex items-center justify-center"
                >
                  <TrendingUp className="w-4 h-4 text-green-600" />
                </motion.div>
              </div>

              <div className="space-y-2">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="text-3xl lg:text-4xl font-bold text-gray-900"
                >
                  {item.value}
                </motion.div>
                <div className="text-sm text-gray-600 font-medium">
                  {item.label}
                </div>
              </div>

              {/* Animated progress bar */}
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: '100%' } : {}}
                transition={{ duration: 1, delay: index * 0.1 + 0.8 }}
                className="mt-4 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full"
              />
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8"
        >
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-orange-500" />
            <span className="text-sm text-gray-600">Best Digital Platform 2024</span>
          </div>
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-green-500" />
            <span className="text-sm text-gray-600">Bank-level Security</span>
          </div>
          <div className="flex items-center space-x-2">
            <Target className="w-5 h-5 text-blue-500" />
            <span className="text-sm text-gray-600">ISO 27001 Certified</span>
          </div>
        </motion.div>

        {/* Live Activity Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-8 flex justify-center"
        >
          <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-200">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-3 h-3 bg-green-500 rounded-full"
            />
            <span className="text-sm text-gray-700 font-medium">
              <span className="font-bold text-green-600">Live:</span> 2,847 transactions processed in the last minute
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroStats
