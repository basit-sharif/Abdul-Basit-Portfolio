import BackgroundImage from '@/components/shared/BackgroundImage'
import Seo from '@/components/shared/Seo'
import Wrapper from '@/components/shared/Wrapper'
import SideNavbar from '@/components/views/SideNavbar'
import './globals.css'

export const metadata = {
  title: 'Abdul-Basit',
  description: 'Welcome to my software portfolio website! Here you will find a collection of high-quality software solutions designed to make your life easier and more productive.Throughout this you can place your order for a software.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Seo canonical={"https://abdulbasit-self.vercel.app/"} />
      </head>
      <body className='scrollbar-thin scrollbar-thumb-purple-600 dark:scrollbar-thumb-darkBackgroundTop scrollbar-track-purple-400 dark:scrollbar-track-purple-400'>
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
};