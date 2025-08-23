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
    <div className="relative w-full max-w-[10rem] sm:max-w-[12rem] md:max-w-[14rem] lg:max-w-[16rem] xl:max-w-[18rem] mx-auto">
      {/* Phone Frame Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          rotateY: [0, 5, -5, 0],
          y: [0, -8, 0]
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
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] blur-xl sm:blur-2xl"></div>
        
        {/* Phone Frame */}
        <motion.div 
          className="relative w-40 h-[300px] sm:w-48 sm:h-[360px] md:w-56 md:h-[420px] lg:w-64 lg:h-[480px] mx-auto"
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
            className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-4 sm:border-6 md:border-8 border-gray-700"
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
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-4 sm:w-24 sm:h-5 md:w-32 md:h-6 bg-gray-900 rounded-b-xl sm:rounded-b-2xl"></div>
            
            {/* Screen */}
            <div className="absolute inset-1 sm:inset-1.5 md:inset-2 bg-black rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] overflow-hidden">
              {/* Status Bar */}
              <div className="absolute top-0 left-0 right-0 h-6 sm:h-7 md:h-8 bg-black z-20 flex items-center justify-between px-3 sm:px-4 md:px-6 text-white text-xs">
                <div className="text-xs sm:text-sm">9:41</div>
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-1.5 sm:w-4 sm:h-2 border border-white rounded-sm">
                    <div className="w-2 h-0.5 sm:w-3 sm:h-1 bg-white rounded-sm m-0.5"></div>
                  </div>
                  <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white rounded-full"></div>
                </div>
              </div>

              {/* App Screen with Image */}
              <div className="absolute top-6 sm:top-7 md:top-8 left-0 right-0 bottom-0">
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
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  
                  {/* Floating Content */}
                  <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-3 md:p-4">
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
                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4"
                      >
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        >
                          <Play className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                        </motion.div>
                      </motion.div>
                      <motion.div
                        animate={{ opacity: [0.8, 1, 0.8] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <div className="text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2">Watch Demo</div>
                        <div className="text-xs sm:text-sm opacity-90">See Annita in action</div>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-1 sm:bottom-1.5 md:bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-0.5 sm:w-24 sm:h-0.5 md:w-32 md:h-1 bg-white rounded-full opacity-60"></div>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            animate={{ 
              y: [-15, 15, -15],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 md:-top-6 md:-right-6 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
            </motion.div>
          </motion.div>
          
          <motion.div
            animate={{ 
              y: [15, -15, 15],
              scale: [1, 1.3, 1],
              rotate: [0, -180, -360]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 md:-bottom-6 md:-left-6 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
          >
            <motion.div
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 text-white" />
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
            className="absolute top-1/3 -right-2 sm:-right-2.5 md:-right-3 w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-80"
          />
          
          <motion.div
            animate={{ 
              x: [8, -8, 8],
              y: [8, -8, 8],
              scale: [1, 1.3, 1]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/3 -left-2 sm:-left-2.5 md:-left-3 w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full opacity-80"
          />

          {/* More floating elements */}
          <motion.div
            animate={{ 
              x: [-10, 10, -10],
              y: [10, -10, 10],
              rotate: [0, 360]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -left-3 sm:-left-3.5 md:-left-4 w-2.5 h-2.5 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-70"
          />
          
          <motion.div
            animate={{ 
              x: [10, -10, 10],
              y: [-10, 10, -10],
              scale: [1, 1.4, 1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 -right-3 sm:-right-3.5 md:-right-4 w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-70"
          />
        </motion.div>
      </motion.div>


    </div>
  )
}

export default HeroPhone
