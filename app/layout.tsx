import type { Metadata, Viewport } from 'next'
import { CGPAProvider } from '@/contexts/CGPAContext'
import './globals.css'

export const metadata: Metadata = {
  title: 'CGPA Calculator',
  description: 'Calculate your CGPA and SGPA',
  generator: 'Next.js',
  keywords: ['nextjs', 'pwa', 'cgpa', 'calculator'],
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/icon-192x192.png',
  },
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
      <body>
        <CGPAProvider>
          {children}
        </CGPAProvider>
      </body>
    </html>
  )
}
