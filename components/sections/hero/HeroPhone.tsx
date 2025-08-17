'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  Zap,
  Sparkles,
  Activity,
  Target,
  Heart,
  Eye,
  Play,
  ArrowRight
} from 'lucide-react'

const HeroPhone = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Phone Frame Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-[3rem] blur-3xl"></div>
        
        {/* Phone Frame */}
        <div className="relative w-80 h-[600px] mx-auto">
          {/* Phone Body */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-[3rem] shadow-2xl border-8 border-gray-700">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl"></div>
            
            {/* Screen */}
            <div className="absolute inset-2 bg-black rounded-[2.5rem] overflow-hidden">
              {/* Status Bar */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-black z-20 flex items-center justify-between px-6 text-white text-xs">
                <div>9:41</div>
                <div className="flex items-center space-x-1">
                  <div className="w-4 h-2 border border-white rounded-sm">
                    <div className="w-3 h-1 bg-white rounded-sm m-0.5"></div>
                  </div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
              </div>

              {/* App Screen with Image */}
              <div className="absolute top-8 left-0 right-0 bottom-0">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/blog/OurServices03.webp"
                    alt="Annita Digital Platform Services"
                    fill
                    className="object-cover"
                    priority
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  
                  {/* Floating Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="text-center text-white"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4"
                      >
                        <Play className="w-8 h-8" />
                      </motion.div>
                      <div className="text-lg font-semibold mb-2">Watch Demo</div>
                      <div className="text-sm opacity-90">See Annita in action</div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full opacity-60"></div>
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{ 
              y: [-10, 10, -10],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center shadow-lg"
          >
            <Zap className="w-4 h-4 text-white" />
          </motion.div>
          
          <motion.div
            animate={{ 
              y: [10, -10, 10],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-lg"
          >
            <Sparkles className="w-3 h-3 text-white" />
          </motion.div>

          {/* Additional floating elements */}
          <motion.div
            animate={{ 
              x: [-5, 5, -5],
              y: [-5, 5, -5]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 -right-2 w-4 h-4 bg-blue-400 rounded-full opacity-60"
          />
          
          <motion.div
            animate={{ 
              x: [5, -5, 5],
              y: [5, -5, 5]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/2 -left-2 w-3 h-3 bg-pink-400 rounded-full opacity-60"
          />
        </div>
      </motion.div>

      {/* Feature Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
      >
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <Target className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">AI-Powered</div>
              <div className="text-xs text-white/70">Smart Solutions</div>
            </div>
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
              <Activity className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Real-time</div>
              <div className="text-xs text-white/70">Live Updates</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default HeroPhone
