'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Target, 
  Heart, 
  Globe, 
  Users, 
  Award,
  TrendingUp,
  Shield,
  Zap,
  Lightbulb,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const values = [
    {
      icon: Heart,
      title: 'Empowerment',
      description: 'Enabling MSMEs to thrive in the digital economy',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Inclusion',
      description: 'Bridging the digital divide across Africa',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'Building secure and reliable digital solutions',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Leveraging cutting-edge technology for growth',
      color: 'from-yellow-500 to-orange-500'
    }
  ]

  const achievements = [
    {
      icon: Award,
      title: 'Orange Social Venture Prize',
      description: '1st Place Winner 2023',
      year: '2023'
    },
    {
      icon: Star,
      title: 'Top 50 Businesses in Africa',
      description: 'African Union Recognition',
      year: '2024'
    },
    {
      icon: TrendingUp,
      title: 'Afreximbank Partnership',
      description: 'MANSA Platform Integration',
      year: '2022'
    },
    {
      icon: Users,
      title: '3,000+ Vendors',
      description: 'Active Platform Users',
      year: '2024'
    }
  ]

  const team = [
    {
      name: 'Christopher O. Fallah',
      role: 'CEO & Founder',
      description: 'Visionary leader with experience in African startups',
      achievement: 'Led MVP launch and awards wins'
    },
    {
      name: 'Emmanuel Z. Weh',
      role: 'CTO',
      description: 'Oversees tech architecture and scalable platforms',
      achievement: 'Expert in low-connectivity environments'
    },
    {
      name: 'Siah Fallah',
      role: 'CMO',
      description: 'Drives marketing strategies and MSME engagement',
      achievement: 'Focused on growth and partnerships'
    },
    {
      name: 'Victor Coleman',
      role: 'Senior Frontend Engineer',
      description: 'Builds user-friendly interfaces and mobile-first design',
      achievement: 'Ensures optimal user experience'
    },
    {
      name: 'Lamber Kpukuyou',
      role: 'Senior Backend Engineer',
      description: 'Handles secure integrations for payments and logistics',
      achievement: 'Expert in fintech and logistics systems'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About <span className="gradient-text">Annita</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Africa's digital heartbeat, empowering over 450 million Micro, Small, and Medium Enterprises 
            with innovative solutions that drive economic growth and prosperity.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 lg:p-12"
          >
            <Target className="w-12 h-12 text-primary-600 mb-6" />
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-600 mb-6">
              To deliver Africa's first all-in-one platform, seamlessly integrating e-commerce, fintech, 
              AI-driven tools, communication, marketing, logistics, and lifestyle services. We empower 
              businesses and individuals with accessible, affordable, and innovative solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Consolidate fragmented tools into mobile-first platform</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Ensure accessibility in low-connectivity regions</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Foster financial inclusion and operational efficiency</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-accent-50 to-warning-50 rounded-3xl p-8 lg:p-12"
          >
            <Lightbulb className="w-12 h-12 text-accent-600 mb-6" />
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-lg text-gray-600 mb-6">
              To empower 5 million Micro, Small, and Medium Enterprises across Africa and beyond by 2029, 
              catalyzing global economic growth and job creation through innovative digital solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-accent-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Transform Africa's economic landscape</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-accent-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Leverage AfCFTA for cross-border opportunities</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-accent-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Focus on underserved communities and women-led businesses</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-20"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-12">
            Key Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="feature-card text-center group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm font-medium text-primary-600 mb-2">{achievement.year}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h4>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-12">
            Meet Our Leadership Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                className="feature-card group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h4>
                <div className="text-primary-600 font-medium mb-3">{member.role}</div>
                <p className="text-gray-600 text-sm mb-3">{member.description}</p>
                <div className="text-xs text-gray-500 bg-gray-50 rounded-lg p-2">
                  <strong>Achievement:</strong> {member.achievement}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Join Africa's Digital Revolution
            </h3>
            <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8">
              Be part of the transformation that's empowering millions of African businesses 
              to thrive in the global digital economy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-lg bg-white text-primary-600 hover:bg-gray-100 group">
                Download App
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-lg border-2 border-white text-white hover:bg-white hover:text-primary-600">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
