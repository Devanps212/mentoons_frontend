import { motion } from "framer-motion";
import { FaClock, FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { MdWeekend } from "react-icons/md";
import { Link } from "react-router-dom";
import { ANIMATION_TEXTS } from "../../constants";

const PrimaryHeader = () => {
  return (
    <div className="flex justify-between items-center bg-gray-600 w-full text-white px-5 font-light">
      <div className="flex justify-center gap-5 md:gap-15 w-auto md:1/3 lg:w-1/2 py-2">
        <div className="block md:hidden relative cursor-pointer py-2">
          <FaMessage />
          <span className="absolute -top-0 -right-4 px-2 rounded-full bg-yellow-400 text-xs text-black text-center">
            2
          </span>
        </div>
        <div className="hidden md:inline-flex items-center whitespace-nowrap gap-0 sm:gap-2 text-[10px] md:text-xs lg:text-sm xl:text-base">
          <FaClock className="hidden sm: block" />
          <h3>Monday - Saturday</h3>
          <span>10:00 - 8:00</span>
        </div>
        <div className="hidden md:inline-flex items-center whitespace-nowrap gap-0 sm:gap-2 text-[10px] md:text-xs lg:text-sm xl:text-base">
          <MdWeekend className="hidden sm: block" />
          <h3>Sunday</h3>
          <span>Weekend</span>
        </div>
      </div>

      <div className="w-1/2 md:w-1/4 overflow-hidden py-2 flex items-center justify-center">
        <motion.div
          className="flex gap-15 whitespace-nowrap"
          initial={{ x: "58%" }}
          animate={{ x: "-58%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 35,
            ease: "linear",
          }}
        >
          {ANIMATION_TEXTS.concat(ANIMATION_TEXTS).map(
            ({ text, color }, index) => (
              <h1
                className={`${color} text-[15px] md:text-xs lg:text-sm xl:text-base`}
                key={index}
              >
                {text}
              </h1>
            )
          )}
        </motion.div>
      </div>

      <div className="flex justify-center items-center gap-10 w-auto md:w-1/2">
        <div className="relative cursor-pointer py-2 hidden md:block">
          <FaMessage />
          <span className="absolute -top-0 -right-4 px-2 rounded-full bg-yellow-400 text-xs text-black text-center">
            2
          </span>
        </div>
        <Link
          to="#"
          className="py-2 text-[15px] md:text-xs lg:text-sm xl:text-base hidden md:block"
        >
          Add A Review
        </Link>
        <button className="w-36 md:w-40 flex justify-center items-center bg-gray-700 py-1 gap-5 cursor-pointer">
          <FaUser className="bg-gray-300 rounded-full p-1 w-5 h-5 md:w-8 md:h-8" />
          <div className="text-[10px] sm:text-xs tracking-wider inter">
            <span>My Account</span>
            <br />
            <span className="font-medium">LOG IN</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default PrimaryHeader;
