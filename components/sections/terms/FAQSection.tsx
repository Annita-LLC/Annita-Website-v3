"use client"

import { useState } from 'react'
import { HelpCircle, ChevronDown, ChevronUp, AlertTriangle, Shield, CreditCard, Users, Ban } from 'lucide-react'

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  const faqs = [
    {
      question: "Do I have to accept all terms to use Annita's services?",
      answer: "Yes, our terms of service constitute a binding agreement. By using our platform, you agree to all terms. If you cannot accept any provision, you should not use our services. You can contact our legal team for clarification on specific terms.",
      icon: AlertTriangle,
      category: "Acceptance"
    },
    {
      question: "What happens if I violate the terms of service?",
      answer: "Violations may result in warnings, account suspension, or permanent termination depending on severity. We review each case individually and may provide opportunities for correction. Serious violations like fraud or illegal activities result in immediate account termination.",
      icon: Ban,
      category: "Violations"
    },
    {
      question: "Can I cancel my subscription or account at any time?",
      answer: "Yes, you can cancel subscriptions through your account settings. Refunds are provided according to our refund policy. Account cancellation takes effect immediately, though some data may be retained as required by law or for legitimate business purposes.",
      icon: Users,
      category: "Cancellation"
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept major credit cards, debit cards, and local payment methods depending on your region. All payments are processed securely through our certified payment processors. Fees and billing cycles vary by service and are clearly disclosed before purchase.",
      icon: CreditCard,
      category: "Payments"
    },
    {
      question: "How do you protect my data and privacy?",
      answer: "We implement industry-leading security measures including 256-bit encryption, regular security audits, and compliance with GDPR and other privacy regulations. Your data is stored on secure servers with access controls and monitoring. We never sell your personal information.",
      icon: Shield,
      category: "Security"
    },
    {
      question: "What should I do if I receive a notice of account suspension?",
      answer: "Contact our support team immediately with your account details. We'll review the suspension and provide information about the violation and appeal process. Many suspensions can be resolved by correcting the issue and agreeing to comply with our terms.",
      icon: AlertTriangle,
      category: "Support"
    },
    {
      question: "Can I use Annita's services for commercial purposes?",
      answer: "Yes, our platform is designed for business use. However, you must comply with all applicable laws, maintain accurate business information, and not engage in prohibited activities. Commercial accounts may have different features and pricing.",
      icon: Users,
      category: "Business Use"
    },
    {
      question: "What happens to my data if Annita is acquired or sold?",
      answer: "In the event of a merger, acquisition, or asset sale, your data may be transferred to the new entity. We will notify you of such changes and ensure continued protection of your data in accordance with our privacy policy and applicable laws.",
      icon: Shield,
      category: "Data Transfer"
    }
  ]

  const categories = ["All", ...Array.from(new Set(faqs.map(faq => faq.category)))]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredFaqs = selectedCategory === "All"
    ? faqs
    : faqs.filter(faq => faq.category === selectedCategory)

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
              <HelpCircle className="w-4 h-4 mr-2" />
              Terms FAQ
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get answers to common questions about our terms of service, user obligations, and platform usage.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${
                      faq.category === 'Security' ? 'from-green-500 to-emerald-500' :
                      faq.category === 'Payments' ? 'from-orange-500 to-red-500' :
                      faq.category === 'Violations' ? 'from-red-500 to-pink-500' :
                      faq.category === 'Acceptance' ? 'from-blue-500 to-cyan-500' :
                      faq.category === 'Cancellation' ? 'from-purple-500 to-pink-500' :
                      faq.category === 'Support' ? 'from-cyan-500 to-blue-500' :
                      faq.category === 'Business Use' ? 'from-indigo-500 to-purple-500' :
                      'from-teal-500 to-green-500'
                    }`}>
                      <faq.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                      <span className="text-sm text-gray-500">{faq.category}</span>
                    </div>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    {openItems.has(index) ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                </button>

                {openItems.has(index) && (
                  <div className="px-6 pb-5">
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Legal Notice */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
            <AlertTriangle className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Legal Notice</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              These FAQs are for informational purposes and do not constitute legal advice. For specific legal questions or concerns about your account, please contact our legal team directly.
            </p>
            <button className="px-8 py-3 bg-white text-blue-600 hover:bg-blue-50 rounded-xl font-semibold shadow-lg transition-all duration-300">
              Contact Legal Team
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
