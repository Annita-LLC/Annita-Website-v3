'use client'

import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import { 
  Download,
  Smartphone,
  CheckCircle,
  QrCode,
  ArrowRight,
  Star,
  Shield,
  Zap,
  Globe,
  Users,
  Clock,
  Award,
  Mail,
  Phone,
  MessageSquare,
  ExternalLink,
  Apple,
  Play,
  TrendingUp,
  Lock,
  Wifi,
  WifiOff,
  Heart,
  Target,
  Building,
  CreditCard,
  ShoppingCart,
  Truck,
  BarChart3,
  MessageCircle,
  Bell,
  Settings,
  HelpCircle,
  ChevronRight,
  Check,
  X,
  Eye,
  EyeOff,
  Fingerprint,
  Smartphone as PhoneIcon,
  Monitor,
  Tablet
} from 'lucide-react'
import Link from 'next/link'
import { useFormSubmission, formValidations } from '@/lib/hooks/useFormSubmission'

export default function DownloadPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [selectedPlatform, setSelectedPlatform] = useState('')
  const [email, setEmail] = useState('')
  const [showFeatures, setShowFeatures] = useState(false)
  const { submitForm, isSubmitting, isSubmitted, error, success, reset } = useFormSubmission({
    validateForm: formValidations.download,
    onSuccess: (data) => {
      console.log('download form submitted successfully:', data)
    },
    onError: (error) => {
      console.error('download form submission failed:', error)
    }
  })

  const platforms = [
    {
      id: 'ios',
      name: 'iOS App',
      description: 'Download for iPhone and iPad',
      icon: Apple,
      color: 'from-blue-500 to-purple-500',
      store: 'App Store',
      rating: 'Pending',
      downloads: 'Pending',
      size: 'TBD',
      version: 'Coming Soon',
      requirements: 'iOS 14.0 or later',
      devices: ['iPhone', 'iPad', 'iPod touch']
    },
    {
      id: 'android',
      name: 'Android App',
      description: 'Download for Android devices',
      icon: Play,
      color: 'from-green-500 to-emerald-500',
      store: 'Google Play',
      rating: 'Pending',
      downloads: 'Pending',
      size: 'TBD',
      version: 'Coming Soon',
      requirements: 'Android 8.0 or later',
      devices: ['Smartphone', 'Tablet']
    }
  ]

  const appFeatures = [
    {
      icon: Shield,
      title: 'Bank-Grade Security',
      description: '256-bit encryption, biometric authentication, and fraud protection',
      category: 'Security'
    },
    {
      icon: CreditCard,
      title: 'AnnitaPay Integration',
      description: 'Send, receive, and manage payments with competitive rates',
      category: 'Payments'
    },
    {
      icon: ShoppingCart,
      title: 'Marketplace Shopping',
      description: 'Browse and buy from thousands of African vendors',
      category: 'Commerce'
    },
    {
      icon: Truck,
      title: 'Real-time Tracking',
      description: 'Track deliveries and logistics with live updates',
      category: 'Logistics'
    },
    {
      icon: BarChart3,
      title: 'Business Analytics',
      description: 'Comprehensive insights and performance metrics',
      category: 'Analytics'
    },
    {
      icon: MessageCircle,
      title: 'Communication Hub',
      description: 'Chat, video calls, and team collaboration tools',
      category: 'Communication'
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Personalized alerts and important updates',
      category: 'Notifications'
    },
    {
      icon: WifiOff,
      title: 'Offline Mode',
      description: 'Access key features even without internet',
      category: 'Accessibility'
    },
    {
      icon: Globe,
      title: 'Multi-Language',
      description: 'Available in 10+ African languages',
      category: 'Localization'
    },
    {
      icon: Target,
      title: 'AI-Powered Tools',
      description: 'Smart recommendations and automated workflows',
      category: 'AI'
    },
    {
      icon: Building,
      title: 'Business Management',
      description: 'Complete suite of business tools and resources',
      category: 'Business'
    },
    {
      icon: Heart,
      title: 'Community Features',
      description: 'Connect with local businesses and customers',
      category: 'Community'
    }
  ]

  const appStats = [
    { label: 'Total Downloads', value: 'Pending', icon: Download, color: 'from-blue-500 to-blue-600' },
    { label: 'Active Users', value: 'Pending', icon: Users, color: 'from-green-500 to-green-600' },
    { label: 'Average Rating', value: 'Pending', icon: Star, color: 'from-yellow-500 to-yellow-600' },
    { label: 'Countries', value: '2', icon: Globe, color: 'from-purple-500 to-purple-600' }
  ]

  const featureCategories = [
    { name: 'All', count: appFeatures.length },
    { name: 'Security', count: appFeatures.filter(f => f.category === 'Security').length },
    { name: 'Payments', count: appFeatures.filter(f => f.category === 'Payments').length },
    { name: 'Commerce', count: appFeatures.filter(f => f.category === 'Commerce').length },
    { name: 'Business', count: appFeatures.filter(f => f.category === 'Business').length }
  ]

  const handlePlatformSelect = (platformId: string) => {
    setSelectedPlatform(platformId)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedPlatform || !email) return
    
    const formData = {
      email: email,
      platform: selectedPlatform
    }
    
    await submitForm('download', formData)
  }

  return (
    <>
      <SEOHead
        title="Join Annita Waitlist - Africa's All-in-One Digital Platform"
        description="Join Annita's waitlist for early access to Africa's all-in-one digital platform. Coming soon with secure payments, marketplace shopping, AI tools, real-time tracking, and more. Be the first to experience our mobile app on iOS and Android."
        keywords={[
          'download Annita',
          'Annita mobile app',
          'Annita app download',
          'iOS app',
          'Android app',
          'mobile application',
          'Africa digital platform',
          'all-in-one platform',
          'secure payments',
          'marketplace app',
          'AI tools',
          'real-time tracking',
          'mobile money',
          'e-commerce app',
          'business tools',
          'offline functionality',
          'push notifications',
          'biometric authentication',
          'multi-language support',
          'App Store',
          'Google Play',
          'mobile banking',
          'digital wallet',
          'shopping app',
          'delivery tracking',
          'business app',
          'African app',
          'MSME app',
          'small business app',
          'entrepreneur app',
          'digital transformation',
          'mobile commerce',
          'fintech app',
          'logistics app',
          'marketing app',
          'communication app',
          'mobile payments',
          'cross-border payments',
          'local payments',
          'mobile security',
          'app security',
          'data protection',
          'privacy protection'
        ]}
        canonical="/download"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-orange-100 to-red-50 py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-orange-200/30 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-red-200/20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-orange-300/25 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-red-300/20 rounded-full animate-bounce delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Main Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left"
              >
              <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Mobile App Coming Soon
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Join <span className="text-orange-500">Annita</span> Waitlist
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Join our waitlist for Africa's all-in-one digital platform. 
                Coming soon with secure payments, marketplace shopping, AI tools, and real-time tracking.
              </p>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8">
                  {appStats.slice(0, 2).map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      className="bg-white/80 backdrop-blur-sm rounded-lg p-2 sm:p-3 md:p-4 shadow-sm border border-orange-200"
                    >
                      <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-xs sm:text-sm text-gray-600 leading-tight">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center lg:justify-start">
                  <button 
                    onClick={() => setShowFeatures(true)}
                    className="bg-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-orange-700 transition-all duration-200 flex items-center justify-center shadow-lg text-sm sm:text-base"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Features
                  </button>
                  <button 
                    onClick={() => document.getElementById('download-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="border-2 border-orange-600 text-orange-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-200 flex items-center justify-center text-sm sm:text-base"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Join Waitlist
                  </button>
                </div>
              </motion.div>

              {/* Right Column - App Preview */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-orange-200 shadow-2xl">
                  <div className="text-center mb-4 sm:mb-6">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">App Preview</h3>
                    <p className="text-xs sm:text-sm text-gray-600">Experience the future of digital commerce</p>
                  </div>
                  
                  {/* Real Demo Image */}
                  <div className="relative mx-auto group">
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-gray-100 bg-gradient-to-br from-gray-50 to-white p-2">
                      <img 
                        src="/plain.jpg" 
                        alt="Annita App Demo Preview" 
                        className="w-full h-auto rounded-xl transition-transform duration-300 group-hover:scale-105"
                      />
                      {/* Overlay gradient for depth */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-xl pointer-events-none"></div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl blur-sm -z-10"></div>
                  </div>
                  
                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center"
                  >
                    <Shield className="w-4 h-4 text-white" />
                  </motion.div>
                  
                  <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-4 -left-4 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center"
                  >
                    <Zap className="w-3 h-3 text-white" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-white" ref={ref}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Powerful Features for <span className="text-orange-500">Every Need</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover what makes Annita the perfect choice for African businesses. 
                From secure payments to AI-powered insights, we've got you covered.
              </p>
            </motion.div>

            {/* Feature Categories */}
            <div className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-8">
              {featureCategories.map((category, index) => (
                <button
                  key={index}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-700"
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
              {appFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1 sm:gap-2">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 leading-tight">{feature.title}</h3>
                        <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium self-start sm:self-auto">
                          {feature.category}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* App Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 sm:p-8 text-white"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8">App Statistics</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {appStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <stat.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <div className="text-lg sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-orange-100 leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {!isSubmitted ? (
        <div className="py-16 sm:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* App Information */}
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                    Join Our Waitlist
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                    Be the first to know when Annita launches. Join our waitlist for early access and exclusive updates.
                  </p>

                    {/* Platform Requirements */}
                    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-200 mb-6 sm:mb-8">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                        System Requirements
                      </h3>
                      <div className="space-y-3 sm:space-y-4">
                        {platforms.map((platform, index) => (
                          <div key={index} className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center space-x-2 sm:space-x-3">
                              <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br ${platform.color} rounded-lg flex items-center justify-center`}>
                                <platform.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                              </div>
                              <div>
                                <div className="text-sm sm:text-base font-medium text-gray-900">{platform.name}</div>
                                <div className="text-xs sm:text-sm text-gray-600">{platform.requirements}</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-xs sm:text-sm font-medium text-gray-900">{platform.size}</div>
                              <div className="text-xs text-gray-500">v{platform.version}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Benefits */}
                    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-200 mb-6 sm:mb-8">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                        Why Join Annita Waitlist?
                      </h3>
                      <div className="space-y-3 sm:space-y-4">
                        {appFeatures.slice(0, 6).map((feature, index) => (
                          <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                              <feature.icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                            </div>
                            <div>
                              <div className="text-xs sm:text-sm font-medium text-gray-900 leading-tight">{feature.title}</div>
                              <div className="text-xs text-gray-600 leading-relaxed">{feature.description}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  {/* Contact Information */}
                    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-200">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                        Need Help?
                      </h3>
                      <div className="space-y-2 sm:space-y-3">
                        <div className="flex items-center space-x-2 sm:space-x-3">
                          <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 flex-shrink-0" />
                          <span className="text-sm sm:text-base text-gray-600">annitallc@gmail.com</span>
                        </div>
                        <div className="flex items-center space-x-2 sm:space-x-3">
                          <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 flex-shrink-0" />
                          <span className="text-sm sm:text-base text-gray-600">+231 77 505 7227</span>
                        </div>
                        <div className="flex items-center space-x-2 sm:space-x-3">
                          <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 flex-shrink-0" />
                          <span className="text-sm sm:text-base text-gray-600">Live chat available</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Download Form */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  id="download-form"
                  className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-200"
                >
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Join Waitlist</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    {/* Platform Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 sm:mb-3">
                        Preferred Platform *
                      </label>
                      <div className="grid grid-cols-1 gap-3 sm:gap-4">
                        {platforms.map((platform) => (
                          <button
                            key={platform.id}
                            type="button"
                            onClick={() => handlePlatformSelect(platform.id)}
                            className={`p-3 sm:p-4 md:p-6 rounded-xl border-2 transition-all duration-200 text-left hover:shadow-md ${
                              selectedPlatform === platform.id
                                ? 'border-orange-500 bg-orange-50 shadow-md'
                                : 'border-gray-200 hover:border-gray-300 bg-white'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3 sm:space-x-4">
                                <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br ${platform.color} rounded-xl flex items-center justify-center`}>
                                  <platform.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="font-semibold text-gray-900 text-sm sm:text-base">{platform.name}</div>
                                  <div className="text-xs sm:text-sm text-gray-600">{platform.description}</div>
                                  <div className="flex items-center space-x-2 sm:space-x-3 mt-1 sm:mt-2">
                                    <div className="flex items-center space-x-1">
                                      <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current" />
                                      <span className="text-xs text-gray-600">{platform.rating}</span>
                                    </div>
                                    <span className="text-xs text-gray-500">•</span>
                                    <span className="text-xs text-gray-600">{platform.downloads} downloads</span>
                                  </div>
                                </div>
                              </div>
                              <div className="text-xs text-gray-500 hidden sm:block">{platform.store}</div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Email for Download Link */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 md:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                        placeholder="your.email@example.com"
                      />
                      <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">
                        We'll notify you when the app launches and keep you updated with new features
                      </p>
                    </div>

                    {/* Download Buttons */}
                    {selectedPlatform && (
                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
                          {selectedPlatform === 'ios' && (
                            <a 
                              href="#"
                              className="flex items-center justify-center px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 shadow-lg"
                            >
                              <Apple className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3" />
                              <div className="text-left">
                                <div className="text-xs">Download on the</div>
                                <div className="font-semibold text-xs sm:text-sm md:text-base">App Store</div>
                              </div>
                            </a>
                          )}
                          {selectedPlatform === 'android' && (
                            <a 
                              href="#"
                              className="flex items-center justify-center px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-lg"
                            >
                              <Play className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3" />
                              <div className="text-left">
                                <div className="text-xs">GET IT ON</div>
                                <div className="font-semibold text-xs sm:text-sm md:text-base">Google Play</div>
                              </div>
                            </a>
                          )}
                        </div>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting || !selectedPlatform || !email}
                      className="w-full inline-flex items-center justify-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg text-sm sm:text-base"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2"></div>
                          Processing...
                        </>
                      ) : (
                        <>
                          <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                          Join Waitlist
                        </>
                      )}
                    </button>
                  </form>

                  {/* QR Code Section */}
                  <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Coming Soon</h4>
                    <div className="text-center">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <QrCode className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-gray-400" />
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600">
                        QR code will be available when the app launches
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Success Message */
        <div className="py-16 sm:py-20 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="w-20 h-20 sm:w-24 sm:h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-green-600" />
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"
              >
                You're on the Waitlist!
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-gray-600 mb-8 text-sm sm:text-base"
              >
                Thank you for joining our waitlist! We'll notify you as soon as the app is available for download.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-xl p-6 sm:p-8 mb-8 shadow-lg border border-green-200"
              >
                <h3 className="font-semibold text-gray-900 mb-4 text-lg">What's next?</h3>
                <div className="space-y-4 text-left">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">1</div>
                    <span className="text-gray-600 text-sm sm:text-base">We'll notify you when the app launches</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">2</div>
                    <span className="text-gray-600 text-sm sm:text-base">Get early access to download the app</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">3</div>
                    <span className="text-gray-600 text-sm sm:text-base">Be among the first to experience Annita</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
              >
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-200 text-sm sm:text-base"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Need Help?
                </Link>
                <button
                  onClick={() => {
                    reset()
                    setSelectedPlatform('')
                    setEmail('')
                  }}
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-50 transition-colors duration-200 text-sm sm:text-base"
                >
                  Join Another Waitlist
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      )}

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center p-6 sm:p-8 lg:p-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl text-white shadow-2xl"
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                Ready to Transform Your Business?
              </h3>
              <p className="text-orange-100 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
                Join our waitlist and be among the first to experience Annita's all-in-one platform 
                designed specifically for African businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a 
                  href="/download"
                  className="inline-flex items-center justify-center bg-white text-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200 shadow-lg text-sm sm:text-base"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Join Waitlist
                </a>
                <a 
                  href="/contact-sales"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200 text-sm sm:text-base"
                >
                  Contact Sales
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
