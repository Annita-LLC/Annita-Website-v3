import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://www.an-nita.com'
  const currentDate = new Date().toISOString()

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Annita - Africa's First All-in-One Digital Platform</title>
    <link>${baseUrl}</link>
    <description>Africa's premier digital platform, offering integrated e-commerce, fintech, AI, and logistics solutions. Empowering 450M+ African MSMEs with innovative technology.</description>
    <language>en-US</language>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    
    <item>
      <title>AnnitaPay - Digital Payment Solutions</title>
      <link>${baseUrl}/services/annitapay</link>
      <description>Secure digital payment solutions for individuals and businesses across Africa. Send money, pay bills, and manage your finances with AnnitaPay.</description>
      <pubDate>${currentDate}</pubDate>
      <guid>${baseUrl}/services/annitapay</guid>
    </item>
    
    <item>
      <title>AnnitaShop - E-commerce Marketplace</title>
      <link>${baseUrl}/marketplace</link>
      <description>Discover millions of products from African vendors. Shop with confidence on Africa's premier e-commerce platform.</description>
      <pubDate>${currentDate}</pubDate>
      <guid>${baseUrl}/marketplace</guid>
    </item>
    
    <item>
      <title>Annita AI - Personal & Business AI Assistant</title>
      <link>${baseUrl}/ai</link>
      <description>Transform your personal and business life with AI-powered assistance. Get smart recommendations, automate tasks, and boost productivity.</description>
      <pubDate>${currentDate}</pubDate>
      <guid>${baseUrl}/ai</guid>
    </item>
    
    <item>
      <title>Annita Logistics - On-Demand Delivery</title>
      <link>${baseUrl}/logistics</link>
      <description>Fast, reliable delivery services across Africa. Connect with trusted delivery partners and track your packages in real-time.</description>
      <pubDate>${currentDate}</pubDate>
      <guid>${baseUrl}/logistics</guid>
    </item>
    
    <item>
      <title>Annita Connect - Business Communication</title>
      <link>${baseUrl}/connect</link>
      <description>Seamless communication tools for businesses. Connect with customers, partners, and teams across Africa and beyond.</description>
      <pubDate>${currentDate}</pubDate>
      <guid>${baseUrl}/connect</guid>
    </item>
    
    <item>
      <title>Annita Enterprise - Business Solutions</title>
      <link>${baseUrl}/enterprise</link>
      <description>Comprehensive business solutions for enterprises. Scale your operations with our integrated platform.</description>
      <pubDate>${currentDate}</pubDate>
      <guid>${baseUrl}/enterprise</guid>
    </item>
    
    <item>
      <title>Annita Global Market - International Trade</title>
      <link>${baseUrl}/services/global-market</link>
      <description>Access global markets and expand your business internationally. Connect with buyers and sellers worldwide.</description>
      <pubDate>${currentDate}</pubDate>
      <guid>${baseUrl}/services/global-market</guid>
    </item>
    
    <item>
      <title>Annita Business AI - Enterprise AI Solutions</title>
      <link>${baseUrl}/services/ai</link>
      <description>AI-powered business intelligence and automation. Make data-driven decisions and optimize your operations.</description>
      <pubDate>${currentDate}</pubDate>
      <guid>${baseUrl}/services/ai</guid>
    </item>
    
    <item>
      <title>Annita ERP - Business Management</title>
      <link>${baseUrl}/services/erp</link>
      <description>Complete enterprise resource planning solution. Manage inventory, finances, and operations in one platform.</description>
      <pubDate>${currentDate}</pubDate>
      <guid>${baseUrl}/services/erp</guid>
    </item>
    
    <item>
      <title>Annita Ads - Digital Advertising</title>
      <link>${baseUrl}/services/ads</link>
      <description>Reach your target audience with precision digital advertising. Promote your products and services effectively.</description>
      <pubDate>${currentDate}</pubDate>
      <guid>${baseUrl}/services/ads</guid>
    </item>
  </channel>
</rss>`

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
