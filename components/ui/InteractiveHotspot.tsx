'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Play, Info, ExternalLink } from 'lucide-react'

interface HotspotData {
  id: string
  x: number // Percentage from left
  y: number // Percentage from top
  title: string
  description: string
  features?: string[]
  videoUrl?: string
  externalUrl?: string
  icon?: React.ComponentType<{ className?: string }>
}

interface InteractiveHotspotProps {
  hotspots: HotspotData[]
  imageSrc: string
  imageAlt: string
  className?: string
}

export default function InteractiveHotspot({
  hotspots,
  imageSrc,
  imageAlt,
  className = ''
}: InteractiveHotspotProps) {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null)
  const [hoveredHotspot, setHoveredHotspot] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleHotspotClick = (hotspotId: string) => {
    setActiveHotspot(activeHotspot === hotspotId ? null : hotspotId)
  }

  const handleExternalClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className={`relative ${className}`}>
      {/* Main Image */}
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
        
        {/* Hotspots */}
        {hotspots.map((hotspot) => (
          <div key={hotspot.id}>
            {/* Hotspot Button */}
            <motion.button
              className={`absolute w-8 h-8 bg-orange-500 hover:bg-orange-600 rounded-full shadow-lg flex items-center justify-center text-white transition-all duration-300 ${
                hoveredHotspot === hotspot.id ? 'scale-125' : 'scale-100'
              }`}
              style={{
                left: `${hotspot.x}%`,
                top: `${hotspot.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              onClick={() => handleHotspotClick(hotspot.id)}
              onMouseEnter={() => setHoveredHotspot(hotspot.id)}
              onMouseLeave={() => setHoveredHotspot(null)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {hotspot.icon ? (
                <hotspot.icon className="w-4 h-4" />
              ) : (
                <Info className="w-4 h-4" />
              )}
            </motion.button>

            {/* Pulse Animation */}
            <motion.div
              className="absolute w-8 h-8 bg-orange-500 rounded-full opacity-30"
              style={{
                left: `${hotspot.x}%`,
                top: `${hotspot.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Tooltip on Hover */}
            <AnimatePresence>
              {hoveredHotspot === hotspot.id && activeHotspot !== hotspot.id && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 10 }}
                  className="absolute bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 border border-gray-200 dark:border-gray-700 z-10 max-w-xs"
                  style={{
                    left: `${hotspot.x}%`,
                    top: `${hotspot.y}%`,
                    transform: 'translate(-50%, calc(-100% - 20px))'
                  }}
                >
                  <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                    {hotspot.title}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">
                    {hotspot.description}
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                    <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white dark:border-t-gray-800"></div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Active Hotspot Modal */}
      <AnimatePresence>
        {activeHotspot && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setActiveHotspot(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              {(() => {
                const hotspot = hotspots.find(h => h.id === activeHotspot)
                if (!hotspot) return null

                return (
                  <>
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                      <div className="flex items-center space-x-3">
                        {hotspot.icon && (
                          <div className="p-2 bg-orange-100 dark:bg-orange-900/20 rounded-lg">
                            <hotspot.icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                          </div>
                        )}
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {hotspot.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Interactive Feature Demo
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => setActiveHotspot(null)}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                      >
                        <X className="w-5 h-5 text-gray-500" />
                      </button>
                    </div>

                    {/* Content */}
                    <div className="p-6 max-h-96 overflow-y-auto">
                      <p className="text-gray-700 dark:text-gray-300 mb-6">
                        {hotspot.description}
                      </p>

                      {hotspot.features && (
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            Key Features
                          </h4>
                          <ul className="space-y-2">
                            {hotspot.features.map((feature, index) => (
                              <li key={index} className="flex items-start space-x-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Video or External Link */}
                      {hotspot.videoUrl && (
                        <div className="mb-6">
                          <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                            <button className="flex items-center space-x-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors">
                              <Play className="w-5 h-5" />
                              <span>Watch Demo Video</span>
                            </button>
                          </div>
                        </div>
                      )}

                      {hotspot.externalUrl && (
                        <button
                          onClick={() => handleExternalClick(hotspot.externalUrl!)}
                          className="flex items-center space-x-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                          <span>Try This Feature</span>
                        </button>
                      )}
                    </div>
                  </>
                )
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Pre-configured hotspot data for demo images
export const demoHotspots: HotspotData[] = [
  {
    id: 'dashboard-analytics',
    x: 20,
    y: 15,
    title: 'Real-time Analytics',
    description: 'Monitor your business performance with live data and insights.',
    features: [
      'Live sales tracking',
      'Customer behavior analysis',
      'Revenue forecasting',
      'Performance metrics'
    ],
    icon: Info
  },
  {
    id: 'payment-system',
    x: 75,
    y: 30,
    title: 'Secure Payment System',
    description: 'Process payments securely with our built-in escrow system.',
    features: [
      'Multiple payment methods',
      'Escrow protection',
      'Instant settlements',
      'Fraud detection'
    ],
    icon: Info
  },
  {
    id: 'ai-assistant',
    x: 50,
    y: 60,
    title: 'AI Business Assistant',
    description: 'Get intelligent recommendations and automate business tasks.',
    features: [
      'Smart recommendations',
      'Automated workflows',
      'Predictive analytics',
      'Natural language processing'
    ],
    icon: Info
  },
  {
    id: 'inventory-management',
    x: 25,
    y: 80,
    title: 'Inventory Management',
    description: 'Track and manage your products with smart inventory tools.',
    features: [
      'Real-time stock levels',
      'Automated reordering',
      'Barcode scanning',
      'Multi-location support'
    ],
    icon: Info
  }
]
