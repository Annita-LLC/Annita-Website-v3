"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Shield, 
  Globe, 
  Smartphone, 
  Lock,
  Zap,
  Users
} from 'lucide-react'

const FeaturesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Shield,
      title: 'Escrow Protection',
      description: 'Secure transactions with funds held until delivery confirmation',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Globe,
      title: 'Multi-Currency',
      description: 'Support for all major African currencies and international payments',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Money Integration',
      description: 'Seamless integration with local mobile money services',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Lock,
      title: 'Bank-Level Security',
      description: '256-bit encryption and fraud detection systems',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Zap,
      title: 'Instant Transfers',
      description: 'Real-time payment processing and instant settlements',
      color: 'from-yellow-500 to-amber-500'
    },
    {
      icon: Users,
      title: 'Business Accounts',
      description: 'Dedicated business accounts with advanced features',
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  const benefits = [
    'Reduce fraud risk with escrow protection',
    'Accept payments from anywhere in Africa',
    'Lower transaction fees than traditional banks',
    'Real-time transaction tracking',
    'Automated reconciliation and reporting',
    'API integration for custom solutions',
    '24/7 customer support',
    'Compliance with local regulations'
  ]

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Advanced <span className="text-orange-600">Payment Features</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of digital payments with our comprehensive suite of features designed for African businesses and consumers.
          </p>
        </motion.div>

        {/* Main Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-soft hover:shadow-large transition-all duration-300 group transform hover:-translate-y-2"
            >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${feature.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 sm:p-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-orange-600">AnnitaPay</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              More reasons why businesses and individuals trust AnnitaPay for their payment needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.05 }}
                className="flex items-center space-x-3 p-4 rounded-xl hover:bg-white hover:shadow-soft transition-all duration-300"
              >
                <div className="w-2 h-2 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
