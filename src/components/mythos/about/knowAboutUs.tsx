import { BiEnvelope, BiUser } from "react-icons/bi";
import MythosButton from "../home/button";
import { FaVideo } from "react-icons/fa";
import useInView from "../../../customHooks/useInView";
import { motion } from "framer-motion";

const KnowAboutUs = () => {
  const { ref, isInView } = useInView(0.3, false);

  return (
    <section
      ref={ref}
      className="px-6 md:px-10 lg:px-20 py-10 flex flex-col lg:flex-row justify-between items-center bg-[#1A1D3B] bg-[url('/background/mythos/section/stars_background.png')] bg-center"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="text-start space-y-5 w-full lg:w-1/2"
      >
        <h1 className="text-[#E39712] font-semibold text-2xl sm:text-3xl md:text-4xl montserrat mb-6 tracking-[2.5px]">
          KNOW ABOUT US
        </h1>
        <p className="mulish text-sm text-[#FEE898]">
          Your email address will not be published. Required fields are marked *
        </p>
        <div className="space-y-3">
          <motion.textarea
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            rows={3}
            placeholder="Your comment*"
            className="p-3 md:p-5 outline-none focus:ring-blue-300 focus:ring-2 w-full border border-gray-400 bg-white"
          />
          <div className="flex flex-col md:flex-row items-center gap-3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
              className="flex justify-between items-center w-full border border-gray-400 p-3 md:p-4 bg-white"
            >
              <input
                type="text"
                placeholder="Your name*"
                className="outline-none w-full"
              />
              <BiUser />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              className="flex justify-between items-center w-full border border-gray-400 p-3 md:p-4 bg-white"
            >
              <input
                type="text"
                placeholder="Your email*"
                className="outline-none w-full"
              />
              <BiEnvelope />
            </motion.div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="save" />
          <label htmlFor="save" className="mulish text-sm text-[#FEE898]">
            Save my name, email, and website in this browser for the next time I
            comment
          </label>
        </div>
        <MythosButton label="POST COMMENT" bg="#070506" textClr="white" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
        className="w-full lg:w-1/2 flex flex-col justify-center items-center gap-5 mt-10 lg:mt-0"
      >
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView && { opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
          src="/background/mythos/kowAboutUs/Virtual workspace for remote team.png"
          alt="remote-team"
          className="w-2/3 sm:w-1/2"
        />
        <h1 className="montserrat text-[#E39712] font-semibold w-[80%] md:w-[60%] text-xl sm:text-2xl md:text-3xl text-center">
          Book a one-on-one video call session with us now!
        </h1>
        <MythosButton label="BOOK NOW" icon={FaVideo} />
      </motion.div>
    </section>
  );
};

export default KnowAboutUs;
