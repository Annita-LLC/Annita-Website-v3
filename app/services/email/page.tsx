"use client"

import { useState } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import CTASection from '@/components/sections/CTASection'
import { 
  Mail, 
  Shield, 
  Globe, 
  Smartphone, 
  Users, 
  CheckCircle,
  Play,
  Lock,
  Database,
  Key,
  BarChart3,
  Settings,
  Filter,
  Archive,
  Search,
  Calendar,
  Contact,
  Inbox
} from 'lucide-react'

const EmailPage = () => {
  const features = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption, spam protection, and advanced threat detection",
      color: "blue"
    },
    {
      icon: Globe,
      title: "Custom Domains",
      description: "Professional email addresses with your own domain name",
      color: "green"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Shared calendars, contacts, and collaborative workspaces",
      color: "orange"
    },
    {
      icon: Smartphone,
      title: "Mobile Access",
      description: "Full email functionality on iOS, Android, and web platforms",
      color: "purple"
    }
  ]

  const emailFeatures = [
    {
      icon: Inbox,
      title: "Smart Inbox",
      description: "AI-powered email organization and priority filtering",
      category: "Productivity"
    },
    {
      icon: Calendar,
      title: "Integrated Calendar",
      description: "Seamless scheduling and meeting management",
      category: "Productivity"
    },
    {
      icon: Contact,
      title: "Contact Management",
      description: "Advanced contact organization and CRM integration",
      category: "Productivity"
    },
    {
      icon: Archive,
      title: "Email Archiving",
      description: "Automatic email backup and long-term storage",
      category: "Storage"
    },
    {
      icon: Search,
      title: "Advanced Search",
      description: "Powerful search across all emails and attachments",
      category: "Productivity"
    },
    {
      icon: Filter,
      title: "Smart Filters",
      description: "Automated email sorting and rule-based organization",
      category: "Automation"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Email performance metrics and engagement insights",
      category: "Analytics"
    },
    {
      icon: Settings,
      title: "Custom Settings",
      description: "Flexible configuration for teams and individuals",
      category: "Customization"
    }
  ]

  const pricingPlans = [
    {
      name: "Starter",
      price: "$5",
      period: "per user/month",
      features: [
        "10GB email storage",
        "Custom domain support",
        "Basic spam protection",
        "Mobile apps",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$12",
      period: "per user/month",
      features: [
        "50GB email storage",
        "Advanced security features",
        "Calendar integration",
        "Contact management",
        "Priority support",
        "Email analytics"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$25",
      period: "per user/month",
      features: [
        "Unlimited storage",
        "Advanced threat protection",
        "Custom integrations",
        "Dedicated support",
        "Compliance tools",
        "Advanced analytics"
      ],
      popular: false
    }
  ]

  const securityFeatures = [
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "All emails encrypted in transit and at rest"
    },
    {
      icon: Shield,
      title: "Spam Protection",
      description: "Advanced AI-powered spam and malware filtering"
    },
    {
      icon: Key,
      title: "Two-Factor Authentication",
      description: "Enhanced security with 2FA and SSO support"
    },
    {
      icon: Database,
      title: "Data Backup",
      description: "Automatic daily backups with 99.9% uptime guarantee"
    }
  ]

  return (
    <>
      <SEOHead
        title="Annita Email Service - Professional Email Hosting with Custom Domains"
        description="Professional email hosting with custom domains, enterprise security, and advanced collaboration tools. Perfect for African businesses looking for reliable email solutions."
        keywords={[
          'email hosting',
          'custom domain email',
          'professional email',
          'business email',
          'email security',
          'email collaboration',
          'African business email',
          'enterprise email',
          'email hosting Africa',
          'business communication'
        ]}
        canonical="/services/email"
        ogImage="/services/email-og.jpg"
      />

      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div>
                <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Mail className="w-4 h-4 mr-2" />
                  Professional Email Service
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Professional <span className="text-blue-600">Email Hosting</span> for African Businesses
                </h1>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Get professional email addresses with your own domain, enterprise-grade security, 
                  and powerful collaboration tools designed for African businesses.
                </p>

                {/* Key Features */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-10 h-10 bg-${feature.color}-100 rounded-lg flex items-center justify-center`}>
                        <feature.icon className={`w-5 h-5 text-${feature.color}-600`} />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">{feature.title}</div>
                        <div className="text-xs text-gray-600">{feature.description}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center justify-center">
                    <Play className="w-4 h-4 mr-2" />
                    Start Free Trial
                  </button>
                  <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center justify-center">
                    View Pricing
                  </button>
                </div>
              </div>

              {/* Right Column - Visual */}
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                      <div className="h-4 bg-blue-200 rounded w-2/3"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-blue-600" />
                        <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                      </div>
                      <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Powerful Features for <span className="text-blue-600">Modern Business</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Everything you need for professional email communication, collaboration, and productivity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {emailFeatures.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{feature.description}</p>
                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                    {feature.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Enterprise-Grade <span className="text-blue-600">Security</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Your business communications are protected with industry-leading security measures.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Simple, Transparent <span className="text-blue-600">Pricing</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include our core features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white rounded-2xl shadow-lg border-2 p-8 relative ${
                  plan.popular ? 'border-blue-500' : 'border-gray-200'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-blue-600 mb-2">{plan.price}</div>
                    <div className="text-gray-600">{plan.period}</div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
                  }`}>
                    {plan.popular ? 'Get Started' : 'Choose Plan'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  )
}

export default EmailPage
