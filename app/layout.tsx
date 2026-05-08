import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Moh & Win - Our Love Story',
  description: 'Forever kinda vibe with you ♾️',
  
icons: {
  icon: [
    {
      url: "/heart-light.png",
      media: "(prefers-color-scheme: light)",
    },
    {
      url: "/heart-dark.png",
      media: "(prefers-color-scheme: dark)",
    },
    {
      url: "/love-icon.svg",
      type: "image/svg+xml",
    },
  ],
  apple: "/apple-love-icon.png",
},
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
