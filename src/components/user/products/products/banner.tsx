import { useState } from "react";
import useInView from "../../../../customHooks/useInView";
import { motion } from "framer-motion";
import QueryModal from "../queryModal/queryModal";
import AgeButton from "../../../common/ageCategoryButton/ageButton";

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
        className="h-[350px] md:h-[550px] p-7 flex flex-col justify-between items-center bg-[url('/background/products/image49.png')] bg-center bg-cover"
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
        <AgeButton
          isInView={isInView}
          setSelectedCategory={setSelectedCategory}
          className="grid grid-cols-2 md:grid-cols-3 place-items-center gap-3 w-full max-w-3xl mt-5"
        />
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
