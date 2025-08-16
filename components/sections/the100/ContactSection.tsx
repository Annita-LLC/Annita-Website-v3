"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'

const ContactSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    interest: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Simulate success
    setSubmitStatus('success')
    setIsSubmitting(false)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitStatus('idle')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        interest: ''
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "the100@annita.com",
      description: "Send us an email for general inquiries"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+231 775 057 227",
      description: "Speak directly with our team"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Monrovia, Liberia",
      description: "Schedule an in-person meeting"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Fri: 8AM - 6PM",
      description: "Liberia Time (GMT+0)"
    }
  ]

  const faqs = [
    {
      question: "Who can apply to The 100 program?",
      answer: "Liberian youths aged 16-30 from high schools and colleges across various sectors are eligible to apply. We look for motivated individuals with a passion for entrepreneurship and community development."
    },
    {
      question: "What does the program cost?",
      answer: "The 100 program is completely free for selected participants. All training, mentorship, and resources are provided at no cost. Mini-grants are also available for business startup funding."
    },
    {
      question: "How long is the program?",
      answer: "The program runs for 6 months with two cohorts per year - Spring (April-September) and Fall (October-March). Applications open 2-3 months before each cohort begins."
    },
    {
      question: "What sectors are covered?",
      answer: "We welcome participants from all sectors including Technology, Agriculture, Healthcare, Education, Manufacturing, Creative Arts, and more. The program is designed to support diverse entrepreneurial interests."
    },
    {
      question: "How can organizations partner with The 100?",
      answer: "Organizations can partner as internship providers, mentors, funding partners, or resource providers. We offer various partnership opportunities to support youth development and community growth."
    },
    {
      question: "What happens after graduation?",
      answer: "Graduates become part of our alumni network with ongoing support, networking opportunities, and access to additional resources. Many continue to receive mentorship and business development assistance."
    }
  ]

  return (
    <section className="py-16 sm:py-20" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Get in <span className="text-orange-600">Touch</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have questions about The 100 initiative? Want to partner with us? 
              Ready to apply? We're here to help you get started on your journey.
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-orange-600 font-medium mb-2">{info.details}</p>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form and FAQ */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <p className="text-green-800">Message sent successfully! We'll get back to you soon.</p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <p className="text-red-800">There was an error sending your message. Please try again.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      >
                        <option value="">Select Subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="application">Application Question</option>
                        <option value="partnership">Partnership Interest</option>
                        <option value="mentorship">Mentorship Opportunity</option>
                        <option value="support">Technical Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Area of Interest</label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">Select Interest</option>
                      <option value="youth-participant">Youth Participant</option>
                      <option value="partner-organization">Partner Organization</option>
                      <option value="mentor">Mentor</option>
                      <option value="volunteer">Volunteer</option>
                      <option value="donor">Donor/Sponsor</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us more about your inquiry, question, or how you'd like to get involved with The 100 initiative..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </form>
              </div>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Additional Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-16"
          >
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
                Other Ways to Connect
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Email Updates</h4>
                  <p className="text-gray-700 text-sm">Subscribe to our newsletter for program updates and success stories</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp Group</h4>
                  <p className="text-gray-700 text-sm">Join our WhatsApp community for real-time updates and networking</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Visit Our Office</h4>
                  <p className="text-gray-700 text-sm">Schedule a visit to our office in Monrovia for a personal consultation</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-16 text-center bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
              Don't wait to begin your journey with The 100. Contact us today to learn more, 
              apply for the program, or explore partnership opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200">
                Apply Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200">
                Partner With Us
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
