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
  Heart
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Personal Services',
      links: [
        { name: 'AnnitaPay', href: '/services/annitapay' },
        { name: 'Shopping', href: '/services/shopping' },
        { name: 'Entertainment', href: '/services/entertainment' },
        { name: 'Health', href: '/services/health' },
        { name: 'Education', href: '/services/education' },
        { name: 'Social', href: '/services/social' }
      ]
    },
    {
      title: 'Business Services',
      links: [
        { name: 'Global Market', href: '/services/global-market' },
        { name: 'AnnitaPay Business', href: '/services/annitapay-business' },
        { name: 'Annita AI', href: '/services/ai' },
        { name: 'Logistics', href: '/services/logistics' },
        { name: 'Ads', href: '/services/ads' },
        { name: 'ERP System', href: '/services/erp' }
      ]
    },
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
      title: 'Resources',
      links: [
        { name: 'Help Center', href: '/support/help-center' },
        { name: 'Documentation', href: '/support/documentation' },
        { name: 'Status', href: '/support/status' },
        { name: 'Blog', href: '/blog' },
        { name: 'Careers', href: '/careers' },
        { name: 'About', href: '/about' }
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
    { icon: MapPin, label: 'Address', value: 'Monrovia, Liberia', href: '#' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="xl:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <img 
                src="/images/blog/Annita's Logo.png" 
                alt="Annita Logo" 
                className="w-10 h-10"
              />
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


    </footer>
  )
}

export default Footer
