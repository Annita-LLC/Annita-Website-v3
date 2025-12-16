"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Users,
  Building,
  Globe,
  TrendingUp,
  Award,
  DollarSign
} from 'lucide-react'

const ImpactSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const impactStats = [
    {
      icon: Users,
      value: "3,000+",
      label: "Active Vendors",
      description: "Entrepreneurs using our platform",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Building,
      value: "500+",
      label: "MSMEs Empowered",
      description: "Businesses transformed digitally",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Globe,
      value: "54",
      label: "African Countries",
      description: "Market presence across the continent",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      value: "300%",
      label: "Business Growth",
      description: "Average increase for our users",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Award,
      value: "5+",
      label: "Awards Won",
      description: "Recognition for innovation",
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: DollarSign,
      value: "$2M+",
      label: "Economic Impact",
      description: "Value created for African economy",
      color: "from-indigo-500 to-purple-500"
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Impact</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Since our launch, we've been transforming African businesses and creating lasting economic impact across the continent.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impactStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{stat.label}</h3>
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 sm:p-12 text-white text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Join Our Growing Community</h3>
          <p className="text-orange-100 text-lg mb-6 max-w-2xl mx-auto">
            Every day, more African businesses discover the power of digital transformation through Annita.
            Be part of this movement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ImpactSection
