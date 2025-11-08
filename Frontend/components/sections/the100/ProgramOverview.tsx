"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { BookOpen, Users, Target, Globe, Heart, Zap } from 'lucide-react'

const ProgramOverview = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Training",
      description: "Six months of intensive training in business skills, marketing strategies, and professional development."
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "One-on-one mentorship from successful entrepreneurs and business leaders in Liberia and beyond."
    },
    {
      icon: Target,
      title: "Hands-on Experience",
      description: "Real-world projects and internships at Annita LLC and partner organizations."
    },
    {
      icon: Globe,
      title: "Network Building",
      description: "Connect with fellow participants, mentors, and industry professionals across various sectors."
    },
    {
      icon: Heart,
      title: "Community Impact",
      description: "Develop skills to create positive change in your community and contribute to Liberia's development."
    },
    {
      icon: Zap,
      title: "Startup Support",
      description: "Access to mini-grants and resources to launch your own business ventures."
    }
  ]

  return (
    <section className="py-16 sm:py-20" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-orange-600">The 100</span> Initiative
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The 100 is Annita LLC's flagship youth empowerment program designed to identify, 
              train, and support 100 exceptional Liberian youths twice annually. Our mission is 
              to build the next generation of business leaders, entrepreneurs, and change-makers 
              who will drive Liberia's economic growth and social development.
            </p>
          </motion.div>

          {/* Mission & Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          >
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To empower 100 Liberian youths annually with comprehensive business skills, 
                mentorship, and resources needed to become successful entrepreneurs and 
                business leaders who contribute to Liberia's economic development.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                A Liberia where every young person has the opportunity to develop their 
                entrepreneurial potential, create sustainable businesses, and build a 
                prosperous future for themselves and their communities.
              </p>
            </div>
          </motion.div>

          {/* Program Goals */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
              Program Goals
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Develop essential business and marketing skills",
                "Provide hands-on experience through internships",
                "Build a strong network of mentors and peers",
                "Support business idea development and execution",
                "Create employment and entrepreneurship opportunities",
                "Foster community leadership and social impact"
              ].map((goal, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-gray-700">{goal}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
              What You'll Gain
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center mt-16 p-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl text-white"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Transform Your Future?
            </h3>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
              Join The 100 and become part of Liberia's next generation of business leaders. 
              Applications are now open for our next cohort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200">
                Apply Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ProgramOverview
