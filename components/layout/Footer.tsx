'use client'

import Link from 'next/link'
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  Globe,
  Download,
  ArrowRight,
  Heart
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Platform',
      links: [
        { name: 'Annita Marketplace', href: '/marketplace' },
        { name: 'AnnitaPay', href: '/payments' },
        { name: 'Annita Logistics', href: '/logistics' },
        { name: 'Annita Connect', href: '/connect' },
        { name: 'Analytics & AI', href: '/analytics' },
        { name: 'API & Integrations', href: '/api' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Enterprise', href: '/enterprise' },
        { name: 'Partners', href: '/partners' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Dashboard', href: '/dashboard' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Support', href: '/support' },
        { name: 'Blog', href: '/blog' },
        { name: 'Careers', href: '/careers' },
        { name: 'About', href: '/about' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'Contact', href: '/contact' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Security', href: '/security' }
      ]
    }
  ]

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/annita.africa' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/annita_africa' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/annita_africa' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/annita-africa' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@annita-africa' }
  ]

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'contact@annita.com', href: 'mailto:contact@annita.com' },
    { icon: Phone, label: 'Phone', value: '+234 123 456 7890', href: 'tel:+2341234567890' },
    { icon: MapPin, label: 'Address', value: 'Monrovia, Liberia', href: '#' },
    { icon: Globe, label: 'Website', value: 'www.annita.com', href: 'https://annita.com' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="xl:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-bold gradient-text">Annita</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Africa's first all-in-one digital platform, empowering MSMEs with integrated 
              e-commerce, fintech, AI, communication, marketing, and logistics solutions.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              {contactInfo.map((contact) => (
                <div key={contact.label} className="flex items-center space-x-3">
                  <contact.icon className="w-4 h-4 text-primary-400" />
                  <div>
                    <div className="text-sm text-gray-400">{contact.label}</div>
                    <a 
                      href={contact.href} 
                      className="text-white hover:text-primary-400 transition-colors duration-200"
                    >
                      {contact.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200 group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-200" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="footer-link text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter & CTA */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated with Annita
              </h3>
              <p className="text-gray-400 mb-6">
                Get the latest updates on new features, success stories, and tips for growing your business.
              </p>
              <div className="flex space-x-4">
                <button className="btn-primary group">
                  <Download className="w-4 h-4 mr-2" />
                  Download App
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="btn-outline border-gray-600 text-gray-300 hover:border-primary-500 hover:text-primary-500">
                  Watch Demo
                </button>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Subscribe to Newsletter</h4>
              <div className="flex space-x-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors duration-200"
                />
                <button className="btn-primary">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>&copy; {currentYear} Annita. All rights reserved.</span>
              <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>in Africa</span>
            </div>
          </div>
        </div>
      </div>

      {/* Awards & Recognition */}
      <div className="bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-6">Awards & Recognition</h4>
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <span className="text-yellow-400">🏆</span>
                <span>Orange Social Venture Prize 2023</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-blue-400">⭐</span>
                <span>Top 50 Businesses in Africa 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">🌍</span>
                <span>AfCFTA Partner</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-purple-400">💎</span>
                <span>Afreximbank MANSA Platform</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
