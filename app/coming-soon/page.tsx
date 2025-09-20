'use client'

import { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Clock,
  Star,
  Globe,
  Mail,
  Bell,
  CheckCircle,
  Heart
} from 'lucide-react'
import { useRef } from 'react'
import { useRouter } from 'next/navigation'
import SEOHead from '@/components/seo/SEOHead'
import Button from '@/components/ui/Button'
import WaitlistForm from '@/components/ui/WaitlistForm'

const ComingSoonPage = () => {
  const router = useRouter()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const [email, setEmail] = useState('')
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)



  const handleJoinWaitlist = () => {
    setIsWaitlistOpen(true)
  }

  const handleWaitlistSuccess = () => {
    setShowSuccess(true)
    setIsWaitlistOpen(false)
  }

  return (
    <>
      <SEOHead
        title="Coming Soon - Annita Platform"
        description="Exciting new features and services are coming to Annita. Join our waitlist to be the first to experience the future of African business."
        keywords={[
          'coming soon',
          'Annita platform',
          'new features',
          'waitlist',
          'African business',
          'digital platform',
          'innovation'
        ]}
        canonical="/coming-soon"
        ogImage="/coming-soon-og.jpg"
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="text-center">

              {/* Main Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="max-w-4xl mx-auto"
              >
                <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Clock className="w-4 h-4 mr-2" />
                Coming Soon
              </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Something Amazing is
                  <span className="text-orange-600 block">Coming Soon</span>
              </h1>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  We're working hard to bring you revolutionary features that will transform 
                  how African businesses operate. Get ready for the future of digital commerce.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button
                    onClick={handleJoinWaitlist}
                    className="group"
                  size="lg"
                >
                    <Bell className="w-5 h-5 mr-2" />
                  Join Waitlist
                    <Star className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                </Button>
                <Button
                    variant="outline"
                    onClick={() => router.push('/')}
                  size="lg"
                >
                    <Globe className="w-5 h-5 mr-2" />
                    Explore Current Features
                </Button>
              </div>
              </motion.div>
                </div>
              </div>
            </motion.div>


        {/* CTA Section */}
        <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="py-16 lg:py-24 bg-gradient-to-r from-orange-500 to-red-500"
            >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Be the First to Experience the Future
              </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of African businesses already on our waitlist. 
              Get early access to revolutionary features and exclusive updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleJoinWaitlist}
                variant="secondary"
                size="lg"
                className="group"
              >
                <Mail className="w-5 h-5 mr-2" />
                Join Waitlist Now
                <Heart className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
              <Button
                variant="outline"
                onClick={() => router.push('/contact')}
                size="lg"
                className="border-white text-white hover:bg-white hover:text-orange-600"
              >
                Contact Us
              </Button>
                  </div>
                </div>
        </motion.section>

        {/* Waitlist Modal */}
        <WaitlistForm
          isOpen={isWaitlistOpen}
          onClose={() => setIsWaitlistOpen(false)}
          onSuccess={handleWaitlistSuccess}
        />

        {/* Success Message */}
        {showSuccess && (
              <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowSuccess(false)}
          >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full text-center"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                You're on the Waitlist!
              </h3>
              <p className="text-gray-600 mb-6">
                Thank you for joining! We'll notify you as soon as these amazing features are ready.
              </p>
              <Button onClick={() => setShowSuccess(false)}>
                Awesome!
              </Button>
              </motion.div>
          </motion.div>
        )}
      </div>
    </>
  )
}

export default ComingSoonPage
