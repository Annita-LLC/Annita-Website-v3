"use client"

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Shield,
  Lock,
  Eye,
  Users,
  Globe,
  AlertTriangle,
  CheckCircle
} from 'lucide-react'

const FAQSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
      question: "How do you protect my personal information?",
      answer: "We implement multiple layers of security including 256-bit AES encryption, regular security audits, access controls, and 24/7 monitoring. Your data is encrypted both in transit and at rest, and we follow industry best practices for data protection.",
      icon: Shield,
      category: "Security"
    },
    {
      question: "Do you sell my personal data to third parties?",
      answer: "No, we do not sell, trade, or rent your personal information to third parties for marketing purposes. We only share information as described in our Privacy Policy, such as with service providers who help us operate our platform, or when required by law.",
      icon: Users,
      category: "Data Sharing"
    },
    {
      question: "What information do you collect automatically?",
      answer: "We automatically collect technical information such as your IP address, browser type, device information, and usage patterns. We may also collect location data with your consent. This helps us improve our services and ensure platform security.",
      icon: Globe,
      category: "Data Collection"
    },
    {
      question: "How can I access or delete my personal data?",
      answer: "You can exercise your data rights by contacting our privacy team. Depending on your location, you may have rights to access, correct, delete, or portabilize your data. We'll respond to your request within 30 days as required by applicable privacy laws.",
      icon: Eye,
      category: "Your Rights"
    },
    {
      question: "Do you use cookies, and how can I control them?",
      answer: "Yes, we use essential cookies for basic functionality and optional analytics cookies to improve our services. You can control cookie preferences through your browser settings or our cookie management tool. Essential cookies cannot be disabled as they're required for the website to function.",
      icon: Lock,
      category: "Cookies"
    },
    {
      question: "How do you handle data breaches or security incidents?",
      answer: "In the unlikely event of a security incident, we have an incident response plan that includes immediate containment, assessment, notification (where legally required), and remediation. We maintain detailed logs and conduct post-incident reviews to prevent future occurrences.",
      icon: AlertTriangle,
      category: "Security"
    },
    {
      question: "Can I opt out of marketing communications?",
      answer: "Yes, you can unsubscribe from marketing communications at any time using the unsubscribe link in our emails or by contacting us directly. Even if you opt out of marketing, we'll still send you important service-related communications.",
      icon: CheckCircle,
      category: "Communications"
    },
    {
      question: "Where is my data stored, and is it safe?",
      answer: "Your data is stored on secure, SOC 2 compliant servers with redundant backups and disaster recovery systems. We use industry-leading cloud providers with bank-grade security certifications. All data transfers are encrypted using TLS 1.3.",
      icon: Shield,
      category: "Data Storage"
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
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
              <HelpCircle className="w-4 h-4 mr-2" />
              Privacy FAQ
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Privacy Questions
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find answers to the most common questions about how we handle your privacy and personal data.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
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
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${faq.category === 'Security' ? 'from-green-500 to-emerald-500' : faq.category === 'Data Sharing' ? 'from-orange-500 to-red-500' : faq.category === 'Data Collection' ? 'from-blue-500 to-cyan-500' : faq.category === 'Your Rights' ? 'from-purple-500 to-pink-500' : faq.category === 'Cookies' ? 'from-pink-500 to-rose-500' : faq.category === 'Communications' ? 'from-cyan-500 to-blue-500' : 'from-indigo-500 to-purple-500'} `}>
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
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5"
                  >
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Still Have Questions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl p-8 text-white">
              <HelpCircle className="w-12 h-12 text-blue-200 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our privacy team is here to help with any questions about your data and privacy rights.
              </p>
              <button className="px-8 py-3 bg-white text-blue-600 hover:bg-blue-50 rounded-xl font-semibold shadow-lg transition-all duration-300">
                Contact Privacy Team
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
