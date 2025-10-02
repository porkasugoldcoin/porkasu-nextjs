import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: "Porkasu - Premium Gold & Silver | Value in Every Gram, Memory in Every Coin",
    template: "%s | Porkasu - Premium Gold & Silver"
  },
  description: "Porkasu - India's most trusted name in precious metal gifting & investment. Premium 22K, 24K gold & silver coins and bars available from 100mg to 40g. Customized coins, corporate gifts, and investment solutions.",
  keywords: [
    "gold coins",
    "silver coins", 
    "precious metals",
    "investment",
    "gifting",
    "customized coins",
    "corporate gifts",
    "gold bars",
    "silver bars",
    "India"
  ],
  authors: [{ name: "Porkasu" }],
  creator: "Porkasu",
  publisher: "Porkasu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://porkasu.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://porkasu.in',
    title: "Porkasu - Premium Gold & Silver | Value in Every Gram, Memory in Every Coin",
    description: "India's most trusted name in precious metal gifting & investment. Premium 22K, 24K gold & silver coins and bars available from 100mg to 40g.",
    siteName: 'Porkasu',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Porkasu - Premium Gold & Silver',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Porkasu - Premium Gold & Silver | Value in Every Gram, Memory in Every Coin",
    description: "India's most trusted name in precious metal gifting & investment. Premium 22K, 24K gold & silver coins and bars available from 100mg to 40g.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Porkasu',
  description: "India's most trusted name in precious metal gifting & investment",
  url: 'https://porkasu.in',
  logo: 'https://porkasu.in/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-91501-34161',
    contactType: 'customer service',
    areaServed: 'IN',
    availableLanguage: ['English', 'Tamil', 'Hindi']
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '264/44 Srirengapalayam',
    addressLocality: 'Rajapalayam',
    addressRegion: 'Tamil Nadu',
    postalCode: '626117',
    addressCountry: 'IN'
  },
  sameAs: [
    'https://instagram.com/porkasu_goldcoin'
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
