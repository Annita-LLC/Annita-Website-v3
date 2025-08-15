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
  ShoppingCart
} from 'lucide-react'
import Navigation from '@/components/layout/Navigation'

const HeroSection = () => {
  const [currentFeature, setCurrentFeature] = useState(0)

  const features = [
    { icon: Globe, text: 'Pan-African Reach' },
    { icon: Users, text: '450M+ MSMEs' },
    { icon: TrendingUp, text: 'Growing Fast' },
    { icon: Shield, text: 'Secure & Trusted' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [features.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
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

      {/* Navigation */}
      <Navigation />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6"
              >
                <Star className="w-4 h-4 mr-2 text-yellow-400" />
                #1 Digital Platform in Africa
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
              >
                Africa's First{' '}
                <span className="gradient-text bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  All-in-One
                </span>{' '}
                Digital Platform
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed"
              >
                Empowering 450M+ MSMEs with integrated e-commerce, fintech, AI, 
                communication, marketing, and logistics solutions.
              </motion.p>

              {/* Features Rotator */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex items-center justify-center lg:justify-start space-x-4 mb-8"
              >
                <div className="flex items-center space-x-2 text-white">
                  <features[currentFeature].icon className="w-5 h-5 text-primary-300" />
                  <span className="font-medium">{features[currentFeature].text}</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              >
                <button className="btn-lg bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-600 hover:to-secondary-600 group">
                  <Download className="w-5 h-5 mr-2" />
                  Download App
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="btn-lg border-2 border-white text-white hover:bg-white hover:text-gray-900 group">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex items-center justify-center lg:justify-start space-x-6 text-white/80 text-sm"
              >
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>3,000+ Active Vendors</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>99.9% Uptime</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Phone Frame */}
                <div className="relative w-80 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-blue-600 to-cyan-600 rounded-[2.5rem] overflow-hidden relative">
                    {/* Status Bar */}
                    <div className="absolute top-0 left-0 right-0 h-8 bg-black/20 flex items-center justify-between px-6 text-white text-xs">
                      <span>9:41</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-1 h-3 bg-white rounded-full"></div>
                        <div className="w-1 h-5 bg-white rounded-full"></div>
                        <div className="w-1 h-7 bg-white rounded-full"></div>
                      </div>
                    </div>

                    {/* App Content */}
                    <div className="pt-12 px-4 pb-4 h-full">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="text-white">
                          <h3 className="font-bold text-lg">Annita</h3>
                          <p className="text-white/80 text-sm">Your Digital Hub</p>
                        </div>
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                          <Users className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      {/* Quick Actions */}
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        <motion.div
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: -1, delay: 0 }}
                          className="bg-white/20 rounded-xl p-4 text-center"
                        >
                          <ShoppingCart className="w-6 h-6 text-white mx-auto mb-2" />
                          <span className="text-white text-sm font-medium">Marketplace</span>
                        </motion.div>
                        <motion.div
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: -1, delay: 0.5 }}
                          className="bg-white/20 rounded-xl p-4 text-center"
                        >
                          <CreditCard className="w-6 h-6 text-white mx-auto mb-2" />
                          <span className="text-white text-sm font-medium">Payments</span>
                        </motion.div>
                        <motion.div
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: -1, delay: 1 }}
                          className="bg-white/20 rounded-xl p-4 text-center"
                        >
                          <Truck className="w-6 h-6 text-white mx-auto mb-2" />
                          <span className="text-white text-sm font-medium">Logistics</span>
                        </motion.div>
                        <motion.div
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: -1, delay: 1.5 }}
                          className="bg-white/20 rounded-xl p-4 text-center"
                        >
                          <MessageSquare className="w-6 h-6 text-white mx-auto mb-2" />
                          <span className="text-white text-sm font-medium">Connect</span>
                        </motion.div>
                      </div>

                      {/* Stats */}
                      <div className="bg-white/10 rounded-xl p-4 mb-4">
                        <div className="flex items-center justify-between text-white mb-3">
                          <span className="font-medium">Today's Sales</span>
                          <span className="text-2xl font-bold">$2,847</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <motion.div
                            animate={{ width: ['0%', '75%'] }}
                            transition={{ duration: 2, delay: 1 }}
                            className="h-full bg-gradient-to-r from-green-400 to-blue-400 rounded-full"
                          />
                        </div>
                      </div>

                      {/* Recent Activity */}
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 text-white">
                          <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">Order #1234 Delivered</p>
                            <p className="text-xs text-white/60">2 minutes ago</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 text-white">
                          <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                            <CreditCard className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">Payment Received</p>
                            <p className="text-xs text-white/60">5 minutes ago</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ duration: 3, repeat: -1, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-lg flex items-center justify-center"
                >
                  <TrendingUp className="w-8 h-8 text-white" />
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [0, 20, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ duration: 4, repeat: -1, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl shadow-lg flex items-center justify-center"
                >
                  <Shield className="w-6 h-6 text-white" />
                </motion.div>
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: -1 }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: -1 }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
