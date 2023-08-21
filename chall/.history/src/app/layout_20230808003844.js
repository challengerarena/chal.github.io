import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head';
import { useRouter } from 'next/navigation';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ChallangerArena - eSports Team &amp; Gaming',
  description: 'eSports &amp; Tournament &amp; win &amp; Earing And More',
  author:'ChallangerArenaTeam',
  keywords:'eSports &amp; Tournament &amp; win &amp; Earing'
}

export default function RootLayout({ children }) {
  return (
    <>
    <Head>
    <html lang="en">
      <link rel="shortcut icon" href="/assets/img/favicons/favicon.ico"/>
	<link rel="apple-touch-icon" sizes="120x120" href="/assets/img/favicons/favicon-120.png"/>
	<link rel="apple-touch-icon" sizes="152x152" href="/assets/img/favicons/favicon-152.png"/>


  {/* Mobile Specific Metas */}
	<meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>


   
  <body className={`site-layout--horizontal preloader-is--active `}>
  <div className="site-wrapper">
    {children}
  </div>
</body>
</html>
</Head>

    
    </>
  )
}
