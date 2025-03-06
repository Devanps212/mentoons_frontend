import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { PLANETS } from "../../../constants";
import { motion, AnimatePresence } from "framer-motion";
import Discover from "./learnMore";
import useInView from "../../../customHooks/useInView";

const CosmicInfluence = () => {
  const [index, setIndex] = useState(0);
  const { ref, isInView } = useInView(0.3, false);

  const nextPlanet = () => {
    setIndex((prevIndex) => (prevIndex + 1) % PLANETS.length);
  };

  return (
    <section
      ref={ref}
      className="w-full h-auto flex flex-col md:flex-row justify-start items-center md:items-start gap-6 md:gap-10 py-10 px-4 md:px-20 bg-[#1A1D3B] bg-[url('/public/background/mythos/section/stars_background.png')] bg-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center md:text-start w-full md:w-auto"
      >
        <h1 className="forum font-normal text-3xl md:text-4xl lg:text-5xl tracking-[2px] md:tracking-[2.5px] text-[#E39712] leading-tight">
          HOW CELESTIAL BODIES <br className="hidden sm:block" /> SHAPE
          PERSONALITY AND LIFE
        </h1>

        <AnimatePresence mode="wait">
          <motion.div
            key={PLANETS[index].planet}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6 }}
            className="mt-6 md:mt-8"
          >
            <h2 className="montserrat text-2xl md:text-3xl lg:text-4xl font-medium text-[#E39712]">
              {PLANETS[index].planet}
            </h2>
            <p className="mulish font-normal text-base md:text-lg text-[#C3BEB6] mt-2 w-full md:w-3/4 lg:w-1/2">
              {PLANETS[index].description}
            </p>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-6"
        >
          <Discover label="LEARN MORE" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 mt-8 md:mt-0"
      >
        <div className="flex justify-center items-center w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={PLANETS[index].image}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="w-full h-full flex justify-center items-center"
            >
              <img
                src={PLANETS[index].image}
                alt={PLANETS[index].planet}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.button
          onClick={nextPlanet}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="bg-[#E39712] w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex justify-center items-center rounded-full shadow-md hover:bg-yellow-500 transition cursor-pointer md:ml-4 lg:ml-10"
        >
          <FaChevronRight className="text-[#3D3D3D] text-xl md:text-2xl" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default CosmicInfluence;
