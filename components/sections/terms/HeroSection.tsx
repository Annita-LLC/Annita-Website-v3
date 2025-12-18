"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FileText,
  Scale,
  Mail,
  Phone
} from 'lucide-react'

const HeroSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-orange-600 via-orange-700 to-red-600 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-1/3 w-12 h-12 bg-white/10 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-8 shadow-lg border border-white/30">
              <FileText className="w-5 h-5 mr-2" />
              Terms of Service
            </div>

            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
              Your Agreement with <span className="text-orange-200">Us</span>
            </h1>

            {/* Description */}
            <p className="text-xl sm:text-2xl text-gray-400 mb-8 leading-relaxed max-w-2xl">
              Read Annita's comprehensive terms of service to understand your rights, responsibilities, and the legal framework governing your use of our platform and services.
            </p>

            {/* Quick Contact Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Mail className="w-6 h-6 text-orange-200" />
                <div>
                  <div className="font-semibold text-white">Legal Support</div>
                  <div className="text-sm text-gray-400 leading-relaxed">annitallc@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Phone className="w-6 h-6 text-orange-200" />
                <div>
                  <div className="font-semibold text-white">Phone Support</div>
                  <div className="text-sm text-gray-400 leading-relaxed">+231 77 505 7227</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visualization Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Scale className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Legal Protection</h3>
                <p className="text-orange-200">Clear terms & fair agreement</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                  <span className="text-gray-400 leading-relaxed">Legal Protection</span>
                  <span className="font-bold text-green-300">✓</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                  <span className="text-gray-400 leading-relaxed">Clear Terms</span>
                  <span className="font-bold text-green-300">✓</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                  <span className="text-gray-400 leading-relaxed">Fair Agreement</span>
                  <span className="font-bold text-green-300">✓</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                  <span className="text-gray-400 leading-relaxed">User Rights</span>
                  <span className="font-bold text-green-300">✓</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
