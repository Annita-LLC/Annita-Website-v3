'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Store, 
  Shield, 
  CheckCircle, 
  Globe, 
  MessageSquare, 
  CreditCard, 
  MapPin, 
  Smartphone, 
  Brain, 
  Users, 
  Award, 
  ArrowRight,
  ExternalLink,
  TrendingUp
} from 'lucide-react'
import Button from '@/components/ui/Button'

const V1MarketplaceSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    { icon: Shield, title: 'KYC Verification', description: 'Secure identity verification for every buyer, seller, and logistics partner' },
    { icon: CheckCircle, title: 'Escrow Settlement', description: 'Payments are held securely until delivery is confirmed by both parties' },
    { icon: Globe, title: 'Real-time Tracking', description: 'Monitor shipments end-to-end with live map views and alerts' },
    { icon: MessageSquare, title: 'In-app Chat', description: 'Transparent communication layer for buyers, sellers, and logistics teams' },
    { icon: CreditCard, title: 'Multiple Payments', description: 'Cards, wallets, mobile money, on/off ramps, plus AnnitaPay for settlements' },
    { icon: MapPin, title: 'Live Location', description: 'Accurate GPS location sharing for every delivery and pickup point' },
    { icon: Smartphone, title: 'USSD Shopping', description: 'Accessible commerce on any phone. Browse, buy, and pay without data' },
    { icon: Brain, title: 'Annita AI', description: 'Intelligent shopping assistant powered by AI' },
    { icon: Globe, title: 'Trade with AFCFTA', description: 'Access the African Continental Free Trade Area - 55 African countries' }
  ]

  const stats = [
    { icon: Users, value: '3k+', label: 'Trusted MSMEs' },
    { icon: Award, value: '8+', label: 'Awards Won' },
    { icon: TrendingUp, value: '8+', label: 'Digital Services' }
  ]

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6"
            >
              <Store className="w-4 h-4 mr-2" />
              Upgraded Version - Live & Operational
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            >
              Experience Annita v1.0 - The Upgraded Marketplace
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-4"
            >
              This is our <strong className="text-gray-900">upgraded version</strong> with new features and improvements. 
              <strong className="text-gray-900"> No longer in beta</strong> - create your account today and start using the full-featured platform!
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 max-w-3xl mx-auto"
            >
              <p className="text-sm text-blue-900">
                <strong>🎯 Important:</strong> Create your account on this upgraded version now. 
                When <strong>Annita 3.0 launches next year</strong>, existing v1.0 users will be automatically migrated - 
                <strong> no re-onboarding required!</strong> Start building your business today.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-8 mb-12"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="text-center">
                    <Icon className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                    <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                )
              })}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href="https://annita-v1.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Store className="w-5 h-5 mr-2" />
                Explore Annita v1.0 Marketplace
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <p className="text-sm text-gray-600">
                Create your account and join 3,000+ trusted MSMEs on Africa's Digital Commerce OS
              </p>
            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all hover:border-purple-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-2xl p-8 sm:p-12 text-white text-center"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Experience the Future of African Commerce?
            </h3>
            <p className="text-lg text-purple-100 mb-4 max-w-2xl mx-auto">
              This is our <strong>upgraded version</strong> with new features - no longer in beta! 
              Create your account today and start using the full-featured platform.
            </p>
            <p className="text-base text-purple-200 mb-6 max-w-2xl mx-auto">
              <strong>🚀 Annita 3.0 launches next year.</strong> Users on this upgraded v1.0 version will be automatically migrated - 
              <strong> no re-onboarding needed!</strong> Start building your business now.
            </p>
            <a
              href="https://annita-v1.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-colors shadow-lg hover:shadow-xl"
            >
              <Store className="w-5 h-5 mr-2" />
              Create Account & Start Shopping
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default V1MarketplaceSection

