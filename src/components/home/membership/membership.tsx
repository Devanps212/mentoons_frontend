import { PLATINUM, PRIME } from "../../../constants";
import { motion } from "framer-motion";
import MembershipCard from "./cards/membershipCard";
import useInView from "../../../customHooks/useInView";

const Membership = () => {
  const { ref: sectionRef, isInView } = useInView(0.3, false);

  return (
    <section className="p-10 flex flex-col justify-center items-center">
      <motion.div
        id="subscription"
        ref={sectionRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="p-10 flex flex-col justify-center items-center w-full"
      >
        <motion.h1
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
          transition={{ duration: 0.6, ease: "easeIn" }}
          className="font-semibold text-[48px] leading-tight text-gray-800 mb-8"
        >
          Membership Plans
        </motion.h1>
        <div className="flex justify-around items-center gap-10 w-full p-10">
          <MembershipCard membership={PRIME} />
          <MembershipCard membership={PLATINUM} />
        </div>
        <div className="p-10">
          <h1 className="text-center text-xl font-normal epilogue">
            Pay Through
          </h1>
          <div className="grid grid-cols-4 place-items-center gap-10 mx-auto pt-5">
            <motion.img
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : "-100%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              src="/icons/google-pay-icon.svg"
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
      </motion.div>
    </section>
  );
};

export default Membership;
