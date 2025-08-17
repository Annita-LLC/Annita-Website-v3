'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { 
  Play, 
  Pause, 
  ChevronLeft, 
  ChevronRight,
  Zap,
  Sparkles,
  Activity,
  Target,
  Heart,
  Eye
} from 'lucide-react'

interface HeroPhoneProps {
  currentApp: number
  apps: Array<{ name: string; color: string }>
  isPlaying: boolean
  onStartDemo: () => void
  onStopDemo: () => void
}

const HeroPhone = ({ currentApp, apps, isPlaying, onStartDemo, onStopDemo }: HeroPhoneProps) => {
  const [isHovered, setIsHovered] = useState(false)

  // Real app screenshots - you can replace these with actual app screenshots
  const appScreenshots = [
    '/images/apps/annitapay-screenshot.png', // AnnitaPay app screenshot
    '/images/apps/marketplace-screenshot.png', // Marketplace app screenshot
    '/images/apps/ai-assistant-screenshot.png', // AI Assistant app screenshot
    '/images/apps/logistics-screenshot.png' // Logistics app screenshot
  ]

  // Fallback colors for each app if images don't load
  const appColors = [
    'from-green-500 to-emerald-500',
    'from-blue-500 to-cyan-500', 
    'from-purple-500 to-pink-500',
    'from-orange-500 to-red-500'
  ]

  const renderAppScreen = (index: number) => {
    const app = apps[index]
    const screenshot = appScreenshots[index]
    const fallbackColor = appColors[index]

    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full relative rounded-3xl overflow-hidden"
      >
        {/* Try to load real screenshot, fallback to gradient */}
        <div className={`w-full h-full bg-gradient-to-br ${fallbackColor} relative`}>
          {/* App Header */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-white/90 backdrop-blur-sm z-10 flex items-center justify-between px-4">
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 bg-gradient-to-br ${fallbackColor} rounded-lg flex items-center justify-center`}>
                <span className="text-white text-xs font-bold">{app.name.charAt(0)}</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">{app.name}</div>
                <div className="text-xs text-gray-500">Active</div>
              </div>
            </div>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            </div>
          </div>

          {/* App Content */}
          <div className="pt-16 px-4 pb-4 h-full">
            {/* App-specific content */}
            {index === 0 && (
              <div className="space-y-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-white">
                  <div className="text-sm opacity-90">Available Balance</div>
                  <div className="text-2xl font-bold">$1,250.00</div>
                  <div className="text-xs opacity-90">Secure • Encrypted</div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center text-white">
                    <div className="text-sm">Send</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center text-white">
                    <div className="text-sm">Receive</div>
                  </div>
                </div>
              </div>
            )}

            {index === 1 && (
              <div className="space-y-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-white text-sm mb-2">Featured Products</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white/30 rounded-lg p-2">
                      <div className="w-full h-16 bg-white/50 rounded mb-1"></div>
                      <div className="h-2 bg-white/50 rounded w-3/4 mb-1"></div>
                      <div className="h-1 bg-white/50 rounded w-1/2"></div>
                    </div>
                    <div className="bg-white/30 rounded-lg p-2">
                      <div className="w-full h-16 bg-white/50 rounded mb-1"></div>
                      <div className="h-2 bg-white/50 rounded w-3/4 mb-1"></div>
                      <div className="h-1 bg-white/50 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {index === 2 && (
              <div className="space-y-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-sm font-medium">AI Assistant</span>
                  </div>
                  <div className="text-sm opacity-90 mb-3">How can I help you today?</div>
                  <div className="space-y-2">
                    <div className="bg-white/20 rounded-lg p-2 text-xs">
                      Analyze sales data
                    </div>
                    <div className="bg-white/20 rounded-lg p-2 text-xs">
                      Optimize inventory
                    </div>
                    <div className="bg-white/20 rounded-lg p-2 text-xs">
                      Generate reports
                    </div>
                  </div>
                </div>
              </div>
            )}

            {index === 3 && (
              <div className="space-y-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-white">
                  <div className="flex items-center space-x-2 mb-3">
                    <Activity className="w-4 h-4" />
                    <span className="text-sm font-medium">Active Delivery</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="opacity-90">Order #12345</span>
                      <span className="text-green-300">In Transit</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-white h-2 rounded-full w-3/4"></div>
                    </div>
                    <div className="text-xs opacity-90">Estimated: 2 hours</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="relative">
      {/* Phone Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Phone Body */}
        <div className="relative w-80 h-[600px] mx-auto">
          {/* Phone Frame */}
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

              {/* App Screen */}
              <div className="absolute top-8 left-0 right-0 bottom-0">
                <AnimatePresence mode="wait">
                  {renderAppScreen(currentApp)}
                </AnimatePresence>
              </div>
            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full opacity-60"></div>
          </div>

          {/* Floating Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex items-center space-x-4"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onStartDemo()}
              className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                isPlaying 
                  ? 'bg-red-500 hover:bg-red-600 text-white' 
                  : 'bg-orange-500 hover:bg-orange-600 text-white'
              }`}
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </motion.button>

            <div className="flex space-x-2">
              {apps.map((_, index) => (
                <motion.div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentApp === index ? 'bg-orange-500 scale-125' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </motion.div>
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
      </motion.div>

      {/* App Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-8 flex justify-center"
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg">
          <div className="flex space-x-1">
            {apps.map((app, index) => (
              <motion.button
                key={app.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onStopDemo()}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  currentApp === index
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                {app.name}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default HeroPhone
