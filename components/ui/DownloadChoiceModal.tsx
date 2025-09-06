'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Smartphone, Globe, ArrowRight, ExternalLink } from 'lucide-react'
import Button from './Button'

interface DownloadChoiceModalProps {
  isOpen: boolean
  onClose: () => void
}

const DownloadChoiceModal = ({ isOpen, onClose }: DownloadChoiceModalProps) => {
  const handleDownloadApp = () => {
    window.open('/download', '_blank')
    onClose()
  }

  const handleVisitV1 = () => {
    window.open('https://annita.company.site/products', '_blank')
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 text-white">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Choose Your Experience</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-orange-100 mt-2">
                Select how you'd like to experience Annita
              </p>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              {/* V3.0 App Option */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="border-2 border-orange-200 rounded-xl p-4 hover:border-orange-300 transition-colors cursor-pointer"
                onClick={handleDownloadApp}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-orange-100 rounded-xl">
                    <Smartphone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">Download Annita 3.0 App</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Get early access to our revolutionary offline-capable platform with AI features, 
                      fintech tools, and comprehensive business solutions.
                    </p>
                    <div className="flex items-center text-orange-600 text-sm font-medium">
                      <span>Join the waitlist</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* V1.0 Marketplace Option */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="border-2 border-gray-200 rounded-xl p-4 hover:border-gray-300 transition-colors cursor-pointer"
                onClick={handleVisitV1}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gray-100 rounded-xl">
                    <Globe className="w-6 h-6 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">Visit Live Marketplace V1.0</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Experience our current live marketplace with 3,000+ active vendors. 
                      Start selling or shopping right now on our proven platform.
                    </p>
                    <div className="flex items-center text-gray-600 text-sm font-medium">
                      <span>Try it now</span>
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-6 py-4">
              <p className="text-xs text-gray-500 text-center">
                Both options are free to use. Choose what works best for you!
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default DownloadChoiceModal
