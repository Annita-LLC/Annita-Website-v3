"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Download, 
  Star, 
  Globe, 
  Clock,
  Users,
  TrendingUp,
  AlertTriangle,
  Zap,
  Shield,
  Smartphone
} from 'lucide-react'

const AppStatsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const appStats = [
    { 
      number: 'Pending!', 
      label: 'Downloads',
      icon: Download,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      number: 'Pending!', 
      label: 'App Store Rating',
      icon: Star,
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      number: 'Pending!', 
      label: 'Countries',
      icon: Globe,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      number: 'Pending!', 
      label: 'Support',
      icon: Clock,
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const v3Features = [
    {
      icon: Smartphone,
      title: "Offline Functionality",
      description: "Access key features without internet"
    },
    {
      icon: Shield,
      title: "Escrow Settlements",
      description: "Making trade safer and more trusted"
    },
    {
      icon: TrendingUp,
      title: "Fintech for All",
      description: "Send, receive, save, and grow money"
    },
    {
      icon: Zap,
      title: "AI Business Assistant",
      description: "Get automated help and insights"
    }
  ]

  return (
    <>
      {/* App Stats Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-orange-600 mb-4 sm:mb-6">
              Trusted by Millions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Join millions of users across Africa who trust Annita for their daily digital needs
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {appStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Annita v3.0 Coming Soon Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-orange-50 to-orange-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Coming Soon
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Annita <span className="text-orange-600">v3.0</span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto font-medium">
              🚨 Something BIG is coming to Africa — and it's built for everyone.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Annita 3.0 isn't just another upgrade. It's the future of doing business, communicating, and thriving in Africa — whether you're in the heart of a city or a small rural town with little to no internet.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Imagine this…
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                You're in a village with unstable connectivity — and you can still sell your products, receive payments, talk to customers, manage your business, and even grow your savings... all from one single platform.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                No tech degree. No fancy setup. Just one app — online or offline.
              </p>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-4">That's Annita 3.0.</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-orange-600 font-bold">✓</span>
                    <span className="text-gray-700">Smarter</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-orange-600 font-bold">✓</span>
                    <span className="text-gray-700">Faster</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-orange-600 font-bold">✓</span>
                    <span className="text-gray-700">Offline-ready</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-orange-600 font-bold">✓</span>
                    <span className="text-gray-700">Inclusive</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-white p-8 rounded-3xl shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">🌍 Here's what's coming:</h3>
                <div className="space-y-4">
                  {v3Features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <feature.icon className="w-4 h-4 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-orange-50 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2">🎯 Flexible Subscriptions</h4>
                  <p className="text-sm text-gray-600">Free, Growth, Pro, Premium — pick what suits you</p>
                </div>
                
                <div className="mt-4 p-4 bg-green-50 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2">👥 For Everyone</h4>
                  <p className="text-sm text-gray-600">MSMEs, vendors, freelancers, market women, students, and individuals</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-8 rounded-3xl shadow-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                📣 This is Africa's all-in-one digital home.
              </h3>
              <p className="text-lg mb-6">
                Built in Liberia. Rising with the continent.
              </p>
              <p className="text-xl font-semibold">
                It's time for true digital freedom — without limits, without barriers.
              </p>
              <p className="text-lg mt-4">
                One platform. All your business needs — online or offline.
              </p>
              <div className="mt-6 text-2xl font-bold">
                Simplify. Scale. Succeed.
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default AppStatsSection
