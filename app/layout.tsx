import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { GeistPixelSquare } from 'geist/font/pixel'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Zero to Agent Mendoza | v0 IRL en Universidad Champagnat',
  description: 'Sumate a Mendoza para Zero to Agent — construí y shipeá agentes de IA reales con v0 y Vercel. En la Universidad Champagnat, 28 de abril de 2026.',
  generator: 'v0.app',
  keywords: ['agentes de IA', 'v0', 'Vercel', 'Mendoza', 'Universidad Champagnat', 'hackathon', 'semana de construcción', 'desarrollo IA'],
  openGraph: {
    title: 'Zero to Agent Mendoza | v0 IRL',
    description: 'Sumate a Mendoza para Zero to Agent — construí y shipeá agentes de IA reales con v0 y Vercel. En la Universidad Champagnat, 28 de abril de 2026.',
    type: 'website',
    siteName: 'Zero to Agent Mendoza',
    images: [
      {
        url: '/opengraph-image.png',
        width: 2400,
        height: 1256,
        alt: 'Zero to Agent Mendoza - v0 IRL en Universidad Champagnat',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zero to Agent Mendoza | v0 IRL',
    description: 'Sumate a Mendoza para Zero to Agent — construí y shipeá agentes de IA reales con v0 y Vercel. En la Universidad Champagnat, 28 de abril de 2026.',
    images: ['/opengraph-image.png'],
    creator: '@v0',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased dark ${GeistPixelSquare.variable}`}>
        {children}
        <Analytics />
        <script id="luma-checkout" src="https://embed.lu.ma/checkout-button.js" async />
      </body>
    </html>
  )
}
