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
      screen: 'marketplace'
    },
    { 
      icon: CreditCard, 
      name: 'AnnitaPay', 
      color: 'from-green-500 to-emerald-500', 
      notifications: 1,
      screen: 'payments'
    },
    { 
      icon: Truck, 
      name: 'Logistics', 
      color: 'from-orange-500 to-red-500', 
      notifications: 0,
      screen: 'logistics'
    },
    { 
      icon: MessageSquare, 
      name: 'Connect', 
      color: 'from-purple-500 to-pink-500', 
      notifications: 5,
      screen: 'connect'
    },
    { 
      icon: BarChart3, 
      name: 'Analytics', 
      color: 'from-indigo-500 to-purple-500', 
      notifications: 2,
      screen: 'analytics'
    },
    { 
      icon: Brain, 
      name: 'AI Assistant', 
      color: 'from-teal-500 to-cyan-500', 
      notifications: 0,
      screen: 'ai'
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

  const renderAppScreen = (screen: string) => {
    switch (screen) {
      case 'marketplace':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Marketplace</h4>
                  <p className="text-white/60 text-xs">Today's Orders</p>
                </div>
              </div>
              <span className="text-white font-bold text-lg">24</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-white text-xs">
                <span>Order #1234</span>
                <span className="text-green-400">$45.99</span>
              </div>
              <div className="flex items-center justify-between text-white text-xs">
                <span>Order #1235</span>
                <span className="text-green-400">$32.50</span>
              </div>
              <div className="flex items-center justify-between text-white text-xs">
                <span>Order #1236</span>
                <span className="text-yellow-400">Pending</span>
              </div>
            </div>
          </div>
        )
      
      case 'payments':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">AnnitaPay</h4>
                  <p className="text-white/60 text-xs">Balance</p>
                </div>
              </div>
              <span className="text-white font-bold text-lg">$1,247</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-white text-xs">
                <span>Payment Received</span>
                <span className="text-green-400">+$89.99</span>
              </div>
              <div className="flex items-center justify-between text-white text-xs">
                <span>Transfer Sent</span>
                <span className="text-red-400">-$25.00</span>
              </div>
              <div className="flex items-center justify-between text-white text-xs">
                <span>Pending</span>
                <span className="text-yellow-400">$156.75</span>
              </div>
            </div>
          </div>
        )
      
      case 'logistics':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <Truck className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Logistics</h4>
                  <p className="text-white/60 text-xs">Active Deliveries</p>
                </div>
              </div>
              <span className="text-white font-bold text-lg">8</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-white text-xs">
                <span>Package #001</span>
                <span className="text-green-400">Delivered</span>
              </div>
              <div className="flex items-center justify-between text-white text-xs">
                <span>Package #002</span>
                <span className="text-blue-400">In Transit</span>
              </div>
              <div className="flex items-center justify-between text-white text-xs">
                <span>Package #003</span>
                <span className="text-yellow-400">Processing</span>
              </div>
            </div>
          </div>
        )
      
      case 'connect':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Connect</h4>
                  <p className="text-white/60 text-xs">Messages</p>
                </div>
              </div>
              <span className="text-white font-bold text-lg">12</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-white text-xs">
                <span>Customer Support</span>
                <span className="text-green-400">Online</span>
              </div>
              <div className="flex items-center justify-between text-white text-xs">
                <span>Vendor Chat</span>
                <span className="text-blue-400">2 unread</span>
              </div>
              <div className="flex items-center justify-between text-white text-xs">
                <span>Team Group</span>
                <span className="text-yellow-400">3 members</span>
              </div>
            </div>
          </div>
        )
      
      case 'analytics':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Analytics</h4>
                  <p className="text-white/60 text-xs">This Month</p>
                </div>
              </div>
              <span className="text-white font-bold text-lg">+23%</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-white text-xs">
                <span>Revenue</span>
                <span className="text-green-400">$12,450</span>
              </div>
              <div className="flex items-center justify-between text-white text-xs">
                <span>Orders</span>
                <span className="text-blue-400">156</span>
              </div>
              <div className="flex items-center justify-between text-white text-xs">
                <span>Customers</span>
                <span className="text-purple-400">89</span>
              </div>
            </div>
          </div>
        )
      
      case 'ai':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">AI Assistant</h4>
                  <p className="text-white/60 text-xs">Ready to help</p>
                </div>
              </div>
              <span className="text-white font-bold text-lg">AI</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-white text-xs">
                <span>Smart Insights</span>
                <span className="text-green-400">Active</span>
              </div>
              <div className="flex items-center justify-between text-white text-xs">
                <span>Predictions</span>
                <span className="text-blue-400">85% accuracy</span>
              </div>
              <div className="flex items-center justify-between text-white text-xs">
                <span>Auto-optimize</span>
                <span className="text-purple-400">Enabled</span>
              </div>
            </div>
          </div>
        )
      
      default:
        return null
    }
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
              <div className="flex justify-between items-center px-4 sm:px-6 py-2 sm:py-3 text-white text-xs sm:text-sm bg-black/20 backdrop-blur-sm">
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

              {/* App Screen */}
              <div className="w-full h-full bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 relative overflow-hidden">
                
                {/* App Header */}
                <div className="p-3 sm:p-4 md:p-5 lg:p-6">
                  <div className="flex items-center justify-between mb-3 sm:mb-4 lg:mb-6">
                    <div>
                      <h3 className="text-white font-bold text-lg sm:text-xl">Annita Hub</h3>
                      <p className="text-white/80 text-xs sm:text-sm">AI-Powered Platform</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                      >
                        <Search className="w-5 h-5 text-white" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center relative"
                      >
                        <Bell className="w-5 h-5 text-white" />
                        {showNotification && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
                          />
                        )}
                      </motion.button>
                    </div>
                  </div>

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

                  {/* Active App Content */}
                  <motion.div
                    key={currentApp}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-3 sm:mb-4 backdrop-blur-sm"
                  >
                    {renderAppScreen(apps[currentApp].screen)}
                  </motion.div>

                  {/* Bottom Navigation */}
                  <div className="flex items-center justify-between text-white/80 text-xs">
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
