"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  ShoppingCart, 
  TrendingUp, 
  ArrowRight,
  Download,
  Play
} from 'lucide-react'
import Button from '@/components/ui/Button'

const CTASection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <ShoppingCart className="w-10 h-10" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start <span className="text-blue-200">Shopping</span>?
          </h2>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join millions of customers who trust Annita Marketplace for secure, fast, and reliable shopping across Africa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              variant="white"
              size="xl"
              icon={ArrowRight}
              className="text-lg font-bold shadow-2xl hover:shadow-white/25 transform hover:-translate-y-1 transition-all duration-300"
            >
              Start Shopping Now
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

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-blue-200 mb-2">3,000+</div>
              <div className="text-white/80">Active Vendors</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-blue-200 mb-2">50,000+</div>
              <div className="text-white/80">Products Listed</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-blue-200 mb-2">99.9%</div>
              <div className="text-white/80">Secure Transactions</div>
            </motion.div>
          </div>

          {/* App Download */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 pt-8 border-t border-white/20"
          >
            <p className="text-lg text-white/80 mb-6">Get the best experience with our mobile app</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="glass"
                size="lg"
                icon={Download}
                className="backdrop-blur-xl shadow-2xl hover:shadow-white/10"
              >
                Download App
              </Button>
              <Button
                variant="glass"
                size="lg"
                icon={Play}
                className="backdrop-blur-xl shadow-2xl hover:shadow-white/10"
                onClick={() => window.location.href = '/demo'}
              >
                Watch Demo
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
