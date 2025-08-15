import { Metadata } from 'next'
import { 
  Download, 
  Smartphone, 
  CheckCircle, 
  Star,
  ArrowRight,
  QrCode,
  Globe,
  Zap
} from 'lucide-react'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Download Annita App - Get Started Today',
  description: 'Download the Annita mobile app for iOS and Android. Access all our services on the go with our powerful mobile application.',
}

const DownloadPage = () => {
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
                    <Button variant="white" size="lg" className="flex items-center justify-center">
                      <Globe className="w-5 h-5 mr-2" />
                      Download for iOS
                    </Button>
                    <Button variant="white" size="lg" className="flex items-center justify-center">
                      <Globe className="w-5 h-5 mr-2" />
                      Download for Android
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
                <Button variant="gradient" size="lg" className="w-full">
                  Download for iOS
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
                <Button variant="gradient" size="lg" className="w-full">
                  Download for Android
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Download Annita today and experience the future of digital commerce in Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg">
                Download Now
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DownloadPage
