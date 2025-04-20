import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NeverMissHealth - Personalized Cancer Screening Reminders',
  description: 'Stay on top of your health with personalized cancer screening reminders based on trusted medical guidelines.',
  metadataBase: new URL('https://nevermisshealth.com'),
  openGraph: {
    type: 'website',
    title: 'NeverMissHealth - Personalized Cancer Screening Reminders',
    description: 'Stay on top of your health with personalized cancer screening reminders based on trusted medical guidelines.',
    url: 'https://nevermisshealth.com',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeverMissHealth - Personalized Cancer Screening Reminders',
    description: 'Stay on top of your health with personalized cancer screening reminders based on trusted medical guidelines.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="icon" href="/favicon-new.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon-new.svg" />
      </head>
      <body className={`${inter.className} h-full antialiased`}>{children}</body>
    </html>
  )
}
