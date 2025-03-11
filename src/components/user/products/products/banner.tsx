import { useState } from "react";
import useInView from "../../../../customHooks/useInView";
import { motion } from "framer-motion";
import QueryModal from "../queryModal/queryModal";
import { COMIC_COLOR } from "../../../../constants";

const ProductsBanner = () => {
  const { isInView, ref } = useInView(0.3, false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <>
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="w-full h-[350px] md:h-[550px] p-7 flex flex-col justify-between items-center bg-[url('/background/products/image49.png')] bg-center bg-cover"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-medium text-3xl md:text-5xl text-center"
        >
          Mentoons Store
        </motion.h1>
        <ul className="grid grid-cols-2 md:grid-cols-3 place-items-center gap-3 w-full max-w-3xl mt-5">
          {Object.entries(COMIC_COLOR).map(([key, value], index) => (
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
      </motion.section>

      {selectedCategory && (
        <QueryModal
          category={selectedCategory}
          onClose={() => setSelectedCategory(null)}
        />
      )}
    </>
  );
};

export default ProductsBanner;
