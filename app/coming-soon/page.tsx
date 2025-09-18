'use client'

import { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Clock, 
  Rocket, 
  Star, 
  Users, 
  Globe, 
  Zap,
  ArrowLeft,
  Mail,
  Bell,
  CheckCircle,
  Sparkles,
  Heart,
  Target,
  TrendingUp
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

  const features = [
    {
      icon: Rocket,
      title: 'Revolutionary Features',
      description: 'Cutting-edge technology and innovative solutions'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Built by and for African businesses'
    },
    {
      icon: Globe,
      title: 'Pan-African Reach',
      description: 'Connecting all 54 African countries'
    },
    {
      icon: Zap,
      title: 'AI-Powered',
      description: 'Intelligent automation and insights'
    }
  ]

  const upcomingFeatures = [
    {
      category: 'AI & Automation',
      features: [
        'AI-powered business insights',
        'Automated customer support',
        'Predictive analytics',
        'Smart inventory management'
      ]
    },
    {
      category: 'Financial Services',
      features: [
        'Multi-currency support (54+ currencies)',
        'Digital currency integration',
        'Mobile POS solutions',
        'Real-time settlements'
      ]
    },
    {
      category: 'Business Tools',
      features: [
        'Advanced analytics dashboard',
        'Marketing automation',
        'Supply chain optimization',
        'Partnership matching'
      ]
    },
    {
      category: 'Community Features',
      features: [
        'Business networking',
        'Success recognition',
        'Educational resources',
        'Mentorship programs'
      ]
    }
  ]

  const stats = [
    { label: 'Features in Development', value: '50+', icon: Target },
    { label: 'Countries Covered', value: '54', icon: Globe },
    { label: 'Team Members', value: 'Growing', icon: Users },
    { label: 'Innovation Score', value: '99%', icon: TrendingUp }
  ]

  const handleGoBack = () => {
    router.back()
  }

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

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50">
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
              {/* Back Button */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                onClick={handleGoBack}
                className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-8 transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </motion.button>

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

        {/* Features Preview */}
        <motion.section
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="py-16 lg:py-24 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                What's <span className="text-orange-600">Coming</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Revolutionary features designed specifically for African businesses. 
                Get ready for the most comprehensive digital platform on the continent.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-100">
                    <stat.icon className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                    <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Feature Categories */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {upcomingFeatures.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 shadow-lg"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <Sparkles className="w-5 h-5 text-orange-600 mr-2" />
                    {category.category}
                  </h3>
                  <div className="space-y-3">
                    {category.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

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
