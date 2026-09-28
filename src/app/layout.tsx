// src/app/layout.tsx
import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/chrome/Header'
import Footer from '@/components/chrome/Footer'
import WhatsAppFab from '@/components/chrome/WhatsAppFab'
import LegacyHandlers from '@/components/chrome/LegacyHandlers'
import { COMPANY } from '@/lib/constants'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.siteUrl),
  icons: {
    icon: [
      { url: '/favicon-clickdecoded.svg', type: 'image/svg+xml' },
      { url: '/images/clickdecoded.png', type: 'image/png' },
    ],
    apple: '/images/clickdecoded.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <WhatsAppFab />
        <LegacyHandlers />
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
