"use client"

import Head from 'next/head';
import { DataProvider } from './contexts/data';
import Header from './components/Header/Header';
import InstaFeed from "./components/InstagramFeed/InstaFeed";

export default function Home() {
  return (
    <>
      <Head>
        <title>Page d`&apos;`accueil de LittleQueenPhotography</title>
      </Head>
      <DataProvider>
        <Header/>
        <main className="w-full h-full flex flex-col sm:pt-[10vh]">
          <InstaFeed/>
        </main>

      </DataProvider>
    </>
    
  )
}
