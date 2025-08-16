import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Welcome to Annita - Africa\'s Digital Platform',
  description: 'Welcome to Annita, Africa\'s first all-in-one digital platform. Discover powerful tools designed to transform your business with e-commerce, fintech, AI, and logistics solutions.',
  keywords: 'welcome, Annita, Africa, digital platform, e-commerce, fintech, AI, MSMEs, business solutions',
  openGraph: {
    title: 'Welcome to Annita - Africa\'s Digital Platform',
    description: 'Welcome to Annita, Africa\'s first all-in-one digital platform',
    type: 'website',
  },
}

export default function WelcomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
