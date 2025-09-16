import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Eric Yung - Portfolio',
  description: 'Personal portfolio showcasing projects, experience, and skills',
  keywords: ['Eric Yung', 'Portfolio', 'Developer', 'Software Engineer'],
  authors: [{ name: 'Eric Yung' }],
  openGraph: {
    title: 'Eric Yung - Portfolio',
    description: 'Personal portfolio showcasing projects, experience, and skills',
    url: 'https://ericyung.dev',
    siteName: 'Eric Yung Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eric Yung - Portfolio',
    description: 'Personal portfolio showcasing projects, experience, and skills',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={`${poppins.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
