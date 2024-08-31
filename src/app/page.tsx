import Head from 'next/head';
import RollingSlider from './components/Slider/RollingSlider';
import Modal from './components/Modals/Modal';
import Unfolding from './components/Unfolding/Unfolding';
import Testimonials from './components/Testimonials/Testimonials';

export default function Home() {
  return (
    <>
      <Head>
        <title>Page d`&apos;`accueil de LittleQueenPhotography</title>
      </Head>
      <main className="w-full h-full flex flex-col pt-[10vh] z-[0] md:pt-[0vh] sm:pt-[0vh]">
        <RollingSlider/>
        <Unfolding/>
        <Testimonials/>
        <Modal/>
      </main>
    </>
  )
}
