"use client"

import React from 'react'
import {
  FileText,
  Users,
  Settings,
  CreditCard,
  Ban,
  Shield,
  Scale,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Globe,
  Clock,
  DollarSign,
  Lock
} from 'lucide-react'

const ContentSections = () => {
  const contentSections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: FileText,
      color: 'from-blue-500 to-cyan-500',
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <p className="text-gray-700 leading-relaxed">
              By accessing and using Annita's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <h4 className="font-semibold text-gray-900">Electronic Agreement</h4>
              </div>
              <p className="text-sm text-gray-600">
                Your use of our services constitutes electronic acceptance of these terms.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <h4 className="font-semibold text-gray-900">Continuous Agreement</h4>
              </div>
              <p className="text-sm text-gray-600">
                Terms remain in effect as long as you use our services.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'description',
      title: 'Service Description',
      icon: Settings,
      color: 'from-purple-500 to-pink-500',
      content: (
        <div className="space-y-6">
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
            <h4 className="font-semibold text-gray-900 mb-3">What We Provide</h4>
            <p className="text-gray-700 leading-relaxed">
              Annita provides a comprehensive all-in-one digital platform that includes e-commerce, fintech services, AI-powered business tools, payment processing, logistics management, and various business solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Globe, title: "E-commerce Platform", desc: "Online marketplace and storefront solutions" },
              { icon: CreditCard, title: "Payment Processing", desc: "Secure payment gateway and transaction processing" },
              { icon: Settings, title: "Business Tools", desc: "AI-powered analytics and automation tools" },
              { icon: Users, title: "Marketplace", desc: "Multi-vendor marketplace for businesses" },
              { icon: Shield, title: "Security Features", desc: "Advanced security and fraud protection" },
              { icon: Lock, title: "Data Protection", desc: "GDPR-compliant data handling" }
            ].map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <service.icon className="w-4 h-4 text-purple-600" />
                  </div>
                  <h5 className="font-semibold text-gray-900 text-sm">{service.title}</h5>
                </div>
                <p className="text-xs text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'user-obligations',
      title: 'User Obligations',
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      content: (
        <div className="space-y-6">
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h4 className="font-semibold text-gray-900 mb-3">Your Responsibilities</h4>
            <p className="text-gray-700 leading-relaxed">
              As a user of our platform, you agree to maintain accurate account information, use the services lawfully, and respect the rights of other users and third parties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Account Responsibilities</h4>
              <div className="space-y-3">
                {[
                  "Maintain accurate and current account information",
                  "Keep login credentials secure and confidential",
                  "Notify us immediately of unauthorized access",
                  "Accept responsibility for all activities under your account"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Usage Obligations</h4>
              <div className="space-y-3">
                {[
                  "Use services only for lawful purposes",
                  "Respect intellectual property rights",
                  "Maintain professional conduct with other users",
                  "Comply with all applicable laws and regulations"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'payments',
      title: 'Payments & Billing',
      icon: CreditCard,
      color: 'from-orange-500 to-red-500',
      content: (
        <div className="space-y-6">
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
            <h4 className="font-semibold text-gray-900 mb-3">Payment Terms</h4>
            <p className="text-gray-700 leading-relaxed">
              Payment terms vary by service. All fees are clearly disclosed before purchase. You agree to pay all charges associated with your account.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <DollarSign className="w-6 h-6 text-orange-500" />
                <h4 className="font-semibold text-gray-900">Fee Structure</h4>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Transaction fees for marketplace sales</p>
                <p>• Subscription fees for premium features</p>
                <p>• Payment processing fees</p>
                <p>• Currency conversion fees (where applicable)</p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-orange-500" />
                <h4 className="font-semibold text-gray-900">Billing Cycle</h4>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Monthly billing for subscription services</p>
                <p>• Immediate charges for one-time purchases</p>
                <p>• Automatic renewal unless cancelled</p>
                <p>• 30-day payment terms for invoices</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Payment Disputes</h4>
                <p className="text-gray-700 text-sm">
                  All payment disputes must be raised within 30 days of the transaction. We will investigate and resolve disputes in accordance with our refund policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'prohibited-activities',
      title: 'Prohibited Activities',
      icon: Ban,
      color: 'from-cyan-500 to-blue-500',
      content: (
        <div className="space-y-6">
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <h4 className="font-semibold text-red-900 mb-3">Strictly Prohibited</h4>
            <p className="text-red-800 leading-relaxed">
              You may not use our services for any unlawful or prohibited activities. Violation of these terms may result in immediate account suspension or termination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Fraudulent activities or scams",
              "Violation of intellectual property rights",
              "Harassment or abuse of other users",
              "Distribution of malicious software",
              "Illegal content or activities",
              "Circumvention of security measures",
              "Excessive automated requests",
              "False or misleading information",
              "Violation of export control laws",
              "Engagement in money laundering",
              "Terrorist financing activities",
              "Sale of prohibited goods"
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white border border-gray-200 rounded-lg p-3">
                <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{activity}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      icon: Shield,
      color: 'from-indigo-500 to-purple-500',
      content: (
        <div className="space-y-6">
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
            <h4 className="font-semibold text-gray-900 mb-3">Our Intellectual Property</h4>
            <p className="text-gray-700 leading-relaxed">
              All content, features, and functionality of our services are owned by Annita and are protected by copyright, trademark, and other intellectual property laws.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">What Belongs to Us</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Platform software and algorithms</p>
                <p>• User interface designs</p>
                <p>• Brand names and logos</p>
                <p>• Marketing materials</p>
                <p>• Proprietary business methods</p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Your Content Rights</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• You retain ownership of your content</p>
                <p>• You grant us license to use your content</p>
                <p>• We may use content for service improvement</p>
                <p>• Content must not violate our policies</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'liability',
      title: 'Liability & Disclaimers',
      icon: Scale,
      color: 'from-pink-500 to-rose-500',
      content: (
        <div className="space-y-6">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <h4 className="font-semibold text-gray-900 mb-3">Service "As Is"</h4>
            <p className="text-gray-700 leading-relaxed">
              Our services are provided "as is" and "as available" without warranties of any kind. We do not guarantee uninterrupted or error-free service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3 text-red-600">Liability Limitations</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Maximum liability limited to fees paid</p>
                <p>• No liability for indirect damages</p>
                <p>• No liability for data loss</p>
                <p>• No liability for business interruption</p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3 text-blue-600">What We Warrant</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Services will be provided with reasonable skill</p>
                <p>• Reasonable security measures in place</p>
                <p>• Compliance with applicable laws</p>
                <p>• Professional service delivery</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'termination',
      title: 'Termination',
      icon: AlertTriangle,
      color: 'from-teal-500 to-green-500',
      content: (
        <div className="space-y-6">
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <h4 className="font-semibold text-gray-900 mb-3">Account Termination</h4>
            <p className="text-gray-700 leading-relaxed">
              Either party may terminate this agreement at any time. We reserve the right to suspend or terminate accounts that violate our terms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Termination by You</h4>
              <div className="space-y-3">
                {[
                  "Cancel account through settings",
                  "No fees for account closure",
                  "Data export available upon request",
                  "30-day notice period for subscriptions"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Termination by Us</h4>
              <div className="space-y-3">
                {[
                  "Immediate suspension for violations",
                  "Notice provided where possible",
                  "Appeal process available",
                  "Data retention as required by law"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <AlertTriangle className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
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
            <div key={section.id} id={section.id} className="scroll-mt-24">
              <div className="flex items-center space-x-4 mb-8">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${section.color} shadow-lg`}>
                  <section.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
              </div>

              {section.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContentSections
