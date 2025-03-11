import { motion } from "framer-motion";
import ReactPlayer from "react-player";

const AboutMythos = () => {
  return (
    <section className="w-full h-auto px-6 py-10 flex flex-col justify-center items-center text-center md:text-left bg-[#1A1D3B] bg-[url('/background/mythos/section/stars_background.png')]">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-[#E39712] font-semibold text-3xl sm:text-4xl md:text-[36px] montserrat mb-6 tracking-[2.5px]"
      >
        ABOUT MENTOONS MYTHOS
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="mulish text-base sm:text-lg md:text-xl max-w-[90%] md:max-w-[51%] text-white text-center leading-relaxed"
      >
        Mentoons Mythos isn’t just about reports; it’s a thriving community of
        individuals seeking purpose, clarity, and cosmic guidance. Whether
        you’re exploring astrology, psychology, or career growth, our groups
        help you connect with like-minded people who share your journey.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="w-full sm:w-[80%] md:w-3/4 mt-20"
      >
        <div className="relative w-full pb-[56.25%]">
          <ReactPlayer
            url="https://res.cloudinary.com/dacwu8tri/video/upload/v1741671026/We_know_THE_STRUGGLES_our_youth_is_facing_03_ebzeuu.mp4"
            className="absolute top-0 left-0"
            width="100%"
            height="80%"
            controls
            playing={false}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMythos;
