"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Eye,
  Rocket,
  Users,
  Zap,
  Globe,
  Target,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

const FutureVisionSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const futureGoals = [
    {
      icon: Users,
      title: "5 Million MSMEs",
      description: "Empower 5 million Micro, Small, and Medium Enterprises across Africa by 2029",
      timeframe: "2029 Goal",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Pan-African Dominance",
      description: "Become the leading digital platform serving all 54 African countries",
      timeframe: "2025-2026",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "AI-Powered Innovation",
      description: "Launch cutting-edge AI solutions for predictive analytics and automation",
      timeframe: "2025",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Rocket,
      title: "Global Expansion",
      description: "Extend our innovative solutions beyond Africa to emerging markets worldwide",
      timeframe: "2027-2029",
      color: "from-orange-500 to-red-500"
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
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-800 text-sm font-medium mb-6">
            <Eye className="w-4 h-4 mr-2" />
            Looking Ahead
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Vision</span> for Tomorrow
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're just getting started. Here's where we're heading and the impact we plan to create in the coming years.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {futureGoals.map((goal, index) => (
            <motion.div
              key={goal.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 bg-gradient-to-r ${goal.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <goal.icon className="w-7 h-7 text-white" />
                </div>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                  {goal.timeframe}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{goal.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{goal.description}</p>
              <div className="flex items-center text-orange-600 text-sm font-medium group-hover:text-orange-700">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 sm:p-12 text-white text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Be Part of Our Future</h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join us in building Africa's digital future. Whether you're an entrepreneur, developer, or partner,
            there's a place for you in our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/careers"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Join Our Team
            </Link>
            <Link
              href="/partners"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Become a Partner
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FutureVisionSection
