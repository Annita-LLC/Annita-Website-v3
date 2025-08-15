'use client'

import { useState } from 'react'
import { 
  Download, 
  Smartphone, 
  CheckCircle, 
  Star,
  ArrowRight,
  QrCode,
  Globe,
  Zap,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Phone,
  ArrowLeft
} from 'lucide-react'
import Button from '@/components/ui/Button'

const DownloadPage = () => {
  const [showAuth, setShowAuth] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle authentication logic here
    console.log('Form submitted:', formData)
  }

  const features = [
    'Secure payments with AnnitaPay',
    'Shop from thousands of vendors',
    'Real-time delivery tracking',
    'AI-powered business tools',
    'Multi-language support',
    'Offline functionality',
    'Push notifications',
    'Biometric authentication'
  ]

  const appStats = [
    { number: '5M+', label: 'Downloads' },
    { number: '4.8', label: 'App Store Rating' },
    { number: '50+', label: 'Countries' },
    { number: '24/7', label: 'Support' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <Download className="w-10 h-10" />
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                  Download Annita
                </h1>
                <p className="text-xl sm:text-2xl text-white/90 mb-8">
                  Get Africa's all-in-one digital platform on your mobile device
                </p>
                
                {/* Download Buttons */}
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      variant="white" 
                      size="lg" 
                      className="flex items-center justify-center"
                      onClick={() => setShowAuth(true)}
                    >
                      <img 
                        src="/images/Icons/Download_on_the_App_Store_Badge.svg.webp" 
                        alt="Download on App Store" 
                        className="h-8"
                      />
                    </Button>
                    <Button 
                      variant="white" 
                      size="lg" 
                      className="flex items-center justify-center"
                      onClick={() => setShowAuth(true)}
                    >
                      <img 
                        src="/images/Icons/google-play-badge-en.webp" 
                        alt="Get it on Google Play" 
                        className="h-8"
                      />
                    </Button>
                  </div>
                  <p className="text-sm text-white/70">
                    Available on App Store and Google Play Store
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="relative inline-block">
                  <div className="w-80 h-96 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 p-8">
                    <div className="w-64 h-80 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl mx-auto flex items-center justify-center">
                      <QrCode className="w-32 h-32 text-white" />
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authentication Modal */}
      {showAuth && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {isLogin ? 'Sign In' : 'Create Account'}
              </h2>
              <button
                onClick={() => setShowAuth(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                      required={!isLogin}
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                      required={!isLogin}
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4 text-gray-400" />
                    ) : (
                      <Eye className="w-4 h-4 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                variant="gradient"
                size="lg"
                className="w-full"
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  {isLogin ? 'Sign Up' : 'Sign In'}
                </button>
              </p>
            </div>

            {isLogin && (
              <div className="mt-4 text-center">
                <button className="text-sm text-blue-600 hover:text-blue-700">
                  Forgot your password?
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* App Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {appStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access all Annita services from your mobile device with our powerful app.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Options Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download Annita for your preferred mobile platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* iOS */}
            <div className="bg-white rounded-3xl p-8 shadow-soft text-center hover:shadow-medium transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">iOS App</h3>
              <p className="text-gray-600 mb-6">
                Download from the App Store for iPhone and iPad
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-sm text-gray-600">4.8/5</span>
                </div>
                <Button 
                  variant="gradient" 
                  size="lg" 
                  className="w-full"
                  onClick={() => setShowAuth(true)}
                >
                  <img 
                    src="/images/Icons/Download_on_the_App_Store_Badge.svg.webp" 
                    alt="Download on App Store" 
                    className="h-6"
                  />
                </Button>
                <p className="text-xs text-gray-500">
                  Requires iOS 13.0 or later
                </p>
              </div>
            </div>

            {/* Android */}
            <div className="bg-white rounded-3xl p-8 shadow-soft text-center hover:shadow-medium transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Android App</h3>
              <p className="text-gray-600 mb-6">
                Download from Google Play Store for Android devices
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-sm text-gray-600">4.7/5</span>
                </div>
                <Button 
                  variant="gradient" 
                  size="lg" 
                  className="w-full"
                  onClick={() => setShowAuth(true)}
                >
                  <img 
                    src="/images/Icons/google-play-badge-en.webp" 
                    alt="Get it on Google Play" 
                    className="h-6"
                  />
                </Button>
                <p className="text-xs text-gray-500">
                  Requires Android 8.0 or later
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QR Code Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Scan to Download
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Use your phone's camera to scan the QR code and download the app directly.
            </p>
            
            <div className="bg-white rounded-3xl p-8 shadow-soft inline-block">
              <div className="w-64 h-64 bg-gray-100 rounded-2xl flex items-center justify-center mb-4">
                <QrCode className="w-32 h-32 text-gray-400" />
              </div>
              <p className="text-sm text-gray-600">
                Point your camera at this QR code
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-soft">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                System Requirements
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">iOS Requirements</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• iOS 13.0 or later</li>
                    <li>• iPhone, iPad, or iPod touch</li>
                    <li>• 100MB available space</li>
                    <li>• Internet connection required</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Android Requirements</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Android 8.0 or later</li>
                    <li>• 2GB RAM minimum</li>
                    <li>• 150MB available space</li>
                    <li>• Internet connection required</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Create your account or sign in to access all Annita services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="gradient" 
                size="lg"
                onClick={() => {
                  setIsLogin(false)
                  setShowAuth(true)
                }}
              >
                Create Account
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  setIsLogin(true)
                  setShowAuth(true)
                }}
              >
                Sign In
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Already have the app? Sign in to sync your account across devices.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DownloadPage
