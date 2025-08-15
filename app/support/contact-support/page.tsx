import { Metadata } from 'next'
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  Video, 
  Clock,
  MapPin,
  Send,
  CheckCircle
} from 'lucide-react'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Contact Support - Annita',
  description: 'Get in touch with Annita support team. We\'re here to help with any questions or issues.',
}

const ContactSupportPage = () => {
  const contactMethods = [
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      response: 'Usually responds in 2 minutes',
      availability: '24/7',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      response: 'Response within 24 hours',
      availability: '24/7',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our team',
      response: 'Available 8AM-6PM GMT',
      availability: 'Mon-Fri, 8AM-6PM GMT',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Video,
      title: 'Video Call',
      description: 'Screen sharing for complex issues',
      response: 'By appointment only',
      availability: 'Mon-Fri, 9AM-5PM GMT',
      color: 'from-orange-500 to-red-500'
    }
  ]

  const supportTopics = [
    'Account & Billing',
    'Technical Issues',
    'Payment Problems',
    'Marketplace Support',
    'Logistics & Delivery',
    'Business Services',
    'API & Integration',
    'General Inquiries'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-10 h-10" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Contact Support
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8">
              We're here to help. Choose the best way to get in touch with us.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How Can We Help?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your preferred contact method. We're available 24/7 to assist you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-soft text-center hover:shadow-medium transition-all duration-300 group">
                <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <div className="text-sm text-gray-500 mb-6">
                  <div className="mb-2">{method.response}</div>
                  <div className="flex items-center justify-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{method.availability}</span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full"
                >
                  Get Help
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-soft">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Send Us a Message
              </h2>
              
              <form className="space-y-8">
                {/* Topic Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Support Topic *
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Select a topic</option>
                    {supportTopics.map((topic, index) => (
                      <option key={index} value={topic.toLowerCase().replace(/\s+/g, '-')}>
                        {topic}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Subject *
                  </label>
                  <input
                    type="text"
                    placeholder="Brief description of your issue"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Message *
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Please provide detailed information about your issue or question..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <Button variant="gradient" size="lg" className="px-12">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-soft">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Office Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Headquarters</h3>
                      <p className="text-gray-600">
                        Monrovia, Liberia<br />
                        West Africa
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 8:00 AM - 6:00 PM GMT<br />
                        Saturday: 9:00 AM - 3:00 PM GMT<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Phone Support</h3>
                      <p className="text-gray-600">
                        +231 XXX XXX XXX<br />
                        +231 XXX XXX XXX
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Email Support</h3>
                      <p className="text-gray-600">
                        support@annita.com<br />
                        help@annita.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Quick answers to common questions before contacting support.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="bg-white rounded-2xl p-6 shadow-soft">
                <h3 className="font-bold text-gray-900 mb-2">How long does support take to respond?</h3>
                <p className="text-gray-600 text-sm">Live chat responses are typically within 2 minutes. Email responses are within 24 hours.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-soft">
                <h3 className="font-bold text-gray-900 mb-2">What information should I provide?</h3>
                <p className="text-gray-600 text-sm">Include your account details, error messages, and steps to reproduce the issue.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-soft">
                <h3 className="font-bold text-gray-900 mb-2">Is support available in multiple languages?</h3>
                <p className="text-gray-600 text-sm">Yes, we provide support in English, French, and Portuguese.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-soft">
                <h3 className="font-bold text-gray-900 mb-2">Can I schedule a call with support?</h3>
                <p className="text-gray-600 text-sm">Yes, you can schedule video calls for complex technical issues.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactSupportPage
