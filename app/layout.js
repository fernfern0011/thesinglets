import './globals.css'
import { Inter } from 'next/font/google'
// import Header from './header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Singlets',
  description: 'The Singlets MERN project By Group 12',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Header /> */}
        <main>{children}</main>
      </body>
    </html>
  )
}
