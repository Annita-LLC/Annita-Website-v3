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
    'Multi-currency support for 54+ African currencies',
    'Real-time settlements with instant cross-border transactions',
    'Escrow payment protection for secure transactions',
    'Digital currency integration including CBDCs',
    'Mobile POS solutions for merchants',
    'Institutional backing through African bank partnerships'
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
          Africa's Unified Financial Engine
          <Shield className="w-5 h-5 ml-2 text-green-500" />
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-gray-600 mb-6 leading-relaxed"
        >
          AnnitaPay enables MSMEs and individuals to <span className="text-orange-600 font-semibold">move, store, issue, and grow money</span> 
          seamlessly without borders. Trade confidently in <span className="text-orange-600 font-semibold">54+ African currencies</span> 
          with <span className="text-orange-600 font-semibold">real-time settlements</span> and escrow protection.
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

      {/* Demo Image Visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative"
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-orange-200 shadow-2xl">
          <div className="text-center mb-4 sm:mb-6">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">AnnitaPay Demo</h3>
            <p className="text-xs sm:text-sm text-gray-600">Secure • Encrypted • Protected</p>
            </div>

          {/* Large Demo Image */}
          <div className="relative mx-auto group">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-gray-100 bg-gradient-to-br from-gray-50 to-white p-2">
              <img 
                src="/images/DEMO-Images/AnnitaPay.jpg" 
                alt="AnnitaPay Demo" 
                className="w-full h-auto rounded-xl transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-xl pointer-events-none"></div>
              </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl blur-sm -z-10"></div>
                    </div>
                  </div>
      </motion.div>
    </motion.div>
  )
}

export default AnnitaPayFeature
