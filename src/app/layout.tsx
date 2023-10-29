
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cosmetics Website',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
        <NavBar/>
        {children}
        <Footer/>
        
         </body>
    </html>
  )
}
