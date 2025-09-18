'use client'

import { useState } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import { 
  Users, 
  Heart, 
  Zap, 
  Globe, 
  Award,
  CheckCircle,
  ArrowRight,
  MapPin,
  Clock,
  DollarSign,
  GraduationCap,
  Download,
  Mail,
  Phone,
  MessageSquare,
  Star
} from 'lucide-react'
import Link from 'next/link'
import { useFormSubmission, formValidations } from '@/lib/hooks/useFormSubmission'

export default function CareersPage() {
  const [selectedPosition, setSelectedPosition] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    experience: '',
    message: ''
  })
  const { submitForm, isSubmitting, isSubmitted, error, success, reset } = useFormSubmission({
    validateForm: formValidations.career,
    onSuccess: (data) => {
      console.log('career form submitted successfully:', data)
    },
    onError: (error) => {
      console.error('career form submission failed:', error)
    }
  })

  const values = [
    {
      icon: Heart,
      title: 'Passion for Impact',
      description: 'We are driven by the mission to empower millions of African businesses'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of diverse teams working together'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We constantly push boundaries to solve complex challenges'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'We think globally while acting locally across Africa'
    }
  ]

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Salary',
      description: 'Above-market compensation with equity options'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Growth',
      description: 'Continuous learning opportunities and career development'
    },
    {
      icon: Globe,
      title: 'Remote Work',
      description: 'Flexible work arrangements and global team collaboration'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Regular recognition and rewards for outstanding performance'
    },
    {
      icon: Users,
      title: 'Team Events',
      description: 'Regular team building and social events'
    }
  ]

  const departments = [
    {
      id: 'engineering',
      title: 'Engineering',
      description: 'Build scalable applications and contribute to our platform development',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'product',
      title: 'Product',
      description: 'Lead product strategy and drive innovation across our platform',
      icon: Star,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'marketing',
      title: 'Marketing',
      description: 'Develop and execute marketing strategies for African markets',
      icon: Heart,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'sales',
      title: 'Sales',
      description: 'Drive business growth through strategic partnerships and sales',
      icon: Users,
      color: 'from-orange-500 to-red-500'
    }
  ]

  const teamStats = [
    { number: '3', label: 'Team Members' },
    { number: '1+', label: 'Countries' },
    { number: '100%', label: 'Employee Satisfaction' },
    { number: 'Growing', label: 'Team' }
  ]

  const handleDepartmentSelect = (departmentId: string) => {
    setSelectedPosition(departmentId)
    setFormData(prev => ({ ...prev, position: departmentId }))
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await submitForm('career', formData)
  }

  return (
    <>
      <SEOHead
        title="Careers - Join Annita's Mission"
        description="Join Annita's mission to empower Africa's MSMEs. Explore career opportunities in technology, business, and innovation. Competitive salary, health benefits, remote work, and continuous learning opportunities. Build the future of African digital commerce."
        keywords={[
          'careers at Annita',
          'Annita jobs',
          'job opportunities',
          'career opportunities',
          'work at Annita',
          'join Annita',
          'employment',
          'hiring',
          'job openings',
          'remote work',
          'technology jobs',
          'business jobs',
          'innovation jobs',
          'African tech jobs',
          'Liberia jobs',
          'West Africa jobs',
          'engineering jobs',
          'frontend engineer',
          'backend engineer',
          'full-stack developer',
          'product manager',
          'data scientist',
          'marketing manager',
          'sales representative',
          'customer success',
          'business development',
          'competitive salary',
          'health benefits',
          'equity options',
          'learning opportunities',
          'career development',
          'team collaboration',
          'global perspective',
          'passion for impact',
          'innovation culture',
          'diverse teams',
          'African business',
          'digital transformation',
          'fintech careers',
          'e-commerce careers',
          'AI careers',
          'logistics careers',
          'marketing careers',
          'sales careers',
          'customer service careers',
          'business careers',
          'startup careers',
          'tech startup jobs',
          'African startup',
          'MSME empowerment',
          'social impact jobs'
        ]}
        canonical="/careers"
      />

      {/* Enhanced Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800 py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-orange-200/30 dark:bg-orange-800/20 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-red-200/20 dark:bg-red-800/15 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-orange-300/25 dark:bg-orange-700/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-red-300/15 dark:bg-red-700/10 rounded-full animate-bounce"></div>
        </div>
        
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 relative">
          <div className="max-w-5xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm sm:text-base font-medium mb-6 sm:mb-8">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Join Our Team
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 leading-tight">
                Join Our <span className="text-orange-500 dark:text-orange-400">Mission</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                Help us empower millions of African MSMEs through innovative technology. 
                Be part of something bigger than yourself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {!isSubmitted ? (
        <div className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
                {/* Enhanced Careers Information */}
                                 <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
                    Future <span className="text-orange-500 dark:text-orange-400">Opportunities</span>
                   </h2>
                  <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 leading-relaxed">
                     While we don't have any open positions at the moment, we're always looking for 
                     passionate individuals who share our vision. Submit your application and we'll 
                     contact you when opportunities arise.
                   </p>

                  {/* Enhanced Team Stats */}
                  <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
                     {teamStats.map((stat, index) => (
                      <div key={index} className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700 text-center hover:shadow-xl transition-shadow duration-300">
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">{stat.number}</div>
                        <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{stat.label}</div>
                       </div>
                     ))}
                   </div>

                  {/* Enhanced Departments */}
                  <div className="space-y-6 sm:space-y-8">
                    {departments.map((department) => (
                                             <button
                         key={department.id}
                         onClick={() => handleDepartmentSelect(department.id)}
                        className={`w-full p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border-2 transition-all duration-300 text-left hover:shadow-lg ${
                           selectedPosition === department.id
                            ? 'border-orange-500 dark:border-orange-400 bg-orange-50 dark:bg-orange-900/20 shadow-lg'
                             : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-white dark:bg-gray-800'
                         }`}
                       >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8">
                          <div className="flex items-center space-x-4 sm:space-x-6 mb-4 sm:mb-0">
                            <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${department.color} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg`}>
                              <department.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                             </div>
                             <div>
                              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">{department.title}</h3>
                              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Department</p>
                             </div>
                           </div>
                           <div className="text-right">
                            <div className="text-lg sm:text-xl font-bold text-orange-600 dark:text-orange-400 mb-1">Future Role</div>
                            <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Remote / Liberia</div>
                           </div>
                         </div>
                         
                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">{department.description}</p>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                             <span>Various levels</span>
                           </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                             <span>Remote / Liberia</span>
                           </div>
                         </div>
                       </button>
                    ))}
                  </div>

                  {/* Enhanced Values */}
                  <div className="mt-12 sm:mt-16 bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg border border-gray-200 dark:border-gray-700">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
                       Our Values
                     </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                       {values.map((value, index) => (
                        <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                            <value.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                           </div>
                           <div>
                            <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1">{value.title}</h4>
                            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">{value.description}</p>
                           </div>
                         </div>
                       ))}
                     </div>
                   </div>
                </div>

                {/* Enhanced Contact Form */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8 lg:p-10 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
                     {selectedPosition ? `Apply for ${departments.find(d => d.id === selectedPosition)?.title} Role` : 'Submit Your Application'}
                   </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                                         {!selectedPosition && (
                       <div className="bg-orange-50 dark:bg-orange-900/30 rounded-lg p-4 mb-6">
                         <p className="text-sm text-orange-700 dark:text-orange-300">
                           Please select a department above to apply, or submit a general application for future opportunities.
                         </p>
                       </div>
                     )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                                             <div>
                        <label className="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2 sm:mb-3">
                           Full Name *
                         </label>
                         <input
                           type="text"
                           required
                           value={formData.name}
                           onChange={(e) => handleInputChange('name', e.target.value)}
                          className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                           placeholder="Your full name"
                         />
                       </div>
                      
                                             <div>
                        <label className="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2 sm:mb-3">
                           Email Address *
                         </label>
                         <input
                           type="email"
                           required
                           value={formData.email}
                           onChange={(e) => handleInputChange('email', e.target.value)}
                          className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                           placeholder="your.email@company.com"
                         />
                       </div>
                    </div>

                                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div>
                         <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                           Phone Number
                         </label>
                         <input
                           type="tel"
                           value={formData.phone}
                           onChange={(e) => handleInputChange('phone', e.target.value)}
                           className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                           placeholder="+1234567890"
                         />
                       </div>

                       <div>
                         <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                           Current Company
                         </label>
                         <input
                           type="text"
                           value={formData.company}
                           onChange={(e) => handleInputChange('company', e.target.value)}
                           className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                           placeholder="Your current company"
                         />
                       </div>
                     </div>

                                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div>
                         <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                           Years of Experience
                         </label>
                         <select
                           value={formData.experience}
                           onChange={(e) => handleInputChange('experience', e.target.value)}
                           className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                         >
                           <option value="">Select experience level</option>
                           <option value="0-1">0-1 years</option>
                           <option value="2-3">2-3 years</option>
                           <option value="4-5">4-5 years</option>
                           <option value="6-8">6-8 years</option>
                           <option value="8+">8+ years</option>
                         </select>
                       </div>
                       
                       <div>
                         <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                           Preferred Department
                         </label>
                         <select
                           value={formData.position}
                           onChange={(e) => handleInputChange('position', e.target.value)}
                           className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                         >
                           <option value="">Select department</option>
                           {departments.map((dept) => (
                             <option key={dept.id} value={dept.id}>{dept.title}</option>
                           ))}
                         </select>
                       </div>
                     </div>

                                         <div>
                       <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                         Cover Letter
                       </label>
                       <textarea
                         rows={4}
                         value={formData.message}
                         onChange={(e) => handleInputChange('message', e.target.value)}
                         className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                         placeholder="Tell us about your skills, experience, and why you'd be a great fit for our team. We'll contact you when relevant opportunities arise..."
                       />
                     </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-orange-500 text-white font-semibold rounded-lg sm:rounded-xl hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 text-base sm:text-lg shadow-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 sm:h-6 sm:w-6 border-b-2 border-white mr-2"></div>
                          Processing...
                        </>
                      ) : (
                        <>
                          Submit Application
                          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2" />
                        </>
                      )}
                    </button>
                  </form>

                                     {/* Benefits */}
                   <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                     <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Why Work at Annita?</h4>
                     <div className="space-y-3">
                       {benefits.slice(0, 3).map((benefit, index) => (
                         <div key={index} className="flex items-center space-x-3">
                           <benefit.icon className="w-5 h-5 text-orange-500" />
                           <span className="text-sm text-gray-600 dark:text-gray-400">{benefit.title}</span>
                         </div>
                       ))}
                     </div>
                   </div>

                   {/* Contact Information */}
                   <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                     <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Need Help?</h4>
                     <div className="space-y-3">
                       <div className="flex items-center space-x-3">
                         <Mail className="w-5 h-5 text-orange-500" />
                         <span className="text-gray-600 dark:text-gray-400">annitallc@gmail.com</span>
                       </div>
                       <div className="flex items-center space-x-3">
                         <Phone className="w-5 h-5 text-orange-500" />
                         <span className="text-gray-600 dark:text-gray-400">+231 77 505 7227</span>
                       </div>
                       <div className="flex items-center space-x-3">
                         <MessageSquare className="w-5 h-5 text-orange-500" />
                         <span className="text-gray-600 dark:text-gray-400">Live chat available</span>
                       </div>
                     </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
                 /* Success Message */
         <div className="py-16 sm:py-20">
           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
             <div className="max-w-2xl mx-auto text-center">
               <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                 <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
               </div>
               
               <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                 Application Submitted Successfully!
               </h2>
               
               <p className="text-gray-600 dark:text-gray-300 mb-8">
                 Thank you for your interest in joining our team! We'll keep your application on file and contact you when relevant opportunities arise.
               </p>
               
               <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
                 <h3 className="font-semibold text-gray-900 dark:text-white mb-4">What happens next?</h3>
                 <div className="space-y-3 text-left">
                   <div className="flex items-center">
                     <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</div>
                     <span className="text-gray-600 dark:text-gray-300">We'll review your application and keep it on file</span>
                   </div>
                   <div className="flex items-center">
                     <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</div>
                     <span className="text-gray-600 dark:text-gray-300">When opportunities arise, we'll contact you</span>
                   </div>
                   <div className="flex items-center">
                     <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</div>
                     <span className="text-gray-600 dark:text-gray-300">You'll be considered for relevant positions</span>
                   </div>
                 </div>
               </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-200"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Contact HR
                </Link>
                <button
                  onClick={() => {
                    reset()
                    setSelectedPosition('')
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      company: '',
                      position: '',
                      experience: '',
                      message: ''
                    })
                  }}
                  className="inline-flex items-center px-6 py-3 border-2 border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-50 transition-colors duration-200"
                >
                  Apply for Another Department
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center p-8 sm:p-12 lg:p-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl text-white shadow-2xl">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
                 Ready to Transform Your Business?
               </h3>
              <p className="text-lg sm:text-xl lg:text-2xl text-orange-100 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                 Join thousands of MSMEs already using Annita to grow their revenue, reach new customers, 
                 and streamline their operations across Africa.
               </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <a 
                  href="/download"
                  className="inline-flex items-center justify-center bg-white text-orange-600 px-8 sm:px-10 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-orange-50 transition-colors duration-200 text-base sm:text-lg shadow-lg"
                >
                  <Download className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                  Download App
                </a>
                <a 
                  href="/contact-sales"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200 text-base sm:text-lg"
                >
                  Contact Sales
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
