"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  QrCode, 
  Smartphone, 
  Download, 
  ExternalLink,
  Apple,
  Play
} from 'lucide-react'
import Button from '@/components/ui/Button'

const QRCodeSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-orange-600 mb-4 sm:mb-6">
              Download Annita App
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Get the complete Annita experience on your mobile device
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* iOS Download */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-medium transition-shadow duration-300"
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Apple className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">iOS App</h3>
                <p className="text-gray-600 mb-6">
                  Download for iPhone and iPad from the App Store
                </p>
                
                {/* QR Code */}
                <div className="bg-gray-50 rounded-2xl p-6 mb-6 inline-block">
                  <div className="w-48 h-48 bg-white rounded-xl flex items-center justify-center border-2 border-gray-200">
                    <QrCode className="w-24 h-24 text-gray-400" />
                  </div>
                  <p className="text-sm text-gray-500 mt-3">Scan to download from App Store</p>
                </div>
                
                {/* App Store Button */}
                <motion.a 
                  href="#" 
                  className="group relative inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl border border-blue-400/20"
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
                      <div className="text-xs text-blue-100">Download on the</div>
                      <div className="text-sm font-semibold text-white">App Store</div>
                    </div>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            {/* Android Download */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-medium transition-shadow duration-300"
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Play className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Android App</h3>
                <p className="text-gray-600 mb-6">
                  Download for Android devices from Google Play Store
                </p>
                
                {/* QR Code */}
                <div className="bg-gray-50 rounded-2xl p-6 mb-6 inline-block">
                  <div className="w-48 h-48 bg-white rounded-xl flex items-center justify-center border-2 border-gray-200">
                    <QrCode className="w-24 h-24 text-gray-400" />
                  </div>
                  <p className="text-sm text-gray-500 mt-3">Scan to download from Play Store</p>
                </div>
                
                {/* Google Play Button */}
                <motion.a 
                  href="#" 
                  className="group relative inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl border border-green-400/20"
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
                      <div className="text-xs text-green-100">GET IT ON</div>
                      <div className="text-sm font-semibold text-white">Google Play</div>
                    </div>
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Direct Download Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="bg-white rounded-2xl p-6 shadow-soft inline-block">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Direct Download Links</h4>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="gradient"
                  size="lg"
                  icon={Download}
                  className="flex items-center justify-center space-x-2"
                >
                  <span>Download for iOS</span>
                  <ExternalLink className="w-4 h-4" />
                </Button>
                <Button
                  variant="gradient"
                  size="lg"
                  icon={Download}
                  className="flex items-center justify-center space-x-2"
                >
                  <span>Download for Android</span>
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default QRCodeSection
