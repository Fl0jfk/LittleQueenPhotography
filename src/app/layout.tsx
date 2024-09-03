"use client"

import type { Viewport } from 'next'
import Popps from 'next/font/local'
import './globals.css';
import { Provider } from "react-redux";
import store from "./redux/store"
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { DataProvider } from './contexts/data';
import { cn } from './lib/utils';
import Metadata from './components/Metadata/Metadata';

const Poppins = Popps({ src: "./assets/fonts/Poppins/Poppins-Regular.ttf"})

export const viewport: Viewport = {    
  themeColor: 'black',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({children}:{children: React.ReactNode}){
  return (
    <html lang="fr">
      <Metadata/>
      <body className={cn(`${Poppins.className} bg-black antialiased font-medium`)}>
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