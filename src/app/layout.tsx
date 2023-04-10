
import BackgroundImage from '@/components/shared/BackgroundImage'
import SideNavbar from '@/components/views/SideNavbar'
import './globals.css'
import Wrapper from '@/components/shared/Wrapper'
import Image from 'next/image'
import { PreLoader } from '@/components/assets/Images'
import GoToTop from '@/components/views/GoToTop'

export const metadata = {
  title: 'Abdul-Basit',
  description: 'This is my Personal website or Portfolio.Throughout this you can place your order for a software',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className='scrollbar-thin scrollbar-thumb-purple-600 dark:scrollbar-thumb-darkBackgroundTop scrollbar-track-purple-400 dark:scrollbar-track-purple-400'>
        <GoToTop />
        <Wrapper>
          <div>
            <BackgroundImage />
            {children}
            <SideNavbar />
          </div>
        </Wrapper>
      </body>
    </html>
  )
}