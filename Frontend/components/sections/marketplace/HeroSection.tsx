"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  ShoppingCart, 
  Search, 
  Globe, 
  Shield,
  ArrowRight,
  TrendingUp
} from 'lucide-react'
import Button from '@/components/ui/Button'

const HeroSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <ShoppingCart className="w-10 h-10" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Africa's Largest <span className="text-orange-400">Marketplace</span>
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 mb-8">
                Buy and sell across Africa with secure escrow payments, integrated logistics, and AI-powered search.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  variant="white"
                  size="xl"
                  icon={ArrowRight}
                  className="text-lg font-bold shadow-2xl hover:shadow-white/25 transform hover:-translate-y-1 transition-all duration-300"
                >
                  Start Shopping
                </Button>
                <Button
                  variant="glass"
                  size="xl"
                  icon={TrendingUp}
                  className="text-lg font-bold backdrop-blur-xl shadow-2xl hover:shadow-white/10 transform hover:-translate-y-1 transition-all duration-300"
                >
                  Become a Seller
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-orange-400">3,000+</div>
                  <div className="text-sm text-white/70">Active Vendors</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-orange-400">50,000+</div>
                  <div className="text-sm text-white/70">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-orange-400">99.9%</div>
                  <div className="text-sm text-white/70">Secure</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="relative inline-block">
                <div className="w-80 h-96 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 p-8 shadow-2xl">
                  <div className="w-64 h-80 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl mx-auto flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Search className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-white text-lg font-semibold mb-2">Smart Search</div>
                      <div className="text-white/70 text-sm">Find exactly what you need with AI-powered search</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
