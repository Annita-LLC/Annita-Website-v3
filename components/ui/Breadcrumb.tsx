'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { usePathname } from 'next/navigation'

interface BreadcrumbItem {
  label: string
  href?: string
  isCurrentPage?: boolean
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[]
  className?: string
  showHome?: boolean
}

// Route mapping for automatic breadcrumb generation
const routeMap: Record<string, string> = {
  '/': 'Home',
  '/about': 'About Us',
  '/demo': 'Demo',
  '/the100': 'The 100',
  '/investors': 'Investors',
  '/pricing': 'Pricing',
  '/business-model': 'Business Model',
  '/awards': 'Awards & Recognition',
  '/gallery': 'Gallery',
  '/careers': 'Careers',
  '/careers/apply': 'Apply Now',
  '/contact-us': 'Contact Us',
  '/support/report-issues': 'Report Issues',
  '/contact-sales': 'Contact Sales',
  '/ai': 'AI Services',
  '/ai/personal': 'Personal AI',
  '/ai/business': 'Business AI',
  '/services/annitapay': 'AnnitaPay',
  '/services/annitapay-business': 'AnnitaPay Business',
  '/services/ai': 'AI Services',
  '/services/logistics': 'Logistics',
  '/services/ads': 'Advertising',
  '/services/erp': 'ERP System',
  '/services/global-market': 'Global Market',
  '/services/shopping': 'Marketplace',
  '/services/connect': 'Connect',
  '/learn-more': 'Learn More',
  '/learn-more-v3': 'Learn More V3',
  '/download': 'Download',
  '/partners': 'Partners',
  '/partners/apply': 'Partner Application',
  '/enterprise': 'Enterprise',
  '/discover': 'Discover',
  '/team': 'Team',
  '/privacy': 'Privacy Policy',
  '/terms': 'Terms of Service',
  '/cookies': 'Cookie Policy',
  '/legal/security': 'Security',
  '/company/press': 'Press',
}

export default function Breadcrumb({ 
  items, 
  className = '', 
  showHome = true 
}: BreadcrumbProps) {
  const pathname = usePathname()
  
  // Generate breadcrumb items from pathname if not provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (items) return items

    const pathSegments = pathname.split('/').filter(Boolean)
    const breadcrumbs: BreadcrumbItem[] = []

    // Add home if requested
    if (showHome) {
      breadcrumbs.push({
        label: 'Home',
        href: '/'
      })
    }

    // Build breadcrumbs from path segments
    let currentPath = ''
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`
      const isLast = index === pathSegments.length - 1
      
      // Get label from route map or format segment
      const label = routeMap[currentPath] || 
        segment.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ')

      breadcrumbs.push({
        label,
        href: isLast ? undefined : currentPath,
        isCurrentPage: isLast
      })
    })

    return breadcrumbs
  }

  const breadcrumbItems = generateBreadcrumbs()

  // Don't render if only home page
  if (breadcrumbItems.length <= 1 && showHome) {
    return null
  }

  return (
    <nav 
      className={`flex items-center space-x-1 text-sm ${className}`}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-1">
        {breadcrumbItems.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
            )}
            
            {item.href && !item.isCurrentPage ? (
              <Link
                href={item.href}
                className="flex items-center text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-200"
              >
                {index === 0 && showHome && (
                  <Home className="w-4 h-4 mr-1" />
                )}
                <span className="truncate max-w-32 sm:max-w-none">
                  {item.label}
                </span>
              </Link>
            ) : (
              <span 
                className={`flex items-center ${
                  item.isCurrentPage 
                    ? 'text-gray-900 dark:text-white font-medium' 
                    : 'text-gray-600 dark:text-gray-400'
                }`}
                aria-current={item.isCurrentPage ? 'page' : undefined}
              >
                {index === 0 && showHome && (
                  <Home className="w-4 h-4 mr-1" />
                )}
                <span className="truncate max-w-32 sm:max-w-none">
                  {item.label}
                </span>
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

// Compact version for mobile
export function CompactBreadcrumb({ 
  items, 
  className = '' 
}: Omit<BreadcrumbProps, 'showHome'>) {
  const pathname = usePathname()
  
  const generateCompactBreadcrumbs = (): BreadcrumbItem[] => {
    if (items) return items

    const pathSegments = pathname.split('/').filter(Boolean)
    const breadcrumbs: BreadcrumbItem[] = []

    // Only show last 2 segments for compact view
    const relevantSegments = pathSegments.slice(-2)
    let currentPath = ''
    
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`
      if (pathSegments.length > 2 && index < pathSegments.length - 2) {
        return // Skip early segments
      }
      
      const isLast = index === pathSegments.length - 1
      const label = routeMap[currentPath] || 
        segment.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ')

      breadcrumbs.push({
        label,
        href: isLast ? undefined : currentPath,
        isCurrentPage: isLast
      })
    })

    return breadcrumbs
  }

  const breadcrumbItems = generateCompactBreadcrumbs()

  if (breadcrumbItems.length <= 1) {
    return null
  }

  return (
    <nav 
      className={`flex items-center space-x-1 text-xs ${className}`}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-1">
        {breadcrumbItems.length > 2 && (
          <>
            <li className="flex items-center">
              <span className="text-gray-400">...</span>
            </li>
            <ChevronRight className="w-3 h-3 text-gray-400 mx-1" />
          </>
        )}
        
        {breadcrumbItems.slice(-2).map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="w-3 h-3 text-gray-400 mx-1" />
            )}
            
            {item.href && !item.isCurrentPage ? (
              <Link
                href={item.href}
                className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-200 truncate max-w-20"
              >
                {item.label}
              </Link>
            ) : (
              <span 
                className={`${
                  item.isCurrentPage 
                    ? 'text-gray-900 dark:text-white font-medium' 
                    : 'text-gray-600 dark:text-gray-400'
                } truncate max-w-20`}
                aria-current={item.isCurrentPage ? 'page' : undefined}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
