/* eslint-disable react/prop-types */
import './globals.css'
import { Quicksand } from 'next/font/google'

const inter = Quicksand({ variable: 'regular',subsets: ['latin'] })

export const metadata = {
  title: 'Roidev',
  description: 'Localhost',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={inter.className}>{children}</body>
    </html>
  )
}
