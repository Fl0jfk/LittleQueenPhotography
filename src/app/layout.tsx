"use client"

import type { Viewport } from 'next'
import SanFrancisco from 'next/font/local';
import './globals.css';
import { Provider } from "react-redux";
import store from "./redux/store"
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { DataProvider } from './contexts/data';
 
const SF = SanFrancisco({ src: "./assets/fonts/San Francisco/pro/SF-Pro-Display-Regular.otf"})

export const viewport: Viewport = {
  themeColor: 'black',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${SF.className} w-full h-full bg-black`}>
        <DataProvider>
          <Provider store={store}>
            <Header/>
            {children}
            <Footer/>
          </Provider>
        </DataProvider>
      </body>
    </html>
  )
}