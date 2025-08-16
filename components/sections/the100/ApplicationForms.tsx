"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Users, Building, UserCheck, Send, CheckCircle, AlertCircle } from 'lucide-react'

const ApplicationForms = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [activeForm, setActiveForm] = useState('youth')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const formTypes = [
    {
      id: 'youth',
      title: 'Youth Application',
      description: 'Apply to join The 100 program as a participant',
      icon: Users,
      color: 'orange'
    },
    {
      id: 'partner',
      title: 'Partner Application',
      description: 'Partner with us to support The 100 initiative',
      icon: Building,
      color: 'blue'
    },
    {
      id: 'mentor',
      title: 'Mentor Application',
      description: 'Share your expertise as a mentor',
      icon: UserCheck,
      color: 'green'
    }
  ]

  const handleSubmit = async (formData: any, formType: string) => {
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
    }, 3000)
  }

  const YouthForm = () => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      age: '',
      education: '',
      institution: '',
      sector: '',
      experience: '',
      goals: '',
      motivation: '',
      availability: '',
      references: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmitForm = (e: React.FormEvent) => {
      e.preventDefault()
      handleSubmit(formData, 'youth')
    }

    return (
      <form onSubmit={handleSubmitForm} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Age *</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              min="16"
              max="30"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Education Level *</label>
            <select
              name="education"
              value={formData.education}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="">Select Education Level</option>
              <option value="high-school">High School</option>
              <option value="college">College/University</option>
              <option value="vocational">Vocational Training</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Institution/School *</label>
          <input
            type="text"
            name="institution"
            value={formData.institution}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Sector *</label>
          <select
            name="sector"
            value={formData.sector}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          >
            <option value="">Select Sector</option>
            <option value="technology">Technology & Digital</option>
            <option value="agriculture">Agriculture & Food</option>
            <option value="healthcare">Healthcare & Wellness</option>
            <option value="education">Education & Training</option>
            <option value="manufacturing">Manufacturing & Trade</option>
            <option value="creative">Creative & Media</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Previous Experience</label>
          <textarea
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            rows={3}
            placeholder="Describe any relevant work, volunteer, or leadership experience..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Career Goals *</label>
          <textarea
            name="goals"
            value={formData.goals}
            onChange={handleChange}
            required
            rows={3}
            placeholder="What are your career goals and how do you think The 100 program will help you achieve them?"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Motivation *</label>
          <textarea
            name="motivation"
            value={formData.motivation}
            onChange={handleChange}
            required
            rows={3}
            placeholder="Why do you want to join The 100 program? What motivates you?"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Availability *</label>
          <select
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          >
            <option value="">Select Availability</option>
            <option value="full-time">Full-time (40+ hours/week)</option>
            <option value="part-time">Part-time (20-30 hours/week)</option>
            <option value="flexible">Flexible schedule</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">References</label>
          <textarea
            name="references"
            value={formData.references}
            onChange={handleChange}
            rows={2}
            placeholder="Please provide contact information for 2-3 references (name, relationship, phone/email)"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </button>
      </form>
    )
  }

  const PartnerForm = () => {
    const [formData, setFormData] = useState({
      companyName: '',
      contactPerson: '',
      email: '',
      phone: '',
      website: '',
      industry: '',
      partnershipType: '',
      resources: '',
      expectations: '',
      message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmitForm = (e: React.FormEvent) => {
      e.preventDefault()
      handleSubmit(formData, 'partner')
    }

    return (
      <form onSubmit={handleSubmitForm} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person *</label>
            <input
              type="text"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Industry *</label>
          <select
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select Industry</option>
            <option value="technology">Technology</option>
            <option value="finance">Finance & Banking</option>
            <option value="healthcare">Healthcare</option>
            <option value="education">Education</option>
            <option value="manufacturing">Manufacturing</option>
            <option value="retail">Retail & Commerce</option>
            <option value="nonprofit">Non-profit</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Partnership Type *</label>
          <select
            name="partnershipType"
            value={formData.partnershipType}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select Partnership Type</option>
            <option value="internship">Internship Provider</option>
            <option value="mentorship">Mentorship Support</option>
            <option value="funding">Funding Partner</option>
            <option value="resources">Resource Provider</option>
            <option value="networking">Networking Partner</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Resources You Can Provide</label>
          <textarea
            name="resources"
            value={formData.resources}
            onChange={handleChange}
            rows={3}
            placeholder="What resources, expertise, or support can your organization provide to The 100 participants?"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Partnership Expectations</label>
          <textarea
            name="expectations"
            value={formData.expectations}
            onChange={handleChange}
            rows={3}
            placeholder="What do you hope to achieve through this partnership?"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Additional Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            placeholder="Any additional information you'd like to share..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Partnership Application'}
        </button>
      </form>
    )
  }

  const MentorForm = () => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      position: '',
      experience: '',
      expertise: '',
      availability: '',
      motivation: '',
      message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmitForm = (e: React.FormEvent) => {
      e.preventDefault()
      handleSubmit(formData, 'mentor')
    }

    return (
      <form onSubmit={handleSubmitForm} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Company/Organization</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Position/Title *</label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Years of Experience *</label>
          <select
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="">Select Experience Level</option>
            <option value="1-3">1-3 years</option>
            <option value="4-7">4-7 years</option>
            <option value="8-15">8-15 years</option>
            <option value="15+">15+ years</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Areas of Expertise *</label>
          <textarea
            name="expertise"
            value={formData.expertise}
            onChange={handleChange}
            required
            rows={3}
            placeholder="Describe your areas of expertise, skills, and knowledge that you can share with participants..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Availability *</label>
          <select
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="">Select Availability</option>
            <option value="1-2-hours">1-2 hours per week</option>
            <option value="3-5-hours">3-5 hours per week</option>
            <option value="5-10-hours">5-10 hours per week</option>
            <option value="flexible">Flexible schedule</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Motivation *</label>
          <textarea
            name="motivation"
            value={formData.motivation}
            onChange={handleChange}
            required
            rows={3}
            placeholder="Why do you want to become a mentor? What motivates you to help young entrepreneurs?"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Additional Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            placeholder="Any additional information you'd like to share..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Mentor Application'}
        </button>
      </form>
    )
  }

  return (
    <section className="py-16 sm:py-20" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Apply <span className="text-orange-600">Now</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to join The 100 initiative? Choose the application that best fits your role 
              and start your journey toward success.
            </p>
          </motion.div>

          {/* Form Type Selector */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {formTypes.map((formType) => (
                <button
                  key={formType.id}
                  onClick={() => setActiveForm(formType.id)}
                  className={`p-6 rounded-xl border-2 transition-all duration-200 ${
                    activeForm === formType.id
                      ? `border-${formType.color}-500 bg-${formType.color}-50`
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto ${
                    activeForm === formType.id
                      ? `bg-${formType.color}-600`
                      : 'bg-gray-100'
                  }`}>
                    <formType.icon className={`w-6 h-6 ${
                      activeForm === formType.id ? 'text-white' : 'text-gray-600'
                    }`} />
                  </div>
                  <h3 className={`text-lg font-semibold mb-2 ${
                    activeForm === formType.id ? `text-${formType.color}-700` : 'text-gray-900'
                  }`}>
                    {formType.title}
                  </h3>
                  <p className="text-sm text-gray-600">{formType.description}</p>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Form Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
          >
            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <p className="text-green-800">Application submitted successfully! We'll contact you soon.</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
                <AlertCircle className="w-5 h-5 text-red-600" />
                <p className="text-red-800">There was an error submitting your application. Please try again.</p>
              </div>
            )}

            {/* Form Content */}
            {activeForm === 'youth' && <YouthForm />}
            {activeForm === 'partner' && <PartnerForm />}
            {activeForm === 'mentor' && <MentorForm />}
          </motion.div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Application Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div>
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2">1</div>
                  <p className="text-gray-700">Submit your application</p>
                </div>
                <div>
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2">2</div>
                  <p className="text-gray-700">Review and selection process</p>
                </div>
                <div>
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2">3</div>
                  <p className="text-gray-700">Notification of acceptance</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ApplicationForms
