"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Heart, 
  Globe, 
  Shield, 
  Zap
} from 'lucide-react'

const ValuesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const values = [
    {
      icon: Heart,
      title: 'Empowerment',
      description: 'We believe in empowering every African business to reach their full potential',
      color: 'from-red-500 to-pink-500',
      gradient: 'bg-gradient-to-br from-red-50 to-pink-50'
    },
    {
      icon: Globe,
      title: 'Inclusion',
      description: 'Making digital tools accessible to underserved communities across Africa',
      color: 'from-blue-500 to-cyan-500',
      gradient: 'bg-gradient-to-br from-blue-50 to-cyan-50'
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'Building secure, reliable platforms that businesses can depend on',
      color: 'from-green-500 to-emerald-500',
      gradient: 'bg-gradient-to-br from-green-50 to-emerald-50'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Continuously innovating to solve Africa\'s unique challenges',
      color: 'from-purple-500 to-pink-500',
      gradient: 'bg-gradient-to-br from-purple-50 to-pink-50'
    }
  ]

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-orange-600 mb-4 sm:mb-6">
            Our Core Values
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            These values guide everything we do, from product development to customer service, 
            ensuring we stay true to our mission of empowering Africa's MSMEs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className={`${value.gradient} rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center group hover:shadow-large transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${value.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-orange-600 mb-2 sm:mb-3">{value.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValuesSection
