import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const siteDescription = `It's time for startups to participate in the creation of laws that concern startups — The Uganda Startup Act project is a joint initiative by Uganda's tech ecosystem and the Presidency to harness the potential of our digital economy through co-created regulations. The Bill will ensure that Uganda's laws and regulations are clear, planned and work for the tech ecosystem.`

/** @type {import('next').Metadata } */
export const metadata = {
  title: 'Uganda Startup Act',
  description: siteDescription,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f2bc00" />
        <meta name="msapplication-TileColor" content="#ffc40d" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      </head>
      <body>{children}</body>
    </html>
  )
}
