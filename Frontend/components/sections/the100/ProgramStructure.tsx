"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, Clock, Users, BookOpen, Target, Award } from 'lucide-react'

const ProgramStructure = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const phases = [
    {
      phase: "Phase 1",
      title: "Foundation & Assessment",
      duration: "Month 1",
      description: "Orientation, skill assessment, and foundational business concepts",
      activities: [
        "Program orientation and team building",
        "Skills assessment and goal setting",
        "Introduction to business fundamentals",
        "Personal development workshops"
      ]
    },
    {
      phase: "Phase 2",
      title: "Core Skills Development",
      duration: "Months 2-3",
      description: "Intensive training in business skills, marketing, and digital tools",
      activities: [
        "Business strategy and planning",
        "Digital marketing and social media",
        "Financial management and budgeting",
        "Customer service and communication"
      ]
    },
    {
      phase: "Phase 3",
      title: "Practical Application",
      duration: "Months 4-5",
      description: "Hands-on projects and internship opportunities",
      activities: [
        "Real-world business projects",
        "Internship at Annita LLC or partners",
        "Mentorship sessions",
        "Business idea development"
      ]
    },
    {
      phase: "Phase 4",
      title: "Launch & Support",
      duration: "Month 6",
      description: "Business launch support and ongoing mentorship",
      activities: [
        "Business plan finalization",
        "Mini-grant application process",
        "Network building events",
        "Graduation and alumni program"
      ]
    }
  ]

  const sectors = [
    {
      name: "Technology & Digital",
      description: "Software development, digital marketing, e-commerce",
      icon: "💻"
    },
    {
      name: "Agriculture & Food",
      description: "Farming, food processing, agricultural technology",
      icon: "🌾"
    },
    {
      name: "Healthcare & Wellness",
      description: "Health services, wellness products, medical technology",
      icon: "🏥"
    },
    {
      name: "Education & Training",
      description: "Educational services, online learning, skill development",
      icon: "📚"
    },
    {
      name: "Manufacturing & Trade",
      description: "Product manufacturing, import/export, retail",
      icon: "🏭"
    },
    {
      name: "Creative & Media",
      description: "Content creation, design, entertainment, media",
      icon: "🎨"
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
              Program <span className="text-orange-600">Structure</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A comprehensive six-month journey designed to transform participants into 
              confident business leaders and entrepreneurs through structured learning, 
              practical experience, and ongoing support.
            </p>
          </motion.div>

          {/* Program Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Duration</h3>
              <p className="text-gray-600">6 Months</p>
              <p className="text-sm text-gray-500 mt-2">Intensive training program</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Frequency</h3>
              <p className="text-gray-600">Twice Per Year</p>
              <p className="text-sm text-gray-500 mt-2">Spring & Fall cohorts</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cohort Size</h3>
              <p className="text-gray-600">100 Participants</p>
              <p className="text-sm text-gray-500 mt-2">Per cohort</p>
            </div>
          </motion.div>

          {/* Program Phases */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
              Program Phases
            </h3>
            <div className="space-y-8">
              {phases.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                  className={`flex flex-col lg:flex-row gap-8 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className="lg:w-1/2">
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mr-4">
                          <span className="text-white font-bold">{index + 1}</span>
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900">{phase.phase}</h4>
                          <p className="text-orange-600 font-medium">{phase.duration}</p>
                        </div>
                      </div>
                      <h5 className="text-lg font-semibold text-gray-900 mb-3">{phase.title}</h5>
                      <p className="text-gray-600 mb-4">{phase.description}</p>
                      <ul className="space-y-2">
                        {phase.activities.map((activity, actIndex) => (
                          <li key={actIndex} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <BookOpen className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          Phase {index + 1} Focus
                        </h4>
                        <p className="text-gray-700">
                          {index === 0 && "Building strong foundations and understanding individual strengths"}
                          {index === 1 && "Developing core business and marketing competencies"}
                          {index === 2 && "Applying skills in real-world business environments"}
                          {index === 3 && "Launching businesses and establishing ongoing support networks"}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Target Sectors */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
              Target Sectors
            </h3>
            <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              We welcome participants from diverse sectors, recognizing that innovation and 
              growth can come from any industry. Our program is designed to support 
              entrepreneurs across various fields.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sectors.map((sector, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-4xl mb-4">{sector.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{sector.name}</h4>
                  <p className="text-gray-600 text-sm">{sector.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Program Schedule */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white"
          >
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">Program Schedule</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div>
                  <h4 className="text-xl font-semibold mb-4">Spring Cohort</h4>
                  <ul className="space-y-2 text-orange-100">
                    <li>• Applications: January - February</li>
                    <li>• Selection: March</li>
                    <li>• Program: April - September</li>
                    <li>• Graduation: October</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4">Fall Cohort</h4>
                  <ul className="space-y-2 text-orange-100">
                    <li>• Applications: July - August</li>
                    <li>• Selection: September</li>
                    <li>• Program: October - March</li>
                    <li>• Graduation: April</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ProgramStructure
