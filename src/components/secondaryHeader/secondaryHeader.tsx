import React, { useEffect, useState } from "react";
import { COMICS, GAMES, PRODUCTS, SERVICES } from "../../constants";
import DropDown from "../dropDown/dropDown";
import NavButton from "../nav/button";
import {
  FaBars,
  FaCoins,
  FaCreditCard,
  FaPhone,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { DropDownInterface } from "../../types";
import { useLocation, useNavigate } from "react-router-dom";
import { FaUsers } from "react-icons/fa6";
import { MdStorefront } from "react-icons/md";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/sidebar";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const SecondaryHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const user = useSelector((state: RootState) => state.auth.token);

  const location = useLocation();
  const navigate = useNavigate();
  const title = location.pathname.startsWith("/adda") ? "adda" : "home";
  const [dropdown, setDropDown] = useState<DropDownInterface>({
    games: false,
    comics: false,
    products: false,
    services: false,
    subscription: false,
  });

  const handleBrowsePlansClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSubscription(), 500);
    } else {
      scrollToSubscription();
    }
  };
  const scrollToSubscription = () =>
    document
      .getElementById("subscription")
      ?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHover = (menu: string) => {
    setDropDown((prev) => ({ ...prev, [menu]: true }));
  };

  const handleMouseLeave = (menu: string) => {
    setDropDown((prev) => ({ ...prev, [menu]: false }));
  };

  return (
    <header
      className={`${
        isScrolled ? "fixed w-full top-0 left-0 shadow-md" : "relative"
      } flex justify-between items-center bg-[#EC9600] max-w-screen-full h-20 px-4 md:px-10 transition-all duration-300 z-50 w-auto`}
    >
      <a
        href="tel:+919036033300"
        className={`no-underline ${
          title === "adda" ? "lg:hidden block" : "md:hidden block"
        } whitespace-nowrap`}
      >
        <div className="bg-white text-[10px] md:text-[12px] font-semibold rounded-full px-2 md:px-3 py-1 flex justify-center items-center gap-2 text-[#EC9600]">
          <FaPhone /> <span> +91 90360 33300</span>
        </div>
      </a>
      <nav
        className={`w-auto lg:w-1/2 ${
          title === "adda" ? "hidden lg:flex" : "hidden md:flex"
        } justify-center items-center gap-3 md:gap-10`}
      >
        <a href="tel:+919036033300" className="no-underline hidden xl:block">
          <div className="bg-white text-[10px] md:text-[12px] font-semibold rounded-full px-2 md:px-3 py-1 flex justify-center items-center gap-2 text-[#EC9600]">
            <FaPhone /> <span> +91 90360 33300</span>
          </div>
        </a>
        {title === "adda" ? (
          <Link
            to="/adda/groups"
            className="relative bg-transparent outline-none cursor-pointer text-center text-[12px] sm:text-sm md:text-base font-semibold text-white flex items-center gap-1"
          >
            <FaUsers className="hidden sm:block sm:text-sm md:text-lg" />
            <span className="lg:block hidden">Mentoons Community</span>
            <span className="absolute -top-2 -right-7 px-2 py-0.5 bg-red-500 rounded-full text-[10px]">
              Join
            </span>
          </Link>
        ) : (
          <NavButton
            label="Comics"
            onMouseEnter={() => handleHover("comics")}
            onMouseLeave={() => handleMouseLeave("comics")}
          >
            {dropdown.comics && <DropDown items={COMICS} />}
          </NavButton>
        )}

        <NavButton
          label="Games"
          onMouseEnter={() => handleHover("games")}
          onMouseLeave={() => handleMouseLeave("games")}
        >
          {dropdown.games && <DropDown items={GAMES} />}
        </NavButton>
        {title === "adda" ? (
          <Link
            to="#"
            className={`bg-transparent outline-none cursor-pointer text-center text-[12px] sm:text-sm md:text-base font-semibold text-white flex items-center gap-1 ${
              title === "adda" ? "block" : "hidden"
            }`}
          >
            <FaCoins className="hidden sm:block sm:text-sm md:text-lg" />
            Collect Points
          </Link>
        ) : (
          <NavButton
            label="Products"
            onMouseEnter={() => handleHover("products")}
            onMouseLeave={() => handleMouseLeave("products")}
          >
            {dropdown.products && <DropDown items={PRODUCTS} />}
          </NavButton>
        )}
      </nav>
      <div className="flex justify-center">
        <Link to="/">
          <img
            src="/logo/ec9141ccd046aff5a1ffb4fe60f79316.png"
            alt="mentoons-logo"
            className="w-[120px] md:w-[130px] lg:w-[150px] mx-auto"
          />
        </Link>
      </div>
      <motion.div
        className={`${
          title === "adda" ? "lg:hidden block" : "md:hidden block"
        } cursor-pointer z-50`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ rotate: 90, scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300 }}
        onClick={() => setSideBarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? (
          <FaTimes
            size={26}
            className="text-white transition-colors hover:text-gray-300"
          />
        ) : (
          <FaBars
            size={26}
            className="text-white transition-colors hover:text-gray-300"
          />
        )}
      </motion.div>

      <nav
        className={`w-fit lg:w-1/2 ${
          title === "adda" ? "hidden lg:flex" : "hidden md:flex"
        } justify-evenly items-center gap-2 md:gap-5`}
      >
        <Link
          to="#"
          className={`bg-transparent outline-none cursor-pointer text-center text-[12px] sm:text-sm md:text-base font-semibold text-white flex items-center gap-1 ${
            title === "adda" ? "block" : "hidden"
          }`}
        >
          <MdStorefront className="sm:text-sm md:text-lg" />
          Products
        </Link>
        <NavButton
          label="Services"
          onMouseEnter={() => handleHover("services")}
          onMouseLeave={() => handleMouseLeave("services")}
        >
          {dropdown.services && <DropDown alignLeft={true} items={SERVICES} />}
        </NavButton>
        <a
          href="#subscription"
          onClick={handleBrowsePlansClick}
          className="bg-transparent outline-none cursor-pointer text-center text-[12px] sm:text-sm md:text-base font-semibold text-white flex items-center gap-1 whitespace-nowrap"
        >
          <FaCreditCard className="hidden sm:block sm:text-sm md:text-lg" />
          Browse Plans
        </a>
        {user && (
          <FaUser className="text-white bg-[#500EAD] rounded-full cursor-pointer p-1 md:p-2 lg:p-2 w-5 h-5 md:w-7 md:h-7 lg:w-9 lg:h-9" />
        )}
      </nav>
      <Sidebar
        token={user}
        isOpen={sidebarOpen}
        title={title}
        dropdown={dropdown}
        handleHover={handleHover}
        handleMouseLeave={handleMouseLeave}
        setIsOpen={setSideBarOpen}
        handlePlans={handleBrowsePlansClick}
      />
    </header>
  );
};

export default SecondaryHeader;
