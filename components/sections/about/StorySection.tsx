"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Target,
  Lightbulb,
  Rocket,
  Users,
  Award,
  Globe,
  TrendingUp,
  Shield
} from 'lucide-react'

const StorySection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const storyPoints = [
    {
      icon: Target,
      title: "The Vision Born",
      description: "Founded in 2021, Annita emerged from a simple yet powerful insight: Africa's MSMEs needed more than fragmented solutions. They needed a comprehensive digital ecosystem that could scale with their ambitions.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Lightbulb,
      title: "Market Recognition",
      description: "Our innovative approach quickly caught attention. Winning the prestigious Orange Social Venture Prize and being selected among 50 top African businesses by the African Union validated our vision.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Rocket,
      title: "Scaling Across Continents",
      description: "From our Liberian roots, we've expanded to serve MSMEs across 54 African countries, building the most comprehensive digital platform the continent has ever seen.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Trust & Security First",
      description: "Every feature we build prioritizes security, reliability, and user trust. Our escrow settlements, secure payments, and comprehensive support systems reflect our commitment to excellence.",
      color: "from-green-500 to-emerald-500"
    }
  ]

  const differentiators = [
    {
      icon: Globe,
      title: "Pan-African Coverage",
      description: "54 countries, one platform. We're the only truly continent-wide digital solution for African businesses."
    },
    {
      icon: Users,
      title: "MSME-Centric Design",
      description: "Built specifically for micro, small, and medium enterprises, not adapted enterprise solutions."
    },
    {
      icon: Award,
      title: "Award-Winning Innovation",
      description: "Recognized by global institutions for our groundbreaking approach to African digital transformation."
    },
    {
      icon: TrendingUp,
      title: "Scalable Technology",
      description: "Our platform grows with your business, from startup to multinational operations."
    }
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
              Our Story
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              More Than a Platform.{'\n'}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                A Movement.
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're not just building technology. We're catalyzing Africa's digital revolution,
              empowering millions of entrepreneurs to compete globally and drive continental growth.
            </p>
          </motion.div>

          {/* Story Timeline */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {storyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-blue-200">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${point.color} mb-6 shadow-lg`}>
                      <point.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{point.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* What Makes Us Different */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-8 sm:p-12 lg:p-16 text-white"
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                What Makes Annita Different?
              </h3>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                We're not just another digital platform. We're Africa's comprehensive solution,
                designed by Africans for African businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {differentiators.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                    <item.icon className="w-8 h-8 text-blue-300" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-white">{item.title}</h4>
                  <p className="text-sm text-blue-100 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg border border-gray-100">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  Our Mission: 5 Million MSMEs by 2029
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  We exist to democratize digital commerce across Africa. By 2029, we aim to empower
                  5 million micro, small, and medium enterprises with the tools, technology, and
                  support they need to thrive in the global economy.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Innovation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Inclusion</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Growth</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Impact</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default StorySection
