'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  ShoppingCart, 
  CreditCard, 
  Truck, 
  MessageSquare, 
  BarChart3,
  Shield,
  Zap,
  Globe,
  Users,
  Smartphone,
  Wifi,
  Lock,
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  Download,
  Brain,
  Sparkles,
  Target,
  Award,
  Crown,
  Rocket,
  Heart,
  Eye,
  Activity
} from 'lucide-react'
import Button from '@/components/ui/Button'
import MarketplaceFeature from './features/MarketplaceFeature'
import AnnitaPayFeature from './features/AnnitaPayFeature'
import LogisticsFeature from './features/LogisticsFeature'
import ConnectFeature from './features/ConnectFeature'
import AIFeature from './features/AIFeature'

const FeaturesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "0px" })

  const platformFeatures = [
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Optimized for basic smartphones with low-data mode for rural users',
      metric: '99%'
    },
    {
      icon: Wifi,
      title: 'Offline Capabilities',
      description: 'Works in low-connectivity environments with offline sync',
      metric: '24/7'
    },
    {
      icon: Lock,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and fraud protection systems',
      metric: '99.9%'
    },
    {
      icon: TrendingUp,
      title: 'AI-Powered Analytics',
      description: 'Intelligent insights for business optimization and growth',
      metric: '75%'
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Grow Your Business',
      description: 'African-focused platform for maximum growth'
    },
    {
      icon: Globe,
      title: 'Pan-African Network',
      description: 'Access suppliers from all 54 African countries'
    },
    {
      icon: Shield,
      title: 'Escrow Protection',
      description: 'Funds held securely until delivery confirmed'
    },
    {
      icon: Users,
      title: 'KYC-Verified Suppliers',
      description: 'All suppliers thoroughly vetted and verified'
    }
  ]

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-orange-600 mb-4 sm:mb-6">
            Complete <span className="text-orange-500">African Business Ecosystem</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
            Built for African businesses. Cross-border trade, institutional backing, seamless integration. 
            Connect with authentic African suppliers and grow your business.
          </p>
        </motion.div>

        {/* Main Features */}
        <div className="space-y-12 mb-20">
          <MarketplaceFeature />
          <AnnitaPayFeature />
          <LogisticsFeature />
          <ConnectFeature />
          <AIFeature />
        </div>

        {/* Platform Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20"
        >
          {platformFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="text-2xl font-bold text-orange-600">{feature.metric}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12">
            Why Choose <span className="text-orange-600">Annita</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection
