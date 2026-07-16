import React from "react"
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ["latin", "latin-ext"], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ["latin", "latin-ext"], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Çardaklı Köşk | Urfa Sıra Gecesi',
  description:
    "Şanlıurfa'nın kalbinde, Balıklıgöl'ün karşısında tarihi Çardaklı Köşk'te otantik sıra gecesi deneyimi. Canlı müzik, çiğ köfte, Urfa kebabı ve geleneksel mırra ikramı. Rezervasyon için hemen arayın.",
  keywords: [
    'Çardaklı Köşk',
    'Urfa sıra gecesi',
    'Şanlıurfa sıra gecesi',
    'sıra gecesi rezervasyon',
    'Balıklıgöl restoran',
    'Urfa kebabı',
    'çiğ köfte',
  ],
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
