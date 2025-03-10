import { motion } from "framer-motion";
import { GameData } from "../../../types";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";

const DropDown = ({
  items,
  alignLeft,
}: {
  items: (string | GameData)[];
  alignLeft?: boolean;
}) => {
  return (
    <div>
      <motion.ul
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className={`absolute ${
          alignLeft ? "right-0" : "left-0"
        } mt-2 w-32 md:w-48 bg-white shadow-lg z-50 rounded-md overflow-hidden text-center border border-gray-200`}
      >
        {items.map((data, index) => {
          if (typeof data === "string") {
            return (
              <motion.li
                key={index}
                whileHover={{
                  scale: 1.05,
                  borderBottomWidth: "3px",
                  borderColor: "#FBBF24",
                  transition: { duration: 0.2 },
                }}
                className="p-2 transform transition-all duration-200 border-b border-gray-300 hover:border-yellow-400 hover:bg-gray-100 rounded-md flex justify-between items-center"
              >
                <Link
                  to={`/${items.join(' ')}`}
                  className="text-gray-800 text-sm md:text-base hover:text-black font-medium flex-1"
                >
                  {data}
                </Link>
                <BiChevronRight
                  className="text-gray-500 text-sm md:text-base group-hover:text-gray-800 transition duration-200"
                  size={18}
                />
              </motion.li>
            );
          } else if ("payToPlay" in data && data.payToPlay) {
            return data.payToPlay.map((game, gameIndex) => (
              <motion.li
                key={`${index}-${gameIndex}`}
                whileHover={{
                  scale: 1.05,
                  borderBottomWidth: "3px",
                  borderColor: "#FBBF24",
                  transition: { duration: 0.2 },
                }}
                className="p-2 transform transition-all duration-200 border-b border-gray-300 hover:border-yellow-400 hover:bg-gray-100 flex justify-between items-center rounded-md"
              >
                <Link
                  to="#"
                  className="text-gray-800 text-sm md:text-base hover:text-black font-medium flex-1"
                >
                  {game.name}
                </Link>
                <div className="flex items-center gap-1 md:gap-2">
                  <span className="text-gray-600 font-medium md:font-semibold bg-gray-200 p-1 rounded-md">
                    ₹{game.charge}
                  </span>
                  <BiChevronRight
                    className="text-gray-500 text-sm md:text-base group-hover:text-gray-800 transition duration-200"
                    size={18}
                  />
                </div>
              </motion.li>
            ));
          }
          return null;
        })}
      </motion.ul>
    </div>
  );
};

export default DropDown;
