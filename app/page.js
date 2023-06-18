import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/components/Navbar'
import { Header } from '@/components/Header'
import About from '@/components/About'
import Footer from '@/components/Footer'
import FAQ from '@/components/Faq'
import Partners from '@/components/Partners'
import NewsLetter from '@/components/NewsLetter'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <FAQ />
      <Partners />
      <NewsLetter />
      <Footer />

    </main>
  )
}
