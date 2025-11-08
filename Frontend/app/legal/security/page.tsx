import { Metadata } from 'next'
import { 
  Shield, 
  Lock, 
  Eye, 
  CheckCircle, 
  AlertTriangle,
  ArrowRight,
  Zap,
  Users,
  Globe,
  Download,
  ExternalLink
} from 'lucide-react'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Security - Annita',
  description: 'Learn about Annita\'s comprehensive security measures, data protection, and commitment to keeping your information safe.',
}

const SecurityPage = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'Bank-Level Encryption',
      description: '256-bit SSL encryption for all data transmission',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Lock,
      title: 'Multi-Factor Authentication',
      description: 'Enhanced account protection with 2FA',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Eye,
      title: 'Privacy Controls',
      description: 'Granular control over your data and privacy',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Real-Time Monitoring',
      description: '24/7 security monitoring and threat detection',
      color: 'from-orange-500 to-red-500'
    }
  ]

  const securityMeasures = [
    'End-to-end encryption for all communications',
    'Regular security audits and penetration testing',
    'Compliance with international security standards',
    'Secure data centers with redundant systems',
    'Advanced fraud detection and prevention',
    'Regular security updates and patches',
    'Employee security training and background checks',
    'Incident response and disaster recovery plans'
  ]

  const complianceStandards = [
    {
      name: 'ISO 27001',
      description: 'Information Security Management',
      status: 'Certified'
    },
    {
      name: 'PCI DSS',
      description: 'Payment Card Industry Security',
      status: 'Compliant'
    },
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation',
      status: 'Compliant'
    },
    {
      name: 'SOC 2',
      description: 'Service Organization Control',
      status: 'Type II Certified'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-orange-600 via-orange-700 to-red-600 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-1/3 w-12 h-12 bg-white/10 rounded-full animate-bounce"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-8 shadow-lg border border-white/30">
                <Shield className="w-5 h-5 mr-2" />
                Security
              </div>
              
              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                <span className="text-orange-200">Security</span>
              </h1>

              {/* Description */}
              <p className="text-xl sm:text-2xl text-orange-100 mb-8 leading-relaxed max-w-2xl">
                Your security is our top priority. Learn about our comprehensive protection measures.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white">256-bit</div>
                  <div className="text-sm text-orange-200">Encryption</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white">99.9%</div>
                  <div className="text-sm text-orange-200">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white">24/7</div>
                  <div className="text-sm text-orange-200">Monitoring</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://annita.company.site/products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold hover:bg-orange-50 transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Try V1.0 Now
                </a>
                <a
                  href="/download"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-orange-600 transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Join V3.0 Waitlist
                </a>
              </div>
            </div>

            {/* Visualization Card */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/20">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Security Excellence</h3>
                  <p className="text-orange-200">Bank-level protection for your data</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                    <span className="text-white">Bank-Level Encryption</span>
                    <span className="font-bold text-green-300">✓</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                    <span className="text-white">Multi-Factor Authentication</span>
                    <span className="font-bold text-green-300">✓</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                    <span className="text-white">Privacy Controls</span>
                    <span className="font-bold text-green-300">✓</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                    <span className="text-white">Real-Time Monitoring</span>
                    <span className="font-bold text-green-300">✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-600 mb-6">
              Our Security Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We employ industry-leading security measures to protect your data and transactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-soft text-center hover:shadow-medium transition-all duration-300 group">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-orange-600 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Measures Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-600 mb-6">
                Comprehensive Security Measures
              </h2>
              <p className="text-xl text-gray-600">
                We implement multiple layers of security to ensure your data remains protected.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {securityMeasures.map((measure, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{measure}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-600 mb-6">
              Compliance & Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain the highest standards of security compliance and certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-orange-600">{standard.name}</h3>
                  <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">
                    {standard.status}
                  </span>
                </div>
                <p className="text-gray-600">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Protection Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-soft">
              <div className="text-center mb-12">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Lock className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-orange-600 mb-4">
                  Data Protection
                </h2>
                <p className="text-xl text-gray-600">
                  We protect your personal and financial data with the highest security standards.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">256-bit</div>
                  <div className="text-sm text-gray-600">Encryption</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Tips Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-soft">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Security Best Practices
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Enable Two-Factor Authentication</h4>
                      <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Use Strong Passwords</h4>
                      <p className="text-sm text-gray-600">Create unique, complex passwords for your accounts</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Keep Software Updated</h4>
                      <p className="text-sm text-gray-600">Regularly update your apps and operating system</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Monitor Account Activity</h4>
                      <p className="text-sm text-gray-600">Regularly check your account for suspicious activity</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Use Secure Networks</h4>
                      <p className="text-sm text-gray-600">Avoid public Wi-Fi for sensitive transactions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Report Suspicious Activity</h4>
                      <p className="text-sm text-gray-600">Contact support immediately if you notice anything unusual</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Security Team */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Security Concerns?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              If you have security concerns or notice suspicious activity, our security team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg">
                Report Security Issue
              </Button>
              <Button variant="outline" size="lg">
                Contact Security Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SecurityPage
