import { PLATINUM, PRIME } from "../../../constants";
import { motion } from "framer-motion";
import MembershipCard from "./cards/membershipCard";
import useInView from "../../../customHooks/useInView";

const Membership = () => {
  const { ref: sectionRef, isInView } = useInView(0.3, false);

  return (
    <section className="p-6 md:p-10 flex flex-col justify-center items-center bg-gradient-to-r from-[rgba(255,187,68,0.7)] to-[rgba(253,185,147,0.7)]">
      <motion.div
        id="subscription"
        ref={sectionRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="p-6 md:p-10 flex flex-col justify-center items-center w-full"
      >
        <motion.h1
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
          transition={{ duration: 0.6, ease: "easeIn" }}
          className="font-semibold text-[28px] md:text-[36px] lg:text-[48px] leading-tight text-gray-800 mb-6 md:mb-8 text-center"
        >
          Membership Plans
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-6 md:gap-10 w-full max-w-5xl pt-8">
          <MembershipCard membership={PRIME} />
          <MembershipCard membership={PLATINUM} />
        </div>
        <div className="p-6 md:p-10">
          <h1 className="text-center text-lg md:text-xl font-normal epilogue">
            Pay Through
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 place-items-center gap-6 md:gap-10 mx-auto pt-5">
            {[
              "google-pay-icon",
              "paytm-icon",
              "razorpay-icon",
              "master-card-icon",
            ].map((icon, index) => (
              <motion.img
                key={index}
                initial={{ opacity: 0, y: "-100%" }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  y: isInView ? 0 : "-100%",
                }}
                transition={{ duration: 0.8 + index * 0.1, ease: "easeInOut" }}
                src={`/icons/${icon}.svg`}
                alt={icon}
                className="w-8 h-8 md:w-10 md:h-10"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Membership;
