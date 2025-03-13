import { motion } from "framer-motion";
import useInView from "../../../customHooks/useInView";
import MythosButton from "./button";

const PersonalReport = () => {
  const { ref, isInView } = useInView(0.3, false);

  return (
    <section
      ref={ref}
      className="relative py-20 w-full h-auto flex justify-between items-center gap-20 px-4 md:px-20 overflow-hidden"
    >
      <img
        src="/background/mythos/personalReport/h3-rev-png5.png.png"
        className="absolute -bottom-30 right-0 w-1/2 z-[-1]"
        alt="bg-icon"
      />
      <div className="absolute inset-0 bg-[#1A1D3B] z-[-2]"></div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full h-full hidden lg:block"
      >
        <img src="/background/mythos/personalReport/Exploring virtual reality with vr headset.png" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full min-h-[400px] space-y-20 text-center md:text-left"
      >
        <h1 className="montserrat font-semibold text-2xl md:text-3xl lg:text-4xl tracking-[2px] md:tracking-[2.5px] text-[#E39712] leading-tight">
          ABOUT MENTOONS PERSONOLOGY REPORT
        </h1>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white space-y-8 mulish text-md sm:text-lg mt-6 px-5"
        >
          <li className="flex items-center justify-center md:justify-start">
            <span className="mr-2">⬤</span>
            This includes psychology-based assessments.
          </li>
          <li className="flex items-center justify-center md:justify-start">
            <span className="mr-2">⬤</span>
            Get Psychological Report and Mythological Report.
          </li>
          <li className="flex items-center justify-center md:justify-start">
            <span className="mr-2">⬤</span>
            Purpose of life based on birth star.
          </li>
        </motion.ul>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mulish text-start text-[#E39712] font-bold tracking-widest text-2xl w-lg"
        >
          Take Our Assessment And Get Your Personology report
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center md:justify-start"
        >
          <MythosButton label="VIEW SAMPLE REPORT" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PersonalReport;
