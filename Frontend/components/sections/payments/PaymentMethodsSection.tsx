"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  CreditCard, 
  Smartphone, 
  DollarSign, 
  Shield
} from 'lucide-react'

const PaymentMethodsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const paymentMethods = [
    { 
      name: 'Credit/Debit Cards', 
      icon: CreditCard, 
      color: 'from-blue-500 to-cyan-500',
      description: 'Visa, Mastercard, and local cards',
      features: ['Secure processing', 'Instant verification', 'Global acceptance']
    },
    { 
      name: 'Mobile Money', 
      icon: Smartphone, 
      color: 'from-green-500 to-emerald-500',
      description: 'M-Pesa, MTN Money, and more',
      features: ['Local integration', 'Low fees', 'Wide coverage']
    },
    { 
      name: 'Bank Transfers', 
      icon: DollarSign, 
      color: 'from-purple-500 to-pink-500',
      description: 'Direct bank transfers',
      features: ['No fees', 'Secure', 'Direct deposit']
    },
    { 
      name: 'Digital Wallet', 
      icon: Shield, 
      color: 'from-orange-500 to-red-500',
      description: 'AnnitaPay digital wallet',
      features: ['Instant transfers', 'Multi-currency', 'Business tools']
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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Multiple <span className="text-orange-600">Payment Options</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from a wide range of payment methods designed for African businesses and consumers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {paymentMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-soft hover:shadow-large transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${method.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <method.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{method.name}</h3>
              <p className="text-gray-600 mb-4">{method.description}</p>
              
              <div className="space-y-2">
                {method.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-gradient-to-br from-orange-500 to-red-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Hover overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${method.color.replace('from-', 'from-').replace('to-', 'to-')} opacity-0 group-hover:opacity-5 rounded-2xl sm:rounded-3xl transition-opacity duration-300`}></div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 sm:mt-20 bg-white rounded-3xl p-8 sm:p-12 shadow-soft"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Payment <span className="text-orange-600">Statistics</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted by millions of users across Africa for secure and fast payments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">99.9%</div>
              <div className="text-gray-600">Security Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-gray-600">Currencies Supported</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Transaction Processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">1-3%</div>
              <div className="text-gray-600">Transaction Fees</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PaymentMethodsSection
