'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Building2, 
  Shield, 
  Globe, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Banknote,
  FileCheck,
  MapPin,
  CreditCard,
  Search,
  Network,
  Target,
  Award,
  TrendingUp,
  Lock,
  Wifi,
  Heart,
  Star,
  Zap,
  Crown,
  Sparkles
} from 'lucide-react'
import Button from '@/components/ui/Button'

const AfricanBusinessFeatures = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const institutionalFeatures = [
    {
      icon: Building2,
      title: 'Institutional Backing',
      description: 'Ensuring institutional trust and access to trade finance through strategic partnerships with leading African banks.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      icon: Network,
      title: 'Connected Ecosystem',
      description: 'Linked to continental trade tools and platforms for seamless integration across African markets.',
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100'
    },
    {
      icon: FileCheck,
      title: 'Verified Users',
      description: 'All participants undergo comprehensive due diligence through Smile ID to ensure secure transactions.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100'
    },
    {
      icon: MapPin,
      title: 'Logistics & Order Management',
      description: 'Comprehensive supply chain and order tracking solutions integrated into the platform.',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100'
    },
    {
      icon: Banknote,
      title: 'Finance-Ready',
      description: 'Integrated financing solutions with escrow protection for seamless trade operations.',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'from-emerald-50 to-emerald-100'
    }
  ]

  const uniqueFeatures = [
    {
      icon: FileCheck,
      title: 'KYC-Verified Businesses',
      description: 'All suppliers and buyers complete identity & document checks through Smile ID.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Lock,
      title: 'Escrow Payment Protection',
      description: 'Funds are held securely until delivery is confirmed boosting trust and safety.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Search,
      title: 'RFQ-Based Sourcing',
      description: 'Post a Request for Quote (RFQ) and receive multiple responses like a built-in procurement team.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: CreditCard,
      title: 'Multi-Currency Support',
      description: 'Trade confidently in over 30 African currencies, with real-time conversion tracking.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Globe,
      title: 'Pan-African Network',
      description: 'Buyers and suppliers from all AfCFTA regions in East, West, Central, Southern, and North Africa.',
      color: 'from-emerald-500 to-emerald-600'
    }
  ]

  const valuePropositions = [
    {
      icon: Users,
      title: 'Verified Suppliers',
      description: 'All suppliers are thoroughly vetted and verified to ensure quality and reliability.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Globe,
      title: 'Pan-African Network',
      description: 'Access suppliers from all 54 African countries in one unified marketplace.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Zap,
      title: 'Fast & Secure',
      description: 'Streamlined processes with secure payment systems and escrow protection.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Heart,
      title: 'Expert Support',
      description: 'Dedicated support team to help you navigate African markets successfully.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: TrendingUp,
      title: 'Market Insights',
      description: 'Access real-time market data and trends to make informed business decisions.',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Comprehensive quality checks and certifications for all listed products.',
      color: 'from-pink-500 to-pink-600'
    }
  ]

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 via-white to-orange-50">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Crown className="w-4 h-4" />
            Built for Africa
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Built Specifically for <span className="text-orange-600">African Businesses</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
            Unlike generic marketplaces, Annita is built for African businesses with features that address real challenges in cross-border trade, 
            institutional backing, and seamless integration across African markets.
          </p>
        </motion.div>

        {/* Institutional Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 sm:mb-20"
        >
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
            Institutional Trust & <span className="text-orange-600">Trade Finance</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {institutionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-soft hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 sm:mb-6`}>
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{feature.title}</h4>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Unique Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16 sm:mb-20"
        >
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
            Unlike Generic Marketplaces, <span className="text-orange-600">Annita Features:</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {uniqueFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 sm:p-8 shadow-soft hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 sm:mb-6`}>
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{feature.title}</h4>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Value Propositions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
            We Make It Easy to Connect with <span className="text-orange-600">Authentic African Suppliers</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {valuePropositions.map((proposition, index) => (
              <motion.div
                key={proposition.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-soft hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${proposition.color} rounded-xl flex items-center justify-center mb-4 sm:mb-6`}>
                  <proposition.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{proposition.title}</h4>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{proposition.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 sm:p-12"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              Ready to Grow Your Business Across Africa?
            </h3>
            <p className="text-lg sm:text-xl text-orange-100 mb-8 sm:mb-10">
              Join thousands of African businesses already using Annita to expand their reach, 
              secure their transactions, and grow their revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-orange-600 hover:bg-orange-50 border-white"
                onClick={() => window.open('https://annita.company.site/products', '_blank')}
              >
                <Users className="w-5 h-5 mr-2" />
                Start Selling
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-orange-600"
                onClick={() => window.open('https://annita.company.site/products', '_blank')}
              >
                <Search className="w-5 h-5 mr-2" />
                Find Suppliers
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AfricanBusinessFeatures
