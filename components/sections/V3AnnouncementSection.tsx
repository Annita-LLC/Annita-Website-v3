'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Zap, 
  Wifi, 
  WifiOff, 
  Shield, 
  CreditCard, 
  Brain, 
  Truck, 
  Megaphone, 
  DollarSign, 
  Users, 
  Globe, 
  ArrowRight, 
  ExternalLink,
  CheckCircle,
  Star,
  TrendingUp,
  Smartphone,
  Laptop
} from 'lucide-react'
import Button from '@/components/ui/Button'

const V3AnnouncementSection = () => {
  const [activeTab, setActiveTab] = useState('coming')

  const v3Features = [
    {
      icon: WifiOff,
      title: "Offline Functionality",
      description: "Access key features without internet - perfect for rural areas.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Escrow Settlements",
      description: "Making trade safer and more trusted for buyers & sellers.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: CreditCard,
      title: "Fintech for All",
      description: "Send, receive, save, and grow money with our smart digital wallet.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Brain,
      title: "AI Business Assistant",
      description: "Get automated help, insights, and guidance to run your hustle.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Truck,
      title: "Built-in Logistics",
      description: "Deliver faster and reach more customers with integrated tools.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Megaphone,
      title: "Marketing Tools",
      description: "Reach more customers with built-in marketing and promotion tools.",
      color: "from-teal-500 to-cyan-500"
    }
  ]

  const currentFeatures = [
    {
      icon: Globe,
      title: "Live Marketplace",
      description: "Real vendors selling, real customers buying - right now.",
      status: "Live",
      link: "https://shop.an-nita.com/"
    },
    {
      icon: Users,
      title: "Active Community",
      description: "3,000+ vendors already using our platform.",
      status: "Active",
      link: "https://shop.an-nita.com/"
    },
    {
      icon: DollarSign,
      title: "Revenue Generation",
      description: "Proven business model with real transactions.",
      status: "Proven",
      link: "https://shop.an-nita.com/"
    },
    {
      icon: CheckCircle,
      title: "Market Validation",
      description: "Real users, real feedback, real growth.",
      status: "Validated",
      link: "https://shop.an-nita.com/"
    }
  ]

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-6">
              Annita <span className="text-orange-600">3.0</span>
            </h2>
            
            <h3 className="text-xl sm:text-2xl lg:text-3xl text-gray-700 mb-6">
              The Future of Business in Africa
            </h3>
            
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              Smarter. Faster. Offline-ready. Inclusive.
              <br />
              <span className="text-orange-600 font-semibold">Built for everyone, everywhere.</span>
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-xl border border-gray-200/50 overflow-hidden">
              {/* Background gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-50/50 to-green-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative flex">
                <button
                  onClick={() => setActiveTab('coming')}
                  className={`relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 overflow-hidden ${
                    activeTab === 'coming'
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg transform scale-105'
                      : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50/50'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    <span className="hidden sm:inline">Annita 3.0</span>
                    <span className="sm:hidden">V3.0</span>
                  </span>
                  {activeTab === 'coming' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 opacity-20 animate-pulse" />
                  )}
                </button>

                <button
                  onClick={() => setActiveTab('current')}
                  className={`relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 overflow-hidden ${
                    activeTab === 'current'
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg transform scale-105'
                      : 'text-gray-600 hover:text-green-600 hover:bg-green-50/50'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <span className="hidden sm:inline">Annita V1.0</span>
                    <span className="sm:hidden">V1.0</span>
                  </span>
                  {activeTab === 'current' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-20 animate-pulse" />
                  )}
                </button>
              </div>
            </div>
          </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'coming' ? (
            <motion.div
              key="coming"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* V3.0 Features Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {v3Features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          ) : (
            <motion.div
              key="current"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Current Features Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {currentFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                    onClick={() => window.open(feature.link, '_blank')}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium border border-green-200">
                        {feature.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <div className="flex items-center text-green-600 text-sm font-medium group-hover:text-green-700">
                      <span>Try it now</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Current Platform CTA */}
              <div className="text-center">
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                    Experience Annita V1.0 Right Now
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    See what we've built. Real vendors, real customers, and real transactions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      variant="gradient"
                      size="lg"
                      icon={ExternalLink}
                      className="text-lg font-bold"
                      onClick={() => window.open('https://shop.an-nita.com/', '_blank')}
                    >
                      Visit Live Marketplace
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        </div>
      </div>

    </section>
  )
}

export default V3AnnouncementSection
