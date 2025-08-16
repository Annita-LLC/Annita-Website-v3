import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Live Activity Feed - Annita',
  description: 'Real-time updates and activities from across the Annita platform. Watch live transactions, orders, deliveries, and user activities.',
  keywords: 'live activity, real-time updates, transactions, orders, deliveries, user activities, Annita platform',
  openGraph: {
    title: 'Live Activity Feed - Annita',
    description: 'Real-time updates and activities from across the Annita platform',
    type: 'website',
  },
}

export default function LiveActivityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
