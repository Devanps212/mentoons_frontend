import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { COMICS, GAMES, PRODUCTS, SERVICES } from "../../constants";
import DropDown from "../dropDown/dropDown";
import NavButton from "../nav/button";
import { useEffect } from "react";

const Sidebar = ({
  isOpen,
  title,
  dropdown,
  handleHover,
  handleMouseLeave,
  setIsOpen,
  handlePlans,
  token,
}: {
  isOpen: boolean;
  title: string;
  token: string | null;
  dropdown: {
    comics: boolean;
    games: boolean;
    products: boolean;
    services: boolean;
  };
  handleHover: (key: string) => void;
  handleMouseLeave: (key: string) => void;
  setIsOpen: (val: boolean) => void;
  handlePlans: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}) => {
  useEffect(() => {
    const handleBreakPoint = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    window.addEventListener("resize", handleBreakPoint);
    handleBreakPoint();

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("resize", handleBreakPoint);
    };
  }, [isOpen, setIsOpen]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    setIsOpen(false);
    handlePlans(e);
  };

  return (
    <motion.aside
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : "100%" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`fixed inset-0 w-full h-full bg-gray-900 bg-opacity-90 flex flex-col items-center justify-center gap-8 transition-opacity ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      } lg:hidden`}
    >
      <div className="flex flex-col items-center gap-12">
        {title === "adda" ? (
          <>
            <Link
              to="#"
              className="text-white text-2xl sm:text-3xl md:text-4xl flex items-center gap-2"
            >
              Collect Points
            </Link>
            <Link
              to="#"
              className="text-white text-2xl sm:text-3xl md:text-4xl flex items-center gap-2"
            >
              Products
            </Link>
            <Link
              to="/adda/groups"
              className="text-white text-2xl sm:text-3xl md:text-4xl flex items-center gap-2"
            >
              Mentoons Community
            </Link>
          </>
        ) : (
          <>
            <NavButton
              className="text-3xl sm:text-4xl md:text-5xl text-white font-semibold"
              label="Comics"
              onMouseEnter={() => handleHover("comics")}
              onMouseLeave={() => handleMouseLeave("comics")}
            >
              {dropdown.comics && <DropDown items={COMICS} />}
            </NavButton>
            <NavButton
              className="text-3xl sm:text-4xl md:text-5xl text-white font-semibold"
              label="Games"
              onMouseEnter={() => handleHover("games")}
              onMouseLeave={() => handleMouseLeave("games")}
            >
              {dropdown.games && <DropDown items={GAMES} />}
            </NavButton>
            <NavButton
              className="text-3xl sm:text-4xl md:text-5xl text-white font-semibold"
              label="Products"
              onMouseEnter={() => handleHover("products")}
              onMouseLeave={() => handleMouseLeave("products")}
            >
              {dropdown.products && <DropDown items={PRODUCTS} />}
            </NavButton>
            <NavButton
              className="text-3xl sm:text-4xl md:text-5xl text-white font-semibold"
              label="Services"
              onMouseEnter={() => handleHover("services")}
              onMouseLeave={() => handleMouseLeave("services")}
            >
              {dropdown.services && <DropDown items={SERVICES} />}
            </NavButton>
          </>
        )}
        <Link
          to="#subscription"
          onClick={(e) => handleClick(e)}
          className="text-white flex items-center gap-2 text-3xl sm:text-4xl md:text-5xl font-semibold"
        >
          Browse Plans
        </Link>
        <Link
          to="/mythos"
          className="relative flex items-center gap-2 text-white font-semibold text-3xl sm:text-4xl md:text-5xl"
          role="button"
        >
          Mythos
          <span className="absolute -top-3 -left-1/2 -translate-x-1/3 px-3 py-1 rounded-full bg-red-500 text-[13px]">
            Introducing
          </span>
        </Link>
        {token && (
          <FaUser className="text-white bg-[#500EAD] rounded-full p-4 sm:p-5 md:p-6 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 cursor-pointer" />
        )}
      </div>
    </motion.aside>
  );
};

export default Sidebar;
