import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Download Annita App - Get Started Today',
  description: 'Download the Annita mobile app for iOS and Android. Access all our services on the go with our powerful mobile application.',
}

export default function DownloadLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
