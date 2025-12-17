"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Users,
  Globe,
  TrendingUp,
  Award,
  DollarSign,
  Target,
  Zap,
  Heart
} from 'lucide-react'

const ImpactSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const impactMetrics = [
    {
      icon: Users,
      value: "3,000+",
      label: "Active Vendors",
      description: "Entrepreneurs actively using our platform",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      value: "54",
      label: "African Countries",
      description: "Pan-African market coverage",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: DollarSign,
      value: "$2M+",
      label: "Economic Impact",
      description: "Value created for African economy",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Target,
      value: "5M",
      label: "MSME Target",
      description: "Businesses to empower by 2029",
      color: "from-orange-500 to-red-500"
    }
  ]

  const achievements = [
    {
      title: "Orange Social Venture Prize Winner",
      description: "1st Place in Liberia's National Grand Prize, receiving $3,000 USD grant for platform development",
      year: "2024",
      category: "Innovation Award"
    },
    {
      title: "African Union Fellowship",
      description: "Selected among 50 top innovative businesses for the EAN MSME Fellowship Programme",
      year: "2024",
      category: "Business Excellence"
    },
    {
      title: "Mansa Platform Partnership",
      description: "Validated by Afreximbank's Mansa as a trusted cross-border trade partner",
      year: "2025",
      category: "Trust & Credibility"
    },
    {
      title: "SMART Liberia Winner",
      description: "9th Place winner receiving L$75,000 prize for business innovation and social impact",
      year: "2024",
      category: "Social Impact"
    }
  ]

  const futureGoals = [
    {
      icon: TrendingUp,
      title: "300% Business Growth",
      description: "Average growth rate for our MSME partners",
      timeframe: "Current"
    },
    {
      icon: Users,
      title: "5 Million MSMEs",
      description: "Empower 5 million businesses across Africa",
      timeframe: "By 2029"
    },
    {
      icon: Zap,
      title: "AI-Powered Solutions",
      description: "Launch comprehensive AI tools and automation",
      timeframe: "2025-2026"
    },
    {
      icon: Globe,
      title: "Global Expansion",
      description: "Extend innovative solutions beyond Africa",
      timeframe: "2027-2029"
    }
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-200 text-sm font-semibold mb-6">
              Our Impact
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Transforming Africa,{'\n'}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                One Business at a Time
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Every transaction, every connection, every success story contributes to Africa's digital transformation.
              Here's the measurable impact we're creating.
            </p>
          </motion.div>

          {/* Impact Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${metric.color} mb-4 shadow-lg`}>
                  <metric.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold mb-2">{metric.value}</div>
                <div className="text-lg font-semibold text-white mb-1">{metric.label}</div>
                <div className="text-sm text-blue-200">{metric.description}</div>
              </motion.div>
            ))}
          </div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                Recognition & Achievements
              </h3>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                Our commitment to innovation and impact has earned us recognition from
                prestigious institutions across Africa and beyond.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${index === 0 ? 'from-orange-500 to-red-500' : index === 1 ? 'from-blue-500 to-purple-500' : index === 2 ? 'from-green-500 to-emerald-500' : 'from-cyan-500 to-blue-500'}`}>
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-blue-300">{achievement.category}</div>
                      <div className="text-lg font-bold text-white">{achievement.year}</div>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
                  <p className="text-sm text-blue-100 leading-relaxed">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Future Goals */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                Our Vision for Tomorrow
              </h3>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                We're just getting started. Here's where we're heading and the impact
                we plan to create in the coming years.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {futureGoals.map((goal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center"
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${index === 0 ? 'from-green-500 to-emerald-500' : index === 1 ? 'from-blue-500 to-cyan-500' : index === 2 ? 'from-purple-500 to-pink-500' : 'from-orange-500 to-red-500'} mx-auto mb-4 shadow-lg`}>
                    <goal.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{goal.title}</h4>
                  <p className="text-sm text-blue-200 mb-3">{goal.description}</p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold">
                    {goal.timeframe}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <Heart className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Join Our Mission</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Every business that chooses Annita contributes to Africa's digital transformation.
                Be part of this movement and help us reach our 5 million MSME goal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300">
                  Start Your Journey
                </button>
                <button className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl font-semibold text-white shadow-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ImpactSection
