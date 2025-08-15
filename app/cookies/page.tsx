import { Metadata } from 'next'
import { 
  Cookie, 
  Settings, 
  Shield, 
  Eye, 
  Database, 
  Globe,
  CheckCircle,
  ArrowRight,
  Info
} from 'lucide-react'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Cookie Policy - Annita',
  description: 'Learn about how Annita uses cookies and similar technologies to improve your experience on our platform.',
}

const CookiePolicyPage = () => {
  const lastUpdated = 'December 15, 2024'

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Cookie className="w-10 h-10" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8">
              Learn how we use cookies and similar technologies to enhance your experience 
              and improve our platform.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-white/80">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>Last Updated: {lastUpdated}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-soft">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What Are Cookies?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences, 
                analyzing how you use our site, and personalizing content.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                This Cookie Policy explains what cookies we use, why we use them, and how you can 
                control them. By using our website, you consent to our use of cookies in accordance 
                with this policy.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Important Note</h4>
                    <p className="text-blue-800 text-sm">
                      Some cookies are essential for our website to function properly. 
                      Disabling these cookies may affect your experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Types Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Types of Cookies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use different types of cookies for various purposes to improve your experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-soft">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Essential Cookies</h3>
              <p className="text-gray-600 mb-4">These cookies are necessary for the website to function properly and cannot be disabled.</p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Authentication and security</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Session management</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Load balancing</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-soft">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Analytics Cookies</h3>
              <p className="text-gray-600 mb-4">These cookies help us understand how visitors interact with our website.</p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Google Analytics</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Performance monitoring</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">User behavior tracking</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-soft">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Functional Cookies</h3>
              <p className="text-gray-600 mb-4">These cookies enable enhanced functionality and personalization.</p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Language preferences</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Theme and layout</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Form auto-fill</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-soft">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Marketing Cookies</h3>
              <p className="text-gray-600 mb-4">These cookies are used to deliver relevant advertisements and track campaigns.</p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Social media cookies</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Advertising networks</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Retargeting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Management Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Managing Your Cookie Preferences
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              You have control over how cookies are used on our website. Here are the different 
              ways you can manage your cookie preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-soft">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Browser Settings</h3>
              <p className="text-gray-600">You can control cookies through your browser settings. Most browsers allow you to block or delete cookies.</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-soft">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cookie Consent</h3>
              <p className="text-gray-600">We provide clear consent mechanisms for non-essential cookies. You can change your preferences anytime.</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-soft">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Transparency</h3>
              <p className="text-gray-600">We provide detailed information about each cookie type and its purpose in our cookie banner.</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-soft">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Third-Party Control</h3>
              <p className="text-gray-600">For third-party cookies, you can manage preferences through the respective service providers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Questions About Cookies?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              If you have any questions about our use of cookies or this Cookie Policy, 
              please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="gradient"
                size="xl"
                className="text-lg font-bold shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300"
              >
                Contact Us
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="text-lg font-bold border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transform hover:-translate-y-1 transition-all duration-300"
              >
                Manage Cookies
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CookiePolicyPage
