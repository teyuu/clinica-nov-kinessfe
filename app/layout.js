import { Inter } from 'next/font/google'
import './globals.css'
import 'remixicon/fonts/remixicon.css'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Clinica Kinessfe',
  description: 'Clinica de rehabitación - Kinesiología y fisiatría, Nutrición, Terapia Ocupacional, Psicología - Santa Fe, Capital ',
  icons: {
    icon: '/logo1.jpeg', // /public path
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className='font-Lato'>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  )
}
