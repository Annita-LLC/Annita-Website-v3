'use client'

import { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Smartphone, 
  CreditCard, 
  QrCode, 
  Wifi, 
  Shield, 
  TrendingUp,
  Users,
  DollarSign,
  CheckCircle,
  Zap,
  Globe,
  BarChart3
} from 'lucide-react'
import { useRef } from 'react'

const MobilePOSFeature = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [currentTransaction, setCurrentTransaction] = useState({
    amount: 0,
    currency: 'USD',
    status: 'ready'
  })

  const [liveStats, setLiveStats] = useState({
    totalTransactions: 'Growing',
    activeMerchants: 'Growing',
    countries: 54,
    successRate: 'High'
  })

  const features = [
    {
      icon: Smartphone,
      title: 'No Hardware Required',
      description: 'Turn any smartphone or tablet into a powerful POS system. No expensive equipment needed.',
      benefits: ['Works on any device', 'No setup costs', 'Instant activation', 'Portable solution']
    },
    {
      icon: CreditCard,
      title: 'Multiple Payment Methods',
      description: 'Accept cards, mobile money, digital currencies, and cash payments all in one place.',
      benefits: ['Card payments', 'Mobile money', 'Digital currencies', 'Cash tracking']
    },
    {
      icon: QrCode,
      title: 'QR Code Payments',
      description: 'Generate QR codes for instant payments. Customers can pay by scanning with their phones.',
      benefits: ['Instant QR generation', 'Contactless payments', 'Easy customer experience', 'Secure transactions']
    },
    {
      icon: Globe,
      title: 'Multi-Currency Support',
      description: 'Accept payments in 54+ African currencies with real-time conversion and settlement.',
      benefits: ['54+ currencies', 'Real-time conversion', 'Instant settlement', 'Cross-border payments']
    },
    {
      icon: Shield,
      title: 'Bank-Grade Security',
      description: 'Enterprise-level security with encryption, fraud detection, and compliance standards.',
      benefits: ['End-to-end encryption', 'Fraud detection', 'PCI compliance', 'Secure transactions']
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Track sales, inventory, and customer insights with comprehensive reporting tools.',
      benefits: ['Sales analytics', 'Inventory tracking', 'Customer insights', 'Performance reports']
    }
  ]

  const paymentMethods = [
    { name: 'Visa/Mastercard', icon: CreditCard, status: 'active' },
    { name: 'Mobile Money', icon: Smartphone, status: 'active' },
    { name: 'Digital Currencies', icon: Zap, status: 'active' },
    { name: 'QR Payments', icon: QrCode, status: 'active' },
    { name: 'Bank Transfer', icon: DollarSign, status: 'active' }
  ]

  const stats = [
    { label: 'Total Transactions', value: liveStats.totalTransactions, icon: TrendingUp },
    { label: 'Active Merchants', value: liveStats.activeMerchants, icon: Users },
    { label: 'Countries Served', value: liveStats.countries.toString(), icon: Globe },
    { label: 'Success Rate', value: liveStats.successRate, icon: CheckCircle }
  ]

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Mobile POS <span className="text-orange-600">Solution</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transform any smartphone or tablet into a powerful point-of-sale system. 
            No hardware required, instant setup, and comprehensive payment processing for businesses of all sizes.
          </p>
        </motion.div>

        {/* Live Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="text-center"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <stat.icon className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {feature.description}
              </p>
              <div className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Supported Payment Methods
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {paymentMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200">
                  <method.icon className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {method.name}
                  </h4>
                  <div className="flex items-center justify-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-green-600 font-medium">Active</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default MobilePOSFeature
