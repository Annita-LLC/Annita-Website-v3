"use client"

import React from 'react'
import {
  FileText,
  Users,
  Shield,
  AlertTriangle,
  Settings,
  HelpCircle,
  MessageSquare,
  ChevronRight,
  Scale,
  CreditCard,
  Ban
} from 'lucide-react'

const NavigationSection = () => {
  const termsSections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      description: 'Your agreement to use our services',
      icon: FileText,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'description',
      title: 'Service Description',
      description: 'What we provide and how it works',
      icon: Settings,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'user-obligations',
      title: 'User Obligations',
      description: 'Your responsibilities and conduct',
      icon: Users,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'payments',
      title: 'Payments & Billing',
      description: 'Fees, billing, and payment terms',
      icon: CreditCard,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'prohibited-activities',
      title: 'Prohibited Activities',
      description: 'What you cannot do on our platform',
      icon: Ban,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      description: 'Ownership rights and licensing',
      icon: Shield,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'liability',
      title: 'Liability & Disclaimers',
      description: 'Legal limitations and warranties',
      icon: Scale,
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 'termination',
      title: 'Termination',
      description: 'How accounts can be suspended or closed',
      icon: AlertTriangle,
      color: 'from-teal-500 to-green-500'
    },
    {
      id: 'faq',
      title: 'Frequently Asked Questions',
      description: 'Common questions about our terms',
      icon: HelpCircle,
      color: 'from-violet-500 to-purple-500'
    },
    {
      id: 'contact',
      title: 'Contact Information',
      description: 'How to reach our legal team',
      icon: MessageSquare,
      color: 'from-rose-500 to-pink-500'
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
              Quick Navigation
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Overview
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Navigate through our comprehensive terms of service. Click any section below to jump directly to the information you need.
            </p>
          </div>

          {/* Navigation Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {termsSections.map((section, index) => (
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

          {/* Important Notice */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
            <AlertTriangle className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Important Legal Notice</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              These terms constitute a legally binding agreement. By using Annita's services, you agree to be bound by these terms. If you disagree with any part, please do not use our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-xl font-semibold text-white shadow-lg transition-all duration-300"
              >
                Contact Legal Team
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="px-6 py-3 bg-white text-blue-600 hover:bg-blue-50 rounded-xl font-semibold shadow-lg transition-all duration-300"
              >
                View FAQ
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NavigationSection
