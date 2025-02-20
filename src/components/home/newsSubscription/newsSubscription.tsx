import { useState } from "react";
import { motion } from "framer-motion";
import FounderNote from "../founderNote/founderNote";
import Podcast from "./podcasts/podcast";
import { FaTelegram } from "react-icons/fa6";
import useInView from "../../../customHooks/useInView";

const NewsSubscription = () => {
  const [active, setActive] = useState(false);
  const { ref: sectionRef, isInView } = useInView(0.3, false);

  return (
    <motion.section
      ref={sectionRef}
      className="w-full flex flex-col lg:flex-row justify-between lg:justify-start items-center gap-10 py-10 px-5 lg:px-0 bg-[#F2C6DE]"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <motion.div
        className="flex justify-start items-start"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 1 }}
      >
        <div className="lg:hidden">
          <FounderNote />
        </div>
        <div className="hidden lg:block">
          <button
            className="flex flex-col text-lg md:text-xl cursor-pointer font-bold tracking-wider bg-gradient-to-b from-yellow-400 to-orange-600 px-4 md:px-5 py-2 md:py-3 rounded-md transition-transform transform hover:scale-105"
            onClick={() => setActive((prev) => !prev)}
          >
            {Array.from("FOUNDERS NOTE").map((char, index) =>
              char === " " ? (
                <span key={index} className="h-4"></span>
              ) : (
                <span key={index}>{char}</span>
              )
            )}
          </button>
          {active && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <FounderNote />
            </motion.div>
          )}
        </div>
      </motion.div>

      <motion.div
        className="w-full lg:w-3/4 flex flex-col justify-center items-center space-y-6 min-h-[300px] sm:min-h-[400px] md:min-h-[500px] py-10 md:py-20"
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-center font-semibold text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-800">
          Mentoons Podcasts
        </h1>
        <Podcast />
      </motion.div>

      <motion.div
        className="flex flex-col justify-center items-center gap-5 w-full lg:w-[750px] px-4 sm:px-8 lg:pr-10 space-y-4"
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-center font-semibold text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-800">
          Subscribe to our newsletter
        </h1>
        <div className="w-full max-w-md rounded-full bg-white shadow-lg flex items-center h-12 p-1">
          <input
            type="text"
            placeholder="Enter your email"
            className="outline-none flex-grow py-2 px-3 rounded-l-full text-sm md:text-base"
          />
          <button className="flex justify-center items-center gap-2 sm:gap-3 bg-[#EC9600] cursor-pointer py-2 px-4 sm:px-5 rounded-r-full text-white h-full text-sm md:text-base">
            <FaTelegram /> Subscribe
          </button>
        </div>

        <iframe
          src="https://mentoonsnews.com/"
          title="Mentoon News"
          width="100%"
          height="400"
          sandbox="allow-same-origin allow-scripts allow-popups"
          className="border-none rounded-xl shadow-xl pt-5"
        />
      </motion.div>
    </motion.section>
  );
};

export default NewsSubscription;
