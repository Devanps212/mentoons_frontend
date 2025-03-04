import useInView from "../../../../customHooks/useInView";
import { motion } from "framer-motion";
import Details from "../details/details";
import NewsAndContests from "../newsAndContests/newsAndContests";

const Community = () => {
  const isMobile = window.innerWidth < 768;
  const { ref: sectionRef, isInView } = useInView(isMobile ? 0.1 : 0.3, false);

  return (
    <section className="w-full h-auto relative z-0 bg-gradient-to-r from-[rgba(255,187,68,0.7)] to-[rgba(253,185,147,0.7)]">
      <div className="p-10 lg:p-3 xl:p-20 relative z-0">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="pt-4"
        >
          <h1 className="text-[50px] sm:text-5xl lg:text-[48px] text-start font-semibold">
            Benefits
          </h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="flex flex-col lg:flex-row justify-between items-center md:gap-2 lg:gap-5 xl:gap-25 relative z-10"
          >
            <Details />
            <div className="relative w-full">
              <div className="absolute hidden lg:block -top-1/3 -left-1/5 xl:-translate-x-10 lg:w-50 lg:w-50 xl:w-96 xl:h-96 z-5 flex items-center justify-center">
                <img
                  src="/fillers/spot flash.png"
                  alt="filler"
                  className="w-60 h-60 object-contain"
                />
              </div>
              <div className="relative z-10 p-10 lg:p-0 md:flex md:justify-center md:items-center lg:block">
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
