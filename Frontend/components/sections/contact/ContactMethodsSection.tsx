"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  Clock,
  ArrowRight
} from 'lucide-react'
import Button from '@/components/ui/Button'

const ContactMethodsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get help with your account or technical issues',
      contact: 'support@annita.com',
      response: 'Response within 24 hours',
      color: 'from-blue-500 to-cyan-500',
      action: 'Send Email'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our support team',
      contact: '+231 123 456 789',
      response: 'Available 8AM-6PM GMT',
      color: 'from-green-500 to-emerald-500',
      action: 'Call Now'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Instant support through our chat system',
      contact: 'Available on website',
      response: 'Real-time assistance',
      color: 'from-purple-500 to-pink-500',
      action: 'Start Chat'
    }
  ]

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-orange-600 mb-4 sm:mb-6">
            How Can We Help?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Choose your preferred contact method. We're here to assist you with any questions or support needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-soft hover:shadow-large transition-all duration-300 group transform hover:-translate-y-2"
            >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${method.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <method.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{method.title}</h3>
              <p className="text-gray-600 mb-4 sm:mb-6">{method.description}</p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-2">
                  <method.icon className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{method.contact}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{method.response}</span>
                </div>
              </div>
              
              <Button
                variant="outline"
                size="sm"
                icon={ArrowRight}
                className="w-full"
              >
                {method.action}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactMethodsSection
