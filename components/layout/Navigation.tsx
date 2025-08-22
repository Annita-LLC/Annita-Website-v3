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
  Activity,
  Image
} from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null)

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
      name: 'Company', 
      href: '#',
                          dropdown: [
                      { name: 'About Us', href: '/about', icon: Users, description: 'Our story and mission' },
                      { name: 'The 100', href: '/the100', icon: Target, description: 'Youth empowerment initiative' },
                      { name: 'Investors', href: '/investors', icon: DollarSign, description: 'Investment opportunities and company info' },
                      { name: 'Pricing', href: '/pricing', icon: DollarSign, description: 'Transparent pricing plans' },
                      { name: 'Business Model', href: '/business-model', icon: Building2, description: 'Our revenue model and strategy' },
              
                      { name: 'Awards & Recognition', href: '/awards', icon: Award, description: 'Our achievements and recognition' },
                      { name: 'Gallery', href: '/gallery', icon: Image, description: 'Photos, videos, and media' },
        { name: 'Careers', href: '/careers', icon: Briefcase, description: 'Join our team' },
        { name: 'Apply Now', href: '/careers/apply', icon: UserPlus, description: 'Submit your application' },
      ]
    },
    { 
      name: 'Support', 
      href: '#',
      dropdown: [
        { name: 'Support Center', href: '/support', icon: HelpCircle, description: 'Get help and support' },
        { name: 'Contact Us', href: '/contact-us', icon: Mail, description: 'Get in touch with our team' },
        { name: 'System Status', href: '/status', icon: Activity, description: 'Service status and uptime' },
        { name: 'Documentation', href: '/support/documentation', icon: FileText, description: 'Developer documentation' },
        { name: 'Report Issues', href: '/support/report-issues', icon: HelpCircle, description: 'Report bugs and issues' },
        { name: 'Contact Sales', href: '/contact-sales', icon: Phone, description: 'Talk to our business development team' },
        { name: 'Live Activity', href: '/live-activity', icon: Activity, description: 'Real-time platform activity feed' },
        { name: 'API & Integrations', href: '/api', icon: Code, description: 'Developer platform & integrations' },
      ]
    },
  ]

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  const handleDropdownMouseEnter = (name: string) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout)
      setDropdownTimeout(null)
    }
    setActiveDropdown(name)
  }

  const handleDropdownMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null)
    }, 300)
    setDropdownTimeout(timeout)
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
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
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
                    <div 
                      className="relative"
                      onMouseEnter={() => handleDropdownMouseEnter(item.name)}
                      onMouseLeave={handleDropdownMouseLeave}
                    >
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="nav-link flex items-center space-x-1"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-large border border-gray-200 dark:border-gray-700"
                          >
                            <div className="max-h-96 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
                              <div className="grid gap-3">
                                {item.dropdown.map((dropdownItem) => (
                                  <Link
                                    key={dropdownItem.name}
                                    href={dropdownItem.href}
                                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    <dropdownItem.icon className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 flex-shrink-0" />
                                    <div>
                                      <div className="font-medium text-gray-900 dark:text-white">{dropdownItem.name}</div>
                                      <div className="text-sm text-gray-500 dark:text-gray-400">{dropdownItem.description}</div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
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
              className="lg:hidden p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {isOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5 dark:text-white" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5 dark:text-white" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            {/* Backdrop with blur */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/30 backdrop-blur-sm" 
              onClick={() => setIsOpen(false)} 
            />
            
            {/* Menu Container */}
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute right-0 top-0 h-full w-[85vw] max-w-[360px] bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl border-l border-gray-200/20 dark:border-gray-700/20"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <motion.div 
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800"
                >
                  <Link href="/" className="flex items-center space-x-3" onClick={() => setIsOpen(false)}>
                    <div className="w-8 h-8 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center">
                      <img 
                        src="/images/blog/Annita's Logo.png" 
                        alt="Annita Logo" 
                        className="w-5 h-5"
                      />
                    </div>
                    <span className="text-lg font-medium text-gray-900 dark:text-white">Annita</span>
                  </Link>
                  
                  <div className="flex items-center space-x-2">
                    {/* Dark Mode Toggle */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={toggleDarkMode}
                      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                      aria-label="Toggle dark mode"
                    >
                      {isDarkMode ? (
                        <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                      ) : (
                        <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                      )}
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsOpen(false)}
                      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                    >
                      <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    </motion.button>
                  </div>
                </motion.div>

                {/* Navigation Items */}
                <div className="flex-1 overflow-y-auto py-4">
                  <div className="px-6 space-y-1">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                      >
                        {item.dropdown ? (
                          <div className="mb-2">
                            <motion.button
                              whileHover={{ x: 5 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => toggleDropdown(item.name)}
                              className="flex items-center justify-between w-full p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-200 group"
                            >
                              <span className="font-medium text-gray-900 dark:text-white">{item.name}</span>
                              <ChevronDown className={`w-4 h-4 transition-all duration-200 ${
                                activeDropdown === item.name ? 'rotate-180 text-gray-600 dark:text-gray-300' : 'text-gray-400'
                              }`} />
                            </motion.button>
                            
                            <AnimatePresence>
                              {activeDropdown === item.name && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="ml-4 mt-3"
                                >
                                  <div className="max-h-64 overflow-y-auto space-y-1 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent pr-2">
                                    {item.dropdown.map((dropdownItem, dropdownIndex) => (
                                      <motion.div
                                        key={dropdownItem.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: dropdownIndex * 0.05 }}
                                      >
                                        <Link
                                          href={dropdownItem.href}
                                          className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 group"
                                          onClick={() => {
                                            setIsOpen(false)
                                            setActiveDropdown(null)
                                          }}
                                        >
                                          <div className="font-medium text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-200">
                                            {dropdownItem.name}
                                          </div>
                                          <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                            {dropdownItem.description}
                                          </div>
                                        </Link>
                                      </motion.div>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <motion.div
                            whileHover={{ x: 5 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Link
                              href={item.href}
                              className="block p-4 font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-200"
                              onClick={() => setIsOpen(false)}
                            >
                              {item.name}
                            </Link>
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>


              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
