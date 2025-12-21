'use client'

import { usePathname } from 'next/navigation'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const hideChrome = pathname === '/maintenance' || pathname?.startsWith('/maintenance/') || pathname?.startsWith('/staff/')

  return (
    <div className="min-h-screen flex flex-col">
      {!hideChrome && <Navigation />}
      <main className="flex-1">{children}</main>
      {!hideChrome && <Footer />}
    </div>
  )
}


