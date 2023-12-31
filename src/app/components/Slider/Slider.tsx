import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

export const images = [
  "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png"
];

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 500 : -500,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0
    };
  }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function Slider() {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
  return (
    <section className="w-screen h-[45vh] md:h-[35vh] sm:h-[35vh] flex justify-center items-center z-[0]">
      <div className="w-screen h-[45vh] md:h-[35vh] sm:h-[35vh] relative flex items-center justify-center z-[0]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img key={page} custom={direction} variants={variants} initial="enter" animate="center" exit="exit"
            src={images[imageIndex]} 
            className="absolute max-w-screen h-full w-full object-cover z-[0]"
            transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 }}}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) { paginate(1)}
               else if (swipe > swipeConfidenceThreshold) { paginate(-1)}
            }}
          />
        </AnimatePresence>
        <button className="select-none pt-1 absolute bg-white rounded-full opacity-70 w-[40px] h-[40px] flex justify-center items-center text-3xl z-[1] right-4 top-[calc(50%-20px)] md:hidden sm:hidden" onClick={() => paginate(1)}>
          {"‣"}
        </button>
        <h2  className="absolute text-white top-[calc(50%-20px)] text-4xl sm:text-3xl opacity-50 z-[1] uppercase">Portrait intimiste</h2>
        <button className="scale-[-1] pt-1 select-none absolute bg-white rounded-full opacity-70 w-[40px] h-[40px] flex justify-center items-center text-3xl z-[1] left-4 top-[calc(50%-20px)] md:hidden sm:hidden" onClick={() => paginate(-1)}>
          {"‣"}
        </button>
      </div>
    </section>
  );
};