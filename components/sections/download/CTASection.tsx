"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  ArrowRight,
  Download,
  Play,
  Users,
  Globe
} from 'lucide-react'
import Button from '@/components/ui/Button'

const CTASection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Digital Experience?
          </h2>
          <p className="text-xl sm:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Join millions of users across Africa who are already using Annita to shop, pay, 
            and grow their businesses with our all-in-one platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              variant="white"
              size="xl"
              icon={Download}
              className="text-lg font-bold shadow-2xl hover:shadow-white/25 transform hover:-translate-y-1 transition-all duration-300"
            >
              Download Now
            </Button>
            <Button
              variant="glass"
              size="xl"
              icon={Play}
              className="text-lg font-bold backdrop-blur-xl shadow-2xl hover:shadow-white/10 transform hover:-translate-y-1 transition-all duration-300"
            >
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Download className="w-6 h-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold">5M+</div>
              <div className="text-orange-100 text-sm">Downloads</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold">3M+</div>
              <div className="text-orange-100 text-sm">Active Users</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Globe className="w-6 h-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold">50+</div>
              <div className="text-orange-100 text-sm">Countries</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <ArrowRight className="w-6 h-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold">4.8★</div>
              <div className="text-orange-100 text-sm">App Rating</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
