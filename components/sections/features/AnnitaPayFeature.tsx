'use client'

import { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  CreditCard, 
  Shield, 
  Lock, 
  TrendingUp, 
  DollarSign, 
  ArrowRight,
  CheckCircle,
  Sparkles,
  Zap,
  Target,
  Award,
  Users,
  Activity,
  Send,
  Download,
  Wallet,
  Banknote,
  Smartphone,
  Globe,
  Clock
} from 'lucide-react'
import Button from '@/components/ui/Button'

const AnnitaPayFeature = () => {
  const [currentBalance, setCurrentBalance] = useState(1250.00)
  const [recentTransactions, setRecentTransactions] = useState([
    { id: 1, type: 'received', amount: 150.00, from: 'John Doe', time: '2 min ago', status: 'completed' },
    { id: 2, type: 'sent', amount: 75.50, to: 'Sarah Smith', time: '5 min ago', status: 'completed' },
    { id: 3, type: 'received', amount: 300.00, from: 'Business Inc', time: '12 min ago', status: 'completed' }
  ])
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
    'Secure escrow transactions',
    'Fraud reduction system',
    'Multi-currency support',
    'Mobile money integration'
  ]

  const currencies = ['USD', 'EUR', 'GBP', 'NGN', 'GHS', 'KES', 'ZAR']

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
          A comprehensive payment solution with escrow services and digital wallet. 
          Secure transactions with <span className="text-orange-600 font-semibold">AI-powered fraud detection</span> 
          and multi-currency support across Africa.
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
          <Button className="group">
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
                  <div className="font-semibold text-gray-900">AnnitaPay</div>
                  <div className="text-sm text-gray-500">Secure • Encrypted • Protected</div>
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

            {/* Recent Transactions */}
            <div className="space-y-2">
              <div className="text-sm font-medium text-gray-700 mb-2">Recent Transactions</div>
              {recentTransactions.map((transaction, index) => (
                <motion.div
                  key={transaction.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-between p-2 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      transaction.type === 'received' ? 'bg-green-100' : 'bg-blue-100'
                    }`}>
                      {transaction.type === 'received' ? (
                        <Download className="w-4 h-4 text-green-600" />
                      ) : (
                        <Send className="w-4 h-4 text-blue-600" />
                      )}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {transaction.type === 'received' ? transaction.from : transaction.to}
                      </div>
                      <div className="text-xs text-gray-500 flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {transaction.time}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-sm font-bold ${
                      transaction.type === 'received' ? 'text-green-600' : 'text-blue-600'
                    }`}>
                      {transaction.type === 'received' ? '+' : '-'}${transaction.amount}
                    </div>
                    <div className="text-xs text-green-600 flex items-center">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      {transaction.status}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Currency Support */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="text-sm font-medium text-gray-700 mb-2">Supported Currencies</div>
              <div className="flex flex-wrap gap-1">
                {currencies.map((currency, index) => (
                  <motion.span
                    key={currency}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600"
                  >
                    {currency}
                  </motion.span>
                ))}
              </div>
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
