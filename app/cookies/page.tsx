"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import SEOHead from '@/components/seo/SEOHead'
import { Cookie, Shield, Settings, Eye, Clock, Globe, Mail, Phone, Download, ExternalLink } from 'lucide-react'
import CookieSettingsManager from '@/components/ui/CookieSettingsManager'

const CookiesPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [isCookieSettingsOpen, setIsCookieSettingsOpen] = useState(false)

  const lastUpdated = "March 15, 2024"
  const effectiveDate = "March 15, 2024"

  const cookieCategories = [
    {
      category: "Essential Cookies",
      description: "These cookies are necessary for the website to function properly and cannot be disabled.",
      examples: [
        "Authentication cookies to keep you logged in",
        "Security cookies to protect against fraud",
        "Session cookies to maintain your preferences",
        "Load balancing cookies for performance"
      ],
      duration: "Session to 1 year",
      canDisable: false
    },
    {
      category: "Functional Cookies",
      description: "These cookies enable enhanced functionality and personalization.",
      examples: [
        "Language preference cookies",
        "Theme and layout preferences",
        "Form auto-fill cookies",
        "User interface customization"
      ],
      duration: "1 month to 1 year",
      canDisable: true
    },
    {
      category: "Analytics Cookies",
      description: "These cookies help us understand how visitors interact with our website.",
      examples: [
        "Google Analytics cookies",
        "Page view tracking",
        "User behavior analysis",
        "Performance monitoring"
      ],
      duration: "2 years",
      canDisable: true
    },
    {
      category: "Marketing Cookies",
      description: "These cookies are used to deliver relevant advertisements and track marketing campaigns.",
      examples: [
        "Social media tracking cookies",
        "Advertising network cookies",
        "Campaign performance tracking",
        "Retargeting cookies"
      ],
      duration: "1 month to 2 years",
      canDisable: true
    },
    {
      category: "Third-Party Cookies",
      description: "These cookies are set by third-party services integrated into our website.",
      examples: [
        "Payment processor cookies",
        "Social media plugin cookies",
        "Video player cookies",
        "Chat widget cookies"
      ],
      duration: "Varies by service",
      canDisable: true
    }
  ]

  const specificCookies = [
    {
      name: "_ga",
      purpose: "Google Analytics - Used to distinguish users",
      duration: "2 years",
      type: "Analytics"
    },
    {
      name: "_gid",
      purpose: "Google Analytics - Used to distinguish users",
      duration: "24 hours",
      type: "Analytics"
    },
    {
      name: "_gat",
      purpose: "Google Analytics - Used to throttle request rate",
      duration: "1 minute",
      type: "Analytics"
    },
    {
      name: "annita_session",
      purpose: "Maintains your session and login status",
      duration: "Session",
      type: "Essential"
    },
    {
      name: "annita_preferences",
      purpose: "Stores your language and theme preferences",
      duration: "1 year",
      type: "Functional"
    },
    {
      name: "annita_cart",
      purpose: "Stores items in your shopping cart",
      duration: "30 days",
      type: "Functional"
    }
  ]

  return (
    <>
      <SEOHead
        title="Cookie Policy - Annita LLC"
        description="Learn about how Annita uses cookies and similar technologies to enhance your browsing experience."
        keywords={[
          'cookie policy',
          'cookies',
          'tracking',
          'privacy',
          'Annita',
          'data collection',
          'cookie management',
          'tracking cookies',
          'analytics cookies',
          'functional cookies',
          'essential cookies',
          'cookie consent',
          'cookie preferences',
          'cookie settings',
          'cookie control',
          'cookie opt-out',
          'cookie opt-in',
          'cookie banner',
          'cookie notice',
          'cookie information',
          'cookie usage',
          'cookie types',
          'cookie categories',
          'cookie duration',
          'cookie storage',
          'cookie deletion',
          'cookie blocking',
          'cookie acceptance',
          'cookie rejection',
          'cookie compliance'
        ]}
        canonical="/cookies"
        ogImage="/images/cookie-policy.jpg"
      />

    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-orange-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6">
                  <Cookie className="w-4 h-4 mr-2" />
                  Cookie Policy
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
                  Cookie <span className="text-orange-600">Policy</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                How we use cookies and similar technologies to enhance your experience
              </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://annita.company.site/products"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-orange-600 to-orange-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-700 hover:to-orange-800 transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Try V1.0 Now
                  </a>
                  <a
                    href="/download"
                    className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-200 flex items-center justify-center transform hover:-translate-y-1"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Join V3.0 Waitlist
                  </a>
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are Cookies?</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit our website. They help us provide you with a better experience by remembering your preferences, analyzing how you use our site, and personalizing content.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    This Cookie Policy explains how Annita LLC ("we," "our," or "us") uses cookies and similar technologies on our website and mobile applications.
                  </p>
                </div>

                {/* Types of Cookies */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Cookies We Use</h2>
                  <div className="space-y-8">
                    {cookieCategories.map((category, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-xl font-semibold text-gray-900">{category.category}</h3>
                          <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                            category.canDisable 
                              ? 'text-green-600 bg-green-100' 
                              : 'text-red-600 bg-red-100'
                          }`}>
                            {category.canDisable ? 'Can Disable' : 'Required'}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">{category.description}</p>
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                          <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                            {category.examples.map((example, exampleIndex) => (
                              <li key={exampleIndex}>{example}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="text-sm text-gray-500">
                          <strong>Duration:</strong> {category.duration}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specific Cookies */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Specific Cookies We Use</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Cookie Name</th>
                          <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Purpose</th>
                          <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Duration</th>
                          <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Type</th>
                        </tr>
                      </thead>
                      <tbody>
                        {specificCookies.map((cookie, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="border border-gray-200 px-4 py-3 text-sm font-mono text-gray-900">{cookie.name}</td>
                            <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">{cookie.purpose}</td>
                            <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">{cookie.duration}</td>
                            <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">{cookie.type}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
          </div>
        </div>

                {/* Third-Party Cookies */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Third-Party Cookies</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We may use third-party services that set their own cookies. These services include:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mb-4">
                    <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                    <li><strong>Payment Processors:</strong> For secure payment processing</li>
                    <li><strong>Social Media Platforms:</strong> For social media integration and sharing</li>
                    <li><strong>Advertising Networks:</strong> For relevant advertising (with your consent)</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed">
                    These third-party services have their own privacy policies and cookie practices. We encourage you to review their policies for more information.
            </p>
          </div>

                {/* Managing Cookies */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Settings className="w-8 h-8 text-orange-500" />
                    Managing Your Cookie Preferences
                  </h2>
                  
                  {/* Cookie Settings Button */}
                  <div className="mb-6">
                    <button
                      onClick={() => setIsCookieSettingsOpen(true)}
                      className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2"
                    >
                      <Settings className="w-5 h-5" />
                      Open Cookie Settings
                    </button>
                    <p className="text-sm text-gray-600 mt-2">
                      Click the button above to customize your cookie preferences and manage which types of cookies you want to allow.
                    </p>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Browser Settings</h3>
                      <p className="text-gray-600 leading-relaxed mb-3">
                        You can control cookies through your browser settings. Most browsers allow you to:
                      </p>
                      <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                        <li>Block all cookies</li>
                        <li>Block third-party cookies only</li>
                        <li>Delete existing cookies</li>
                        <li>Set preferences for specific websites</li>
              </ul>
            </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookie Consent</h3>
                      <p className="text-gray-600 leading-relaxed mb-3">
                        When you first visit our website, you'll see a cookie consent banner. You can:
                      </p>
                      <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                        <li>Accept all cookies</li>
                        <li>Reject non-essential cookies</li>
                        <li>Customize your preferences</li>
                        <li>Change your settings later through our cookie preferences page</li>
              </ul>
            </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobile Apps</h3>
                      <p className="text-gray-600 leading-relaxed">
                        For our mobile applications, you can manage cookie preferences through your device settings or within the app settings.
                      </p>
                    </div>
              </div>
            </div>

                {/* Impact of Disabling Cookies */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Impact of Disabling Cookies</h2>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                      <Eye className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-orange-900 mb-2">Important Notice</h3>
                        <p className="text-orange-800 mb-3">
                          Disabling certain cookies may affect the functionality of our website:
                        </p>
                        <ul className="list-disc list-inside text-orange-800 space-y-1 ml-4">
                          <li>Essential cookies cannot be disabled as they are required for basic functionality</li>
                          <li>Disabling functional cookies may limit personalization features</li>
                          <li>Disabling analytics cookies may affect our ability to improve our services</li>
                          <li>Some features may not work properly without cookies</li>
              </ul>
            </div>
          </div>
        </div>
          </div>

                {/* Updates to Policy */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Updates to This Policy</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Posting the updated policy on our website</li>
                    <li>Updating the "Last Updated" date at the top of this policy</li>
                    <li>Sending you an email notification for significant changes</li>
                  </ul>
            </div>

                {/* Contact Information */}
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    If you have any questions about our use of cookies or this Cookie Policy, please contact us:
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

    {/* Cookie Settings Manager */}
    <CookieSettingsManager
      isOpen={isCookieSettingsOpen}
      onClose={() => setIsCookieSettingsOpen(false)}
    />
    </>
  )
}

export default CookiesPage
