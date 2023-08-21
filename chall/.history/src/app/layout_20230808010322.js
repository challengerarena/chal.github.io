import './globals.css'
@import url('./assets/vendor/magnific-popup/css/magnific-popup.css');
@import url('./assets/vendor/slick/css/slick.css');
@import url('./assets/vendor/nanoscroller/css/nanoscroller.css');
@import url('./assets/vendor/fontawesome/css/brands.css');
@import url('./assets/css/style.css');
@import url('./assets/css/custom.css');
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Necromancers - eSports Team &amp; Gaming HTML Template',
  description: 'eSports &amp; Tournament &amp; win &amp; Earing',
  author:'ChallangerArenaTeam',
  keywords:'eSports &amp; Tournament &amp; win &amp; Earing'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
