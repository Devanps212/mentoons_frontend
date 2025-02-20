import useInView from "../../../../customHooks/useInView";
import { motion } from "framer-motion";
import Details from "../details/details";
import NewsAndContests from "../newsAndContests/newsAndContests";

const Community = () => {
  const { ref: sectionRef, isInView } = useInView(0.3, false);

  return (
    <section className="w-full h-auto relative z-0">
      <div className="p-20 relative z-0">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="pt-4"
        >
          <h1 className="text-[48px] font-semibold">Benefits</h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="flex justify-between items-center gap-25 relative z-10"
          >
            <Details />
            <div className="relative w-1/3">
              <div className="absolute -top-1/2 -left-1/3 -translate-x-10 w-96 h-96 z-5 flex items-center justify-center">
                <img
                  src="/fillers/spot flash.png"
                  alt="filler"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="relative z-10">
                <NewsAndContests />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;
