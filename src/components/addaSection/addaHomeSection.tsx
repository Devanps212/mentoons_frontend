import AddaTV from "../addaTV/addaTV";
import { motion } from "framer-motion";

const AddaHomeSection = () => {
  return (
    <div className="flex justify-start items-center gap-8 bg-transparent translate-y-35">
      <div className="flex flex-col justify-start items-start gap-5">
        <h1 className="text-[64px] font-bold text-[#EC9600]">Mentoons Adda</h1>
        <div>
          <h6 className="font-medium text-[27px]">/ˈʌdə,ˈadə/</h6>
          <div className="flex gap-2 text-[23.4px] italic inter">
            <span>noun</span>
            <span>Indian</span>
          </div>
        </div>
        <p className="font-semibold text-[28px] w-auto">
          a place for parents and children to gather and have meaningful
          interactions and strike conversations
        </p>
        <motion.button
          whileHover={{
            scale: 1.03,
            transition: { ease: "easeInOut", duration: 0.3 },
          }}
          whileTap={{
            scale: 1.01,
          }}
          className="px-5 py-3 bg-[#EC9600] font-extrabold text-[28px] text-white rounded-full shadow-lg active:shadow-none"
        >
          VISIT MENTOONS ADDA
        </motion.button>
      </div>
      <div className="p-2 grid place-items-center flex-1">
        <AddaTV />
      </div>
    </div>
  );
};

export default AddaHomeSection;
