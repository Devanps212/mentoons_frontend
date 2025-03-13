import { motion } from "framer-motion";
import useInView from "../../../customHooks/useInView";

const WorkShopsMatter = ({ matter }: { matter: string[] }) => {
  const { isInView, ref } = useInView(0.3, false);

  const images = [
    {
      img: "/icons/user/workshop/Learning.png",
      heading: "Engaging Learning",
    },
    {
      img: "/icons/user/workshop/Personal Growth.png",
      heading: "Character Development",
    },
    {
      img: "/icons/user/workshop/Stage.png",
      heading: "Relatable Scenarios",
    },
    {
      img: "/icons/user/workshop/Full Family.png",
      heading: "Family Bonding",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-8 md:py-12 lg:py-16 px-5 sm:px-8 md:px-12 lg:px-20 flex flex-col-reverse lg:flex-row justify-between items-center lg:items-start gap-10 lg:gap-6"
    >
      <motion.ul
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col justify-center items-start gap-6 md:gap-8 lg:gap-10 w-full lg:w-1/2"
      >
        {matter.map((data, index) => (
          <motion.li
            key={index}
            className="flex items-start sm:items-center justify-start gap-3"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 mt-1 sm:mt-0">
              <img
                src={images[index].img}
                alt={data}
                className="w-full object-cover"
              />
            </div>
            <div className="inter text-base sm:text-lg md:text-xl">
              <span className="font-bold">{images[index].heading}: </span>
              <span className="font-medium">{data}</span>
            </div>
          </motion.li>
        ))}
      </motion.ul>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative flex justify-center items-center w-full sm:w-3/4 md:w-2/3 lg:w-1/3 mt-8 lg:mt-0"
      >
        <img
          src="/user/workshops/workshop_Matters/Why our workshops matter_.png"
          alt="workshopMater"
          className="w-full h-full object-cover"
        />
        <motion.img
          src="/user/workshops/workshop_Matters/Young man thinking and trying to solve problem.png"
          alt="thinkingMan"
          className="hidden lg:block absolute -bottom-16 sm:-bottom-24 md:-bottom-32 lg:-bottom-40 right-0 sm:-right-8 md:-right-16 lg:-right-20 w-24 sm:w-32 md:w-36 lg:w-42 h-28 sm:h-36 md:h-40 lg:h-48 object-contain"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        />
      </motion.div>
    </section>
  );
};

export default WorkShopsMatter;
