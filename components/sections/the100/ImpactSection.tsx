"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { TrendingUp, Users, DollarSign, Target, Award, Globe, Heart, Zap } from 'lucide-react'

const ImpactSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const plannedImpact = [
    {
      icon: Users,
      title: "Youth Empowerment",
      description: "100 Liberian youths trained annually",
      color: "blue"
    },
    {
      icon: DollarSign,
      title: "Economic Impact",
      description: "Mini-grants and business funding",
      color: "green"
    },
    {
      icon: Target,
      title: "Skill Development",
      description: "Business and entrepreneurship training",
      color: "orange"
    },
    {
      icon: Globe,
      title: "Community Growth",
      description: "Local business development",
      color: "purple"
    }
  ]

  const expectedOutcomes = [
    {
      icon: TrendingUp,
      title: "Business Creation",
      description: "New startups and businesses launched by participants"
    },
    {
      icon: Award,
      title: "Employment Generation",
      description: "Job creation through participant ventures"
    },
    {
      icon: Heart,
      title: "Social Impact",
      description: "Positive community transformation"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "New ideas and solutions for Liberia"
    }
  ]

  return (
    <section className="py-16 sm:py-20" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Program <span className="text-orange-600">Impact</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The 100 program is designed to create lasting positive change in Liberia's youth 
              development and economic growth. While we're preparing to launch, here's the impact 
              we're committed to making.
            </p>
          </motion.div>

          {/* Coming Soon Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-12 rounded-2xl border border-orange-200 text-center">
              <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Impact Data Coming Soon</h3>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6">
                We're excited to share the real impact of The 100 program once we launch! 
                Our program hasn't started yet, but we're committed to tracking and sharing 
                meaningful metrics that demonstrate our success in empowering Liberian youth.
              </p>
              <div className="mt-6 inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold">
                <span className="animate-pulse mr-2">●</span>
                Launching Next Year - Impact Tracking Begins!
              </div>
            </div>
          </motion.div>

          {/* Planned Impact Areas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
              Our Planned Impact Areas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {plannedImpact.map((impact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center"
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                    impact.color === 'blue' ? 'bg-blue-600' :
                    impact.color === 'green' ? 'bg-green-600' :
                    impact.color === 'orange' ? 'bg-orange-600' :
                    'bg-purple-600'
                  }`}>
                    <impact.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{impact.title}</h4>
                  <p className="text-gray-600 text-sm">{impact.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Expected Outcomes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-16"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
              Expected Outcomes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {expectedOutcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 1.0 + index * 0.2 }}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <outcome.icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{outcome.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{outcome.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Impact Measurement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Committed to Measuring Impact
            </h3>
            <p className="text-orange-100 mb-6 max-w-3xl mx-auto">
              We believe in transparency and accountability. Once The 100 program launches, 
              we'll track key metrics including participant success rates, business creation, 
              employment generation, and community impact to demonstrate our program's effectiveness.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Participant Success</h4>
                <p className="text-sm text-orange-100">Tracking career advancement and business creation</p>
              </div>
              <div className="bg-white/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Economic Impact</h4>
                <p className="text-sm text-orange-100">Measuring job creation and revenue generation</p>
              </div>
              <div className="bg-white/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Community Change</h4>
                <p className="text-sm text-orange-100">Assessing social and community transformation</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ImpactSection
