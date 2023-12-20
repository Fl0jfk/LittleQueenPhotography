"use client"

import Head from 'next/head';
import { DataProvider } from './contexts/data';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Slider from './components/Slider/Slider';

export default function Home() {
  return (
    <>
      <Head>
        <title>Page d`&apos;`accueil de LittleQueenPhotography</title>
      </Head>
      <DataProvider>
        <Header/>
        <main className="w-full h-full flex flex-col sm:pt-[10vh] z-[0]">
          <section className='w-full h-full flex flex-col gap-1 z-[0]'>
            <Slider/>
            <Slider/>
            <Slider/>
            <Slider/>
            <Slider/>
            <Slider/>
            <Slider/>
            <Slider/>
          </section>
        </main>
        <Footer/>
      </DataProvider>
    </>
    
  )
}
