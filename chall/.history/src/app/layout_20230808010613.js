import './globals.css'
@import url('./assets/vendor/magnific-popup/css/magnific-popup.css');
@import url('./assets/vendor/slick/css/slick.css');
@import url('./assets/vendor/nanoscroller/css/nanoscroller.css');


import React from 'react';
import './globals.css';
import './assets/vendor/magnific-popup/css/magnific-popup.css';
import './assets/vendor/slick/css/slick.css';
import './assets/vendor/nanoscroller/css/nanoscroller.css';
@import'./assets/vendor/fontawesome/css/brands.css');
@import'./assets/css/style.css');
@import ('./assets/css/custom.css');
function App() {
  return (
    // Uygulama bileşeninizi burada döndürün
  );
}

export default App;



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
