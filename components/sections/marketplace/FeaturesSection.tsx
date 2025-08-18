"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Shield, 
  Truck, 
  Search, 
  Globe,
  CreditCard,
  Award,
  TrendingUp,
  CheckCircle
} from 'lucide-react'

const FeaturesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Shield,
      title: 'Secure Escrow Payments',
      description: 'Your money is protected until you receive your order. No more payment scams.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Truck,
      title: 'Integrated Logistics',
      description: 'Same-day and next-day delivery across Africa with real-time tracking.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Search,
      title: 'Smart Search & Filters',
      description: 'Find exactly what you need with AI-powered search and advanced filters.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Pan-African Reach',
      description: 'Buy from vendors across Africa. Cross-border trade made simple.',
      color: 'from-orange-500 to-red-500'
    }
  ]

  const benefits = [
    {
      icon: CreditCard,
      title: 'Multiple Payment Options',
      description: 'Pay with mobile money, cards, or bank transfers. All secure and instant.'
    },
    {
      icon: Award,
      title: 'Quality Guarantee',
      description: 'All products are verified and quality-checked before listing.'
    },
    {
      icon: TrendingUp,
      title: 'Best Prices',
      description: 'Compare prices across vendors and get the best deals.'
    },
    {
      icon: CheckCircle,
      title: 'Easy Returns',
      description: '30-day return policy with hassle-free refunds.'
    }
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
            Why Choose <span className="text-orange-600">Annita Marketplace</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of e-commerce with our advanced features designed for African businesses and consumers.
          </p>
        </motion.div>

        {/* Main Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
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
              Additional <span className="text-orange-600">Benefits</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              More reasons why thousands of customers choose Annita Marketplace every day.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="flex items-start space-x-4 p-6 rounded-2xl hover:bg-white hover:shadow-soft transition-all duration-300"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
