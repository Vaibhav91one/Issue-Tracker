import './globals.css'
import './theme-config.css'
import '@radix-ui/themes/styles.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Theme } from '@radix-ui/themes';
import NavBar from './NavBar'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Issue Tracker',
  description: 'Issue Tracker is a NextJS based application that helps in tracking issues.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Theme appearance="light" accentColor="violet">
          <main className='p-5'>
            <NavBar />
            {children}
          </main>
          {/* <ThemePanel/> */}
        </Theme>
      </body>
    </html>
  )
}
