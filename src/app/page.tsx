import RollingSlider from './components/Slider/RollingSlider';
import Modal from './components/Modals/Modal';
import Unfolding from './components/Unfolding/Unfolding';
import Testimonials from './components/Testimonials/Testimonials';

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col z-[0] sm:pt-[8vh] md:pt-[10vh]">
      <RollingSlider/>
      <Unfolding/>
      <Testimonials/>
      <Modal/>
    </main>
  )
}
