'use client'

import { useRef, memo } from 'react'
import { motion, useInView } from 'framer-motion'
import MarketplaceFeature from './features/MarketplaceFeature'
import AnnitaPayFeature from './features/AnnitaPayFeature'
import LogisticsFeature from './features/LogisticsFeature'
import ConnectFeature from './features/ConnectFeature'
import AIFeature from './features/AIFeature'

const FeaturesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "0px" })

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-orange-600 mb-4 sm:mb-6">
            Complete <span className="text-orange-500">African Business Ecosystem</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
            Built for African businesses. Cross-border trade, institutional backing, and seamless integration. 
            Connect with authentic African suppliers and grow your business.
          </p>
        </motion.div>

        {/* Main Features */}
        <div className="space-y-12 mb-20">
          <MarketplaceFeature />
          <AnnitaPayFeature />
          <LogisticsFeature />
          <ConnectFeature />
          <AIFeature />
        </div>
      </div>
    </section>
  )
}

export default memo(FeaturesSection)
