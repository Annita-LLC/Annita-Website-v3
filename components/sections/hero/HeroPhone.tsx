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
        initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          rotateY: [0, 5, -5, 0],
          y: [0, -10, 0]
        }}
        transition={{ 
          duration: 2, 
          delay: 0.3,
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          },
          rotateY: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        className="relative"
        style={{ perspective: "1000px" }}
      >
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-[3rem] blur-3xl"></div>
        
        {/* Phone Frame */}
        <motion.div 
          className="relative w-80 h-[600px] mx-auto"
          animate={{
            rotateZ: [0, 2, -2, 0],
            scale: [1, 1.02, 1]
          }}
          transition={{
            rotateZ: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            },
            scale: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          {/* Phone Body */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-[3rem] shadow-2xl border-8 border-gray-700"
            animate={{
              boxShadow: [
                "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                "0 35px 60px -12px rgba(0, 0, 0, 0.35)",
                "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
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
                <motion.div 
                  className="relative w-full h-full"
                  animate={{
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
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
                        animate={{ 
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4"
                      >
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        >
                          <Play className="w-8 h-8" />
                        </motion.div>
                      </motion.div>
                      <motion.div
                        animate={{ opacity: [0.8, 1, 0.8] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <div className="text-lg font-semibold mb-2">Watch Demo</div>
                        <div className="text-sm opacity-90">See Annita in action</div>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full opacity-60"></div>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            animate={{ 
              y: [-15, 15, -15],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-5 h-5 text-white" />
            </motion.div>
          </motion.div>
          
          <motion.div
            animate={{ 
              y: [15, -15, 15],
              scale: [1, 1.3, 1],
              rotate: [0, -180, -360]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
          >
            <motion.div
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-white" />
            </motion.div>
          </motion.div>

          {/* Additional floating elements */}
          <motion.div
            animate={{ 
              x: [-8, 8, -8],
              y: [-8, 8, -8],
              scale: [1, 1.5, 1]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 -right-3 w-5 h-5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-80"
          />
          
          <motion.div
            animate={{ 
              x: [8, -8, 8],
              y: [8, -8, 8],
              scale: [1, 1.3, 1]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/3 -left-3 w-4 h-4 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full opacity-80"
          />

          {/* More floating elements */}
          <motion.div
            animate={{ 
              x: [-10, 10, -10],
              y: [10, -10, 10],
              rotate: [0, 360]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -left-4 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-70"
          />
          
          <motion.div
            animate={{ 
              x: [10, -10, 10],
              y: [-10, 10, -10],
              scale: [1, 1.4, 1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 -right-4 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-70"
          />
        </motion.div>
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
