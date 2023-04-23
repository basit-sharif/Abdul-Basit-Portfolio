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
import Testimonials from '@/components/views/Testimonials'
import ProjectCarousel from '@/components/views/ProjectCarousel'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  useEffect(() => {
    let isBrowser = () => typeof window !== "undefined";
    if (isBrowser()) {
      let element = document.querySelectorAll(".fade_right_rotate");
      const observer = new IntersectionObserver((item: any) => {
        item.map((subitem: any) => {
          if (subitem.isIntersecting) {
            subitem.target.classList.remove("fade_right_rotate_notView");
            subitem.target.classList.add("fade_right_rotate_view");
          } else {
            subitem.target.classList.add("fade_right_rotate_notView");
            subitem.target.classList.remove("fade_right_rotate_view");
          };
        })
      })
      element.forEach((item: any) => {
        observer.observe(item);
      });
    }
    if (isBrowser()) {
      let element = document.querySelectorAll(".fade_right_rotate");
      const observer = new IntersectionObserver((item: any) => {
        item.map((subitem: any) => {
          if (subitem.isIntersecting) {
            subitem.target.classList.remove("fade_right_rotate_notView");
            subitem.target.classList.add("fade_right_rotate_view");
          } else {
            subitem.target.classList.add("fade_right_rotate_notView");
            subitem.target.classList.remove("fade_right_rotate_view");
          };
        })
      })
      element.forEach((item: any) => {
        observer.observe(item);
      })
      let element2 = document.querySelectorAll(".fade_left");
      const observer2 = new IntersectionObserver((item: any) => {
        item.map((subitem: any) => {
          if (subitem.isIntersecting) {
            subitem.target.classList.remove("fade_left_notView");
            subitem.target.classList.add("fade_left_view");
          } else {
            subitem.target.classList.add("fade_left_notView");
            subitem.target.classList.remove("fade_left_view");
          };
        })
      })
      element2.forEach((item: any) => {
        observer2.observe(item);
      })
    }
  }, [])
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <section className='px-0 sm:px-10 pt-8 h-screen'>
        <Hero />
        <Skills />
        <RecentProjects />
        <WorkingDays />
        <Testimonials />
        <ProjectCarousel />
        <About />
      <Contact />
      <Footer />
      </section>
    </ThemeProvider>
  )
}
