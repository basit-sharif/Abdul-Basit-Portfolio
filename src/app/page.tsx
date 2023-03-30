"use client"
import Hero from '@/components/views/Hero'
import Skills from '@/components/views/Skills'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import WorkingDays from '@/components/views/WorkingDays'
import RecentProjects from '@/components/views/RecentProjects'
import About from '@/components/views/About'
import Contact from '@/components/views/Contact'
import Footer from '@/components/views/Footer/indes'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <section className='px-0 sm:px-10 pt-8 h-screen '>
        <Hero />
        <Skills />
        <RecentProjects />
        <WorkingDays />
        <About />
        <Contact />
        <Footer />
      </section>
    </ThemeProvider>
  )
}