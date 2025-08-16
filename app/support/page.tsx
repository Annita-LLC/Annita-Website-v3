import { Metadata } from 'next'
import { 
  HelpCircle, 
  MessageSquare, 
  Phone, 
  Mail, 
  Search,
  BookOpen,
  Video,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  FileText,
  Play,
  Headphones
} from 'lucide-react'
import FAQSection from '@/components/sections/FAQSection'

export const metadata: Metadata = {
  title: 'Support - Get Help with Annita',
  description: 'Get help with Annita platform. Access documentation, tutorials, and contact our support team.',
}

const SupportPage = () => {
  const helpCategories = [
    {
      icon: BookOpen,
      title: 'Getting Started',
      description: 'Learn the basics of using Annita',
      articles: [
        'How to create your first store',
        'Setting up payment methods',
        'Adding your first product',
        'Understanding the dashboard'
      ]
    },
    {
      icon: Users,
      title: 'Account Management',
      description: 'Manage your account and settings',
      articles: [
        'Updating your profile',
        'Managing team members',
        'Security settings',
        'Billing and subscriptions'
      ]
    },
    {
      icon: MessageSquare,
      title: 'Communication Tools',
      description: 'Using Annita Connect features',
      articles: [
        'Setting up customer messaging',
        'Creating marketing campaigns',
        'Using analytics insights',
        'Managing customer relationships'
      ]
    },
    {
      icon: FileText,
      title: 'Payments & Transactions',
      description: 'Understanding AnnitaPay',
      articles: [
        'Setting up payment methods',
        'Processing refunds',
        'Understanding fees',
        'Security and compliance'
      ]
    }
  ]

  const contactMethods = [
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      response: 'Usually responds in 2 minutes',
      action: 'Start Chat',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      response: 'Available 24/7',
      action: 'Call Now',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      response: 'Response within 4 hours',
      action: 'Send Email',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with other users',
      response: 'Community-driven support',
      action: 'Join Forum',
      color: 'from-orange-500 to-red-500'
    }
  ]

  const tutorials = [
    {
      title: 'Getting Started with Annita',
      duration: '15 min',
      level: 'Beginner',
      thumbnail: '🎯',
      description: 'Complete guide to setting up your first store'
    },
    {
      title: 'Advanced Marketing Strategies',
      duration: '25 min',
      level: 'Advanced',
      thumbnail: '📈',
      description: 'Learn advanced marketing techniques'
    },
    {
      title: 'Payment Processing Deep Dive',
      duration: '20 min',
      level: 'Intermediate',
      thumbnail: '💳',
      description: 'Understanding payment flows and security'
    },
    {
      title: 'Analytics and Reporting',
      duration: '18 min',
      level: 'Intermediate',
      thumbnail: '📊',
      description: 'Master your business analytics'
    }
  ]

  const faqs = [
    {
      question: 'How do I set up my first store?',
      answer: 'Setting up your first store is easy! Simply sign up for an account, complete your profile, add your products, and start selling. Our step-by-step guide will walk you through the entire process.'
    },
    {
      question: 'What payment methods does Annita support?',
      answer: 'Annita supports multiple payment methods including mobile money (M-Pesa, Orange Money), bank transfers, credit/debit cards, and digital wallets. We\'re constantly adding new payment options.'
    },
    {
      question: 'How secure are transactions on Annita?',
      answer: 'All transactions on Annita are secured with bank-level encryption. We use escrow services to protect both buyers and sellers, ensuring safe and secure transactions.'
    },
    {
      question: 'Can I integrate Annita with my existing systems?',
      answer: 'Yes! Annita provides comprehensive APIs and integration options. Our developer documentation includes guides for integrating with popular e-commerce platforms, accounting software, and more.'
    },
    {
      question: 'What support is available for enterprise customers?',
      answer: 'Enterprise customers receive dedicated support including a dedicated account manager, priority support queue, custom training programs, and on-site implementation assistance.'
    },
    {
      question: 'How do I track my shipments?',
      answer: 'Annita Logistics provides real-time tracking for all shipments. You can track your orders through the app, website, or receive SMS updates on delivery status.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <HelpCircle className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              <span className="text-orange-500">How Can We Help?</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8">
              Get the support you need to succeed with Annita. We're here to help 24/7.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, tutorials, or FAQs..."
                  className="w-full pl-10 sm:pl-12 pr-20 sm:pr-24 py-3 sm:py-4 bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                />
                <button className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl hover:bg-blue-700 text-xs sm:text-sm">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-orange-600 mb-4 sm:mb-6">
              Get in Touch
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the best way to get the help you need. We're here to support you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-soft text-center">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${method.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6`}>
                  <method.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-orange-600 mb-2 sm:mb-3">{method.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{method.description}</p>
                <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{method.response}</span>
                </div>
                <button className="btn-sm bg-blue-600 text-white hover:bg-blue-700 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
                  {method.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-orange-600 mb-4 sm:mb-6">
              Help Center
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions and learn how to use Annita effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {helpCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-soft">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                  <category.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-orange-600 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <ul className="space-y-3">
                  {category.articles.map((article, articleIndex) => (
                    <li key={articleIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{article}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 btn-sm bg-blue-600 text-white hover:bg-blue-700">
                  View All Articles
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-600 mb-6">
              Video Tutorials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from our comprehensive video tutorials and master Annita's features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tutorials.map((tutorial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-soft">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 text-2xl">
                  {tutorial.thumbnail}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{tutorial.title}</h3>
                <p className="text-gray-600 mb-4">{tutorial.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{tutorial.duration}</span>
                  </span>
                  <span className="px-2 py-1 bg-gray-100 rounded-full">{tutorial.level}</span>
                </div>
                <button className="w-full btn-sm bg-blue-600 text-white hover:bg-blue-700">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 lg:p-12 text-white text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our support team is ready to help you succeed. Get in touch and we'll get back to you quickly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-lg bg-white text-blue-600 hover:bg-gray-100 group">
                <Headphones className="w-5 h-5 mr-2" />
                Contact Support
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-lg border-2 border-white text-white hover:bg-white hover:text-blue-600">
                <BookOpen className="w-5 h-5 mr-2" />
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SupportPage
