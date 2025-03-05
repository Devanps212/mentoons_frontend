import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { JoinCardsProps } from "../../../types";

const JoinCards = ({
  cards,
  index,
}: {
  cards: JoinCardsProps;
  index: number;
}) => {
  return (
    <motion.div
      className="flex justify-center min-fit outfit"
      key={index}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <motion.div
        className="w-[350px] h-[450px] p-5 bg-[#E39712] rounded-xl flex flex-col items-center gap-5 text-center cursor-pointer"
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="h-[150px] flex items-center justify-center">
          <img
            src={cards.img}
            alt="icon"
            className="max-w-[150px] max-h-[200px] object-contain"
          />
        </div>
        <h1 className="font-semibold text-gray-800 text-lg h-[30px]">
          {cards.name}
        </h1>
        <p className="font-normal text-white text-base h-fit">
          {cards.description}
        </p>
        <motion.span
          className="w-full flex justify-end items-center gap-2 font-light text-base text-[#1A1D3B]"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          View More <FaArrowRight />
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default JoinCards;
