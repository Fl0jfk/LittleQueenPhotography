import Head from 'next/head';
import RollingSlider from './components/Slider/RollingSlider';
import Modal from './components/Modals/Modal';

export default function Home() {
  return (
    <>
      <Head>
        <title>Page d`&apos;`accueil de LittleQueenPhotography</title>
      </Head>
      <main className="w-full h-full flex flex-col pt-[10vh] z-[0]">
        <RollingSlider/>
        <Modal/>
      </main>
    </>
  )
}
