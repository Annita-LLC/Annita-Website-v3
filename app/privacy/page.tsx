import { Metadata } from 'next'
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  Users, 
  Globe,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Privacy Policy - Annita',
  description: 'Learn how Annita protects your privacy and handles your personal information. We are committed to transparency and data protection.',
}

const PrivacyPage = () => {
  const lastUpdated = 'December 15, 2024'

  const dataWeCollect = [
    {
      category: 'Personal Information',
      items: [
        'Name and contact information (email, phone number)',
        'Business information and profile details',
        'Payment and billing information',
        'Account credentials and preferences'
      ]
    },
    {
      category: 'Usage Data',
      items: [
        'Platform usage and interaction data',
        'Transaction history and patterns',
        'Device and browser information',
        'Location data (with consent)'
      ]
    },
    {
      category: 'Technical Data',
      items: [
        'IP addresses and device identifiers',
        'Cookies and similar technologies',
        'Log files and analytics data',
        'Performance and error information'
      ]
    }
  ]

  const howWeUseData = [
    {
      icon: Users,
      title: 'Service Provision',
      description: 'To provide and maintain our platform services, process transactions, and deliver customer support.'
    },
    {
      icon: Shield,
      title: 'Security & Fraud Prevention',
      description: 'To protect against fraud, abuse, and security threats, ensuring platform integrity.'
    },
    {
      icon: Globe,
      title: 'Platform Improvement',
      description: 'To analyze usage patterns, improve features, and develop new services for better user experience.'
    },
    {
      icon: Database,
      title: 'Communication',
      description: 'To send important updates, notifications, and marketing communications (with consent).'
    }
  ]

  const dataProtection = [
    {
      title: 'Encryption',
      description: 'All data is encrypted in transit and at rest using industry-standard protocols.'
    },
    {
      title: 'Access Controls',
      description: 'Strict access controls and authentication mechanisms protect your information.'
    },
    {
      title: 'Regular Audits',
      description: 'We conduct regular security audits and assessments to maintain data protection standards.'
    },
    {
      title: 'Compliance',
      description: 'We comply with applicable data protection laws and regulations across Africa.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8">
              Your privacy is our priority. Learn how we protect and handle your information 
              with transparency and care.
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
                Our Commitment to Privacy
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Annita, we believe that privacy is a fundamental human right. This Privacy Policy 
                explains how we collect, use, protect, and share your information when you use our 
                platform and services.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We are committed to being transparent about our data practices and giving you control 
                over your personal information. This policy applies to all users of our platform, 
                including vendors, buyers, and visitors to our website.
              </p>
              <div className="flex items-center space-x-4 text-blue-600 font-medium">
                <span>Effective Date: {lastUpdated}</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Collection Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Information We Collect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We collect information necessary to provide our services and improve your experience. 
              Here's what we gather and why.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {dataWeCollect.map((category, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-soft">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Use Data Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How We Use Your Information
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use your information responsibly to provide better services and protect our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {howWeUseData.map((use, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-soft">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                  <use.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{use.title}</h3>
                <p className="text-gray-600">{use.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Protection Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How We Protect Your Data
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We implement industry-standard security measures to keep your information safe and secure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {dataProtection.map((protection, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-soft text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{protection.title}</h3>
                <p className="text-gray-600 text-sm">{protection.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Rights Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-soft">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Your Privacy Rights
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                You have control over your personal information. Here are your rights:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Access Your Data</h4>
                      <p className="text-sm text-gray-600">Request a copy of your personal information</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Update Information</h4>
                      <p className="text-sm text-gray-600">Correct or update your personal details</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Delete Account</h4>
                      <p className="text-sm text-gray-600">Request deletion of your account and data</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Opt-Out</h4>
                      <p className="text-sm text-gray-600">Unsubscribe from marketing communications</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Data Portability</h4>
                      <p className="text-sm text-gray-600">Export your data in a machine-readable format</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Lodge Complaints</h4>
                      <p className="text-sm text-gray-600">Contact us with privacy concerns</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Questions About Privacy?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              If you have any questions about this Privacy Policy or our data practices, 
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
                Download Data
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPage
