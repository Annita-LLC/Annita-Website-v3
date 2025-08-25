'use client'

import { motion } from 'framer-motion'
import { 
  Home, 
  ArrowLeft, 
  Search, 
  HelpCircle, 
  Mail,
  Phone,
  MapPin
} from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import SEOHead from '@/components/seo/SEOHead'

const NotFoundPage = () => {
  const quickLinks = [
    {
      title: 'Home',
      description: 'Return to the main page',
      icon: Home,
      href: '/',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Support',
      description: 'Get help and find answers',
      icon: HelpCircle,
      
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Contact',
      description: 'Reach out to our team',
      icon: Mail,
      href: '/contact',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'annitallc@gmail.com',
      href: 'mailto:annitallc@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+231 77 505 7227',
      href: 'tel:+231775057227'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Duazon, Silver Beach Road-Monrovia, Liberia',
      href: '#'
    }
  ]

  return (
    <>
      <SEOHead
        title="404 - Page Not Found | Annita"
        description="The page you're looking for doesn't exist. Return to Annita's homepage or get in touch with our support team."
        keywords={['404', 'page not found', 'error', 'Annita', 'support']}
        canonical="/404"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* 404 Number */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-8xl sm:text-9xl lg:text-[12rem] font-bold bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 bg-clip-text text-transparent">
                404
              </h1>
            </motion.div>

            {/* Main Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Oops! Page Not Found
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                The page you're looking for doesn't exist or has been moved. 
                Don't worry, we're here to help you find what you need.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Link href="/">
                <Button
                  variant="gradient"
                  size="lg"
                  icon={Home}
                  className="w-full sm:w-auto"
                >
                  Go Home
                </Button>
              </Link>
              <button
                onClick={() => window.history.back()}
                className="btn-lg border-2 border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-600 w-full sm:w-auto flex items-center justify-center"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </button>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                Quick Links
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {quickLinks.map((link, index) => (
                  <Link key={link.title} href={link.href}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-medium transition-all duration-300 group"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${link.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <link.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {link.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {link.description}
                      </p>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-to-r from-orange-50 to-red-50 rounded-3xl p-6 sm:p-8 border border-orange-100"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                Need Help? Contact Us
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {contactInfo.map((contact, index) => (
                  <div key={contact.label} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <contact.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-medium text-gray-900">
                        {contact.label}
                      </div>
                      {contact.href !== '#' ? (
                        <a
                          href={contact.href}
                          className="text-sm text-gray-600 hover:text-orange-600 transition-colors"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <div className="text-sm text-gray-600">
                          {contact.value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Search Suggestion */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mt-8"
            >
              <p className="text-gray-500 mb-4">
                Or try searching for what you're looking for:
              </p>
              <div className="max-w-md mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search our website..."
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFoundPage
