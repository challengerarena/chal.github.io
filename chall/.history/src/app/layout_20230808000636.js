import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Necromancers - eSports Team &amp; Gaming HTML Template',
  description: 'eSports &amp; Tournament &amp; win &amp; Earing And More',
  author:'ChallangerArenaTeam',
  keywords:'eSports &amp; Tournament &amp; win &amp; Earing'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="assets/img/favicons/favicon.ico"/>
	<link rel="apple-touch-icon" sizes="120x120" href="assets/img/favicons/favicon-120.png"/>
	<link rel="apple-touch-icon" sizes="152x152" href="assets/img/favicons/favicon-152.png">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
