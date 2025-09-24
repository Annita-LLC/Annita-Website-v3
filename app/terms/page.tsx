"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import { FileText, Shield, Users, Globe, Calendar, Mail, Phone, AlertTriangle, Download, ExternalLink } from 'lucide-react'

const TermsPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const lastUpdated = "March 15, 2024"
  const effectiveDate = "March 15, 2024"

  return (
    <>
      <SEOHead
        title="Terms of Service - Annita LLC"
        description="Read Annita's terms of service to understand your rights and obligations when using our platform and services."
        keywords={[
          'terms of service',
          'terms and conditions',
          'user agreement',
          'Annita',
          'legal',
          'legal terms',
          'service agreement',
          'user terms',
          'platform terms',
          'business terms',
          'digital terms',
          'online agreement',
          'website terms',
          'app terms',
          'service conditions',
          'user obligations',
          'legal framework',
          'business agreement',
          'digital agreement',
          'platform agreement'
        ]}
        canonical="/terms"
        ogImage="/images/terms-of-service.jpg"
      />

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
                  <FileText className="w-5 h-5 mr-2" />
                  Terms of Service
                </div>

                {/* Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                  Terms of <span className="text-orange-200">Service</span>
                </h1>

                {/* Description */}
                <p className="text-xl sm:text-2xl text-orange-100 mb-8 leading-relaxed max-w-2xl">
                  Your agreement with Annita for using our platform and services
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-white">Legal</div>
                    <div className="text-sm text-orange-200">Protection</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-white">Clear</div>
                    <div className="text-sm text-orange-200">Terms</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-white">Fair</div>
                    <div className="text-sm text-orange-200">Agreement</div>
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
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Legal Framework</h3>
                    <p className="text-orange-200">Comprehensive terms and conditions</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                      <span className="text-white">User Agreement</span>
                      <span className="font-bold text-green-300">✓</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                      <span className="text-white">Privacy Protection</span>
                      <span className="font-bold text-green-300">✓</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                      <span className="text-white">Service Terms</span>
                      <span className="font-bold text-green-300">✓</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                      <span className="text-white">Legal Compliance</span>
                      <span className="font-bold text-green-300">✓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Agreement to Terms</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    These Terms of Service ("Terms") govern your use of Annita LLC's website, mobile applications, and services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    If you do not agree to these Terms, please do not use our Services. We reserve the right to modify these Terms at any time, and such modifications will be effective immediately upon posting.
                  </p>
                </div>

                {/* Definitions */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Definitions</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">"Annita," "we," "us," or "our"</h3>
                      <p className="text-gray-600">Refers to Annita LLC, a company registered in Liberia.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">"Services"</h3>
                      <p className="text-gray-600">Refers to our website, mobile applications, payment processing, marketplace, logistics, and all related services.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">"User," "you," or "your"</h3>
                      <p className="text-gray-600">Refers to any individual or entity using our Services.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">"Content"</h3>
                      <p className="text-gray-600">Refers to any information, data, text, graphics, photos, or other materials uploaded, posted, or transmitted through our Services.</p>
                    </div>
                  </div>
                </div>

                {/* Eligibility */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Users className="w-8 h-8 text-orange-500" />
                    Eligibility and Registration
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    To use our Services, you must:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Be at least 18 years old or have parental/guardian consent</li>
                    <li>Have the legal capacity to enter into binding agreements</li>
                    <li>Provide accurate and complete registration information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Comply with all applicable laws and regulations</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed mt-4">
                    You are responsible for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.
                  </p>
                </div>

                {/* Acceptable Use */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Acceptable Use Policy</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    You agree to use our Services only for lawful purposes and in accordance with these Terms. You agree not to:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Infringe upon the rights of others</li>
                    <li>Upload or transmit harmful, offensive, or inappropriate content</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Interfere with or disrupt our Services</li>
                    <li>Use our Services for fraudulent or deceptive purposes</li>
                    <li>Harass, abuse, or harm other users</li>
                    <li>Violate intellectual property rights</li>
                  </ul>
                </div>

                {/* Payment Terms */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Payment Terms</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Fees and Charges</h3>
                      <p className="text-gray-600 leading-relaxed mb-3">
                        We may charge fees for certain Services. All fees are non-refundable unless otherwise stated. You agree to pay all applicable fees and taxes.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Payment Processing</h3>
                      <p className="text-gray-600 leading-relaxed mb-3">
                        Payments are processed through secure third-party payment processors. By making a payment, you authorize us to charge your payment method for the specified amount.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Refunds</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Refund policies vary by service. Please refer to our specific refund policies for each service. We reserve the right to deny refunds in cases of fraud or abuse.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Intellectual Property */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Intellectual Property Rights</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Rights</h3>
                      <p className="text-gray-600 leading-relaxed mb-3">
                        Our Services and all content, features, and functionality are owned by Annita LLC and are protected by copyright, trademark, and other intellectual property laws.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Your Content</h3>
                      <p className="text-gray-600 leading-relaxed mb-3">
                        You retain ownership of content you upload to our Services. By uploading content, you grant us a non-exclusive, worldwide, royalty-free license to use, display, and distribute your content in connection with our Services.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">License to Use</h3>
                      <p className="text-gray-600 leading-relaxed">
                        We grant you a limited, non-exclusive, non-transferable license to use our Services for personal or business purposes in accordance with these Terms.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Privacy and Data */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Privacy and Data Protection</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    By using our Services, you consent to the collection and use of your information as described in our Privacy Policy.
                  </p>
                </div>

                {/* Disclaimers */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <AlertTriangle className="w-8 h-8 text-orange-500" />
                    Disclaimers and Limitations
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Service Availability</h3>
                      <p className="text-gray-600 leading-relaxed">
                        We strive to provide reliable Services but cannot guarantee uninterrupted access. Our Services are provided "as is" without warranties of any kind.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Limitation of Liability</h3>
                      <p className="text-gray-600 leading-relaxed">
                        To the maximum extent permitted by law, Annita LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our Services.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Indemnification</h3>
                      <p className="text-gray-600 leading-relaxed">
                        You agree to indemnify and hold harmless Annita LLC from any claims, damages, or expenses arising from your use of our Services or violation of these Terms.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Termination */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Termination</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Your Right to Terminate</h3>
                      <p className="text-gray-600 leading-relaxed">
                        You may terminate your account at any time by contacting our support team. Upon termination, your access to our Services will cease immediately.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Right to Terminate</h3>
                      <p className="text-gray-600 leading-relaxed">
                        We may terminate or suspend your account immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users or our Services.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Effect of Termination</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Upon termination, your right to use our Services ceases immediately. We may retain certain information as required by law or for legitimate business purposes.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Governing Law */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Governing Law and Disputes</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Governing Law</h3>
                      <p className="text-gray-600 leading-relaxed">
                        These Terms are governed by and construed in accordance with the laws of Liberia. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Liberia.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Dispute Resolution</h3>
                      <p className="text-gray-600 leading-relaxed">
                        We encourage you to contact us first to resolve any disputes. If a dispute cannot be resolved informally, it may be submitted to binding arbitration in accordance with applicable law.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Changes to Terms */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We reserve the right to modify these Terms at any time. We will notify you of any material changes by:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Posting the updated Terms on our website</li>
                    <li>Sending you an email notification</li>
                    <li>Displaying a notice on our Services</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed mt-4">
                    Your continued use of our Services after any changes constitutes acceptance of the updated Terms.
                  </p>
                </div>

                {/* Severability */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Severability</h2>
                  <p className="text-gray-600 leading-relaxed">
                    If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
                  </p>
                </div>

                {/* Entire Agreement */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Entire Agreement</h2>
                  <p className="text-gray-600 leading-relaxed">
                    These Terms, together with our Privacy Policy and any other agreements referenced herein, constitute the entire agreement between you and Annita LLC regarding your use of our Services.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-orange-500" />
                        <span className="text-gray-700">Email: legal@annita.com</span>
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

export default TermsPage
