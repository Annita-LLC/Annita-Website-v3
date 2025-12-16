'use client'

import { motion } from 'framer-motion'
import { Brain, Star, Eye } from 'lucide-react'
import Button from '@/components/ui/Button'

interface HeroSectionProps {
  onWaitlistOpen: () => void
}

const HeroSection = ({ onWaitlistOpen }: HeroSectionProps) => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
              <Brain className="w-16 h-16 text-white" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Discover AI-Powered Business Intelligence
          </h1>
          <p className="text-xl sm:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Transform your business with artificial intelligence that understands African markets,
            speaks your language, and works around your schedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={onWaitlistOpen}
              variant="white"
              size="lg"
              icon={Star}
              className="text-lg font-bold"
            >
              Join the Waitlist
            </Button>
            <Button
              variant="glass"
              size="lg"
              icon={Eye}
              className="text-lg font-bold backdrop-blur-xl"
            >
              See AI in Action
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection





