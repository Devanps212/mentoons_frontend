import { AnimatePresence } from "framer-motion";
import React, { JSX } from "react";
import {
  FaBook,
  FaCog,
  FaGamepad,
  FaShoppingCart,
  FaUserShield,
} from "react-icons/fa";

const ICONS: { [key: string]: JSX.Element } = {
  games: <FaGamepad className="text-white text-[12px] sm:text-sm md:text-lg" />,
  comics: <FaBook className="text-white text-[12px] sm:text-sm md:text-lg" />,
  products: (
    <FaShoppingCart className="text-white text-[12px] sm:text-sm md:text-lg" />
  ),
  services: <FaCog className="text-white text-[12px] sm:text-sm md:text-lg" />,
  subscription: (
    <FaUserShield className="text-white text-[12px] sm:text-sm md:text-lg" />
  ),
};

const NavButton = ({
  children,
  label,
  onMouseEnter,
  onMouseLeave,
}: {
  children: React.ReactNode;
  label: string;
  onMouseEnter: (menu: string) => void;
  onMouseLeave: (menu: string) => void;
}) => {
  const menuKey = label.toLowerCase();
  return (
    <div
      className="relative"
      onMouseEnter={() => onMouseEnter(menuKey)}
      onMouseLeave={() => onMouseLeave(menuKey)}
    >
      <button className="bg-transparent outline-none cursor-pointer text-center text-[12px] sm:text-sm md:text-base font-semibold text-white flex items-center gap-1">
        <span className="hidden sm:block">{ICONS[menuKey]}</span>
        {label}
      </button>
      <AnimatePresence>{children}</AnimatePresence>
    </div>
  );
};

export default NavButton;
