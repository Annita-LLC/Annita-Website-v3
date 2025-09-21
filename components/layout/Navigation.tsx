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
  Video,
  PenTool,
  Phone,
  TrendingUp,
  Mail,
  Headphones,
  DollarSign,
  Bike,
  UserPlus,
  Award,
  Briefcase,
  FileText,
  HelpCircle,
  User,
  Building,
  Heart,
  GraduationCap,
  MessageCircle,
  Play,
  Zap,
  Target,
  Database,
  Activity,
  Image,
  Rocket,
  FileBarChart,
  Search,
  Lightbulb,
  // New service icons
  Wallet,
  Send,
  Shield,
  Smartphone,
  FileText as FileTextIcon,
  Package,
  Clock,
  TrendingUp as TrendingUpIcon,
  BarChart3 as BarChart3Icon,
  FolderOpen,
  Megaphone,
  Store,
  UserCheck,
  Eye,
  Scale,
  FileCheck,
  Gavel,
  Wifi,
  WifiOff,
  Languages,
  Monitor,
  Fingerprint,
  AlertTriangle,
  Lock,
  MapPin,
  Signal,
  Radio,
  Palette,
  Headphones as HeadphonesIcon,
  Landmark,
  Link as LinkIcon,
  HandHeart,
  UserCheck as UserCheckIcon,
  BookOpen
} from 'lucide-react'
import { ThemeToggle, SimpleThemeToggle } from '@/components/ui/ThemeToggle'
import GlobalSearch from '@/components/ui/GlobalSearch'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
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
        { name: 'Live Marketplace V1.0', href: 'https://annita.company.site/products', icon: ShoppingCart, description: 'Current working marketplace with 3,000+ vendors', isExternal: true },
        { name: 'AnnitaPay', href: '/services/annitapay', icon: CreditCard, description: 'Secure digital payments' },
        { name: 'Annita AI', href: '/ai/personal', icon: Zap, description: 'Personal AI assistant' },
        { name: 'Annita Marketplace', href: '/services/shopping', icon: ShoppingCart, description: 'Multivendor Ecommerce Shopping Place with countless MSMEs stores to shop from' },
        { name: 'Annita Messaging', href: '/services/messaging', icon: MessageSquare, description: 'Encrypted messaging with file sharing and video calls' },
        { name: 'Annita Streaming', href: '/services/streaming', icon: Video, description: 'HD quality streaming with monetization features' },
        { name: 'Annita Creator Studio', href: '/services/creator-studio', icon: PenTool, description: 'AI-powered content generation for text, images, and videos' },
        { name: 'Annita Voice & Video', href: '/services/voice-video', icon: Phone, description: 'HD VoIP with conference calling and screen sharing' },
        // Individual Solutions
        { name: 'Personal Digital Wallet', href: '/services/personal-wallet', icon: Wallet, description: 'Personal digital wallet for individuals' },
        { name: 'Savings & Investment Tools', href: '/services/savings-investment', icon: TrendingUpIcon, description: 'Personal savings and investment tools' },
        { name: 'Bill Payment Services', href: '/services/bill-payment', icon: CreditCard, description: 'Pay bills and utilities easily' },
        { name: 'Remittance Services', href: '/services/remittance', icon: Send, description: 'Send money to family and friends' },
        { name: 'Micro-loans', href: '/services/micro-loans', icon: DollarSign, description: 'Small loans for personal needs' },
        { name: 'Insurance Products', href: '/services/insurance', icon: Shield, description: 'Personal insurance products' },
        { name: 'Unified Messaging', href: '/services/unified-messaging', icon: MessageSquare, description: 'Unified messaging platform' },
        { name: 'Social Networking', href: '/services/social-networking', icon: Users, description: 'Connect with friends and family' },
        { name: 'News & Information', href: '/services/news', icon: FileTextIcon, description: 'Latest news and information' },
        { name: 'Language Translation', href: '/services/language-translation', icon: Languages, description: 'Translate between languages' },
        { name: 'Online Learning Platform', href: '/services/online-learning', icon: GraduationCap, description: 'Learn new skills online' },
        { name: 'Transportation Booking', href: '/services/transportation', icon: Truck, description: 'Book transportation services' },
        { name: 'Food Delivery', href: '/services/food-delivery', icon: Package, description: 'Order food delivery' },
        { name: 'Healthcare Services', href: '/services/healthcare', icon: Heart, description: 'Access healthcare services' },
        { name: 'Entertainment', href: '/services/entertainment', icon: Play, description: 'Entertainment and media' },
        { name: 'Financial Literacy Programs', href: '/services/financial-literacy', icon: BookOpen, description: 'Learn about financial management' },
        { name: 'Digital Skills Training', href: '/services/digital-skills', icon: Monitor, description: 'Improve your digital skills' },
        { name: 'Entrepreneurship Courses', href: '/services/entrepreneurship', icon: Rocket, description: 'Learn entrepreneurship skills' },
        { name: 'Shopping Marketplace', href: '/services/shopping-marketplace', icon: Store, description: 'Consumer-focused shopping marketplace' },
      ]
    },
    { 
      name: 'Business', 
      href: '#',
      dropdown: [
        { name: 'Live Marketplace V1.0', href: 'https://annita.company.site/products', icon: ShoppingCart, description: 'Current working marketplace with 3,000+ vendors', isExternal: true },
        { name: 'Annita Global Market', href: '/services/global-market', icon: Globe, description: 'International marketplace' },
        { name: 'AnnitaPay Business', href: '/services/annitapay-business', icon: Building, description: 'Business payment solutions' },
        { name: 'Annita AI', href: '/services/ai', icon: Zap, description: 'AI-powered business tools' },
        { name: 'Annita Logistics Network', href: '/services/logistics', icon: Truck, description: 'Supply chain, delivery & bike delivery services' },
        { name: 'Annita Ads', href: '/services/ads', icon: Target, description: 'Advertising platform' },
        { name: 'Annita ERP System', href: '/services/erp', icon: Database, description: 'Enterprise resource planning' },
        { name: 'Annita Email Service', href: '/services/email', icon: Mail, description: 'Professional email hosting with custom domains' },
        // MSME Solutions
        { name: 'Multi-Currency Digital Wallets', href: '/services/multi-currency-wallet', icon: Wallet, description: 'Handle 54+ African currencies seamlessly' },
        { name: 'Cross-Border Payment Processing', href: '/services/cross-border-payments', icon: Send, description: 'Process payments across borders' },
        { name: 'Escrow Payment Protection', href: '/services/escrow-protection', icon: Shield, description: 'Secure escrow payment protection' },
        { name: 'Mobile POS Solutions', href: '/services/mobile-pos', icon: Smartphone, description: 'Mobile point of sale solutions' },
        { name: 'Trade Finance Integration', href: '/services/trade-finance', icon: TrendingUpIcon, description: 'Trade finance integration services' },
        { name: 'Invoice Management', href: '/services/invoice-management', icon: FileTextIcon, description: 'Manage invoices efficiently' },
        { name: 'Inventory Management Systems', href: '/services/inventory-management', icon: Package, description: 'Track and manage inventory' },
        { name: 'Customer Relationship Management', href: '/services/crm', icon: Users, description: 'Manage customer relationships' },
        { name: 'Supply Chain Optimization', href: '/services/supply-chain', icon: Truck, description: 'Optimize supply chain operations' },
        { name: 'Order Management', href: '/services/order-management', icon: ShoppingCart, description: 'Manage orders efficiently' },
        { name: 'Analytics Dashboard', href: '/services/analytics', icon: BarChart3Icon, description: 'Business analytics and insights' },
        { name: 'Document Management', href: '/services/document-management', icon: FolderOpen, description: 'Manage business documents' },
        { name: 'Digital Marketing Tools', href: '/services/digital-marketing', icon: Megaphone, description: 'Digital marketing solutions' },
        { name: 'E-commerce Platform', href: '/services/ecommerce', icon: Store, description: 'Complete e-commerce platform' },
        { name: 'Lead Generation', href: '/services/lead-generation', icon: Target, description: 'Generate business leads' },
        { name: 'KYC Verification', href: '/services/kyc-verification', icon: UserCheck, description: 'Know Your Customer verification' },
        { name: 'Brand Building Tools', href: '/services/brand-building', icon: Eye, description: 'Build and manage your brand' },
        { name: 'Tax Management', href: '/services/tax-management', icon: FileCheck, description: 'Manage business taxes' },
        { name: 'Regulatory Compliance', href: '/services/regulatory-compliance', icon: Scale, description: 'Ensure regulatory compliance' },
        { name: 'Contract Management', href: '/services/contract-management', icon: Gavel, description: 'Manage business contracts' },
      ]
    },
    { 
      name: 'Cross-Cutting Solutions', 
      href: '#',
      dropdown: [
        { name: 'Offline Functionality', href: '/services/offline-functionality', icon: WifiOff, description: 'Works without internet connection' },
        { name: 'Low-Bandwidth Optimization', href: '/services/low-bandwidth', icon: Wifi, description: 'Optimized for slow connections' },
        { name: 'Multi-Language Support', href: '/services/multi-language', icon: Languages, description: 'Support for multiple languages' },
        { name: 'Mobile-First Design', href: '/services/mobile-first', icon: Smartphone, description: 'Designed for mobile devices' },
        { name: 'Identity Verification', href: '/services/identity-verification', icon: Fingerprint, description: 'Secure identity verification' },
        { name: 'Fraud Protection', href: '/services/fraud-protection', icon: AlertTriangle, description: 'Advanced fraud protection' },
        { name: 'Data Privacy', href: '/services/data-privacy', icon: Lock, description: 'Protect user data privacy' },
        { name: 'Dispute Resolution', href: '/services/dispute-resolution', icon: Scale, description: 'Fair dispute resolution' },
        { name: 'Rural Connectivity', href: '/services/rural-connectivity', icon: MapPin, description: 'Connect rural areas' },
        { name: 'Affordable Pricing', href: '/services/affordable-pricing', icon: DollarSign, description: 'Low-cost pricing options' },
        { name: 'Simple User Interface', href: '/services/simple-ui', icon: Palette, description: 'Simple and intuitive design' },
        { name: 'Local Support', href: '/services/local-support', icon: HeadphonesIcon, description: 'Local customer support' },
        { name: 'Government Services', href: '/services/government-services', icon: Landmark, description: 'Government service integration' },
        { name: 'Banking Integration', href: '/services/banking-integration', icon: LinkIcon, description: 'Bank integration services' },
        { name: 'Social Services', href: '/services/social-services', icon: Heart, description: 'Social services access' },
        { name: 'Community Features', href: '/services/community-features', icon: Users, description: 'Build communities' },
      ]
    },

    { 
      name: 'Company', 
      href: '#',
                          dropdown: [
                      { name: 'Ideas & Recommendations', href: '/ideas', icon: Lightbulb, description: 'Share ideas and feedback' },
                      { name: 'About Us', href: '/about', icon: Users, description: 'Our story and mission' },
                      { name: 'CSR', href: '/company/csr', icon: Heart, description: 'Corporate social responsibility and impact' },
                      { name: 'Demo', href: '/demo', icon: Play, description: 'Interactive demo of Annita 3.0' },
                      { name: 'Investors', href: '/investors', icon: DollarSign, description: 'Investment opportunities and company info' },
                      { name: 'The 100', href: '/the100', icon: Target, description: 'Youth empowerment initiative' },
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
        { name: 'Search', href: '#', icon: Search, description: 'Search for features, pages, or services', isSearchToggle: true },
        { name: 'Theme Settings', href: '#', icon: Settings, description: 'Light, dark, or system theme', isThemeToggle: true },
        { name: 'Contact Us', href: '/contact-us', icon: Mail, description: 'Get in touch with our team' },
        { name: 'Report Issues', href: '/support/report-issues', icon: HelpCircle, description: 'Report bugs and issues' },
        { name: 'Contact Sales', href: '/contact-sales', icon: Phone, description: 'Talk to our business development team' },
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
                                  'isSearchToggle' in dropdownItem && dropdownItem.isSearchToggle ? (
                                    <div key={dropdownItem.name} className="p-2">
                                      <div className="text-sm text-gray-600 dark:text-gray-300 mb-2">{dropdownItem.name}</div>
                                          <GlobalSearch />
                                    </div>
                                  ) : 'isThemeToggle' in dropdownItem && dropdownItem.isThemeToggle ? (
                                     <div key={dropdownItem.name} className="p-3">
                                       <div className="flex items-start space-x-3">
                                         <dropdownItem.icon className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 flex-shrink-0" />
                                         <div className="flex-1">
                                           <div className="font-medium text-gray-900 dark:text-white mb-2">{dropdownItem.name}</div>
                                           <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">{dropdownItem.description}</div>
                                           <SimpleThemeToggle />
                                         </div>
                                       </div>
                                     </div>
                                  ) : 'isExternal' in dropdownItem && dropdownItem.isExternal ? (
                                    <a
                                      key={dropdownItem.name}
                                      href={dropdownItem.href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                                      onClick={() => setActiveDropdown(null)}
                                    >
                                      <dropdownItem.icon className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 flex-shrink-0" />
                                      <div>
                                        <div className="font-medium text-gray-900 dark:text-white">{dropdownItem.name}</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">{dropdownItem.description}</div>
                                      </div>
                                    </a>
                                  ) : (
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
                                  )
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    'isExternal' in item && item.isExternal ? (
                      <a 
                        href={item.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="nav-link"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link href={item.href} className="nav-link">
                        {item.name}
                      </Link>
                    )
                  )}
                </div>
              ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
              <Link 
                href="/download"
                className="btn-primary"
              >
                <Download className="w-4 h-4 mr-2" />
                Join Waitlist
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

      {/* Clean Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/20" 
              onClick={() => setIsOpen(false)} 
            />
            
            {/* Menu Container */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute right-0 top-0 h-full w-80 bg-white dark:bg-gray-900 shadow-xl"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                  <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                    <div className="relative">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                        <img 
                          src="/images/blog/Annita's Logo.png" 
                          alt="Annita Logo" 
                          className="w-5 h-5 rounded-full object-cover"
                        />
                      </div>
                      <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full blur opacity-20"></div>
                    </div>
                    <span className="text-lg font-bold text-orange-500 dark:text-orange-400">Annita</span>
                  </Link>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Navigation Items */}
                <div className="flex-1 py-6 overflow-y-auto">
                  <div className="px-6 space-y-2 pb-4">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        {item.dropdown ? (
                          <div>
                            <button
                              onClick={() => toggleDropdown(item.name)}
                              className="flex items-center justify-between w-full p-3 text-left hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                            >
                              <span className="font-medium text-gray-900 dark:text-white">{item.name}</span>
                              <ChevronDown className={`w-4 h-4 transition-transform ${
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
                                  className="ml-4 mt-2 space-y-1 max-h-64 overflow-y-auto"
                                >
                                  {item.dropdown.map((dropdownItem) => (
                                    'isSearchToggle' in dropdownItem && dropdownItem.isSearchToggle ? (
                                      <div key={dropdownItem.name} className="p-2">
                                        <div className="text-sm text-gray-600 dark:text-gray-300 mb-2">{dropdownItem.name}</div>
                                        <GlobalSearch />
                                      </div>
                                    ) : 'isThemeToggle' in dropdownItem && dropdownItem.isThemeToggle ? (
                                      <div key={dropdownItem.name} className="p-2">
                                        <div className="text-sm text-gray-600 dark:text-gray-300 mb-2">{dropdownItem.name}</div>
                                        <SimpleThemeToggle />
                                      </div>
                                    ) : 'isExternal' in dropdownItem && dropdownItem.isExternal ? (
                                      <a
                                        key={dropdownItem.name}
                                        href={dropdownItem.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block p-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                                        onClick={() => {
                                          setIsOpen(false)
                                          setActiveDropdown(null)
                                        }}
                                      >
                                        {dropdownItem.name}
                                      </a>
                                    ) : (
                                      <Link
                                        key={dropdownItem.name}
                                        href={dropdownItem.href}
                                        className="block p-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                                        onClick={() => {
                                          setIsOpen(false)
                                          setActiveDropdown(null)
                                        }}
                                      >
                                        {dropdownItem.name}
                                      </Link>
                                    )
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          'isExternal' in item && item.isExternal ? (
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block p-3 font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {item.name}
                            </a>
                          ) : (
                            <Link
                              href={item.href}
                              className="block p-3 font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {item.name}
                            </Link>
                          )
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                  <Link
                    href="/download"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Join Waitlist
                  </Link>
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
