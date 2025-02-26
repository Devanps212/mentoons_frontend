import { motion } from "framer-motion";
import { FaClock } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ANIMATION_TEXTS_HOME, ANIMATION_TEXTS_ADDA } from "../../constants";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { logout } from "../../redux";
import AuthButton from "../home/authButton/authButton";

const PrimaryHeader = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  const animationTexts = location.pathname.startsWith("/adda")
    ? ANIMATION_TEXTS_ADDA
    : ANIMATION_TEXTS_HOME;

  return (
    <div className="flex justify-around items-center bg-gray-600 w-full text-white px-5 font-light">
      <div className="flex justify-start gap-5 md:gap-15 w-auto md:1/3 lg:w-1/2 py-2">
        {state && (
          <div className="relative cursor-pointer py-2 md:hidden">
            <FaMessage />
            <span className="absolute -top-0 -right-4 px-2 rounded-full bg-yellow-400 text-xs text-black text-center">
              2
            </span>
          </div>
        )}
        <div className="hidden md:inline-flex items-center whitespace-nowrap gap-0 sm:gap-2 text-[10px] md:text-xs lg:text-sm xl:text-base">
          <FaClock className="hidden sm:block" />
          <h3>Monday - Saturday</h3>
          <span>10:00 AM - 8:00 PM</span>
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
            duration: 38,
            ease: "linear",
          }}
        >
          {animationTexts
            .concat(animationTexts)
            .map(({ text, color }, index) => (
              <h1
                className={`${color} font-normal md:font-medium lg:font-light text-[15px] md:text-md lg:text-lg xl:text-base`}
                key={index}
              >
                {text}
              </h1>
            ))}
        </motion.div>
      </div>

      <div className="flex justify-end items-end gap-10 w-auto md:w-1/2">
        {state && (
          <div className="relative cursor-pointer py-2 hidden md:block">
            <FaMessage />
            <span className="absolute -top-0 -right-4 px-2 rounded-full bg-yellow-400 text-xs text-black text-center">
              2
            </span>
          </div>
        )}
        <Link
          to="#"
          className="py-2 text-[15px] md:text-xs lg:text-sm xl:text-base hidden md:block"
        >
          Add A Review Collect 5 pts
        </Link>
        <AuthButton isAuthenticated={!!state} handleLogout={handleLogout} />
      </div>
    </div>
  );
};

export default PrimaryHeader;
