'use client'

import Link from 'next/link'
import { 
  Facebook, 
  MessageCircle, 
  Instagram, 
  Linkedin, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  Heart,
  Link as LinkIcon,
  ExternalLink,
  Globe,
  Building,
  Users,
  Briefcase,
  Award,
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Personal',
      links: [
        { name: 'Live Marketplace V1.0', href: 'https://annita.company.site/products', isExternal: true },
        { name: 'AnnitaPay', href: '/services/annitapay' },
        { name: 'Annita Marketplace', href: '/services/shopping' },
        { name: 'Annita AI', href: '/ai/personal' },
        
      ]
    },
    {
      title: 'Business',
      links: [
        { name: 'Annita Global Market', href: '/services/global-market' },
        { name: 'AnnitaPay Business', href: '/services/annitapay-business' },
        { name: 'Annita AI', href: '/services/ai' },
        { name: 'Annita Logistics Network', href: '/services/logistics' },
        { name: 'Annita Ads', href: '/services/ads' },
        { name: 'Annita ERP System', href: '/services/erp' }
      ]
    },

    {
      title: 'Resources',
      links: [
        { name: 'Contact Us', href: '/contact-us' },

        
        { name: 'Careers', href: '/careers' },
        { name: 'About', href: '/about' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
      ]
    }
  ]

  const socialLinks = [
    { name: 'Website', icon: Globe, href: 'https://annita.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/annita-africa' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/annita.africa' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/annita_africa' },
    { name: 'TikTok', icon: ExternalLink, href: 'https://tiktok.com/@annita_africa' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@annita-africa' },
    { name: 'WhatsApp', icon: MessageCircle, href: 'https://wa.me/231775057227' },
    { name: 'GitHub', icon: ExternalLink, href: 'https://github.com/annita-africa' },
    { name: 'VC4A', icon: Building, href: 'https://vc4a.com/annita' },
    { name: 'F6S', icon: Users, href: 'https://f6s.com/annita' },
    { name: 'Crunchbase', icon: Briefcase, href: 'https://crunchbase.com/organization/annita' },
    { name: 'IATF 2025', icon: Award, href: 'https://iatf2025.com/annita' },
    { name: 'Linktree', icon: LinkIcon, href: 'https://linktr.ee/annitallc' }
  ]

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'annitallc@gmail.com', href: 'mailto:annitallc@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+231 77 505 7227', href: 'tel:+231 77 505 7227' },
    { icon: MapPin, label: 'Address', value: 'Monrovia, Liberia', href: '#' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="xl:col-span-2">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <div className="relative">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <img 
                    src="/images/blog/Annita's Logo.png" 
                    alt="Annita Logo" 
                    className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 rounded-full object-cover"
                  />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
                              <span className="text-lg sm:text-xl lg:text-2xl font-bold text-orange-500 dark:text-orange-400">Annita</span>
            </Link>
            <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Africa's first all-in-one digital platform, empowering MSMEs with integrated 
              e-commerce, fintech, AI, communication, marketing, and logistics solutions.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              {contactInfo.map((contact) => (
                                  <div key={contact.label} className="flex items-center space-x-2 sm:space-x-3">
                    <contact.icon className="w-3 h-3 sm:w-4 sm:h-4 text-primary-400" />
                    <div>
                      <div className="text-xs sm:text-sm text-gray-400">{contact.label}</div>
                      <a 
                        href={contact.href} 
                        className="text-white hover:text-primary-400 transition-colors duration-200 text-sm sm:text-base"
                      >
                        {contact.value}
                      </a>
                    </div>
                  </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mb-4 sm:mb-6">
              <h4 className="text-sm font-semibold text-orange-500 mb-3">Connect With Us</h4>
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 sm:gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors duration-200 group"
                    aria-label={social.name}
                    title={social.name}
                  >
                    <social.icon className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 group-hover:text-white transition-colors duration-200" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-base sm:text-lg font-semibold text-orange-500 dark:text-orange-400 mb-3 sm:mb-4">{section.title}</h3>
              <ul className="space-y-2 sm:space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {'isExternal' in link && link.isExternal ? (
                      <a 
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link 
                        href={link.href}
                        className="footer-link text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>



      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
                      <div className="flex items-center space-x-4 sm:space-x-6 text-xs sm:text-sm text-gray-400">
            <span>&copy; {currentYear} Annita. All rights reserved.</span>
          </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>in Liberia</span>
            </div>
          </div>
        </div>
      </div>


    </footer>
  )
}

export default Footer
