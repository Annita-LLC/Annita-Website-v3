"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Download, 
  Smartphone, 
  CheckCircle, 
  QrCode,
  ArrowRight
} from 'lucide-react'
import Button from '@/components/ui/Button'

const HeroSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-20 bg-gradient-to-r from-primary-500 to-accent-500 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
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
                <Download className="w-10 h-10" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Download <span className="text-orange-500">Annita</span>
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 mb-8">
                Get Africa's all-in-one digital platform on your mobile device
              </p>
              
              {/* Download Buttons */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a 
                    href="#" 
                    className="group relative inline-flex items-center justify-center px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                        </svg>
                      </div>
                      <div className="text-left">
                        <div className="text-xs text-white/70">Download on the</div>
                        <div className="text-sm font-semibold text-white">App Store</div>
                      </div>
                    </div>
                  </motion.a>
                  
                  <motion.a 
                    href="#" 
                    className="group relative inline-flex items-center justify-center px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                        </svg>
                      </div>
                      <div className="text-left">
                        <div className="text-xs text-white/70">GET IT ON</div>
                        <div className="text-sm font-semibold text-white">Google Play</div>
                      </div>
                    </div>
                  </motion.a>
                </div>
                <p className="text-sm text-white/70">
                  Available on App Store and Google Play Store
                </p>
              </div>

              {/* Quick Features */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm">Free Download</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm">No Registration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm">Instant Access</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm">Secure & Private</span>
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
                    <QrCode className="w-32 h-32 text-white" />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-white" />
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
