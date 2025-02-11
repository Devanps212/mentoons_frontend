import "./header.css";
import { useEffect, useState } from "react";
import {
  COMICS,
  GAMES,
  PRODUCTS,
  SERVICES,
  SUBSCRIPTION,
} from "../../constants";
import DropDown from "../dropDown/dropDown";
import NavButton from "../nav/button";
import { FaPhone, FaRegCalendarAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DropDownInterface } from "../../types";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdown, setDropDown] = useState<DropDownInterface>({
    games: false,
    comics: false,
    products: false,
    services: false,
    subscription: false,
  });

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
      } flex justify-between items-center bg-[#EC9600] max-w-screen-full mx-auto h-20 px-6 transition-all duration-300 z-50`}
    >
      <div className="flex justify-center items-center gap-7">
        <div className="bg-white text-[12px] font-semibold rounded-full px-3 py-1 flex justify-center items-center gap-2 text-[#EC9600]">
          <FaRegCalendarAlt /> <span>09 DECEMBER 2025</span>
        </div>
        <div className="bg-white text-[12px] font-semibold rounded-full px-3 py-1 flex justify-center items-center gap-2 text-[#EC9600]">
          <FaPhone /> <span>Call us: +91 90360 33300</span>
        </div>
        <NavButton
          label="Comics"
          onMouseEnter={() => handleHover("comics")}
          onMouseLeave={() => handleMouseLeave("comics")}
        >
          {dropdown.comics && <DropDown items={COMICS} />}
        </NavButton>
        <NavButton
          label="Games"
          onMouseEnter={() => handleHover("games")}
          onMouseLeave={() => handleMouseLeave("games")}
        >
          {dropdown.games && <DropDown items={GAMES} />}
        </NavButton>
        <NavButton
          label="Products"
          onMouseEnter={() => handleHover("products")}
          onMouseLeave={() => handleMouseLeave("products")}
        >
          {dropdown.products && <DropDown items={PRODUCTS} />}
        </NavButton>
      </div>
      <Link to="/">
        <img
          src="/logo/ec9141ccd046aff5a1ffb4fe60f79316.png"
          alt="mentoons-logo"
          className="w-[168px] pl-10"
        />
      </Link>
      <div className="flex justify-center items-center gap-15 flex-1">
        <NavButton
          label="Services"
          onMouseEnter={() => handleHover("services")}
          onMouseLeave={() => handleMouseLeave("services")}
        >
          {dropdown.services && <DropDown alignLeft={true} items={SERVICES} />}
        </NavButton>
        <NavButton
          label="Subscription"
          onMouseEnter={() => handleHover("subscription")}
          onMouseLeave={() => handleMouseLeave("subscription")}
        >
          {dropdown.subscription && (
            <DropDown alignLeft={true} items={SUBSCRIPTION} />
          )}
        </NavButton>
        <FaUser
          size={38}
          className="text-white bg-[#500EAD] rounded-full cursor-pointer p-2"
        />
      </div>
    </header>
  );
};

export default Header;
