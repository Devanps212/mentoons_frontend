import { motion } from "framer-motion";
import "./banner.css";

const Banner = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center gap-12 p-6 translate-y-10 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-3/4 md:w-1/2 text-center scale-105"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="font-medium text-[86px] text-black leading-tight whitespace-nowrap text-center"
        >
          Welcome to <span className="text-[#EC9600]">Mentoons</span>
        </motion.h1>
        <motion.h5
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="font-normal text-[#0C0A09] pt-3 text-[27px] inter leading-relaxed w-full"
        >
          Join us today and embark on a new world of interactive and meaningful
          parent-child interaction.
        </motion.h5>
        <motion.h6
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
          className="mt-4 text-[#0C0A09] font-semibold text-[27px] inter leading-relaxed"
        >
          Start connecting, learning, and growing together.
        </motion.h6>
      </motion.div>

      <motion.img
        src="/banner/klement and toonla showing mentoons 1.png"
        alt="klement_and_toonla"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className="max-w-[492px] max-h-[410px] translate-y-5"
      />

      <motion.img
        src="/banner/Online zoom meeting of several people.png"
        alt="people-icon"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        className="absolute top-35 right-15"
      />

      <motion.img
        src="/banner/Blue smartphone's screen with online meeting.png"
        alt="people-icon"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        className="absolute bottom-45 right-35"
      />

      <motion.img
        src="/banner/Figure → psyco.png.png"
        alt="people-icon"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
        className="absolute bottom-5 left-10"
      />
    </section>
  );
};

export default Banner;
