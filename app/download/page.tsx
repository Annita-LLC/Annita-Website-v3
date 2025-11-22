'use client'

import { useState, useRef, useEffect, memo } from 'react'
import { motion, useInView } from 'framer-motion'
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
  Tablet,
  FileText
} from 'lucide-react'
import Link from 'next/link'
import WaitlistForm from '@/components/ui/WaitlistForm'

function DownloadPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Demo images array - All available demo images
  const demoImages = [
    '/images/DEMO-Images/plain.jpg',
    '/images/DEMO-Images/detail-image-2.jpg',
    '/images/DEMO-Images/detail-image-4.jpg',
    '/images/DEMO-Images/detail-image-5.jpg',
    '/images/DEMO-Images/detail-image-6.jpg',
    '/images/DEMO-Images/shot7_1737053810391.png',
    '/images/DEMO-Images/shot8_1737053808898.png',
    '/images/DEMO-Images/08-1800x1360_1752227930605.webp',
    '/images/DEMO-Images/8_1678546978732.webp',
    '/images/DEMO-Images/Annita AI.jpg',
    '/images/DEMO-Images/Annita Connect.webp',
    '/images/DEMO-Images/Annita Logistics.webp',
    '/images/DEMO-Images/Annita Marketplace.jpg',
    '/images/DEMO-Images/AnnitaPay.jpg'
  ]

  // Auto-rotate images - optimized for performance
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === demoImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 2000) // Fast rotation for better engagement

    return () => clearInterval(interval)
  }, [demoImages.length])

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
      description: '256-bit encryption, biometric authentication, and advanced fraud protection',
      category: 'Security',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: CreditCard,
      title: 'AnnitaPay Integration',
      description: 'Send, receive, and manage payments with competitive rates across Africa',
      category: 'Payments',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: ShoppingCart,
      title: 'Marketplace Shopping',
      description: 'Browse and buy from thousands of verified African vendors',
      category: 'Commerce',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Truck,
      title: 'Real-time Tracking',
      description: 'Track deliveries and logistics with live GPS updates',
      category: 'Logistics',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: BarChart3,
      title: 'Business Analytics',
      description: 'Comprehensive insights and performance metrics dashboard',
      category: 'Analytics',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: MessageCircle,
      title: 'Communication Hub',
      description: 'Chat, video calls, and team collaboration tools',
      category: 'Communication',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Personalized alerts and important updates',
      category: 'Notifications',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: WifiOff,
      title: 'Offline Mode',
      description: 'Access key features even without internet connection',
      category: 'Accessibility',
      color: 'from-gray-500 to-gray-600'
    },
    {
      icon: Globe,
      title: 'Multi-Language Support',
      description: 'Available in 10+ African languages and dialects',
      category: 'Localization',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Target,
      title: 'AI-Powered Tools',
      description: 'Smart recommendations and automated workflows',
      category: 'AI',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Building,
      title: 'Business Management',
      description: 'Complete suite of business tools and resources',
      category: 'Business',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Heart,
      title: 'Community Features',
      description: 'Connect with local businesses and customers',
      category: 'Community',
      color: 'from-rose-500 to-rose-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Optimized for smartphones with intuitive interface',
      category: 'Mobile',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Users,
      title: 'User Management',
      description: 'Advanced user roles, permissions, and team collaboration',
      category: 'Management',
      color: 'from-violet-500 to-violet-600'
    },
    {
      icon: FileText,
      title: 'Document Management',
      description: 'Store, organize, and share documents securely',
      category: 'Documents',
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: Settings,
      title: 'Customization',
      description: 'Personalize your experience with flexible settings',
      category: 'Customization',
      color: 'from-slate-500 to-slate-600'
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
    { name: 'Communication', count: appFeatures.filter(f => f.category === 'Communication').length },
    { name: 'Business', count: appFeatures.filter(f => f.category === 'Business').length },
    { name: 'AI', count: appFeatures.filter(f => f.category === 'AI').length },
    { name: 'Analytics', count: appFeatures.filter(f => f.category === 'Analytics').length },
    { name: 'Mobile', count: appFeatures.filter(f => f.category === 'Mobile').length },
    { name: 'Management', count: appFeatures.filter(f => f.category === 'Management').length }
  ]


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
          <div className="absolute top-10 left-10 w-20 h-20 bg-orange-200/30 rounded-full animate-pulse" style={{ animationDuration: '1.5s' }}></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-red-200/20 rounded-full animate-bounce" style={{ animationDuration: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-orange-300/25 rounded-full animate-pulse delay-1000" style={{ animationDuration: '1.5s' }}></div>
          <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-red-300/20 rounded-full animate-bounce delay-500" style={{ animationDuration: '1s' }}></div>
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
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 sm:mb-8">
                <p className="text-sm sm:text-base text-blue-800">
                  <strong>Interested in trying our current platform?</strong> Check out our 
                  <a href="https://annita.company.site/products" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline ml-1">
                    Live Marketplace V1.0
                  </a> with 3,000+ vendors already active!
                </p>
              </div>
                

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center lg:justify-start">
                  <button 
                    onClick={() => {}}
                    className="bg-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-orange-700 transition-all duration-200 flex items-center justify-center shadow-lg text-sm sm:text-base"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Features
                  </button>
                  <button 
                    onClick={() => setIsWaitlistOpen(true)}
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
                  
                  {/* Demo Images Slideshow */}
                  <div className="relative mx-auto group">
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-gray-100 bg-gradient-to-br from-gray-50 to-white p-2">
                      <motion.img 
                        key={currentImageIndex}
                        src={demoImages[currentImageIndex]} 
                        alt={`Annita App Demo Preview ${currentImageIndex + 1}`}
                        className="w-full h-auto rounded-xl transition-transform duration-300 group-hover:scale-105"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      />
                      {/* Overlay gradient for depth */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-xl pointer-events-none"></div>
                      
                      {/* Image counter indicator */}
                      <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                        {currentImageIndex + 1} / {demoImages.length}
                      </div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl blur-sm -z-10"></div>
                  </div>
                  
                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [-8, 8, -8] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center"
                  >
                    <Shield className="w-4 h-4 text-white" />
                  </motion.div>
                  
                  <motion.div
                    animate={{ y: [8, -8, 8] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
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
      <section className="py-20 sm:py-24 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-orange-50" ref={ref}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16 sm:mb-20"
            >
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-100 to-orange-200 text-orange-700 text-sm font-semibold mb-8 shadow-lg border border-orange-200">
                <Zap className="w-5 h-5 mr-2" />
                Comprehensive Platform
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
                Powerful Features for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Every Need</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Discover what makes Annita the perfect choice for African businesses. 
                From secure payments to AI-powered insights, we've got you covered with our comprehensive suite of services.
              </p>
            </motion.div>

            {/* Feature Categories */}
            <div className="flex flex-wrap justify-center gap-3 mb-12 sm:mb-16">
              {featureCategories.map((category, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                  className="group px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 bg-white text-gray-700 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-gray-200 hover:border-transparent"
                >
                  <span className="flex items-center gap-2">
                    {category.name}
                    <span className="px-2 py-0.5 bg-gray-100 group-hover:bg-white/20 rounded-full text-xs font-bold">
                      {category.count}
                    </span>
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
              {appFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.05 }}
                  className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-tight">{feature.title}</h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                    
                    <div className="mt-auto">
                      <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r ${feature.color} text-white shadow-sm`}>
                          {feature.category}
                        </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 sm:p-12 text-white text-center shadow-2xl"
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">Everything You Need in One Platform</h3>
              <p className="text-orange-100 text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
                Join thousands of businesses already using Annita to streamline their operations and grow their revenue.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
                <div>
                  <div className="text-3xl sm:text-4xl font-bold mb-2">{appFeatures.length}+</div>
                  <div className="text-orange-200 text-sm sm:text-base">Features</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold mb-2">10+</div>
                  <div className="text-orange-200 text-sm sm:text-base">Languages</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold mb-2">54+</div>
                  <div className="text-orange-200 text-sm sm:text-base">Countries</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold mb-2">24/7</div>
                  <div className="text-orange-200 text-sm sm:text-base">Support</div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl text-white"
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                🚨 Something BIG is Coming - Annita 3.0
              </h3>
              <p className="text-orange-100 mb-4 max-w-2xl mx-auto">
                Experience our <strong>upgraded marketplace V1.0</strong> with new features - no longer in beta! 
                Create your account today. When Annita 3.0 launches next year, existing v1.0 users will be automatically migrated - 
                <strong> no re-onboarding required!</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://annita-v1.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Create Account & Try V1.0 Now
                </a>
                <button 
                  onClick={() => setIsWaitlistOpen(true)}
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200"
                >
                  <Star className="w-5 h-5 mr-2" />
                  Join V3.0 Waitlist
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Waitlist Form Modal */}
      <WaitlistForm
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
        onSuccess={() => {
          setIsWaitlistOpen(false)
          // You can add a success notification here if needed
        }}
      />
    </>
  )
}

export default memo(DownloadPage)
