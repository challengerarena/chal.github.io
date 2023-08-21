import './globals.css'
@import url('/assets/vendor/magnific-popup/css/magnific-popup.css');
@import url('/public/assets/vendor/slick/css/slick.css');
@import url('/public/assets/vendor/nanoscroller/css/nanoscroller.css');
@import url('/public/assets/vendor/fontawesome/css/brands.css');
@import url('/public/assets/css/style.css');
@import url('/public/assets/css/custom.css');
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
