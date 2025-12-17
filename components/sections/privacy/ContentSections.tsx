"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FileText,
  Users,
  Globe,
  Settings,
  Eye,
  Shield,
  Lock,
  Cookie,
  AlertTriangle,
  Plane,
  RefreshCw,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  XCircle
} from 'lucide-react'

const ContentSections = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contentSections = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: FileText,
      color: 'from-blue-500 to-cyan-500',
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <p className="text-gray-700 leading-relaxed">
              Annita ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, mobile applications, and services (collectively, the "Services").
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              By using our Services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our Services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">100%</div>
              <div className="text-sm text-gray-600">GDPR Compliant</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">24/7</div>
              <div className="text-sm text-gray-600">Security Monitoring</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">256-bit</div>
              <div className="text-sm text-gray-600">Encryption</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'information-collect',
      title: 'Information We Collect',
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      content: (
        <div className="space-y-8">
          {/* Personal Information */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Personal Information</h3>
            </div>
            <p className="text-gray-600 mb-4">We may collect personal information that you provide directly to us, including:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Name, email address, phone number",
                "Payment information and transaction history",
                "Account credentials and profile information",
                "Communication preferences",
                "Feedback, reviews, and survey responses"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Automatically Collected */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Automatically Collected Information</h3>
            </div>
            <p className="text-gray-600 mb-4">When you use our Services, we automatically collect certain information:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Device information (IP address, browser)",
                "Usage data and analytics",
                "Location information (with consent)",
                "Cookies and tracking technologies",
                "Log files and performance data"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'how-we-use',
      title: 'How We Use Your Information',
      icon: Settings,
      color: 'from-green-500 to-emerald-500',
      content: (
        <div className="space-y-6">
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect for various purposes designed to improve your experience and maintain our Services:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: Settings, title: "Service Operation", desc: "Provide and maintain our platform" },
              { icon: Lock, title: "Security", desc: "Detect fraud and security threats" },
              { icon: Users, title: "Communication", desc: "Send updates and support messages" },
              { icon: Eye, title: "Analytics", desc: "Improve user experience" },
              { icon: Shield, title: "Compliance", desc: "Meet legal requirements" },
              { icon: RefreshCw, title: "Updates", desc: "Send marketing (with consent)" }
            ].map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <item.icon className="w-4 h-4 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">{item.title}</h4>
                </div>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing & Disclosure',
      icon: Eye,
      color: 'from-orange-500 to-red-500',
      content: (
        <div className="space-y-6">
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
            <div className="flex items-start space-x-3">
              <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">We Do Not Sell Your Data</h3>
                <p className="text-gray-700 text-sm">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">We may share information only in these circumstances:</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Service Providers", desc: "Trusted partners who help operate our services", icon: Users },
                { title: "Legal Requirements", desc: "When required by law or to protect rights", icon: Shield },
                { title: "Business Transfers", desc: "In case of mergers or acquisitions", icon: RefreshCw },
                { title: "Your Consent", desc: "Only with your explicit permission", icon: CheckCircle }
              ].map((item, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <item.icon className="w-4 h-4 text-orange-600" />
                    </div>
                    <h5 className="font-semibold text-gray-900">{item.title}</h5>
                  </div>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: Shield,
      color: 'from-cyan-500 to-blue-500',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-cyan-600" />
              <h3 className="text-xl font-semibold text-gray-900">Security First Approach</h3>
            </div>
            <p className="text-gray-700">
              We implement comprehensive technical and organizational security measures to protect your personal information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Lock, title: "Encryption", desc: "AES-256 encryption at rest and in transit" },
              { icon: Eye, title: "Monitoring", desc: "24/7 security monitoring and alerts" },
              { icon: Users, title: "Access Control", desc: "Role-based access and authentication" },
              { icon: RefreshCw, title: "Updates", desc: "Regular security patches and updates" },
              { icon: FileText, title: "Audits", desc: "Regular security assessments" },
              { icon: Shield, title: "Training", desc: "Employee security awareness training" }
            ].map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-cyan-100 rounded-lg">
                    <item.icon className="w-4 h-4 text-cyan-600" />
                  </div>
                  <h5 className="font-semibold text-gray-900">{item.title}</h5>
                </div>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'your-rights',
      title: 'Your Rights & Choices',
      icon: Lock,
      color: 'from-indigo-500 to-purple-500',
      content: (
        <div className="space-y-6">
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Your Privacy Rights</h3>
            <p className="text-gray-700 text-sm">
              Depending on your location, you may have certain rights regarding your personal information. We respect and uphold these rights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: Eye, title: "Access", desc: "Request access to your personal data" },
              { icon: RefreshCw, title: "Correction", desc: "Request correction of inaccurate data" },
              { icon: XCircle, title: "Deletion", desc: "Request deletion of your data" },
              { icon: FileText, title: "Portability", desc: "Receive your data in a portable format" },
              { icon: AlertTriangle, title: "Objection", desc: "Object to certain processing activities" },
              { icon: Settings, title: "Withdraw Consent", desc: "Withdraw consent for data processing" }
            ].map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <item.icon className="w-4 h-4 text-indigo-600" />
                  </div>
                  <h5 className="font-semibold text-gray-900">{item.title}</h5>
                </div>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">How to Exercise Your Rights</h4>
                <p className="text-gray-700 text-sm">
                  Contact our privacy team using the information in the Contact section below.
                  We'll respond to your request within 30 days as required by applicable laws.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cookies',
      title: 'Cookies & Tracking Technologies',
      icon: Cookie,
      color: 'from-pink-500 to-rose-500',
      content: (
        <div className="space-y-6">
          <div className="bg-pink-50 border border-pink-200 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Cookie className="w-8 h-8 text-pink-600" />
              <h3 className="text-xl font-semibold text-gray-900">Cookie Management</h3>
            </div>
            <p className="text-gray-700">
              We use cookies and similar tracking technologies to enhance your experience on our Services.
              You have full control over cookie preferences through your browser settings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Essential Cookies</h4>
              <p className="text-sm text-gray-600 mb-3">Required for basic website functionality</p>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-700">Always active</span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Analytics Cookies</h4>
              <p className="text-sm text-gray-600 mb-3">Help us improve our services</p>
              <div className="flex items-center space-x-2">
                <Settings className="w-4 h-4 text-blue-500" />
                <span className="text-sm text-gray-700">Optional</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/cookies"
              className="inline-flex items-center px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg font-semibold transition-colors"
            >
              <Cookie className="w-4 h-4 mr-2" />
              Manage Cookie Preferences
            </a>
          </div>
        </div>
      )
    }
  ]

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-20">
          {contentSections.map((section, index) => (
            <motion.div
              key={section.id}
              id={section.id}
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="scroll-mt-24"
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${section.color} shadow-lg`}>
                  <section.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
              </div>

              {section.content}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContentSections
