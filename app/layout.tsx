import type { Metadata, Viewport } from 'next'
import { CGPAProvider } from '@/contexts/CGPAContext'
import './globals.css'

export const metadata: Metadata = {
  title: 'CGPA Calculator',
  description: 'Calculate your CGPA and SGPA offline',
  generator: 'Next.js',
  keywords: ['nextjs', 'pwa', 'cgpa', 'calculator'],
  icons: [
    { rel: 'apple-touch-icon', url: '/icon-192x192.png' },
    { rel: 'icon', url: '/icon-192x192.png' },
  ],
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      <body>
        <CGPAProvider>
          {children}
        </CGPAProvider>
      </body>
    </html>
  )
}
