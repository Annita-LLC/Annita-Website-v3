'use client'

import { useState } from 'react'
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
  Play
} from 'lucide-react'
import Link from 'next/link'
import { useFormSubmission, formValidations } from '@/lib/hooks/useFormSubmission'

export default function DownloadPage() {
  const [selectedPlatform, setSelectedPlatform] = useState('')
  const [email, setEmail] = useState('')
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
      rating: '4.8',
      downloads: '2.5M+'
    },
    {
      id: 'android',
      name: 'Android App',
      description: 'Download for Android devices',
      icon: Play,
      color: 'from-green-500 to-emerald-500',
      store: 'Google Play',
      rating: '4.7',
      downloads: '2.3M+'
    }
  ]

  const appFeatures = [
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'Bank-grade security with AnnitaPay'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized for speed and performance'
    },
    {
      icon: Globe,
      title: 'Multi-Language',
      description: 'Available in 10+ African languages'
    },
    {
      icon: Users,
      title: 'Social Features',
      description: 'Connect with friends and family'
    },
    {
      icon: Clock,
      title: 'Real-time Updates',
      description: 'Live tracking and notifications'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized for innovation and quality'
    }
  ]

  const appStats = [
    { label: 'Total Downloads', value: '5M+', icon: Download },
    { label: 'Active Users', value: '2.1M+', icon: Users },
    { label: 'Average Rating', value: '4.8/5', icon: Star },
    { label: 'Countries', value: '15+', icon: Globe }
  ]

  const handlePlatformSelect = (platformId: string) => {
    setSelectedPlatform(platformId)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedPlatform || !email) return
    
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <>
      <SEOHead
        title="Download Annita - Africa's All-in-One Digital Platform"
        description="Download Annita's mobile app and access Africa's all-in-one digital platform. Secure payments, marketplace shopping, AI tools, real-time tracking, and more. Available on iOS and Android with 5M+ downloads and 4.8-star rating."
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
      <section className="bg-gradient-to-br from-orange-50 to-red-50 py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6">
                <Download className="w-4 h-4 mr-2" />
                Mobile App
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Download <span className="text-orange-500">Annita</span> App
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Get Africa's all-in-one digital platform on your mobile device. 
                Secure payments, marketplace shopping, AI tools, and real-time tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {!isSubmitted ? (
        <div className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* App Information */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                    Choose Your Platform
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Download Annita for your preferred platform and start your digital journey today.
                  </p>

                  {/* App Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {appStats.map((stat, index) => (
                      <div key={index} className="bg-white rounded-xl p-4 shadow-soft border border-gray-200 text-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <stat.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* App Features */}
                  <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Why Choose Annita App?
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {appFeatures.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <feature.icon className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 text-sm">{feature.title}</div>
                            <div className="text-xs text-gray-600">{feature.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="mt-8 bg-white rounded-xl p-6 shadow-soft border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Need Help?
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-orange-500" />
                        <span className="text-gray-600">annitallc@gmail.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-orange-500" />
                        <span className="text-gray-600">+231 77 505 7227</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MessageSquare className="w-5 h-5 text-orange-500" />
                        <span className="text-gray-600">Live chat available</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Download Form */}
                <div className="bg-white rounded-xl shadow-soft p-6 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Download App</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Platform Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Select Platform *
                      </label>
                      <div className="grid grid-cols-1 gap-4">
                        {platforms.map((platform) => (
                          <button
                            key={platform.id}
                            type="button"
                            onClick={() => handlePlatformSelect(platform.id)}
                            className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                              selectedPlatform === platform.id
                                ? 'border-orange-500 bg-orange-50'
                                : 'border-gray-200 hover:border-gray-300 bg-white'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4">
                                <div className={`w-12 h-12 bg-gradient-to-br ${platform.color} rounded-lg flex items-center justify-center`}>
                                  <platform.icon className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                  <div className="font-semibold text-gray-900">{platform.name}</div>
                                  <div className="text-sm text-gray-600">{platform.description}</div>
                                  <div className="flex items-center space-x-4 mt-1">
                                    <div className="flex items-center space-x-1">
                                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                      <span className="text-xs text-gray-600">{platform.rating}</span>
                                    </div>
                                    <span className="text-xs text-gray-500">•</span>
                                    <span className="text-xs text-gray-600">{platform.downloads} downloads</span>
                                  </div>
                                </div>
                              </div>
                              <div className="text-xs text-gray-500">{platform.store}</div>
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        placeholder="your.email@example.com"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        We'll send you the download link and keep you updated
                      </p>
                    </div>

                    {/* Download Buttons */}
                    {selectedPlatform && (
                      <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row gap-4">
                          {selectedPlatform === 'ios' && (
                            <a 
                              href="#"
                              className="flex items-center justify-center px-6 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
                            >
                              <Apple className="w-6 h-6 mr-3" />
                              <div className="text-left">
                                <div className="text-xs">Download on the</div>
                                <div className="font-semibold">App Store</div>
                              </div>
                            </a>
                          )}
                          {selectedPlatform === 'android' && (
                            <a 
                              href="#"
                              className="flex items-center justify-center px-6 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
                            >
                              <Play className="w-6 h-6 mr-3" />
                              <div className="text-left">
                                <div className="text-xs">GET IT ON</div>
                                <div className="font-semibold">Google Play</div>
                              </div>
                            </a>
                          )}
                        </div>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting || !selectedPlatform || !email}
                      className="w-full inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Processing...
                        </>
                      ) : (
                        <>
                          <Download className="w-5 h-5 mr-2" />
                          Get Download Link
                        </>
                      )}
                    </button>
                  </form>

                  {/* QR Code Section */}
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Download</h4>
                    <div className="text-center">
                      <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <QrCode className="w-20 h-20 text-gray-400" />
                      </div>
                      <p className="text-sm text-gray-600">
                        Scan QR code with your phone camera to download
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Success Message */
        <div className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Download Link Sent!
              </h2>
              
              <p className="text-gray-600 mb-8">
                We've sent the download link to your email address. Check your inbox and spam folder.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-gray-900 mb-4">What's next?</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</div>
                    <span className="text-gray-600">Check your email for the download link</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</div>
                    <span className="text-gray-600">Click the link to download the app</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</div>
                    <span className="text-gray-600">Install and start using Annita</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-200"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Need Help?
                </Link>
                <button
                  onClick={() => {
                    setIsSubmitted(false)
                    setSelectedPlatform('')
                    setEmail('')
                  }}
                  className="inline-flex items-center px-6 py-3 border-2 border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-50 transition-colors duration-200"
                >
                  Download Another
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Home Page CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center p-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl text-white">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
                Join thousands of MSMEs already using Annita to grow their revenue, reach new customers, 
                and streamline their operations across Africa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/download"
                  className="inline-flex items-center justify-center bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download App
                </a>
                <a 
                  href="/contact-sales"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200"
                >
                  Contact Sales
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
