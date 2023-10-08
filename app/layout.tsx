import './globals.css'
import { Rubik } from 'next/font/google'
import type { Metadata } from 'next'
import NavBar from './components/navbar/NavBar'
const rubik = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nathan Fernandez'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme='mytheme' className="scroll-smooth">

      <body className={rubik.className}>
        {/* Insert Navbar Here */}
        <NavBar />
        {children}
      </body>
    </html>
  )
}
