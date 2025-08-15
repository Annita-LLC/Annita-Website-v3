'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { 
  Search,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  MessageSquare,
  Phone,
  Mail,
  Zap,
  Shield,
  Users,
  CreditCard,
  Truck,
  Globe,
  Star,
  CheckCircle,
  ArrowRight,
  X
} from 'lucide-react'
import Button from '@/components/ui/Button'

interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
  tags: string[]
}

const FAQSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const faqData: FAQItem[] = [
    {
      id: 'store-setup',
      question: 'How do I set up my first store?',
      answer: 'Setting up your first store is easy! Simply sign up for an account, complete your profile, add your products, and start selling. Our step-by-step guide will walk you through the entire process. You can also schedule a free consultation with our onboarding team for personalized assistance.',
      category: 'Getting Started',
      tags: ['store', 'setup', 'onboarding', 'products']
    },
    {
      id: 'payment-methods',
      question: 'What payment methods does Annita support?',
      answer: 'Annita supports multiple payment methods including mobile money (M-Pesa, Orange Money, MTN Mobile Money), bank transfers, credit/debit cards, and digital wallets. We\'re constantly adding new payment options to serve our diverse African market. All transactions are secured with bank-level encryption.',
      category: 'Payments',
      tags: ['payments', 'mobile money', 'cards', 'security']
    },
    {
      id: 'security',
      question: 'How secure are transactions on Annita?',
      answer: 'All transactions on Annita are secured with bank-level encryption and PCI DSS compliance. We use escrow services to protect both buyers and sellers, ensuring safe and secure transactions. Our fraud detection system monitors all activities in real-time.',
      category: 'Security',
      tags: ['security', 'encryption', 'escrow', 'fraud protection']
    },
    {
      id: 'integrations',
      question: 'Can I integrate Annita with my existing systems?',
      answer: 'Yes! Annita provides comprehensive APIs and integration options. Our developer documentation includes guides for integrating with popular e-commerce platforms, accounting software, CRM systems, and more. We also offer custom integration services for enterprise clients.',
      category: 'Integrations',
      tags: ['api', 'integrations', 'developers', 'enterprise']
    },
    {
      id: 'enterprise-support',
      question: 'What support is available for enterprise customers?',
      answer: 'Enterprise customers receive dedicated support including a dedicated account manager, priority support queue, custom training programs, and on-site implementation assistance. We also provide 24/7 phone support and custom SLA agreements.',
      category: 'Enterprise',
      tags: ['enterprise', 'support', 'dedicated', 'training']
    },
    {
      id: 'shipment-tracking',
      question: 'How do I track my shipments?',
      answer: 'Annita Logistics provides real-time tracking for all shipments. You can track your orders through the app, website, or receive SMS updates on delivery status. Our tracking system integrates with major logistics providers across Africa.',
      category: 'Logistics',
      tags: ['tracking', 'logistics', 'delivery', 'real-time']
    }
  ]

  const categories = [
    { id: 'all', name: 'All Questions', icon: HelpCircle, count: faqData.length },
    { id: 'Getting Started', name: 'Getting Started', icon: Zap, count: faqData.filter(f => f.category === 'Getting Started').length },
    { id: 'Payments', name: 'Payments', icon: CreditCard, count: faqData.filter(f => f.category === 'Payments').length },
    { id: 'Security', name: 'Security', icon: Shield, count: faqData.filter(f => f.category === 'Security').length },
    { id: 'Integrations', name: 'Integrations', icon: Globe, count: faqData.filter(f => f.category === 'Integrations').length },
    { id: 'Enterprise', name: 'Enterprise', icon: Users, count: faqData.filter(f => f.category === 'Enterprise').length },
    { id: 'Logistics', name: 'Logistics', icon: Truck, count: faqData.filter(f => f.category === 'Logistics').length }
  ]

  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const toggleExpanded = (id: string) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4 mr-2" />
            Help Center
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find quick answers to the most common questions about Annita. 
            Can't find what you're looking for? Our support team is here to help.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12"
        >
          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search questions, answers, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-soft"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  selectedCategory === category.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <AnimatePresence>
            {filteredFAQs.length > 0 ? (
              <div className="space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleExpanded(faq.id)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="inline-flex items-center px-2 py-1 rounded-full bg-blue-100 text-blue-700">
                            {faq.category}
                          </span>
                          <span>{faq.tags.slice(0, 2).join(', ')}</span>
                        </div>
                      </div>
                      <div className="ml-4">
                        {expandedItems.includes(faq.id) ? (
                          <ChevronUp className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {expandedItems.includes(faq.id) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5">
                            <p className="text-gray-600 leading-relaxed mb-4">{faq.answer}</p>
                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                              <div className="flex items-center space-x-2 text-sm text-gray-500">
                                <CheckCircle className="w-4 h-4" />
                                <span>Was this helpful?</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                {faq.tags.map((tag, tagIndex) => (
                                  <span
                                    key={tagIndex}
                                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No questions found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search terms or browse all categories
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedCategory('all')
                  }}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <X className="w-4 h-4 mr-2" />
                  Clear filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 lg:p-12 text-white text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Still Need Help?
            </h3>
            <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8">
              Our support team is here to help you succeed. Get in touch with us through any of these channels.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Live Chat</h4>
                <p className="text-white/80 text-sm mb-4">Get instant help</p>
                <Button
                  variant="glass"
                  size="sm"
                  icon={ArrowRight}
                  className="text-sm font-medium"
                >
                  Start Chat
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Phone Support</h4>
                <p className="text-white/80 text-sm mb-4">Speak with an expert</p>
                <Button
                  variant="glass"
                  size="sm"
                  icon={ArrowRight}
                  className="text-sm font-medium"
                >
                  Call Now
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Email Support</h4>
                <p className="text-white/80 text-sm mb-4">Send us a message</p>
                <Button
                  variant="glass"
                  size="sm"
                  icon={ArrowRight}
                  className="text-sm font-medium"
                >
                  Send Email
                </Button>
              </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="gradient"
                size="xl"
                icon={MessageSquare}
                className="text-lg font-bold shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300"
              >
                Contact Support
              </Button>
              <Button
                variant="glass"
                size="xl"
                icon={HelpCircle}
                className="text-lg font-bold backdrop-blur-xl shadow-2xl hover:shadow-white/10 transform hover:-translate-y-1 transition-all duration-300"
              >
                Browse Help Center
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQSection
