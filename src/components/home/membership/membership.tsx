import { useRef } from "react";
import { PLATINUM, PRIME } from "../../../constants";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

const Membership = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  return (
    <motion.section
      id="subscription"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 1 }}
      className="p-10 flex flex-col justify-center items-center bg-gradient-to-r from-[rgba(255,187,68,0.7)] to-[rgba(253,185,147,0.7)]"
    >
      <motion.h1
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
        transition={{ duration: 0.6, ease: "easeIn" }}
        className="font-semibold text-[48px] leading-tight text-gray-800 mb-8"
      >
        Membership Plans
      </motion.h1>
      <div className="flex justify-between items-center gap-10 w-3/4 pt-2">
        <motion.div
          className="relative p-2"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
          transition={{ duration: 1.1 }}
        >
          <img
            src="/icons/prime membership card.png"
            alt="platinum-membership"
            className="w-[400px] h-auto object-contain"
          />
          <h1 className="epilogue absolute top-18 left-1/2 transform -translate-x-23 text-center font-medium text-white text-xl w-1/3">
            Prime Membership
          </h1>
          <p className="absolute top-10 left-3/4 transform -translate-x-2 text-lg font-bold text-3xl">
            ₹149 <span className="text-xl">/ Annum</span>
          </p>
          <ol className="absolute top-35 left-1/2 transform -translate-x-37 p-5 list-decimal list-outside w-[65%]">
            {PRIME.map((detail, index) => (
              <li key={index} className="text-md pl-3">
                {detail}
              </li>
            ))}
          </ol>
          <button className="absolute bottom-19 left-1/2 transform -translate-x-22 w-[120px] h-[50px] bg-transparent drop-shadow-3xl hover:drop-shadow-xl focus:drop-shadow-sm cursor-pointer">
            <img
              src="/icons/cta 1.png"
              alt="CTA Button"
              className="w-full h-full object-contain"
            />
            <span className="absolute inset-0 flex items-center justify-center text-white font-semibold text-lg">
              Buy Now
            </span>
          </button>
        </motion.div>
        <motion.div
          className="relative p-2"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
          transition={{ duration: 0.9 }}
        >
          <img
            src="/icons/platinum membership.png"
            alt="platinum-membership"
            className="w-[410px] h-auto object-contain"
          />
          <h1 className="epilogue absolute top-18 left-1/2 transform -translate-x-35 text-center font-medium text-white text-xl">
            Platinum Membership
          </h1>
          <p className="absolute top-10 left-3/4 transform -translate-x-5 text-lg font-bold text-3xl">
            ₹349 <span className="text-xl">/ Annum</span>
          </p>
          <ol className="absolute top-39 left-1/2 transform -translate-x-37 p-5 list-decimal list-outside w-[65%]">
            {PLATINUM.map((detail, index) => (
              <li key={index} className="text-md pl-3">
                {detail}
              </li>
            ))}
          </ol>
          <button className="absolute bottom-20 left-1/2 transform -translate-x-22 w-[120px] h-[50px] bg-transparent drop-shadow-3xl hover:drop-shadow-xl focus:drop-shadow-sm cursor-pointer">
            <img
              src="/icons/cta 2.png"
              alt="CTA Button"
              className="w-full h-full object-contain"
            />
            <span className="absolute inset-0 flex items-center justify-center text-white font-semibold text-lg">
              Buy Now
            </span>
          </button>
        </motion.div>
      </div>
      <div className="p-10">
        <h1 className="text-center text-xl font-normal epilogue">
          Payment Method accepted
        </h1>
        <div className="grid grid-cols-4 place-items-center gap-10 mx-auto pt-5">
          <motion.img
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : "-100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            src="/public/icons/google-pay-icon.svg"
            alt="gpay-icon"
            className="w-10 h-10"
          />
          <motion.img
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : "-100%" }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            src="/icons/paytm-icon.svg"
            alt="paytm-icon"
            className="w-10 h-10"
          />
          <motion.img
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : "-100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            src="/icons/razorpay-icon.svg"
            alt="razorpay-icon"
            className="w-10 h-10"
          />
          <motion.img
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : "-100%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            src="/icons/master-card-icon.svg"
            alt="gpay-icon"
            className="w-10 h-10"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Membership;
