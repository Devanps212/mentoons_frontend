import { motion, AnimatePresence } from "framer-motion";
import { Workshops } from "../../../types";
import { useEffect, useState } from "react";

const CareerCorner = ({ workshopData }: { workshopData: Workshops }) => {
  const sliderKeys = Object.keys(workshopData.sliderTexts);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % sliderKeys.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [sliderKeys.length]);

  return (
    <AnimatePresence mode="wait">
      <motion.section
        key={workshopData.title}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="relative px-5 md:px-10 lg:px-20 py-10 mt-10 flex flex-col md:flex-row justify-center items-center overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col justify-center items-start w-full md:w-1/2 lg:w-3/5 z-10"
        >
          <div className="space-y-3 font-medium">
            <h1 className="text-4xl md:text-5xl lg:text-6xl">
              Welcome to {workshopData.title} !
            </h1>
            <h4 className="text-2xl md:text-3xl lg:text-4xl">
              {workshopData.subtitle}
            </h4>
          </div>
          <div className="relative h-12 overflow-hidden flex justify-start items-start w-full mt-6 md:mt-10 lg:mt-15">
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute text-xl md:text-2xl lg:text-3xl font-bold rounded-lg"
              style={{
                color: workshopData.sliderTexts[sliderKeys[index]],
              }}
            >
              {sliderKeys[index]}
            </motion.div>
          </div>
          <p className="firasans text-lg md:text-xl font-medium leading-relaxed md:leading-[35px] w-full md:w-[90%] lg:w-[70%] mt-5">
            {workshopData.description}
          </p>
        </motion.div>

        {workshopData.title === "Career Corner" ? (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="relative w-full md:w-1/2 lg:w-2/5 mt-10 md:mt-0"
          >
            <img
              src={workshopData.img}
              alt={workshopData.title}
              className="w-full md:absolute md:-top-40 lg:-top-85 md:-right-1/4 lg:-right-1/3"
            />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="w-full md:w-1/2 lg:w-2/5 flex justify-center mt-10 md:mt-0"
          >
            <img
              src={workshopData.img}
              alt={workshopData.title}
              className="w-full max-w-xs md:max-w-sm object-cover"
            />
          </motion.div>
        )}
      </motion.section>
    </AnimatePresence>
  );
};

export default CareerCorner;
