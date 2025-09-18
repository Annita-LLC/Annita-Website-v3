'use client'

import { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  CreditCard, 
  Shield, 
  Lock, 
  TrendingUp, 
  ArrowRight,
  CheckCircle,
  Sparkles,
  Zap,
  Activity,
  Globe,
  Send,
  Download
} from 'lucide-react'
import Button from '@/components/ui/Button'

const AnnitaPayFeature = () => {
  const [currentBalance, setCurrentBalance] = useState(1250.00)
  const [liveStats, setLiveStats] = useState({
    totalTransactions: 15420,
    activeUsers: 8923,
    countries: 23,
    securityScore: 99.9
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        totalTransactions: prev.totalTransactions + Math.floor(Math.random() * 5),
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 3),
        countries: prev.countries,
        securityScore: prev.securityScore
      }))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const features = [
    'Escrow payment protection until delivery confirmed',
    'Multi-currency support for 54 African currencies + major global currencies',
    'Real-time settlements with instant cross-border transactions',
    'Digital currency integration including CBDCs and stablecoins',
    'Mobile POS solution for merchants without hardware requirements',
    'Community-driven financial inclusion and economic empowerment',
    'Enhanced security with blockchain-based transparency',
    'Institutional backing through African bank partnerships',
    'Comprehensive due diligence through Smile ID',
    'Integrated financing solutions for trade operations'
  ]


  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
    >
      {/* Content */}
      <div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6"
        >
          <CreditCard className="w-8 h-8 text-white" />
        </motion.div>
        
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-2xl lg:text-3xl font-bold text-orange-600 mb-2"
        >
          AnnitaPay
        </motion.h3>
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg font-medium text-primary-600 mb-4 flex items-center"
        >
          Secure Payment Gateway
          <Shield className="w-5 h-5 ml-2 text-green-500" />
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-gray-600 mb-6 leading-relaxed"
        >
          Comprehensive financial platform with real-time settlements and escrow protection for seamless trade operations. 
          Trade confidently in <span className="text-orange-600 font-semibold">54+ African currencies</span> 
          with <span className="text-orange-600 font-semibold">instant cross-border transactions</span>, 
          digital currency integration including CBDCs, mobile POS solutions, and community-driven financial inclusion. 
          Enhanced with blockchain transparency and institutional backing through strategic partnerships with leading African banks.
        </motion.p>

        {/* Live Security Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 gap-4 mb-6"
        >
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-green-600">{liveStats.securityScore}%</div>
                <div className="text-sm text-green-600">Security Score</div>
              </div>
              <Shield className="w-6 h-6 text-green-500" />
            </div>
            <div className="flex items-center mt-2">
              <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-xs text-green-600">Bank-level security</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-100">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-blue-600">{liveStats.countries}</div>
                <div className="text-sm text-blue-600">Countries</div>
              </div>
              <Globe className="w-6 h-6 text-blue-500" />
            </div>
            <div className="flex items-center mt-2">
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-xs text-green-600">Global reach</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="space-y-3 mb-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              className="flex items-center space-x-3"
            >
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <Button 
            className="group"
            onClick={() => window.open('https://annita.company.site/products', '_blank')}
          >
            Get Started
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>

      {/* Interactive Visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative"
      >
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-6 lg:p-8 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute top-4 right-4 w-20 h-20 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-8 left-6 w-16 h-16 bg-emerald-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
          
          {/* Main interface */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-soft border border-gray-200 relative z-10">
            {/* Header */}
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-white" />
                </div>
                <div>
                  <img 
                    src="/images/DEMO-Images/AnnitaPay.jpg" 
                    alt="AnnitaPay Demo" 
                    className="w-32 h-8 object-contain rounded-lg shadow-sm border border-gray-200"
                  />
                  <div className="text-sm text-gray-500 mt-1">Secure • Encrypted • Protected</div>
                </div>
              </div>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
            </div>

            {/* Balance Card */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-4 text-white mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm opacity-90">Available Balance</span>
                <Shield className="w-4 h-4" />
              </div>
              <div className="text-2xl font-bold mb-1">${currentBalance.toFixed(2)}</div>
              <div className="text-xs opacity-90 flex items-center">
                <Lock className="w-3 h-3 mr-1" />
                Secure • Encrypted • Protected
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <button className="bg-gray-100 rounded-lg p-3 text-center text-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center">
                <Send className="w-4 h-4 mr-2" />
                Send Money
              </button>
              <button className="bg-gray-100 rounded-lg p-3 text-center text-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center">
                <Download className="w-4 h-4 mr-2" />
                Request
              </button>
            </div>


          </div>
        </div>

        {/* Floating elements */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center"
        >
          <Shield className="w-4 h-4 text-white" />
        </motion.div>
        
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-4 -left-4 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center"
        >
          <Activity className="w-3 h-3 text-white" />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default AnnitaPayFeature
