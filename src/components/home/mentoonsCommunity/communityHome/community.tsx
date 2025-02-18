import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import Details from "../details/details";
import NewsAndContests from "../newsAndContests/newsAndContests";

const Community = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="pt-4 w-full h-auto bg-gradient-to-r from-[rgba(255,187,68,0.7)] to-[rgba(253,185,147,0.7)] p-20"
    >
      <h1 className="text-[48px] font-semibold">Mentoons Community</h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className="flex justify-between items-center gap-25"
      >
        <Details />
        <NewsAndContests />
      </motion.div>
    </motion.section>
  );
};

export default Community;
