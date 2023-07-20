"use client"
import Hero from '@/components/views/Hero'
import Skills from '@/components/views/Skills'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import WorkingDays from '@/components/views/WorkingDays'
import GoToTop from '@/components/views/GoToTop'
import RecentProjects from '@/components/views/RecentProjects'
import About from '@/components/views/About'
import Contact from '@/components/views/Contact'
import Footer from '@/components/views/Footer/indes'
import Testimonials from '@/components/views/Testimonials'
import ProjectCarousel from '@/components/views/ProjectCarousel'
import MyServices from '@/components/views/MyServices'
import { useEffect } from "react"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div id='home' />
      <main className='px-0 sm:px-10 2xl:px-6 pt-8 h-screen'>
        <GoToTop heightOfPage={10} />
        <Hero />
        {/* <MyServices /> */}
        <Skills />
        <RecentProjects />
        <WorkingDays />
        <Testimonials />
        <ProjectCarousel />
        <About />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  )
}