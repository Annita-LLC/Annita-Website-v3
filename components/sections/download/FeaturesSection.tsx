"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Shield, 
  ShoppingCart, 
  Truck, 
  Zap,
  Globe,
  Wifi,
  Bell,
  Fingerprint,
  CheckCircle
} from 'lucide-react'

const FeaturesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Shield,
      title: 'Secure payments with AnnitaPay',
      description: 'Bank-grade security for all your transactions',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: ShoppingCart,
      title: 'Shop from thousands of vendors',
      description: 'Access to the largest marketplace in Africa',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Truck,
      title: 'Real-time delivery tracking',
      description: 'Track your orders from pickup to delivery',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Zap,
      title: 'AI-powered business tools',
      description: 'Smart insights and automation for your business',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Multi-language support',
      description: 'Available in major African languages',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Wifi,
      title: 'Offline functionality',
      description: 'Works even with limited internet connectivity',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Bell,
      title: 'Push notifications',
      description: 'Stay updated with real-time alerts',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Fingerprint,
      title: 'Biometric authentication',
      description: 'Secure login with fingerprint or face ID',
      color: 'from-teal-500 to-cyan-500'
    }
  ]

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-orange-600 mb-4 sm:mb-6">
            Powerful Features
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need in one app - payments, shopping, business tools, and more
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-soft hover:shadow-large transition-all duration-300 group transform hover:-translate-y-2"
            >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${feature.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
