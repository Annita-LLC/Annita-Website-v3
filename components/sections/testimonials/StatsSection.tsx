"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Users, Video, MessageSquare } from 'lucide-react'

const StatsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    {
      label: 'Total Reviews',
      value: '10,000+',
      icon: MessageSquare
    },
    {
      label: 'Average Rating',
      value: '4.9/5',
      icon: Star
    },
    {
      label: 'Video Testimonials',
      value: '500+',
      icon: Video
    },
    {
      label: 'Happy Customers',
      value: '50,000+',
      icon: Users
    }
  ]

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-gray-200">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-2xl mb-4">
                <stat.icon className="w-6 h-6 text-orange-600" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-gray-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
