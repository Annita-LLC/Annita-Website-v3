"use client"

import React from 'react'
import {
  Cookie,
  Shield,
  Settings,
  Eye,
  HelpCircle,
  MessageSquare,
  ChevronRight,
  Database,
  BarChart3,
  UserCheck,
  Lock
} from 'lucide-react'

const NavigationSection = () => {
  const cookieSections = [
    {
      id: 'what-are-cookies',
      title: 'What Are Cookies?',
      description: 'Understanding cookies and how they work',
      icon: Cookie,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'cookie-categories',
      title: 'Cookie Categories',
      description: 'Different types of cookies we use',
      icon: Database,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'how-we-use',
      title: 'How We Use Cookies',
      description: 'Purposes and benefits of our cookies',
      icon: Settings,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'third-party-cookies',
      title: 'Third-Party Cookies',
      description: 'Cookies from external services',
      icon: Eye,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'managing-cookies',
      title: 'Managing Your Cookies',
      description: 'Control your cookie preferences',
      icon: Shield,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'cookie-settings',
      title: 'Cookie Settings',
      description: 'Customize your cookie choices',
      icon: UserCheck,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'privacy-impact',
      title: 'Privacy Impact',
      description: 'How cookies affect your privacy',
      icon: Lock,
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 'faq',
      title: 'Frequently Asked Questions',
      description: 'Common cookie questions answered',
      icon: HelpCircle,
      color: 'from-teal-500 to-green-500'
    },
    {
      id: 'contact',
      title: 'Contact Information',
      description: 'Questions about cookies and privacy',
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
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
              <Cookie className="w-4 h-4 mr-2" />
              Cookie Policy Navigation
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Cookie Policy{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Overview
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Navigate through our comprehensive cookie policy. Click any section below to jump directly to the information you need, or manage your cookie preferences.
            </p>
          </div>

          {/* Navigation Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cookieSections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 text-left h-full"
              >
                <div className="flex items-start space-x-4">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${section.color} shadow-lg flex-shrink-0`}>
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight">
                      {section.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-3">
                      {section.description}
                    </p>
                    <div className="flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
                      Read section
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
            <Cookie className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Take Control of Your Cookies</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto leading-relaxed">
              You have full control over your cookie preferences. Customize your settings or learn more about how we use cookies to improve your experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('cookie-settings')}
                className="px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-xl font-semibold text-white shadow-lg transition-all duration-300"
              >
                Manage Settings
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="px-6 py-3 bg-white text-blue-600 hover:bg-blue-50 rounded-xl font-semibold shadow-lg transition-all duration-300"
              >
                View FAQ
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 bg-transparent hover:bg-white/10 border border-white/30 rounded-xl font-semibold text-white shadow-lg transition-all duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NavigationSection
