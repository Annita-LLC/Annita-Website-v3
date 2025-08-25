import React from 'react'
import SEOHead from '@/components/seo/SEOHead'
import Button from '@/components/ui/Button'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  HelpCircle, 
  Users, 
  Globe,
  CheckCircle,
  Star
} from 'lucide-react'

export default function ContactUsPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get help via email',
      contact: 'annitallc@gmail.com',
      href: 'mailto:annitallc@gmail.com',
      responseTime: 'Within 24 hours'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us directly',
      contact: '+231 77 505 7227',
      href: 'tel:+231775057227',
      responseTime: 'Available 24/7'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our team',
      contact: 'Available on website',
      href: '#',
      responseTime: 'Instant response'
    }
  ]

  const officeHours = [
    { day: 'Monday - Friday', hours: '8:30 AM - 5:30 PM GMT' },
    { day: 'Saturday', hours: '8:30 AM - 2:00 PM GMT' },
    { day: 'Sunday', hours: 'Closed' }
  ]

  const faqs = [
    {
      question: 'How do I reset my password?',
      answer: 'You can reset your password by clicking the "Forgot Password" link on the login page. You\'ll receive an email with instructions to create a new password.'
    },
    {
      question: 'How do I update my account information?',
      answer: 'Log into your account and go to Settings > Profile to update your personal information, contact details, and preferences.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, mobile money, bank transfers, and digital wallets. Payment options vary by region.'
    },
    {
      question: 'How do I report a technical issue?',
      answer: 'You can report technical issues by emailing us directly or using the "Report Issues" feature in your account.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, we use industry-standard encryption and security measures to protect your personal and financial information.'
    },
    {
      question: 'How do I cancel my subscription?',
      answer: 'You can cancel your subscription at any time through your account settings. There are no cancellation fees.'
    }
  ]

  const supportCategories = [
    {
      icon: HelpCircle,
      title: 'General Support',
      description: 'Account issues, technical problems, and general questions',
      
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with other users and share experiences',
      
    },
    {
      icon: Globe,
      title: 'Regional Support',
      description: 'Local language support and regional assistance',
      
    }
  ]

  return (
    <>
      <SEOHead 
        title="Contact Us - Get Help & Support"
        description="Get in touch with Annita's support team. We're here to help with any questions, technical issues, or general inquiries. Contact us via email, phone, or live chat."
        keywords={[
          'contact us',
          'customer support',
          'help desk',
          'technical support',
          'customer service',
          'Annita support',
          'contact information',
          'support team',
          'help center',
          'customer care'
        ]}
        canonical="/contact-us"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-zen-dots font-bold text-heading mb-6">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary mb-8 font-lora">
              We're here to help! Get in touch with our support team for any questions, 
              technical issues, or general inquiries about Annita.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:annitallc@gmail.com" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-xl transition-all duration-300">
                <Mail className="w-5 h-5 mr-2" />
                Email Support
              </a>
              <a href="tel:+231775057227" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
                <Phone className="w-5 h-5 mr-2" />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-medium hover:shadow-large transition-all duration-300 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mr-4">
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-zen-dots font-semibold text-heading">{method.title}</h3>
                    <p className="text-sm text-text-secondary">{method.description}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary">Contact:</span>
                    <a 
                      href={method.href} 
                      className="text-primary-600 dark:text-primary-400 font-medium hover:underline"
                    >
                      {method.contact}
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary">Response:</span>
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">
                      {method.responseTime}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Hours & Location */}
      <section className="py-16 sm:py-20 bg-section-light dark:bg-section-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-zen-dots font-bold text-heading mb-6">
                Office Hours & Location
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-heading mb-3">Business Hours</h3>
                    <div className="space-y-2">
                      {officeHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="text-text-secondary">{schedule.day}:</span>
                          <span className="font-medium">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-heading mb-2">Office Address</h3>
                    <p className="text-text-secondary">
                      Duazon, Silver Beach Road<br />
                      Monrovia, Liberia
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-medium border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-zen-dots font-semibold text-heading mb-4">
                Why Choose Our Support?
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-text-secondary">24/7 availability for urgent issues</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-text-secondary">Multilingual support team</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-text-secondary">Average response time under 2 hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-text-secondary">Expert technical assistance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-text-secondary">Personalized solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-zen-dots font-bold text-heading mb-4">
              Get the Right Support
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Choose the support option that best fits your needs. We have specialized teams 
              for different types of inquiries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportCategories.map((category, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-medium hover:shadow-large transition-all duration-300 border border-gray-200 dark:border-gray-700 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-zen-dots font-semibold text-heading mb-3">
                  {category.title}
                </h3>
                <p className="text-text-secondary mb-6">
                  {category.description}
                </p>
                <div className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold border-2 border-gray-300 text-gray-500 rounded-lg">
                  Coming Soon
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-section-light dark:bg-section-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-zen-dots font-bold text-heading mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Find quick answers to common questions. Can't find what you're looking for? 
              Contact our support team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-medium border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-heading mb-3 flex items-start">
                  <Star className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-text-secondary font-lora">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-text-secondary mb-6">
              Still have questions? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:annitallc@gmail.com" className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-xl transition-all duration-300">
                <Mail className="w-4 h-4 mr-2" />
                Email Support
              </a>
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
