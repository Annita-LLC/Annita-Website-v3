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
      description: "Access key features without internet - perfect for rural areas",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Escrow Settlements",
      description: "Making trade safer and more trusted for buyers & sellers",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: CreditCard,
      title: "Fintech for All",
      description: "Send, receive, save, and grow money with our smart digital wallet",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Brain,
      title: "AI Business Assistant",
      description: "Get automated help, insights, and guidance to run your hustle",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Truck,
      title: "Built-in Logistics",
      description: "Deliver faster and reach more customers with integrated tools",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Megaphone,
      title: "Marketing Tools",
      description: "Reach more customers with built-in marketing and promotion tools",
      color: "from-teal-500 to-cyan-500"
    }
  ]

  const currentFeatures = [
    {
      icon: Globe,
      title: "Live Marketplace",
      description: "Real vendors selling, real customers buying - right now",
      status: "Live",
      link: "https://annita.company.site/products"
    },
    {
      icon: Users,
      title: "Active Community",
      description: "3,000+ vendors already using our platform",
      status: "Active",
      link: "https://annita.company.site/products"
    },
    {
      icon: DollarSign,
      title: "Revenue Generation",
      description: "Proven business model with real transactions",
      status: "Proven",
      link: "https://annita.company.site/products"
    },
    {
      icon: CheckCircle,
      title: "Market Validation",
      description: "Real users, real feedback, real growth",
      status: "Validated",
      link: "https://annita.company.site/products"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium mb-6 border border-orange-500/30">
            <Zap className="w-4 h-4 mr-2" />
            🚨 Something BIG is coming to Africa
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Annita <span className="text-orange-500">3.0</span>
            <br />
            <span className="text-2xl sm:text-3xl lg:text-4xl text-blue-300">
              The Future of Business in Africa
            </span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Smarter. Faster. Offline-ready. Inclusive.
            <br />
            <span className="text-orange-400 font-semibold">Built for everyone, everywhere.</span>
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-full p-2 border border-gray-700">
            <button
              onClick={() => setActiveTab('coming')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'coming'
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              What's Coming (V3.0)
            </button>
            <button
              onClick={() => setActiveTab('current')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'current'
                  ? 'bg-green-500 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white'
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
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* V3.0 Text Content */}
              <div className="text-center">
                <div className="bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-2xl p-8 border border-orange-500/30">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                    One Platform. All Your Business Needs — Online or Offline.
                  </h3>
                  <p className="text-lg text-gray-300 mb-6">
                    For MSMEs, vendors, freelancers, market women, students, and individuals.
                  </p>
                </div>
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
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300 group cursor-pointer"
                    onClick={() => window.open(feature.link, '_blank')}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-medium border border-green-500/30">
                        {feature.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <div className="flex items-center text-green-400 text-sm font-medium group-hover:text-green-300">
                      <span>Try it now</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Current Platform CTA */}
              <div className="text-center">
                <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl p-8 border border-green-500/30">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                    Experience Annita V1.0 Right Now
                  </h3>
                  <p className="text-lg text-gray-300 mb-6">
                    See what we've built. Real vendors. Real customers. Real transactions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      variant="gradient"
                      size="lg"
                      icon={ExternalLink}
                      className="text-lg font-bold"
                      onClick={() => window.open('https://annita.company.site/products', '_blank')}
                    >
                      Visit Live Marketplace
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      icon={TrendingUp}
                      className="text-lg font-bold border-white/30 text-white hover:bg-white/10"
                    >
                      View Success Stories
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-orange-500/10 to-purple-500/10 rounded-2xl p-8 border border-orange-500/20">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              📣 This is Africa's all-in-one digital home.
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Built in Liberia. Rising with the continent.
            </p>
            <p className="text-xl font-semibold text-orange-400">
              It's time for true digital freedom — without limits, without barriers.
            </p>
            <div className="mt-6 text-2xl font-bold">
              Simplify. Scale. Succeed.
            </div>
          </div>
        </motion.div>
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
