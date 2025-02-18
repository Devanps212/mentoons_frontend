import { Link } from "react-router-dom";
import AddaTV from "../addaTV/addaTV";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { FAQ } from "../../../constants";

const AddaHomeSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const [isOpen, setIsOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex justify-start items-center gap-8 bg-transparent py-23 p-20"
    >
      <div className="flex flex-col justify-start items-start gap-2">
        <motion.h1
          initial={{ opacity: 0, x: -80, scale: 0.8 }}
          animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", type: "spring" }}
          className="text-[37px] sm:text-[45px] md:text-[50px] lg:text-[64px] font-bold text-[#EC9600]"
        >
          Mentoons Adda
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        >
          <h6 className="font-medium md:text-md lg:text-[27px]">/ˈʌdə,ˈadə/</h6>
          <div className="flex gap-2 md:text-md lg:text-[23.4px] italic inter">
            <span>noun</span>
            <span>Indian</span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="font-semibold md:text-[20px] lg:text-[28px] w-auto pt-5"
        >
          A place for parents and children to gather and have meaningful
          interactions and strike conversations.
        </motion.p>

        <div className="w-full relative flex justify-start items-center gap-5 pt-10">
          <Link to="/adda">
            <motion.button
              initial={{ opacity: 0, rotate: -10, y: 20 }}
              animate={
                isInView ? { opacity: 1, rotate: 0, y: 0 } : { opacity: 0 }
              }
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.9 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 1, rotate: 0 }}
              className="px-5 py-4 bg-[#EC9600] font-extrabold text-[28px] text-white rounded-full shadow-lg active:shadow-none"
            >
              VISIT MENTOONS ADDA
            </motion.button>
          </Link>
          <div className="relative">
            <motion.button
              initial={{ opacity: 0, rotate: -10, y: 20 }}
              animate={
                isInView ? { opacity: 1, rotate: 0, y: 0 } : { opacity: 0 }
              }
              transition={{ duration: 1, ease: "easeOut", delay: 1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 1, rotate: 0 }}
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 px-5 py-4 bg-[#EC9600] font-extrabold text-[28px] text-white rounded-full shadow-lg active:shadow-none"
            >
              FAQ
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <FaChevronRight className="text-white text-[20px]" />
              </motion.div>
            </motion.button>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute top-0 left-30 mt-3 w-64 bg-white shadow-lg rounded-lg p-4 text-black z-10"
              >
                <ul className="h-full w-full flex flex-col gap-2">
                  {FAQ.map((faq, index) => (
                    <li
                      key={index}
                      className="border p-4 rounded cursor-pointer"
                    >
                      <div
                        className="flex justify-between items-center hover:text-[#EC9600]"
                        onClick={() => toggleFAQ(index)}
                      >
                        {faq.question}
                        <FaChevronDown
                          className={`transition-transform duration-300 ${
                            openIndex === index ? "rotate-180" : ""
                          }`}
                        />
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
                        <p className="mt-2 text-gray-700">{faq.answer}</p>
                      </motion.div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={isInView ? { opacity: 1, scale: 1.05 } : { opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 1 }}
        className="p-2 grid place-items-center flex-1"
      >
        <AddaTV />
      </motion.div>
    </motion.section>
  );
};

export default AddaHomeSection;
