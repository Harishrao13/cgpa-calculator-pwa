import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'CGPA Calculator',
    short_name: 'CGPA Calc',
    description: 'Calculate your CGPA and SGPA',
    id: '/',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    screenshots: [
      {
        src: '/screenshot-mobile-1.png',
        sizes: '750x1624',
        type: 'image/png',
      }
    ],
    protocol_handlers: [
      {
        protocol: 'web+cgpa',
        url: '/share?data=%s'
      },
      {
        protocol: 'web+grades',
        url: '/import?grades=%s'
      },
      {
        protocol: 'web+transcript',
        url: '/transcript?data=%s'
      }
    ]
  }
}
