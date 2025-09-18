import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import StructuredData from '@/components/StructuredData'
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Eric Yung - Software Engineer Portfolio',
  description: 'Software Engineer based in St. Louis, MO. Specializing in full-stack development with React, TypeScript, Node.js, and modern web technologies. Currently seeking full-time opportunities.',
  keywords: [
    'Eric Yung', 
    'Software Engineer', 
    'Full Stack Developer', 
    'React', 
    'TypeScript', 
    'Node.js', 
    'Portfolio', 
    'St. Louis', 
    'Web Developer',
    'Frontend',
    'Backend',
    'JavaScript'
  ],
  authors: [{ name: 'Eric Yung', url: 'https://github.com/ericyung1' }],
  creator: 'Eric Yung',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: 'Eric Yung - Software Engineer Portfolio',
    description: 'Software Engineer based in St. Louis, MO. Specializing in full-stack development with React, TypeScript, Node.js, and modern web technologies.',
    url: 'https://ericyung-portfolio.vercel.app',
    siteName: 'Eric Yung Portfolio',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eric Yung - Software Engineer Portfolio',
    description: 'Software Engineer based in St. Louis, MO. Specializing in full-stack development with React, TypeScript, Node.js, and modern web technologies.',
    creator: '@ericyung1',
  },
  verification: {
    google: 'your-google-verification-code', // You'll need to add this when you set up Google Search Console
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <StructuredData />
      </head>
      <body className={`${poppins.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
