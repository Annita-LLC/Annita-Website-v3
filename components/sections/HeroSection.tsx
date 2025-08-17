'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Play, 
  Download, 
  ArrowRight, 
  Globe, 
  Users, 
  TrendingUp,
  Shield,
  Zap,
  Star,
  CheckCircle,
  CreditCard,
  Truck,
  MessageSquare,
  ShoppingCart,
  Bell,
  Settings,
  Search,
  Heart,
  BarChart3,
  Camera,
  Wifi,
  Battery,
  Signal,
  Clock,
  MapPin,
  Calendar,
  FileText,
  Video,
  Music,
  Gamepad2,
  Sparkles,
  Target,
  Award,
  Crown,
  Rocket,
  Brain,
  Palette,
  Globe2,
  Smartphone,
  Tablet,
  Monitor,
  Watch
} from 'lucide-react'
import Button from '@/components/ui/Button'

const HeroSection = () => {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [currentApp, setCurrentApp] = useState(0)
  const [showNotification, setShowNotification] = useState(false)
  const [batteryLevel, setBatteryLevel] = useState(87)
  const [signalStrength, setSignalStrength] = useState(4)

  const features = [
    { icon: Globe, text: 'Pan-African Reach' },
    { icon: Users, text: '450M+ MSMEs' },
    { icon: TrendingUp, text: 'Growing Fast' },
    { icon: Shield, text: 'Secure & Trusted' },
  ]

  const apps = [
    { icon: ShoppingCart, name: 'Marketplace', color: 'from-blue-500 to-cyan-500', notifications: 3 },
    { icon: CreditCard, name: 'AnnitaPay', color: 'from-green-500 to-emerald-500', notifications: 1 },
    { icon: Truck, name: 'Logistics', color: 'from-orange-500 to-red-500', notifications: 0 },
    { icon: MessageSquare, name: 'Connect', color: 'from-purple-500 to-pink-500', notifications: 5 },
    { icon: BarChart3, name: 'Analytics', color: 'from-indigo-500 to-purple-500', notifications: 2 },
    { icon: Brain, name: 'AI Assistant', color: 'from-teal-500 to-cyan-500', notifications: 0 },
  ]

  const notifications = [
    { type: 'success', message: 'Payment received from Customer #1234', time: '2m ago', icon: CheckCircle },
    { type: 'info', message: 'New order #5678 ready for pickup', time: '5m ago', icon: Bell },
    { type: 'warning', message: 'Low inventory alert for Product X', time: '10m ago', icon: Shield },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [features.length])

  useEffect(() => {
    const appInterval = setInterval(() => {
      setCurrentApp((prev) => (prev + 1) % apps.length)
    }, 3000)
    return () => clearInterval(appInterval)
  }, [apps.length])

  useEffect(() => {
    const notificationInterval = setInterval(() => {
      setShowNotification(true)
      setTimeout(() => setShowNotification(false), 3000)
    }, 5000)
    return () => clearInterval(notificationInterval)
  }, [])

  const renderIcon = (icon: any, className: string) => {
    const IconComponent = icon
    return <IconComponent className={className} />
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-800" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: -1,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: -1,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary-400/20 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Content */}

      {/* Content */}
              <div className="relative z-10 container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 pt-16 sm:pt-20 lg:pt-24 xl:pt-32 pb-8 sm:pb-12 lg:pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs sm:text-sm font-medium mb-4 sm:mb-6"
              >
                <Brain className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-orange-400" />
                AI-Powered Digital Platform
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-3 sm:mb-4 lg:mb-6 leading-tight"
              >
                Africa's First{' '}
                <span className="text-orange-500">
                  AI-Powered
                </span>{' '}
                All-in-One Digital Platform
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-200 mb-4 sm:mb-6 lg:mb-8 leading-relaxed"
              >
                Annita is Africa's first all-in-one digital platform, combining e-commerce, fintech, 
                <span className="text-orange-400 font-semibold"> Artificial Intelligence</span>, communication, 
                marketing, logistics, and more into a single ecosystem. We empower MSMEs and individuals 
                with innovative solutions, connectivity, and convenience.
              </motion.p>

              {/* Features Rotator */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex items-center justify-center lg:justify-start space-x-3 sm:space-x-4 mb-6 sm:mb-8"
              >
                <div className="flex items-center space-x-1.5 sm:space-x-2 text-white">
                  {(() => {
                    const IconComponent = features[currentFeature].icon;
                    return <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-primary-300" />;
                  })()}
                  <span className="font-medium text-sm sm:text-base">{features[currentFeature].text}</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              >
                <Button
                  variant="gradient"
                  size="lg"
                  icon={Play}
                  className="text-base sm:text-lg font-bold shadow-2xl hover:shadow-primary-500/25 transform hover:-translate-y-1 transition-all duration-300"
                >
                  Get Started Free
                </Button>
                <Button
                  variant="glass"
                  size="lg"
                  icon={Download}
                  className="text-base sm:text-lg font-bold backdrop-blur-xl shadow-2xl hover:shadow-white/10 transform hover:-translate-y-1 transition-all duration-300"
                >
                  Download App
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="mt-4 sm:mt-6 lg:mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-6 text-white/60 text-xs sm:text-sm"
              >
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>3,000+ Vendors</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-blue-400" />
                  <span>Secure Payments</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span>24/7 Support</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Advanced Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              {/* Phone Frame with Advanced Design */}
              <div className="relative mx-auto w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 h-[400px] sm:h-[500px] md:h-[560px] lg:h-[630px] xl:h-[700px] bg-gradient-to-b from-gray-900 via-gray-800 to-black rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] p-1.5 sm:p-2 md:p-2.5 lg:p-3 shadow-2xl">
                {/* Phone Bezel */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] p-1">
                  <div className="w-full h-full bg-black rounded-[1rem] sm:rounded-[1.5rem] md:rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden relative">
                    
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

                    {/* Dynamic App Screen */}
                    <div className="w-full h-full bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-800 relative overflow-hidden">
                      
                      {/* App Grid */}
                      <div className="p-3 sm:p-4 md:p-5 lg:p-6">
                        <div className="flex items-center justify-between mb-3 sm:mb-4 lg:mb-6">
                          <div>
                            <h3 className="text-white font-bold text-lg sm:text-xl">Annita Hub</h3>
                            <p className="text-white/60 text-xs sm:text-sm">All-in-One Platform</p>
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
                              className={`relative p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${app.color} cursor-pointer`}
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
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">
                              <div className={`w-10 h-10 bg-gradient-to-br ${apps[currentApp].color} rounded-xl flex items-center justify-center`}>
                                {renderIcon(apps[currentApp].icon, "w-5 h-5 text-white")}
                              </div>
                              <div>
                                <h4 className="text-white font-bold">{apps[currentApp].name}</h4>
                                <p className="text-white/60 text-sm">Active Session</p>
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
                          
                          {/* Dynamic Content Based on App */}
                          {currentApp === 0 && (
                            <div className="space-y-3">
                              <div className="flex items-center justify-between text-white">
                                <span className="text-sm">Today's Orders</span>
                                <span className="text-lg font-bold">24</span>
                              </div>
                              <div className="w-full bg-white/20 rounded-full h-2">
                                <motion.div
                                  animate={{ width: ['0%', '85%'] }}
                                  transition={{ duration: 2 }}
                                  className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                                />
                              </div>
                            </div>
                          )}
                          
                          {currentApp === 1 && (
                            <div className="space-y-3">
                              <div className="flex items-center justify-between text-white">
                                <span className="text-sm">Total Revenue</span>
                                <span className="text-lg font-bold">$12,847</span>
                              </div>
                              <div className="w-full bg-white/20 rounded-full h-2">
                                <motion.div
                                  animate={{ width: ['0%', '92%'] }}
                                  transition={{ duration: 2 }}
                                  className="h-full bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"
                                />
                              </div>
                            </div>
                          )}
                          
                          {currentApp === 2 && (
                            <div className="space-y-3">
                              <div className="flex items-center justify-between text-white">
                                <span className="text-sm">Active Deliveries</span>
                                <span className="text-lg font-bold">8</span>
                              </div>
                              <div className="w-full bg-white/20 rounded-full h-2">
                                <motion.div
                                  animate={{ width: ['0%', '67%'] }}
                                  transition={{ duration: 2 }}
                                  className="h-full bg-gradient-to-r from-orange-400 to-red-400 rounded-full"
                                />
                              </div>
                            </div>
                          )}
                        </motion.div>

                        {/* Live Notifications */}
                        <div className="space-y-1 sm:space-y-2">
                          {notifications.map((notification, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.2 }}
                              className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-white/10 rounded-lg sm:rounded-xl backdrop-blur-sm"
                            >
                                                              <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center ${
                                  notification.type === 'success' ? 'bg-green-400' :
                                  notification.type === 'warning' ? 'bg-yellow-400' : 'bg-blue-400'
                                }`}>
                                  {renderIcon(notification.icon, "w-3 h-3 sm:w-4 sm:h-4 text-white")}
                                </div>
                                                              <div className="flex-1">
                                  <p className="text-white text-xs sm:text-sm font-medium">{notification.message}</p>
                                  <p className="text-white/60 text-xs">{notification.time}</p>
                                </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Advanced Floating Elements */}
                <motion.div
                  animate={{ 
                    y: [0, -30, 0],
                    rotate: [0, 10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 4, repeat: -1, ease: "easeInOut" }}
                  className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 md:-top-6 md:-right-6 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl flex items-center justify-center"
                >
                  <Crown className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [0, 30, 0],
                    rotate: [0, -10, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 5, repeat: -1, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 md:-bottom-6 md:-left-6 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl flex items-center justify-center"
                >
                  <Rocket className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" />
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ duration: 6, repeat: -1, ease: "easeInOut", delay: 2 }}
                  className="absolute top-1/2 -right-4 sm:-right-6 md:-right-8 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl flex items-center justify-center"
                >
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
                </motion.div>

                {/* Device Ecosystem Icons */}
                <div className="absolute -top-6 sm:-top-8 md:-top-10 lg:-top-12 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2 md:space-x-3 lg:space-x-4">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: -1, delay: 0 }}
                    className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm"
                  >
                    <Smartphone className="w-2 h-2 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-white" />
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: -1, delay: 0.5 }}
                    className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm"
                  >
                    <Tablet className="w-2 h-2 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-white" />
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: -1, delay: 1 }}
                    className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm"
                  >
                    <Monitor className="w-2 h-2 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-white" />
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: -1, delay: 1.5 }}
                    className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm"
                  >
                    <Watch className="w-2 h-2 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-white" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: -1 }}
          className="w-4 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: -1 }}
            className="w-1 h-2 sm:h-3 bg-white/60 rounded-full mt-1.5 sm:mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default HeroSection
