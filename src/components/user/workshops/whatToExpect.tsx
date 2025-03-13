import { motion } from "framer-motion";
import useInView from "../../../customHooks/useInView";

const WhatToExpect = ({
  expectations,
  label,
}: {
  expectations: string[];
  label: string;
}) => {
  const { isInView, ref } = useInView(0.3, false);

  const images = [
    {
      img: "/user/workshops/workshopsCamps/buddyCamp/interactive-group-discussions.png",
      clr: "#4285F4",
    },
    {
      img: "/user/workshops/workshopsCamps/buddyCamp/peer-learning-activities.png",
      clr: "#EF4444",
    },
    {
      img: "/user/workshops/workshopsCamps/buddyCamp/practical-workshops.png",
      clr: "#22C55E",
    },
    {
      img: "/user/workshops/workshopsCamps/buddyCamp/expert-guidance.png",
      clr: "#F7941D",
    },
  ];

  return (
    <section ref={ref} className="px-5 sm:px-8 md:px-12 lg:px-20 py-8 md:py-12">
      <motion.h1
        className="text-center firasans font-medium text-2xl sm:text-3xl md:text-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        What To Expect from {label} Camp?
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-8 md:gap-5 mt-6 md:mt-10 px-4 sm:px-8 md:px-12 lg:px-16">
        {expectations.map((data, index) => (
          <motion.div
            key={index}
            className="flex flex-col justify-center items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full p-3 sm:p-4 md:p-5 flex justify-center items-center">
              <img
                src={images[index]?.img}
                alt={data}
                className="w-full object-cover"
              />
            </div>
            <h3
              className="text-lg sm:text-xl font-semibold inter mt-3 md:mt-4 max-w-xs"
              style={{ color: images[index].clr }}
            >
              {data}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhatToExpect;
