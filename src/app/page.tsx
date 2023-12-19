"use client"

import Head from 'next/head';
import { DataProvider } from './contexts/data';
import Header from './components/Header/Header';
import InstaFeed from "./components/InstagramFeed/InstaFeed";
import Slider from './components/Slider/Slider';

export default function Home() {
  return (
    <>
      <Head>
        <title>Page d`&apos;`accueil de LittleQueenPhotography</title>
      </Head>
      <DataProvider>
        <Header/>
        <main className="w-full h-full flex flex-col sm:pt-[10vh]">
          <Slider/>
          <InstaFeed/>
        </main>
      </DataProvider>
    </>
    
  )
}
