"use client"

import React from 'react'
import {
  Cookie,
  Shield,
  Settings,
  Eye,
  Database,
  BarChart3,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  UserCheck,
  Lock
} from 'lucide-react'

const ContentSections = () => {
  const contentSections = [
    {
      id: 'what-are-cookies',
      title: 'What Are Cookies?',
      icon: Cookie,
      color: 'from-blue-500 to-cyan-500',
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h4 className="font-semibold text-gray-900 mb-3">Understanding Cookies</h4>
            <p className="text-gray-400 leading-relaxed">
              Cookies are small text files that websites store on your device when you visit them. They help websites remember your preferences, login information, and other details to improve your browsing experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Cookie className="w-6 h-6 text-blue-500" />
                <h4 className="font-semibold text-gray-900">How Cookies Work</h4>
              </div>
              <div className="space-y-2 text-sm text-gray-400 leading-relaxed">
                <p>• Stored on your browser</p>
                <p>• Sent back to website on visits</p>
                <p>• Help personalize experience</p>
                <p>• Can be managed or deleted</p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-blue-500" />
                <h4 className="font-semibold text-gray-900">Cookie Lifespan</h4>
              </div>
              <div className="space-y-2 text-sm text-gray-400 leading-relaxed">
                <p>• Session cookies: Browser close</p>
                <p>• Persistent cookies: Set expiry</p>
                <p>• Can be months or years</p>
                <p>• Automatically deleted when expired</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cookie-categories',
      title: 'Cookie Categories',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      content: (
        <div className="space-y-6">
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
            <h4 className="font-semibold text-gray-900 mb-3">Types of Cookies We Use</h4>
            <p className="text-gray-400 leading-relaxed">
              We categorize cookies based on their purpose and functionality. Each category serves a specific role in providing you with a better experience on our platform.
            </p>
          </div>

          <div className="space-y-6">
            {/* Essential Cookies */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Essential Cookies</h4>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-sm text-gray-500">Required • Always Active</span>
                    <span className="text-sm text-green-600 font-medium">✓ Cannot be disabled</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">These cookies are necessary for the website to function properly and provide core features.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "User authentication and login",
                  "Security and fraud prevention",
                  "Session management",
                  "Load balancing and performance"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Functional Cookies */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Settings className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Functional Cookies</h4>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-sm text-gray-500">Optional • User Controlled</span>
                    <span className="text-sm text-orange-600 font-medium">⚙️ Can be managed</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">These cookies enhance functionality and remember your preferences for a better experience.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Language and region preferences",
                  "Theme and display settings",
                  "Form auto-fill functionality",
                  "User interface customization"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Analytics Cookies</h4>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-sm text-gray-500">Optional • User Controlled</span>
                    <span className="text-sm text-orange-600 font-medium">⚙️ Can be managed</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">These cookies help us understand how visitors interact with our website to improve performance.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Google Analytics tracking",
                  "Page view and user flow analysis",
                  "Performance monitoring",
                  "User behavior insights"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'how-we-use',
      title: 'How We Use Cookies',
      icon: Settings,
      color: 'from-green-500 to-emerald-500',
      content: (
        <div className="space-y-6">
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h4 className="font-semibold text-gray-900 mb-3">Purpose of Our Cookies</h4>
            <p className="text-gray-400 leading-relaxed">
              Cookies help us provide a better, more personalized experience while ensuring the security and functionality of our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-500" />
                Security & Safety
              </h4>
              <div className="space-y-2 text-sm text-gray-400 leading-relaxed">
                <p>• Protect against fraud and abuse</p>
                <p>• Secure user authentication</p>
                <p>• Prevent unauthorized access</p>
                <p>• Maintain session security</p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-green-500" />
                User Experience
              </h4>
              <div className="space-y-2 text-sm text-gray-400 leading-relaxed">
                <p>• Remember user preferences</p>
                <p>• Maintain login sessions</p>
                <p>• Personalize content</p>
                <p>• Improve site performance</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'third-party-cookies',
      title: 'Third-Party Cookies',
      icon: Eye,
      color: 'from-orange-500 to-red-500',
      content: (
        <div className="space-y-6">
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
            <h4 className="font-semibold text-gray-900 mb-3">External Service Providers</h4>
            <p className="text-gray-400 leading-relaxed">
              Some cookies are set by third-party services that appear on our website. We carefully select these partners and ensure they meet our privacy standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Analytics Partners</h4>
              <div className="space-y-2 text-sm text-gray-400 leading-relaxed">
                <p><strong>Google Analytics:</strong> Website usage analysis</p>
                <p><strong>Privacy-compliant:</strong> Data anonymization</p>
                <p><strong>User control:</strong> Can opt-out</p>
                <p><strong>Data retention:</strong> 26 months</p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Security Partners</h4>
              <div className="space-y-2 text-sm text-gray-400 leading-relaxed">
                <p><strong>Cloudflare:</strong> DDoS protection</p>
                <p><strong>Essential only:</strong> No tracking</p>
                <p><strong>Performance:</strong> Faster loading</p>
                <p><strong>Privacy-first:</strong> Minimal data collection</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Third-Party Privacy</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Third-party services have their own privacy policies. We recommend reviewing their policies to understand how they handle your data.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'managing-cookies',
      title: 'Managing Your Cookies',
      icon: Shield,
      color: 'from-cyan-500 to-blue-500',
      content: (
        <div className="space-y-6">
          <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-6">
            <h4 className="font-semibold text-gray-900 mb-3">You Control Your Cookies</h4>
            <p className="text-gray-400 leading-relaxed">
              You have multiple options to manage your cookie preferences and control how cookies are used on our website.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="p-2 bg-cyan-100 rounded-lg w-fit mb-3">
                <Settings className="w-5 h-5 text-cyan-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Browser Settings</h4>
              <p className="text-sm text-gray-400 leading-relaxed">Manage cookies through your browser preferences</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="p-2 bg-cyan-100 rounded-lg w-fit mb-3">
                <UserCheck className="w-5 h-5 text-cyan-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Our Settings</h4>
              <p className="text-sm text-gray-400 leading-relaxed">Use our cookie management tool</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="p-2 bg-cyan-100 rounded-lg w-fit mb-3">
                <Lock className="w-5 h-5 text-cyan-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Private Browsing</h4>
              <p className="text-sm text-gray-400 leading-relaxed">Use incognito/private mode</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cookie-settings',
      title: 'Cookie Settings',
      icon: UserCheck,
      color: 'from-indigo-500 to-purple-500',
      content: (
        <div className="space-y-6">
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
            <h4 className="font-semibold text-gray-900 mb-3">Customize Your Experience</h4>
            <p className="text-gray-400 leading-relaxed">
              Take control of your cookie preferences. Essential cookies are always active, but you can manage optional cookies below.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Shield className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Essential Cookies</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">Required for website functionality</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-green-600 font-medium">Always Active</span>
                <CheckCircle className="w-5 h-5 text-green-500" />
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">These cookies cannot be disabled as they are essential for the website to function properly.</p>
          </div>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Settings className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Functional Cookies</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">Enhance functionality and personalization</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">Help us remember your preferences and provide enhanced functionality.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <BarChart3 className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Analytics Cookies</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">Help us improve our services</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">Allow us to analyze website usage and improve user experience.</p>
            </div>
          </div>

          <div className="text-center">
            <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-xl shadow-lg transition-all duration-300">
              Save Preferences
            </button>
          </div>
        </div>
      )
    },
    {
      id: 'privacy-impact',
      title: 'Privacy Impact',
      icon: Lock,
      color: 'from-pink-500 to-rose-500',
      content: (
        <div className="space-y-6">
          <div className="bg-pink-50 border border-pink-200 rounded-xl p-6">
            <h4 className="font-semibold text-gray-900 mb-3">How Cookies Affect Your Privacy</h4>
            <p className="text-gray-400 leading-relaxed">
              Cookies can impact your privacy, but we implement measures to minimize privacy risks while providing a better user experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3 text-green-600">Privacy-Protecting Measures</h4>
              <div className="space-y-2 text-sm text-gray-400 leading-relaxed">
                <p>• Data minimization practices</p>
                <p>• Anonymous analytics data</p>
                <p>• User consent and control</p>
                <p>• Regular privacy audits</p>
                <p>• Transparent cookie policies</p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3 text-orange-600">Privacy Considerations</h4>
              <div className="space-y-2 text-sm text-gray-400 leading-relaxed">
                <p>• Cross-device tracking potential</p>
                <p>• Third-party data sharing</p>
                <p>• Data retention periods</p>
                <p>• User identification methods</p>
                <p>• Profiling and targeting</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-3">
              <Lock className="w-6 h-6 text-blue-600" />
              <h4 className="font-semibold text-gray-900">Your Privacy Rights</h4>
            </div>
            <p className="text-gray-400 text-sm mb-3 leading-relaxed">
              You have several rights regarding cookies and privacy, including:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Control cookie preferences",
                "Opt-out of non-essential cookies",
                "Request data deletion",
                "Access privacy information",
                "Lodge privacy complaints"
              ].map((right, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{right}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-20">
          {contentSections.map((section, index) => (
            <div key={section.id} id={section.id} className="scroll-mt-24">
              <div className="flex items-center space-x-4 mb-8">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${section.color} shadow-lg`}>
                  <section.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
              </div>

              {section.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContentSections
