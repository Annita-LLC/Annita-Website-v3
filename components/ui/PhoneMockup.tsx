"use client"

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { 
  Clock, 
  Wifi, 
  Battery, 
  Signal, 
  Search, 
  Bell, 
  Settings,
  ShoppingCart,
  CreditCard,
  Truck,
  MessageSquare,
  BarChart3,
  Brain,
  CheckCircle,
  Shield,
  Zap
} from 'lucide-react'
import Image from 'next/image'

const PhoneMockup = () => {
  const [currentApp, setCurrentApp] = useState(0)
  const [batteryLevel, setBatteryLevel] = useState(87)
  const [signalStrength, setSignalStrength] = useState(4)
  const [showNotification, setShowNotification] = useState(false)

  const apps = [
    { 
      icon: ShoppingCart, 
      name: 'Marketplace', 
      color: 'from-blue-500 to-cyan-500', 
      notifications: 3,
      screen: 'marketplace',
      image: '/images/app-screens/marketplace.png'
    },
    { 
      icon: CreditCard, 
      name: 'AnnitaPay', 
      color: 'from-green-500 to-emerald-500', 
      notifications: 1,
      screen: 'payments',
      image: '/images/app-screens/annitapay.png'
    },
    { 
      icon: Truck, 
      name: 'Logistics', 
      color: 'from-orange-500 to-red-500', 
      notifications: 0,
      screen: 'logistics',
      image: '/images/app-screens/logistics.png'
    },
    { 
      icon: MessageSquare, 
      name: 'Connect', 
      color: 'from-purple-500 to-pink-500', 
      notifications: 5,
      screen: 'connect',
      image: '/images/app-screens/connect.png'
    },
    { 
      icon: BarChart3, 
      name: 'Analytics', 
      color: 'from-indigo-500 to-purple-500', 
      notifications: 2,
      screen: 'analytics',
      image: '/images/app-screens/analytics.png'
    },
    { 
      icon: Brain, 
      name: 'AI Assistant', 
      color: 'from-teal-500 to-cyan-500', 
      notifications: 0,
      screen: 'ai',
      image: '/images/app-screens/ai-assistant.png'
    },
  ]

  useEffect(() => {
    const appInterval = setInterval(() => {
      setCurrentApp((prev) => (prev + 1) % apps.length)
    }, 4000)
    return () => clearInterval(appInterval)
  }, [apps.length])

  useEffect(() => {
    const notificationInterval = setInterval(() => {
      setShowNotification(true)
      setTimeout(() => setShowNotification(false), 2000)
    }, 6000)
    return () => clearInterval(notificationInterval)
  }, [])

  const renderIcon = (icon: any, className: string) => {
    const IconComponent = icon
    return <IconComponent className={className} />
  }

  return (
    <div className="relative mx-auto w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 h-[400px] sm:h-[500px] md:h-[560px] lg:h-[630px] xl:h-[700px]">
      {/* Phone Frame with Modern Design */}
      <div className="relative w-full h-full">
        {/* Phone Body */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-black rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] lg:rounded-[3.5rem] p-1.5 sm:p-2 md:p-2.5 lg:p-3 shadow-2xl">
          {/* Phone Bezel */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] lg:rounded-[3.5rem] p-1">
            <div className="w-full h-full bg-black rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden relative">
              
              {/* Dynamic Status Bar */}
              <div className="flex justify-between items-center px-4 sm:px-6 py-2 sm:py-3 text-white text-xs sm:text-sm bg-black/20 backdrop-blur-sm absolute top-0 left-0 right-0 z-10">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span className="font-medium">9:41</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className={`w-1 h-3 rounded-full ${i < signalStrength ? 'bg-white' : 'bg-white/30'}`} />
                    ))}
                  </div>
                  <Wifi className="w-4 h-4" />
                  <div className="flex items-center space-x-1">
                    <div className="w-6 h-2 border border-white rounded-sm">
                      <motion.div 
                        className="h-full bg-white rounded-sm"
                        style={{ width: `${batteryLevel}%` }}
                      />
                    </div>
                    <span className="text-xs">{batteryLevel}%</span>
                  </div>
                </div>
              </div>

              {/* App Screen with Real Images */}
              <div className="w-full h-full relative overflow-hidden">
                {/* Real App Screenshot */}
                <motion.div
                  key={currentApp}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full relative"
                >
                  <Image
                    src={apps[currentApp].image}
                    alt={`${apps[currentApp].name} App Screen`}
                    fill
                    className="object-cover"
                    priority
                  />
                  
                  {/* App Overlay with App Grid */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60">
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 lg:p-6">
                      {/* App Grid */}
                      <div className="grid grid-cols-3 gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 mb-3 sm:mb-4 lg:mb-6">
                        {apps.map((app, index) => (
                          <motion.div
                            key={app.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`relative p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${app.color} cursor-pointer ${currentApp === index ? 'ring-2 ring-white/50' : ''}`}
                            onClick={() => setCurrentApp(index)}
                          >
                            <div className="flex flex-col items-center text-center">
                              {renderIcon(app.icon, "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white mb-1 sm:mb-2")}
                              <span className="text-white text-xs font-medium">{app.name}</span>
                              {app.notifications > 0 && (
                                <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                                  <span className="text-white text-xs font-bold">{app.notifications}</span>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Current App Info */}
                      <div className="bg-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 backdrop-blur-sm">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <div className={`w-8 h-8 bg-gradient-to-br ${apps[currentApp].color} rounded-lg flex items-center justify-center`}>
                              {renderIcon(apps[currentApp].icon, "w-4 h-4 text-white")}
                            </div>
                            <div>
                              <h4 className="text-white font-bold text-sm">{apps[currentApp].name}</h4>
                              <p className="text-white/60 text-xs">Active</p>
                            </div>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
                          >
                            <Settings className="w-4 h-4 text-white" />
                          </motion.button>
                        </div>
                      </div>

                      {/* Bottom Navigation */}
                      <div className="flex items-center justify-between text-white/80 text-xs mt-3">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span>Secure</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Shield className="w-4 h-4 text-blue-400" />
                          <span>Protected</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Zap className="w-4 h-4 text-yellow-400" />
                          <span>Fast</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Phone Shadow */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-black/20 rounded-full blur-xl"></div>
      </div>
    </div>
  )
}

export default PhoneMockup
