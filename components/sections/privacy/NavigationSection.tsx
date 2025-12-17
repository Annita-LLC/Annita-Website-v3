"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FileText,
  Users,
  Shield,
  Lock,
  Eye,
  Settings,
  HelpCircle,
  MessageSquare,
  ChevronRight
} from 'lucide-react'

const NavigationSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const privacySections = [
    {
      id: 'introduction',
      title: 'Introduction',
      description: 'Overview of our privacy commitment',
      icon: FileText,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'information-collect',
      title: 'Information We Collect',
      description: 'What data we gather and how',
      icon: Users,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'how-we-use',
      title: 'How We Use Information',
      description: 'Purposes for data processing',
      icon: Settings,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing',
      description: 'When and how we share data',
      icon: Eye,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'data-security',
      title: 'Data Security',
      description: 'How we protect your information',
      icon: Shield,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'your-rights',
      title: 'Your Rights & Choices',
      description: 'Privacy controls and options',
      icon: Lock,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'cookies',
      title: 'Cookies & Tracking',
      description: 'How we use tracking technologies',
      icon: Eye,
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 'faq',
      title: 'Frequently Asked Questions',
      description: 'Common privacy questions answered',
      icon: HelpCircle,
      color: 'from-teal-500 to-green-500'
    },
    {
      id: 'contact',
      title: 'Contact Us',
      description: 'How to reach our privacy team',
      icon: MessageSquare,
      color: 'from-violet-500 to-purple-500'
    }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50">
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
              Quick Navigation
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Overview
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Navigate through our comprehensive privacy policy. Click any section below to jump directly to the information you need.
            </p>
          </motion.div>

          {/* Navigation Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {privacySections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <button
                  onClick={() => scrollToSection(section.id)}
                  className="w-full bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 text-left group-hover:scale-[1.02]"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${section.color} shadow-lg`}>
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {section.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-3">
                        {section.description}
                      </p>
                      <div className="flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
                        Read section
                        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>

          {/* Additional Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Need Immediate Help?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                If you have urgent privacy concerns or need to exercise your data rights, our privacy team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-xl font-semibold text-white shadow-lg transition-all duration-300"
                >
                  Contact Privacy Team
                </button>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="px-6 py-3 bg-white text-blue-600 hover:bg-blue-50 rounded-xl font-semibold shadow-lg transition-all duration-300"
                >
                  View FAQ
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default NavigationSection
