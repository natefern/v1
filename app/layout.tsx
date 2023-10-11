import './globals.css'
import { Metadata } from 'next';
import Head from 'next/head';
import BottomBar from './components/BottomBar'
import NavBar from './components/navbar/NavBar'

import { Rubik } from 'next/font/google'
const rubik = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nathan Fernandez',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme='mytheme' className="scroll-smooth">
      <Head>
        <link rel="icon" href="/public/favicon.ico" sizes="any" />
        {/* Add other meta tags.... */}
      </Head>
      <body className={rubik.className}>
        <NavBar />
        {/* Implement navbar here later*/}
        {children}

        <BottomBar></BottomBar>
      </body>
    </html>
  )
}
