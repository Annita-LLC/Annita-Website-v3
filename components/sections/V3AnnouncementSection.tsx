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
import WaitlistForm from '@/components/ui/WaitlistForm'

const V3AnnouncementSection = () => {
  const [activeTab, setActiveTab] = useState('coming')
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              🚨 Something BIG is coming to Africa
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
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
            <div className="bg-white rounded-full p-2 shadow-lg border border-gray-200">
              <button
                onClick={() => setActiveTab('coming')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === 'coming'
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                What's Coming (V3.0)
              </button>
              <button
                onClick={() => setActiveTab('current')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === 'current'
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                What We Have Now (V1.0)
              </button>
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
                    <Button
                      variant="outline"
                      size="lg"
                      icon={Star}
                      className="text-lg font-bold border-orange-300 text-orange-700 hover:bg-orange-50"
                      onClick={() => setIsWaitlistOpen(true)}
                    >
                      Join Waitlist
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        </div>
      </div>

      {/* Waitlist Form Modal */}
      <WaitlistForm 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </section>
  )
}

export default V3AnnouncementSection
