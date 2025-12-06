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

          </div>
        </div>
      </div>
    </>
  )
}

export default NotFoundPage
