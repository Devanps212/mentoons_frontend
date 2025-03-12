import { motion } from "framer-motion";
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
    <section className="relative px-5 md:px-20 py-10 mt-10 flex justify-center items-center overflow-hidden">
      <div className="flex flex-col justify-center items-start w-full">
        <div className="space-y-3 font-medium">
          <h1 className="text-6xl">Welcome to {workshopData.title} !</h1>
          <h4 className="text-4xl">{workshopData.subtitle}</h4>
        </div>
        <div className="relative h-12 overflow-hidden flex justify-start items-start w-full mt-15">
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute text-3xl font-bold rounded-lg"
            style={{
              color: workshopData.sliderTexts[sliderKeys[index]],
            }}
          >
            {sliderKeys[index]}
          </motion.div>
        </div>
        <p className="firasans text-xl font-medium leading-[35px] w-[70%] mt-5">
          {workshopData.description}
        </p>
      </div>
      {workshopData.title === "Career Corner" ? (
        <div className="relative w-full ">
          <img
            src={workshopData.img}
            alt={workshopData.title}
            className="absolute -top-85 -right-1/3"
          />
        </div>
      ) : (
        <div className="w-full md:w-3/4 flex justify-center">
          <img
            src={workshopData.img}
            alt={workshopData.title}
            className="w-full max-w-sm object-cover"
          />
        </div>
      )}
    </section>
  );
};

export default CareerCorner;
