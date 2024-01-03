import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/app/components/Header'
// import Footer from '@/app/components/Footer'
import { cn } from '@/lib/utils'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NewsNxt | Home',
  description: 'Latest news at your fingertips',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='h-full'>
      <body className={cn("relative h-full font-sans antialiased", inter.className)}>
        <main className='relative flex flex-col min-h-screen'>
            <Header />
            <div className="flex-grow flex-1">
              {children}
            </div>
            {/* <Footer /> */}
        </main>
      </body>
    </html>
  )
}
