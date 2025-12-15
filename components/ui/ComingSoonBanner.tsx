"use client"

import { useState, useEffect } from 'react'
import { X, Calendar, Clock } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const ComingSoonBanner = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 10000) // 10 seconds

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white shadow-lg"
        >
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-lg">Coming Soon 2026</span>
                  <span className="text-blue-100">|</span>
                  <span className="text-blue-100">Youth Empowerment Programs</span>
                </div>
              </div>
              
              <button
                onClick={() => setIsVisible(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ComingSoonBanner
