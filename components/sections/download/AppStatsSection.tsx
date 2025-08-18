"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Download, 
  Star, 
  Globe, 
  Clock,
  Users,
  TrendingUp
} from 'lucide-react'

const AppStatsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const appStats = [
    { 
      number: '5M+', 
      label: 'Downloads',
      icon: Download,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      number: '4.8', 
      label: 'App Store Rating',
      icon: Star,
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      number: '50+', 
      label: 'Countries',
      icon: Globe,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      number: '24/7', 
      label: 'Support',
      icon: Clock,
      color: 'from-purple-500 to-pink-500'
    }
  ]

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-orange-600 mb-4 sm:mb-6">
            Trusted by Millions
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Join millions of users across Africa who trust Annita for their daily digital needs
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {appStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="text-center group"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AppStatsSection
