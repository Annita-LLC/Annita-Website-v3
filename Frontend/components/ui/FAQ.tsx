'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Search, HelpCircle, MessageCircle, Mail, Phone } from 'lucide-react'

interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
  tags?: string[]
}

interface FAQProps {
  items: FAQItem[]
  title?: string
  description?: string
  showSearch?: boolean
  showCategories?: boolean
  className?: string
}

const faqData: FAQItem[] = [
  // General Questions
  {
    id: 'what-is-annita',
    question: 'What is Annita?',
    answer: 'Annita is a comprehensive digital platform designed to empower businesses and individuals across Africa. We provide e-commerce, fintech, logistics, AI, and business management solutions all in one integrated ecosystem.',
    category: 'General',
    tags: ['platform', 'overview', 'africa']
  },
  {
    id: 'annita-3-0',
    question: 'What is Annita 3.0?',
    answer: 'Annita 3.0 is our revolutionary next-generation platform featuring offline functionality, advanced AI integration, comprehensive business tools, and enhanced security. It\'s designed to work seamlessly even in areas with poor internet connectivity.',
    category: 'General',
    tags: ['v3', 'offline', 'ai', 'future']
  },
  {
    id: 'current-version',
    question: 'What version is currently available?',
    answer: 'We currently have Annita V1.0 (Live Marketplace) available with 3,000+ active vendors. Annita 3.0 is in development and will be released in Q2 2025.',
    category: 'General',
    tags: ['version', 'marketplace', 'timeline']
  },

  // Services
  {
    id: 'annitapay',
    question: 'What is AnnitaPay?',
    answer: 'AnnitaPay is our secure digital payment solution that supports multiple payment methods, escrow protection, instant settlements, and fraud detection. It\'s available for both personal and business use.',
    category: 'Services',
    tags: ['payments', 'security', 'fintech']
  },
  {
    id: 'ai-assistant',
    question: 'How does the AI Assistant work?',
    answer: 'Our AI Assistant uses advanced machine learning to provide business insights, automate tasks, offer recommendations, and help with decision-making. It supports natural language processing and can be accessed through multiple interfaces.',
    category: 'Services',
    tags: ['ai', 'automation', 'insights']
  },
  {
    id: 'logistics-network',
    question: 'What is the Annita Logistics Network?',
    answer: 'Our logistics network provides end-to-end supply chain management, including pickup centers, fulfillment centers, last-mile delivery, and real-time tracking. We\'re building a comprehensive network across Africa.',
    category: 'Services',
    tags: ['logistics', 'delivery', 'supply-chain']
  },

  // Technical
  {
    id: 'offline-functionality',
    question: 'How does offline functionality work?',
    answer: 'Annita 3.0 uses advanced caching and synchronization technology to allow core features to work without internet. Data is stored locally and synced when connectivity is restored, ensuring business continuity.',
    category: 'Technical',
    tags: ['offline', 'sync', 'connectivity']
  },
  {
    id: 'security',
    question: 'How secure is Annita?',
    answer: 'We implement enterprise-grade security including end-to-end encryption, multi-factor authentication, escrow protection, and regular security audits. Your data and transactions are protected with bank-level security.',
    category: 'Technical',
    tags: ['security', 'encryption', 'protection']
  },
  {
    id: 'device-support',
    question: 'What devices are supported?',
    answer: 'Annita works on all major platforms including web browsers, iOS, Android, and USSD codes. We also support offline functionality and progressive web app features for seamless cross-platform experience.',
    category: 'Technical',
    tags: ['devices', 'platforms', 'compatibility']
  },

  // Business
  {
    id: 'business-account',
    question: 'How do I create a business account?',
    answer: 'You can create a business account through our registration process. We offer different tiers including basic, professional, and enterprise plans with varying features and support levels.',
    category: 'Business',
    tags: ['registration', 'account', 'plans']
  },
  {
    id: 'vendor-application',
    question: 'How can I become a vendor?',
    answer: 'Apply to become a vendor through our partner application process. We review applications and provide onboarding support, training, and ongoing assistance to help you succeed on our platform.',
    category: 'Business',
    tags: ['vendor', 'partnership', 'application']
  },
  {
    id: 'pricing',
    question: 'What are the pricing plans?',
    answer: 'We offer transparent pricing with no hidden fees. Plans include free basic accounts, professional subscriptions, and enterprise solutions. Visit our pricing page for detailed information.',
    category: 'Business',
    tags: ['pricing', 'plans', 'cost']
  },

  // Support
  {
    id: 'customer-support',
    question: 'How can I get customer support?',
    answer: 'We provide 24/7 customer support through multiple channels including live chat, email, phone, and our help center. Our AI assistant can also help with common questions instantly.',
    category: 'Support',
    tags: ['support', 'help', 'contact']
  },
  {
    id: 'report-issues',
    question: 'How do I report bugs or issues?',
    answer: 'You can report issues through our dedicated support portal, email, or by using the in-app feedback feature. We prioritize all reports and provide regular updates on resolution status.',
    category: 'Support',
    tags: ['bugs', 'issues', 'feedback']
  },
  {
    id: 'training',
    question: 'Do you provide training?',
    answer: 'Yes! We offer comprehensive training programs including video tutorials, documentation, webinars, and personalized training sessions for businesses and individuals.',
    category: 'Support',
    tags: ['training', 'tutorials', 'education']
  }
]

export default function FAQ({
  items = faqData,
  title = "Frequently Asked Questions",
  description = "Find answers to common questions about Annita and our services.",
  showSearch = true,
  showCategories = true,
  className = ''
}: FAQProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(items.map(item => item.category)))]

  // Filter items based on search and category
  const filteredItems = items.filter(item => {
    const matchesSearch = !searchQuery || 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <div className={`max-w-4xl mx-auto ${className}`}>
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {title}
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        {showSearch && (
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
        )}

        {showCategories && (
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    {item.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      openItems.has(item.id) ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-xs bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                  {item.tags && item.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </button>

              <AnimatePresence>
                {openItems.has(item.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))
        ) : (
          <div className="text-center py-12">
            <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              No FAQs found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search or category filter.
            </p>
          </div>
        )}
      </div>

      {/* Contact Support */}
      <div className="mt-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
        <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
          Our support team is here to help you 24/7. Get in touch with us through any of these channels.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact-us"
            className="flex items-center justify-center space-x-2 px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>Email Support</span>
          </a>
          <a
            href="/support/report-issues"
            className="flex items-center justify-center space-x-2 px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Live Chat</span>
          </a>
          <a
            href="/contact-sales"
            className="flex items-center justify-center space-x-2 px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>Phone Support</span>
          </a>
        </div>
      </div>
    </div>
  )
}
