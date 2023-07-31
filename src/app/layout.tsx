import BackgroundImage from '@/components/shared/BackgroundImage'
import Seo from '@/components/shared/Seo'
import Wrapper from '@/components/shared/Wrapper'
import SideNavbar from '@/components/views/SideNavbar'
import './globals.css'

export const metadata = {
  title: 'Abdul-Basit',
  description: 'Hi, I am Abdul Basit (basitgggg) Here you will find a collection of high-quality software solutions to make your life easier and more productive.',
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