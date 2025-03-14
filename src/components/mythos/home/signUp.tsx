import { motion } from "framer-motion";
import useInView from "../../../customHooks/useInView";

const SignUpSection = () => {
  const { ref, isInView } = useInView(0.3, false);

  return (
    <motion.section
      ref={ref}
      className="relative w-full py-25 px-5 flex justify-end items-end bg-[url('/background/mythos/blogs/bg.png')] bg-center bg-no-repeat bg-cover overflow-hidden"
    >
      <motion.img
        src="/background/mythos/signUp/Circle 2.png"
        alt="circle-1"
        className="hidden sm:block absolute -top-[20%] left-40 w-[420px] h-[450px] z-0"
        initial={{ scale: 0, rotate: 180 }}
        animate={isInView ? { scale: 1, rotate: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      <motion.img
        src="/background/mythos/signUp/Circle.png"
        alt="circle-2"
        className="hidden sm:block absolute -bottom-[20%] left-40 w-[420px] h-[450px] z-0"
        initial={{ scale: 0, rotate: -180 }}
        animate={isInView ? { scale: 1, rotate: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
      <motion.img
        src="/background/mythos/signUp/Star.png"
        alt="star-1"
        className="hidden sm:block absolute top-1/2 left-70 w-15 h-15 z-0"
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
      />
      <motion.img
        src="/background/mythos/signUp/Star.png"
        alt="star-2"
        className="hidden sm:block absolute top-50 left-85 w-15 h-15 z-0"
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
      />
      <motion.img
        src="/background/mythos/signUp/Star.png"
        alt="star-3"
        className="hidden sm:block absolute top-1/2 left-100 w-15 h-15 z-0"
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
      />
      <motion.div
        className="w-full max-w-3xl space-y-6 md:space-y-8 text-white text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.h1
          className="cormorant font-bold text-3xl sm:text-4xl md:text-5xl leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Sign Up to Create Blogs and Connect with People from Your Community
        </motion.h1>
        <motion.p
          className="montserrat font-medium text-base sm:text-lg w-full md:w-3/4 mx-auto md:mx-0"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Create blogs and groups from your profession and get the exposure you
          need.
        </motion.p>
        <motion.button
          className="p-3 bg-[#E39712] rounded-xl font-bold text-lg montserrat text-black hover:bg-[#d18510] transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Sign Up
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default SignUpSection;
