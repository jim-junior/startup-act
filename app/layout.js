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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
