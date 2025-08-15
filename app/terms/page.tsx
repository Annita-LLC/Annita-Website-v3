import { Metadata } from 'next'
import { 
  FileText, 
  Shield, 
  Users, 
  Globe, 
  CheckCircle, 
  AlertTriangle,
  ArrowRight,
  Scale
} from 'lucide-react'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Terms of Service - Annita',
  description: 'Read our Terms of Service to understand your rights and responsibilities when using Annita\'s platform and services.',
}

const TermsPage = () => {
  const lastUpdated = 'December 15, 2024'

  const keyTerms = [
    {
      title: 'Acceptance of Terms',
      description: 'By accessing or using our platform, you agree to be bound by these Terms of Service and all applicable laws and regulations.'
    },
    {
      title: 'User Accounts',
      description: 'You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.'
    },
    {
      title: 'Acceptable Use',
      description: 'You agree to use our platform only for lawful purposes and in accordance with these terms and applicable regulations.'
    },
    {
      title: 'Intellectual Property',
      description: 'All content, features, and functionality on our platform are owned by Annita and protected by intellectual property laws.'
    }
  ]

  const userResponsibilities = [
    {
      icon: Shield,
      title: 'Security',
      description: 'Maintain secure account credentials and report any suspicious activity immediately.'
    },
    {
      icon: Users,
      title: 'Compliance',
      description: 'Comply with all applicable laws, regulations, and platform policies.'
    },
    {
      icon: Globe,
      title: 'Content',
      description: 'Ensure all content you upload is accurate, lawful, and doesn\'t infringe on others\' rights.'
    },
    {
      icon: Scale,
      title: 'Payments',
      description: 'Pay all fees and charges in a timely manner and maintain valid payment methods.'
    }
  ]

  const prohibitedActivities = [
    'Fraudulent or deceptive practices',
    'Violation of intellectual property rights',
    'Distribution of harmful or malicious content',
    'Attempting to gain unauthorized access to our systems',
    'Interfering with platform functionality',
    'Harassment or abuse of other users',
    'Violation of applicable laws and regulations'
  ]

  const serviceLimitations = [
    {
      title: 'Service Availability',
      description: 'We strive for 99.9% uptime but cannot guarantee uninterrupted service due to maintenance, updates, or unforeseen circumstances.'
    },
    {
      title: 'Data Accuracy',
      description: 'While we work to ensure data accuracy, we cannot guarantee that all information on the platform is completely accurate or up-to-date.'
    },
    {
      title: 'Third-Party Services',
      description: 'We may integrate with third-party services, and their terms and privacy policies also apply to your use of those services.'
    },
    {
      title: 'Geographic Restrictions',
      description: 'Some features may not be available in all regions due to local laws and regulations.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8">
              Please read these terms carefully. They govern your use of our platform 
              and outline your rights and responsibilities.
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
                Agreement to Terms
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                These Terms of Service ("Terms") constitute a legally binding agreement between you 
                and Annita ("we," "us," or "our") regarding your use of our platform, services, 
                and applications.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                By accessing or using our platform, you acknowledge that you have read, understood, 
                and agree to be bound by these Terms. If you do not agree with any part of these Terms, 
                you may not use our services.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Important Notice</h4>
                    <p className="text-blue-800 text-sm">
                      These terms may be updated from time to time. We will notify you of any material 
                      changes via email or through our platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Terms Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Key Terms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding these key terms is essential for using our platform responsibly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {keyTerms.map((term, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-soft">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{term.title}</h3>
                <p className="text-gray-600">{term.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Responsibilities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Your Responsibilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As a user of our platform, you have certain responsibilities to ensure a safe 
              and positive experience for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {userResponsibilities.map((responsibility, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-soft">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                  <responsibility.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{responsibility.title}</h3>
                <p className="text-gray-600">{responsibility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prohibited Activities Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-soft">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Prohibited Activities
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                To maintain a safe and secure platform, the following activities are strictly prohibited:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {prohibitedActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{activity}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-red-900">Consequences</h4>
                    <p className="text-red-800 text-sm">
                      Violation of these terms may result in account suspension, termination, 
                      or legal action as appropriate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Limitations Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Service Limitations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              While we strive to provide excellent service, there are certain limitations 
              and disclaimers you should be aware of.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {serviceLimitations.map((limitation, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-soft">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                  <Scale className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{limitation.title}</h3>
                <p className="text-gray-600">{limitation.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Termination Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-soft">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Termination
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Either party may terminate this agreement at any time. Upon termination:
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Account Access</h4>
                    <p className="text-sm text-gray-600">Your access to the platform will be immediately suspended</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Data Retention</h4>
                    <p className="text-sm text-gray-600">We may retain certain data as required by law or for legitimate business purposes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Outstanding Obligations</h4>
                    <p className="text-sm text-gray-600">Any outstanding fees or obligations must be settled</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Questions About These Terms?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              If you have any questions about these Terms of Service or need clarification 
              on any provision, please contact our legal team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="gradient"
                size="xl"
                className="text-lg font-bold shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300"
              >
                Contact Legal Team
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="text-lg font-bold border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transform hover:-translate-y-1 transition-all duration-300"
              >
                Download Terms
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TermsPage
