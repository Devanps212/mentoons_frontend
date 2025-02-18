import { FaPlayCircle } from "react-icons/fa";
import { PODCAST } from "../../../../constants";
import { motion } from "framer-motion";

const Podcast = () => {
  return (
    <div className="flex flex-col justify-center items-center rounded-xl w-full max-w-lg pt-5">
      <div className="flex flex-col w-full overflow-y-auto h-[670px] shadow-xl bg-white rounded-xl">
        {PODCAST.map(({ img, title }, index) => (
          <motion.div
            key={index}
            className="flex items-center w-full py-3 border-b last:border-none px-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center w-full gap-4">
              <img
                src={img}
                alt={title}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h1 className="text-lg font-medium text-[#131315]">{title}</h1>
                <p className="text-sm text-[#666] mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  vel diam sollicitudin, porttitor dolor sollicitudin, tempus
                  ex. Praesent tempor gravida urna, vel rhoncus massa maximus
                  non. Fusce sem massa, finibus ut velit aliquam
                </p>
              </div>
            </div>

            <FaPlayCircle
              size={30}
              className="cursor-pointer text-[#EC9600] hover:text-[#c77f00]"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Podcast;
