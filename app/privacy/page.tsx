"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import { Shield, Eye, Lock, Users, Globe, Calendar, Mail, Phone } from 'lucide-react'

const PrivacyPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const lastUpdated = "March 15, 2024"
  const effectiveDate = "March 15, 2024"

  return (
    <>
      <SEOHead
        title="Privacy Policy - Annita LLC"
        description="Learn how Annita collects, uses, and protects your personal information. Read our comprehensive privacy policy."
        keywords="privacy policy, data protection, personal information, GDPR, Annita, privacy"
        canonical="/privacy"
        ogImage="/images/privacy-policy.jpg"
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600"></div>
          <div className="absolute inset-0 bg-black opacity-20"></div>
          
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <Shield className="w-12 h-12 text-orange-200" />
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                  Privacy <span className="text-orange-200">Policy</span>
                </h1>
              </div>
              <p className="text-xl sm:text-2xl text-orange-100 max-w-3xl mx-auto mb-8">
                How we collect, use, and protect your personal information
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-white/20 px-4 py-2 rounded-full">
                  Last Updated: {lastUpdated}
                </span>
                <span className="bg-white/20 px-4 py-2 rounded-full">
                  Effective Date: {effectiveDate}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 sm:py-20" ref={ref}>
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-2xl shadow-lg p-8 sm:p-12"
              >
                {/* Introduction */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Annita LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, mobile applications, and services (collectively, the "Services").
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    By using our Services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our Services.
                  </p>
                </div>

                {/* Information We Collect */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Information We Collect</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Users className="w-5 h-5 text-orange-500" />
                        Personal Information
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-3">
                        We may collect personal information that you provide directly to us, including:
                      </p>
                      <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                        <li>Name, email address, phone number, and postal address</li>
                        <li>Payment information and transaction history</li>
                        <li>Account credentials and profile information</li>
                        <li>Communication preferences and marketing preferences</li>
                        <li>Feedback, reviews, and survey responses</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Globe className="w-5 h-5 text-orange-500" />
                        Automatically Collected Information
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-3">
                        When you use our Services, we automatically collect certain information, including:
                      </p>
                      <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                        <li>Device information (IP address, browser type, operating system)</li>
                        <li>Usage data (pages visited, time spent, features used)</li>
                        <li>Location information (with your consent)</li>
                        <li>Cookies and similar tracking technologies</li>
                        <li>Log files and analytics data</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* How We Use Your Information */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We use the information we collect for various purposes, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Providing and maintaining our Services</li>
                    <li>Processing transactions and payments</li>
                    <li>Communicating with you about your account and services</li>
                    <li>Sending marketing and promotional materials (with your consent)</li>
                    <li>Improving our Services and user experience</li>
                    <li>Detecting and preventing fraud and security threats</li>
                    <li>Complying with legal obligations</li>
                    <li>Conducting research and analytics</li>
                  </ul>
                </div>

                {/* Information Sharing */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Information Sharing and Disclosure</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our Services</li>
                    <li><strong>Legal Requirements:</strong> We may disclose information if required by law or to protect our rights and safety</li>
                    <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
                    <li><strong>Consent:</strong> We may share information with your explicit consent</li>
                  </ul>
                </div>

                {/* Data Security */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Lock className="w-8 h-8 text-orange-500" />
                    Data Security
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and authentication measures</li>
                    <li>Employee training on data protection</li>
                    <li>Incident response procedures</li>
                  </ul>
                </div>

                {/* Your Rights */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Rights and Choices</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Depending on your location, you may have certain rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li><strong>Access:</strong> Request access to your personal information</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                    <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                    <li><strong>Objection:</strong> Object to certain processing activities</li>
                    <li><strong>Withdrawal:</strong> Withdraw consent where processing is based on consent</li>
                  </ul>
                </div>

                {/* Cookies */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookies and Tracking Technologies</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We use cookies and similar tracking technologies to enhance your experience on our Services. You can control cookie settings through your browser preferences.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    For more information about our use of cookies, please see our <a href="/cookies" className="text-orange-600 hover:text-orange-700 underline">Cookie Policy</a>.
                  </p>
                </div>

                {/* Children's Privacy */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Children's Privacy</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Our Services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
                  </p>
                </div>

                {/* International Transfers */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">International Data Transfers</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
                  </p>
                </div>

                {/* Changes to Policy */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to This Privacy Policy</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Posting the updated policy on our website</li>
                    <li>Sending you an email notification</li>
                    <li>Displaying a notice on our Services</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed mt-4">
                    Your continued use of our Services after any changes constitutes acceptance of the updated policy.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-orange-500" />
                        <span className="text-gray-700">Email: privacy@annita.com</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-orange-500" />
                        <span className="text-gray-700">Phone: +231 775 057 227</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Globe className="w-5 h-5 text-orange-500" />
                        <span className="text-gray-700">Address: Monrovia, Liberia</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Effective Date */}
                <div className="border-t border-gray-200 pt-6">
                  <p className="text-sm text-gray-500">
                    <strong>Effective Date:</strong> {effectiveDate}
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Last Updated:</strong> {lastUpdated}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default PrivacyPage
