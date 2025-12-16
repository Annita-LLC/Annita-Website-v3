'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Star, Globe } from 'lucide-react'
import Button from '@/components/ui/Button'

interface CTASectionProps {
  onWaitlistOpen: () => void
}

const CTASection = ({ onWaitlistOpen }: CTASectionProps) => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
              <Lightbulb className="w-16 h-16 text-white" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join the AI revolution and be among the first to experience intelligent business automation
            designed specifically for African markets.
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
              icon={Globe}
              className="text-lg font-bold backdrop-blur-xl"
              onClick={() => window.open('https://annita.company.site/products', '_blank')}
            >
              Try V1.0 Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection





