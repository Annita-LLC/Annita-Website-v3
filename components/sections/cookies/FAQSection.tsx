"use client"

import { useState } from 'react'
import { HelpCircle, ChevronDown, ChevronUp, Cookie, Shield, Settings, Eye, AlertTriangle } from 'lucide-react'

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
      question: "What are cookies and why does this website use them?",
      answer: "Cookies are small text files stored on your device that help websites remember your preferences and provide a better user experience. We use cookies to maintain your login session, remember your settings, analyze website usage to improve performance, and ensure security. Some cookies are essential for basic functionality, while others are optional and can be controlled through your browser settings or our cookie management tools.",
      icon: Cookie,
      category: "Basics"
    },
    {
      question: "Can I disable cookies on this website?",
      answer: "Essential cookies required for website functionality cannot be disabled. However, you can control optional cookies (functional and analytics) through our cookie settings tool, your browser preferences, or by using private/incognito browsing mode. Note that disabling certain cookies may affect your experience on our website.",
      icon: Settings,
      category: "Control"
    },
    {
      question: "How long do cookies stay on my device?",
      answer: "Cookie lifespans vary: session cookies are deleted when you close your browser, while persistent cookies can remain for days, months, or years depending on their purpose. Essential security cookies typically last longer for ongoing protection, while preference cookies may expire after shorter periods. You can view and manage cookie expiration through your browser's developer tools.",
      icon: Cookie,
      category: "Technical"
    },
    {
      question: "Do you use third-party cookies?",
      answer: "Yes, we use third-party services like Google Analytics (for website analytics) and Cloudflare (for security and performance). These services set their own cookies to provide their services. We carefully select partners who follow privacy best practices, and you can opt-out of non-essential third-party cookies through our settings.",
      icon: Eye,
      category: "Third Party"
    },
    {
      question: "How do cookies affect my privacy?",
      answer: "Cookies can collect information about your browsing behavior, but we implement privacy protections: we minimize data collection, anonymize analytics data, provide user controls, and comply with privacy regulations like GDPR. Essential cookies don't track personal information, and you have full control over optional cookies that might impact privacy.",
      icon: Shield,
      category: "Privacy"
    },
    {
      question: "Can I see what cookies are being set?",
      answer: "Yes! You can view cookies set by our website through your browser's developer tools (F12 → Application/Storage → Cookies). Essential cookies are marked as such in our cookie categories, and our cookie settings tool shows which types of cookies you're allowing. You can also use browser extensions to monitor cookie activity.",
      icon: Eye,
      category: "Transparency"
    },
    {
      question: "What happens if I clear my cookies?",
      answer: "Clearing cookies will log you out of your account, reset your preferences, and may affect website functionality. Essential cookies will be set again on your next visit, but you'll need to reconfigure optional cookie preferences. Your account data remains safe - only local browser data is affected.",
      icon: AlertTriangle,
      category: "Management"
    },
    {
      question: "Do you track me across different websites?",
      answer: "No, we do not engage in cross-site tracking. Our cookies only work on our domain and subdomains. Third-party analytics services we use follow privacy regulations and anonymize data. We respect Do Not Track signals where supported and provide clear opt-out options for non-essential tracking.",
      icon: Shield,
      category: "Tracking"
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
              Cookie FAQ
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Get answers to common questions about cookies, privacy, and how we use tracking technologies on our platform.
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
                      faq.category === 'Privacy' ? 'from-green-500 to-emerald-500' :
                      faq.category === 'Control' ? 'from-orange-500 to-red-500' :
                      faq.category === 'Basics' ? 'from-blue-500 to-cyan-500' :
                      faq.category === 'Technical' ? 'from-purple-500 to-pink-500' :
                      faq.category === 'Third Party' ? 'from-cyan-500 to-blue-500' :
                      faq.category === 'Transparency' ? 'from-indigo-500 to-purple-500' :
                      faq.category === 'Management' ? 'from-pink-500 to-rose-500' :
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
                      <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Additional Resources */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
            <Cookie className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Need More Help with Cookies?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto leading-relaxed">
              Still have questions about cookies or need help managing your preferences? Our privacy team is here to help you understand and control your cookie settings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-xl font-semibold text-white shadow-lg transition-all duration-300">
                Contact Privacy Team
              </button>
              <button className="px-6 py-3 bg-white text-blue-600 hover:bg-blue-50 rounded-xl font-semibold shadow-lg transition-all duration-300">
                Manage Cookie Settings
              </button>
              <button className="px-6 py-3 bg-transparent hover:bg-white/10 border border-white/30 rounded-xl font-semibold text-white shadow-lg transition-all duration-300">
                Learn More About Privacy
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
