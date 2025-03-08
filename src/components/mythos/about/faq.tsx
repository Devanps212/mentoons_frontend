import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";
import useInView from "../../../customHooks/useInView";

const faqs = [
  {
    question: "How do I access my group after subscribing?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "What kind of discussions happen in these groups?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "What if I need help with group access?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const MythosFAQ = () => {
  const { ref, isInView } = useInView(0.3, false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={ref}
      className="w-full h-auto px-4 sm:px-6 md:px-10 lg:px-20 py-8 sm:py-10 bg-[#1A1D3B]"
    >
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-[#E39712] font-semibold text-2xl sm:text-3xl md:text-4xl montserrat mb-6 sm:mb-8 tracking-[1.5px] sm:tracking-[2.5px] text-center sm:text-left"
      >
        FREQUENTLY ASKED QUESTIONS
      </motion.h1>
      <div className="flex flex-col items-center space-y-4 sm:space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            className="w-full sm:w-11/12 md:w-5/6 rounded-xl sm:rounded-2xl md:rounded-3xl border-2 border-[#4A3AFF] p-4 sm:p-6 md:p-8 lg:p-10 bg-white"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-medium text-black dmsans text-[#170F49] pr-4">
                {faq.question}
              </h2>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-[#4A3AFF] text-white"
              >
                <FaChevronDown className="text-xs sm:text-sm md:text-base" />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={
                openIndex === index
                  ? { opacity: 1, height: "auto" }
                  : { opacity: 0, height: 0 }
              }
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <p className="text-gray-700 text-[#6F6C90] text-base sm:text-lg md:text-xl lg:text-[21px] dmsans mt-3 md:mt-4">
                {faq.answer}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MythosFAQ;
