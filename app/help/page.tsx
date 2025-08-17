"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import { Search, HelpCircle, MessageCircle, Mail, Phone, FileText, CreditCard, ShoppingCart, Truck, Zap, Users, Shield } from 'lucide-react'

const HelpPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const categories = [
    { id: 'all', label: 'All Topics', icon: HelpCircle, count: 25 },
    { id: 'payments', label: 'Payments', icon: CreditCard, count: 8 },
    { id: 'shopping', label: 'Shopping', icon: ShoppingCart, count: 6 },
    { id: 'logistics', label: 'Logistics', icon: Truck, count: 4 },
    { id: 'ai', label: 'AI Services', icon: Zap, count: 3 },
    { id: 'account', label: 'Account', icon: Users, count: 4 }
  ]

  const faqs = [
    // Payments
    {
      id: 1,
      category: 'payments',
      question: 'How do I set up my AnnitaPay account?',
      answer: 'Setting up your AnnitaPay account is simple. Download the app, verify your phone number, add your bank details, and you\'re ready to start making secure digital payments.',
      tags: ['setup', 'verification', 'bank']
    },
    {
      id: 2,
      category: 'payments',
      question: 'What are the transaction limits?',
      answer: 'Daily limits vary based on your account verification level. Basic accounts have a $500 daily limit, while verified accounts can transact up to $5,000 daily.',
      tags: ['limits', 'verification', 'daily']
    },
    {
      id: 3,
      category: 'payments',
      question: 'How secure are my transactions?',
      answer: 'All transactions are protected by bank-level encryption, two-factor authentication, and real-time fraud detection. Your funds are also insured up to $250,000.',
      tags: ['security', 'encryption', 'fraud']
    },
    {
      id: 4,
      category: 'payments',
      question: 'How long do transfers take?',
      answer: 'Domestic transfers are instant. International transfers typically complete within 1-3 business days depending on the destination country.',
      tags: ['transfers', 'timing', 'international']
    },
    {
      id: 5,
      category: 'payments',
      question: 'What fees are charged?',
      answer: 'We offer competitive rates: 1% for domestic transfers, 2.5% for international transfers, and no monthly fees. Business accounts have volume discounts.',
      tags: ['fees', 'rates', 'business']
    },
    {
      id: 6,
      category: 'payments',
      question: 'How do I dispute a transaction?',
      answer: 'Contact our support team within 30 days of the transaction. Provide transaction details and evidence. We\'ll investigate and resolve within 5 business days.',
      tags: ['dispute', 'support', 'resolution']
    },
    {
      id: 7,
      category: 'payments',
      question: 'Can I use AnnitaPay internationally?',
      answer: 'Yes! AnnitaPay works in 15+ countries across Africa. We support multiple currencies and offer competitive exchange rates.',
      tags: ['international', 'currencies', 'countries']
    },
    {
      id: 8,
      category: 'payments',
      question: 'How do I link my bank account?',
      answer: 'Go to Settings > Bank Accounts > Add Account. Enter your bank details and complete the verification process. Most banks are supported.',
      tags: ['bank', 'linking', 'verification']
    },

    // Shopping
    {
      id: 9,
      category: 'shopping',
      question: 'How do I find products on the marketplace?',
      answer: 'Use our search bar, browse categories, or explore trending products. You can filter by price, location, ratings, and more.',
      tags: ['search', 'categories', 'filtering']
    },
    {
      id: 10,
      category: 'shopping',
      question: 'What is the return policy?',
      answer: 'Most items can be returned within 14 days if unused and in original packaging. Some items have extended return periods. Check individual product pages for details.',
      tags: ['returns', 'policy', 'packaging']
    },
    {
      id: 11,
      category: 'shopping',
      question: 'How do I track my order?',
      answer: 'Go to My Orders in your account. Click on the order to see real-time tracking updates. You\'ll also receive SMS and email notifications.',
      tags: ['tracking', 'orders', 'notifications']
    },
    {
      id: 12,
      category: 'shopping',
      question: 'Are there buyer protection guarantees?',
      answer: 'Yes! All purchases are protected by our escrow system. Funds are only released to sellers after you confirm receipt and satisfaction.',
      tags: ['protection', 'escrow', 'guarantee']
    },
    {
      id: 13,
      category: 'shopping',
      question: 'How do I contact a seller?',
      answer: 'Use the "Contact Seller" button on product pages. You can send messages, ask questions, or negotiate prices directly through our platform.',
      tags: ['seller', 'contact', 'negotiation']
    },
    {
      id: 14,
      category: 'shopping',
      question: 'What payment methods are accepted?',
      answer: 'We accept AnnitaPay, mobile money, bank transfers, and major credit cards. All payments are processed securely through our platform.',
      tags: ['payment', 'methods', 'security']
    },

    // Logistics
    {
      id: 15,
      category: 'logistics',
      question: 'How do I schedule a delivery?',
      answer: 'After placing an order, you can choose your preferred delivery time slot. Same-day delivery is available in major cities.',
      tags: ['delivery', 'scheduling', 'same-day']
    },
    {
      id: 16,
      category: 'logistics',
      question: 'What are the delivery fees?',
      answer: 'Fees vary by distance and delivery speed. Standard delivery (2-3 days) starts at $2. Express delivery (same day) starts at $5.',
      tags: ['fees', 'delivery', 'speed']
    },
    {
      id: 17,
      category: 'logistics',
      question: 'Can I track my delivery in real-time?',
      answer: 'Yes! Use our live tracking feature to see your delivery driver\'s location and estimated arrival time in real-time.',
      tags: ['tracking', 'real-time', 'driver']
    },
    {
      id: 18,
      category: 'logistics',
      question: 'What if I\'m not home for delivery?',
      answer: 'You can authorize a neighbor, reschedule, or choose a pickup location. We\'ll attempt delivery 3 times before returning the item.',
      tags: ['authorization', 'reschedule', 'pickup']
    },

    // AI Services
    {
      id: 19,
      category: 'ai',
      question: 'How does Annita AI work?',
      answer: 'Our AI uses advanced machine learning to understand your needs and provide personalized assistance. It learns from your interactions to improve over time.',
      tags: ['ai', 'machine learning', 'personalization']
    },
    {
      id: 20,
      category: 'ai',
      question: 'Is my data safe with AI services?',
      answer: 'Absolutely. All AI interactions are encrypted and we never share your personal data with third parties. You can delete your AI history anytime.',
      tags: ['privacy', 'encryption', 'data']
    },
    {
      id: 21,
      category: 'ai',
      question: 'What can Annita AI help me with?',
      answer: 'Our AI can help with shopping recommendations, payment analysis, business insights, customer support, and much more. Just ask!',
      tags: ['recommendations', 'insights', 'support']
    },

    // Account
    {
      id: 22,
      category: 'account',
      question: 'How do I reset my password?',
      answer: 'Click "Forgot Password" on the login page. Enter your email or phone number and follow the verification steps to create a new password.',
      tags: ['password', 'reset', 'verification']
    },
    {
      id: 23,
      category: 'account',
      question: 'How do I update my profile information?',
      answer: 'Go to Account Settings > Profile. You can update your personal information, contact details, and preferences anytime.',
      tags: ['profile', 'settings', 'update']
    },
    {
      id: 24,
      category: 'account',
      question: 'Can I have multiple accounts?',
      answer: 'You can have one personal account and one business account. Business accounts require additional verification and documentation.',
      tags: ['multiple', 'business', 'verification']
    },
    {
      id: 25,
      category: 'account',
      question: 'How do I delete my account?',
      answer: 'Contact our support team. We\'ll guide you through the process and ensure all your data is properly removed from our systems.',
      tags: ['delete', 'support', 'data']
    }
  ]

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const toggleFaq = (id: number) => {
    setExpandedFaq(expandedFaq === id ? null : id)
  }

  return (
    <>
      <SEOHead
        title="Help Center - Annita LLC"
        description="Get help with Annita services. Find answers to frequently asked questions, contact support, and learn how to use our platform."
        keywords="help, support, FAQ, customer service, Annita, assistance"
        canonical="/help"
        ogImage="/images/help-center.jpg"
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600"></div>
          <div className="absolute inset-0 bg-black opacity-20"></div>
          
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                How Can We <span className="text-orange-200">Help?</span>
              </h1>
              <p className="text-xl sm:text-2xl text-orange-100 max-w-3xl mx-auto mb-8">
                Find answers to your questions and get the support you need
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                  <input
                    type="text"
                    placeholder="Search for help articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 text-lg text-gray-900 rounded-xl focus:ring-2 focus:ring-white focus:outline-none"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    activeCategory === category.id
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-20" ref={ref}>
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Frequently Asked <span className="text-orange-600">Questions</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Quick answers to the most common questions about our services
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-4">
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      <div className={`transform transition-transform duration-200 ${
                        expandedFaq === faq.id ? 'rotate-180' : ''
                      }`}>
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                  
                  {expandedFaq === faq.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {faq.answer}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {faq.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-gray-50 to-white">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Still Need <span className="text-orange-600">Help?</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Our support team is here to help you 24/7
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-4">Get instant help from our support team</p>
                <button className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200">
                  Start Chat
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Support</h3>
                <p className="text-gray-600 mb-4">Send us a detailed message</p>
                <a
                  href="mailto:support@annita.com"
                  className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 inline-block"
                >
                  Send Email
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phone Support</h3>
                <p className="text-gray-600 mb-4">Call us for immediate assistance</p>
                <a
                  href="tel:+231775057227"
                  className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 inline-block"
                >
                  Call Now
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default HelpPage
