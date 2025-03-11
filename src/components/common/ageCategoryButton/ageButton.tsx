import { motion } from "framer-motion";

const AgeButton = ({
  age,
  isInView,
  setSelectedCategory,
  className,
}: {
  age: object;
  isInView: boolean;
  setSelectedCategory: (val: string) => void;
  className: string;
}) => {
  return (
    <ul
      className={`${className} grid grid-cols-2 md:grid-cols-3 place-items-center gap-3 w-full max-w-3xl mt-5`}
    >
      {Object.entries(age).map(([key, value], index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="w-full flex justify-center"
        >
          <button
            onClick={() => setSelectedCategory(key)}
            className="px-6 md:px-10 py-2 md:py-3 border border-black rounded-full montserrat font-bold text-sm md:text-xl transition-all hover:opacity-80 hover:scale-105 cursor-pointer w-full max-w-[160px] text-center"
            style={{ backgroundColor: value }}
          >
            {key}
          </button>
        </motion.li>
      ))}
    </ul>
  );
};

export default AgeButton;
