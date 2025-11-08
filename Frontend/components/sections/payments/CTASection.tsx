"use client"

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  CreditCard, 
  Smartphone, 
  ArrowRight,
  Download,
  Play
} from 'lucide-react'
import Button from '@/components/ui/Button'
import DownloadChoiceModal from '@/components/ui/DownloadChoiceModal'

const CTASection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <CreditCard className="w-10 h-10" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Start Using <span className="text-orange-300">AnnitaPay</span> Today
          </h2>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join millions of users who trust AnnitaPay for secure, fast, and reliable payments across Africa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              variant="white"
              size="xl"
              icon={ArrowRight}
              className="text-lg font-bold shadow-2xl hover:shadow-white/25 transform hover:-translate-y-1 transition-all duration-300"
            >
              Send Money Now
            </Button>
            <Button
              variant="glass"
              size="xl"
              icon={Smartphone}
              className="text-lg font-bold backdrop-blur-xl shadow-2xl hover:shadow-white/10 transform hover:-translate-y-1 transition-all duration-300"
            >
              Create Account
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-orange-300 mb-2">99.9%</div>
              <div className="text-white/80">Security Rate</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-orange-300 mb-2">50+</div>
              <div className="text-white/80">Currencies</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-orange-300 mb-2">24/7</div>
              <div className="text-white/80">Processing</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-orange-300 mb-2">1-3%</div>
              <div className="text-white/80">Low Fees</div>
            </motion.div>
          </div>

          {/* App Download */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-white/20"
          >
            <p className="text-lg text-white/80 mb-6">Get the best experience with our mobile app</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="glass"
                size="lg"
                icon={Download}
                className="backdrop-blur-xl shadow-2xl hover:shadow-white/10"
                onClick={() => setIsDownloadModalOpen(true)}
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

      {/* Download Choice Modal */}
      <DownloadChoiceModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />
    </section>
  )
}

export default CTASection
