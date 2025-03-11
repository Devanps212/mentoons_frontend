import { motion } from "framer-motion";
import useInView from "../../../customHooks/useInView";

const Hero = () => {
  const { isInView, ref } = useInView(0.3, false);

  return (
    <section className="w-full px-5 md:p-20 mt-10 space-y-6 h-100 max-h-[470px]">
      <div className="flex justify-between items-center">
        <div
          ref={ref}
          className="flex flex-col h-full justify-end text-center md:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[#EC9600] font-medium text-4xl md:text-7xl"
          >
            Online & Offline <br /> Workshops for All!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="inter text-md md:text-xl text-[#0C0A09] mt-5 md:w-2xl mx-auto md:mx-0"
          >
            At Mentoons, we conduct informative and interactive workshops that
            provide an effective and transformative experience for our
            participants.
          </motion.p>
        </div>
        <div>
            
        </div>
      </div>
    </section>
  );
};

export default Hero;
