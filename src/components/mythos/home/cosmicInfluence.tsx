import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { PLANETS } from "../../../constants";
import { motion, AnimatePresence } from "framer-motion";
import Discover from "./learnMore";

const CosmicInfluence = () => {
  const [index, setIndex] = useState(0);

  const nextPlanet = () => {
    setIndex((prevIndex) => (prevIndex + 1) % PLANETS.length);
  };

  return (
    <section className="w-full h-auto flex justify-start items-start gap-10 py-10 px-20 bg-[#1A1D3B] bg-[url('/public/background/mythos/section/stars_background.png')] bg-center">
      <div className="text-start">
        <h1 className="forum font-normal text-5xl tracking-[2.5px] text-[#E39712] leading-tight">
          HOW CELESTIAL BODIES <br /> SHAPE PERSONALITY AND LIFE
        </h1>

        <AnimatePresence mode="wait">
          <motion.div
            key={PLANETS[index].planet}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-30"
          >
            <h2 className="montserrat text-4xl font-medium text-[#E39712]">
              {PLANETS[index].planet}
            </h2>
            <p className="mulish font-normal text-lg text-[#C3BEB6] mt-2 w-1/2">
              {PLANETS[index].description}
            </p>
          </motion.div>
        </AnimatePresence>

        <Discover label="LEARN MORE" />
      </div>
      <div className="flex justify-center items-center gap-10">
        <div className="flex justify-center items-center w-[400px] h-[400px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={PLANETS[index].image}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
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
        <button
          onClick={nextPlanet}
          className="bg-[#E39712] w-16 h-16 flex justify-center items-center rounded-full shadow-md hover:bg-yellow-500 transition cursor-pointer ml-10"
        >
          <FaChevronRight className="text-[#3D3D3D] text-2xl" />
        </button>
      </div>
    </section>
  );
};

export default CosmicInfluence;
