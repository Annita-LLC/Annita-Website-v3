'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  X,
  ShoppingCart,
  CreditCard,
  Truck,
  MessageSquare,
  BarChart3,
  Globe,
  Users,
  Settings,
  Download,
  ChevronDown,
  Code,
  Building2,
  UserPlus,
  DollarSign,
  Phone,
  Award,
  Briefcase,
  FileText,
  HelpCircle,
  Mail,
  User,
  Building,
  Heart,
  GraduationCap,
  MessageCircle,
  Play,
  Zap,
  Target,
  Database,
  Sun,
  Moon,
  Activity
} from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'Personal', 
      href: '#',
      dropdown: [
        { name: 'AnnitaPay', href: '/services/annitapay', icon: CreditCard, description: 'Secure digital payments' },
        { name: 'Annita AI', href: '/ai/personal', icon: Zap, description: 'Personal AI assistant' },
        { name: 'Shopping', href: '/services/shopping', icon: ShoppingCart, description: 'E-commerce platform' },
        { name: 'Entertainment', href: '/services/entertainment', icon: Play, description: 'Entertainment & media' },
        { name: 'Health', href: '/services/health', icon: Heart, description: 'Health & wellness services' },
        { name: 'Education', href: '/services/education', icon: GraduationCap, description: 'Educational resources' },
        { name: 'Social', href: '/services/social', icon: MessageCircle, description: 'Social networking' },
      ]
    },
    { 
      name: 'Business', 
      href: '#',
      dropdown: [
        { name: 'Global Market', href: '/services/global-market', icon: Globe, description: 'International marketplace' },
        { name: 'AnnitaPay Business', href: '/services/annitapay-business', icon: Building, description: 'Business payment solutions' },
        { name: 'Annita AI', href: '/services/ai', icon: Zap, description: 'AI-powered business tools' },
        { name: 'Logistics', href: '/services/logistics', icon: Truck, description: 'Supply chain & delivery' },
        { name: 'Ads', href: '/services/ads', icon: Target, description: 'Advertising platform' },
        { name: 'ERP System', href: '/services/erp', icon: Database, description: 'Enterprise resource planning' },
      ]
    },
    { 
      name: 'Platform', 
      href: '#',
      dropdown: [
        { name: 'Annita Marketplace', href: '/marketplace', icon: ShoppingCart, description: 'Multivendor e-commerce platform' },
        { name: 'AnnitaPay', href: '/payments', icon: CreditCard, description: 'Secure payment gateway with escrow' },
        { name: 'Annita Logistics', href: '/logistics', icon: Truck, description: 'On-demand delivery network' },
        { name: 'Annita Connect', href: '/connect', icon: MessageSquare, description: 'Communication & marketing suite' },
        { name: 'Analytics & AI', href: '/analytics', icon: BarChart3, description: 'AI-driven business insights' },
        { name: 'Live Activity', href: '/live-activity', icon: Activity, description: 'Real-time platform activity feed' },
        { name: 'API & Integrations', href: '/api', icon: Code, description: 'Developer platform & integrations' },
      ]
    },
    { 
      name: 'Company', 
      href: '#',
      dropdown: [
        { name: 'About Us', href: '/about', icon: Users, description: 'Our story and mission' },
        { name: 'Awards & Recognition', href: '/awards', icon: Award, description: 'Our achievements and recognition' },
        { name: 'Careers', href: '/careers', icon: Briefcase, description: 'Join our team' },
        { name: 'Blog', href: '/blog', icon: FileText, description: 'Latest news and insights' },
      ]
    },
    { 
      name: 'Support', 
      href: '#',
      dropdown: [
        { name: 'Help Center', href: '/support/help-center', icon: HelpCircle, description: 'Get help and support' },
        { name: 'Documentation', href: '/support/documentation', icon: FileText, description: 'Developer documentation' },
        { name: 'Status', href: '/support/status', icon: BarChart3, description: 'System status' },
        { name: 'Report Issues', href: '/support/report-issues', icon: HelpCircle, description: 'Report bugs and issues' },
        { name: 'Contact Support', href: '/support/contact-support', icon: Mail, description: 'Get in touch with us' },
        { name: 'Contact Sales', href: '/contact-sales', icon: Phone, description: 'Talk to our business development team' },
      ]
    },
  ]

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-medium border-b border-gray-200 dark:border-gray-700' 
          : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16 lg:h-20">
            {/* Logo */}
                          <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
                <div className="relative">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <img 
                      src="/images/blog/Annita's Logo.png" 
                      alt="Annita Logo" 
                      className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 rounded-full object-cover"
                    />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-orange-500 dark:text-orange-400">Annita</span>
              </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <div className="flex items-center space-x-4 xl:space-x-6">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="nav-link flex items-center space-x-1"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-large border border-gray-200 p-4"
                          >
                            <div className="grid gap-3">
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <dropdownItem.icon className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <div className="font-medium text-gray-900">{dropdownItem.name}</div>
                                    <div className="text-sm text-gray-500">{dropdownItem.description}</div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link href={item.href} className="nav-link">
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                )}
              </button>
              
              <Link href="/download" className="btn-primary">
                <Download className="w-4 h-4 mr-2" />
                Download App
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6 dark:text-white" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6 dark:text-white" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/20" onClick={() => setIsOpen(false)} />
            <div className="absolute right-0 top-0 h-full w-72 sm:w-80 bg-white dark:bg-gray-900 shadow-2xl">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                  <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                    <img 
                      src="/images/blog/Annita's Logo.png" 
                      alt="Annita Logo" 
                      className="w-6 h-6 sm:w-8 sm:h-8"
                    />
                    <span className="text-lg sm:text-xl font-bold text-orange-500 dark:text-orange-400">Annita</span>
                  </Link>
                  <div className="flex items-center space-x-2">
                    {/* Dark Mode Toggle */}
                    <button
                      onClick={toggleDarkMode}
                      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                      aria-label="Toggle dark mode"
                    >
                      {isDarkMode ? (
                        <Sun className="w-4 h-4 text-yellow-500" />
                      ) : (
                        <Moon className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                      )}
                    </button>
                    
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto py-6">
                  <div className="px-6 space-y-4">
                    {navItems.map((item) => (
                      <div key={item.name}>
                        {item.dropdown ? (
                          <div>
                            <button
                              onClick={() => toggleDropdown(item.name)}
                              className="flex items-center justify-between w-full p-3 text-left hover:bg-gray-50 rounded-lg transition-colors duration-200"
                            >
                              <span className="font-medium">{item.name}</span>
                              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                                activeDropdown === item.name ? 'rotate-180' : ''
                              }`} />
                            </button>
                            <AnimatePresence>
                              {activeDropdown === item.name && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="ml-4 mt-2 space-y-2"
                                >
                                  {item.dropdown.map((dropdownItem) => (
                                    <Link
                                      key={dropdownItem.name}
                                      href={dropdownItem.href}
                                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                      onClick={() => {
                                        setIsOpen(false)
                                        setActiveDropdown(null)
                                      }}
                                    >
                                      <dropdownItem.icon className="w-4 h-4 text-primary-600" />
                                      <span className="text-sm">{dropdownItem.name}</span>
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link
                            href={item.href}
                            className="block p-3 font-medium hover:bg-gray-50 rounded-lg transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 border-t border-gray-200 space-y-4">
                  <Link
                    href="/download"
                    className="block w-full text-center py-3 px-4 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <Download className="w-4 h-4 inline mr-2" />
                    Download App
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
