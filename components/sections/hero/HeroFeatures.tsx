'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  ShoppingCart, 
  CreditCard, 
  Truck, 
  MessageSquare, 
  Brain,
  ArrowRight,
  Sparkles,
  Zap,
  Target,
  Award,
  Shield,
  Globe,
  Users,
  TrendingUp,
  CheckCircle
} from 'lucide-react'
import Button from '@/components/ui/Button'

const HeroFeatures = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: ShoppingCart,
      title: 'Marketplace',
      description: 'Africa\'s largest multivendor e-commerce platform with AI-powered recommendations',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      stats: '3M+ Products'
    },
    {
      icon: CreditCard,
      title: 'AnnitaPay',
      description: 'Secure payment gateway with multi-currency support and fraud protection',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      stats: '99.9% Uptime'
    },
    {
      icon: Brain,
      title: 'AI Assistant',
      description: 'Intelligent automation and predictive analytics for business optimization',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      stats: 'AI-Powered'
    },
    {
      icon: Truck,
      title: 'Logistics',
      description: 'On-demand delivery network with real-time tracking and route optimization',
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50',
      stats: 'Same Day'
    }
  ]

  return (
    <div ref={ref} className="relative">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Everything You Need in <span className="text-orange-600">One Platform</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          From payments to logistics, AI to marketing - Annita provides all the tools MSMEs need 
          to succeed in the digital economy.
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`bg-gradient-to-br ${feature.bgColor} rounded-2xl p-6 lg:p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 group cursor-pointer`}
          >
            <div className="flex items-start space-x-4">
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                    className="text-sm font-medium text-orange-600 bg-orange-100 px-3 py-1 rounded-full"
                  >
                    {feature.stats}
                  </motion.div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>

                {/* Feature highlights */}
                <div className="space-y-2 mb-4">
                  {feature.title === 'Marketplace' && (
                    <>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Easy vendor onboarding</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>AI-powered recommendations</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Rural penetration support</span>
                      </div>
                    </>
                  )}
                  
                  {feature.title === 'AnnitaPay' && (
                    <>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Multi-currency support</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Fraud protection system</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Mobile money integration</span>
                      </div>
                    </>
                  )}
                  
                  {feature.title === 'AI Assistant' && (
                    <>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Predictive analytics</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Automated customer support</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Smart inventory management</span>
                      </div>
                    </>
                  )}
                  
                  {feature.title === 'Logistics' && (
                    <>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Real-time tracking</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Route optimization</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Same-day delivery</span>
                      </div>
                    </>
                  )}
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-medium group"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ 
                y: [-5, 5, -5],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
              className="absolute top-4 right-4 w-2 h-2 bg-orange-400 rounded-full opacity-60"
            />
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center mt-12"
      >
        <Button className="group text-lg px-8 py-4">
          Explore All Features
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </motion.div>
    </div>
  )
}

export default HeroFeatures
