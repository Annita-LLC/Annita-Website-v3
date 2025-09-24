'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SEOHead from '@/components/seo/SEOHead'
import { 
  Code, 
  Zap, 
  Shield, 
  Globe, 
  Database, 
  Smartphone,
  Clock,
  CheckCircle,
  Star,
  ExternalLink,
  Download,
  Building,
  Users,
  Lock,
  Activity,
  BarChart3,
  Settings,
  Terminal,
  Key,
  Server
} from 'lucide-react'
import Link from 'next/link'
import WaitlistForm from '@/components/ui/WaitlistForm'

const APIPage = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

  const features = [
    {
      icon: Code,
      title: "RESTful API",
      description: "Comprehensive REST API for all Annita services",
      features: ["JSON responses", "HTTP methods", "Status codes", "Error handling"]
    },
    {
      icon: Zap,
      title: "Real-time Webhooks",
      description: "Instant notifications for events and transactions",
      features: ["Event triggers", "Secure delivery", "Retry logic", "Custom endpoints"]
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with OAuth 2.0 and API keys",
      features: ["OAuth 2.0", "API keys", "Rate limiting", "IP whitelisting"]
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Seamless data synchronization and management",
      features: ["Data sync", "Bulk operations", "Real-time updates", "Backup support"]
    }
  ]

  const endpoints = [
    {
      category: "Payments",
      endpoints: [
        { method: "POST", path: "/api/v1/payments", description: "Process payments" },
        { method: "GET", path: "/api/v1/payments/{id}", description: "Get payment details" },
        { method: "PUT", path: "/api/v1/payments/{id}", description: "Update payment status" }
      ]
    },
    {
      category: "E-commerce",
      endpoints: [
        { method: "GET", path: "/api/v1/products", description: "List products" },
        { method: "POST", path: "/api/v1/orders", description: "Create order" },
        { method: "GET", path: "/api/v1/orders/{id}", description: "Get order details" }
      ]
    },
    {
      category: "AI Services",
      endpoints: [
        { method: "POST", path: "/api/v1/ai/verify", description: "Customer verification" },
        { method: "POST", path: "/api/v1/ai/fraud", description: "Fraud detection" },
        { method: "GET", path: "/api/v1/ai/analytics", description: "Business analytics" }
      ]
    }
  ]

  const stats = [
    { label: "API Endpoints", value: "100+", icon: Code },
    { label: "Response Time", value: "<100ms", icon: Clock },
    { label: "Uptime", value: "99.9%", icon: Activity },
    { label: "Rate Limit", value: "10K/min", icon: Zap }
  ]

  return (
    <>
      <SEOHead
        title="Annita API - Developer Integration Platform"
        description="Comprehensive REST API for integrating with Annita's ecosystem. Enterprise-grade security, real-time webhooks, and extensive documentation."
        keywords={[
          'API',
          'developer tools',
          'integration',
          'REST API',
          'webhooks',
          'enterprise',
          'developer platform'
        ]}
        canonical="/services/api"
      />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-orange-600 via-orange-700 to-red-600 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white/5 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-white/5 rounded-full animate-bounce delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Main Content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
                  <Code className="w-4 h-4 mr-2" />
                  Developer Platform
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                  Annita <span className="text-orange-200">API</span>
                </h1>
                <p className="text-lg sm:text-xl text-orange-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
                  Comprehensive REST API for integrating with Annita's ecosystem. 
                  Enterprise-grade security, real-time webhooks, and extensive documentation.
                </p>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-bold">100+</div>
                    <div className="text-xs sm:text-sm text-orange-200">Endpoints</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-bold">&lt;100ms</div>
                    <div className="text-xs sm:text-sm text-orange-200">Response Time</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-bold">99.9%</div>
                    <div className="text-xs sm:text-sm text-orange-200">Uptime</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-bold">10K/min</div>
                    <div className="text-xs sm:text-sm text-orange-200">Rate Limit</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  <Link
                    href="/contact-sales"
                    className="bg-white text-orange-600 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-200 flex items-center justify-center shadow-lg text-sm sm:text-base"
                  >
                    <Building className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Contact Sales
                  </Link>
                  <button 
                    onClick={() => setIsWaitlistOpen(true)}
                    className="border-2 border-white text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-200 flex items-center justify-center text-sm sm:text-base"
                  >
                    <Code className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Get API Access
                  </button>
                </div>
              </div>

              {/* Right Column - Interactive Elements */}
              <div className="relative">
                {/* API Excellence Visualization */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center">API Excellence</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <span className="text-orange-200">100+ Endpoints</span>
                      <span className="font-semibold text-white">Comprehensive</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <span className="text-orange-200">Response Time</span>
                      <span className="font-semibold text-white">&lt;100ms</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <span className="text-orange-200">Enterprise Security</span>
                      <span className="font-semibold text-white">OAuth 2.0</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <span className="text-orange-200">Success Rate</span>
                      <span className="font-semibold text-white">99.9%</span>
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
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Enterprise API Features
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Powerful API capabilities designed for enterprise integration and automation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {feature.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {feature.features.map((item, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* API Endpoints Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                API Endpoints
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive API endpoints for all Annita services.
              </p>
            </div>

            <div className="space-y-8">
              {endpoints.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Code className="w-5 h-5 mr-2 text-orange-600" />
                    {category.category}
                  </h3>
                  <div className="space-y-3">
                    {category.endpoints.map((endpoint, endpointIndex) => (
                      <div key={endpointIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            endpoint.method === 'GET' ? 'bg-green-100 text-green-700' :
                            endpoint.method === 'POST' ? 'bg-blue-100 text-blue-700' :
                            endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {endpoint.method}
                          </span>
                          <code className="text-sm font-mono text-gray-700">{endpoint.path}</code>
                        </div>
                        <span className="text-sm text-gray-600">{endpoint.description}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                API Performance
              </h2>
              <p className="text-lg text-gray-600">
                Enterprise-grade performance and reliability.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-6 text-center shadow-lg"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Integrate with Annita?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact our sales team to get started with Annita API integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-sales"
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-200 flex items-center justify-center shadow-lg"
              >
                <Building className="w-5 h-5 mr-2" />
                Contact Sales
              </Link>
              <button 
                onClick={() => setIsWaitlistOpen(true)}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-200 flex items-center justify-center"
              >
                <Code className="w-5 h-5 mr-2" />
                Get API Access
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Modal */}
      <WaitlistForm
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </>
  )
}

export default APIPage
