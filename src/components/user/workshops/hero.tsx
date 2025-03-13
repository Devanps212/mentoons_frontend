import { motion } from "framer-motion";
import useInView from "../../../customHooks/useInView";
import AgeButton from "../../common/ageCategoryButton/ageButton";
import { useEffect, useState } from "react";

const Hero = ({
  setWorkshop,
}: {
  setWorkshop: (workshop: "buddy" | "teen" | "family" | "career") => void;
}) => {
  const { isInView, ref } = useInView(0.3, false);
  const [selectedAge, setSelectedAge] = useState<string | null>(null);

  useEffect(() => {
    if (selectedAge) {
      const workshopAge: {
        [key: string]: "buddy" | "teen" | "family" | "career";
      } = {
        "6-12": "buddy",
        "20+": "career",
        parent: "family",
        "13-19": "teen",
      };

      setWorkshop(workshopAge[selectedAge]);
    }
  }, [selectedAge, setWorkshop]);

  return (
    <section className="relative px-5 sm:px-8 md:px-12 lg:px-20 py-8 md:py-12 lg:py-20 mt-5 md:mt-10">
      <div className="absolute -top-10 md:-top-1/5 right-0 w-32 sm:w-36 md:w-40 lg:w-48 z-0">
        <img
          src="/user/workshops/image 40.png"
          alt="career corner"
          className="w-full object-cover"
        />
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-8 lg:gap-10 z-10 relative">
        <div
          ref={ref}
          className="flex flex-col h-full justify-end text-center lg:text-left lg:max-w-3xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[#EC9600] font-medium text-3xl sm:text-4xl md:text-5xl lg:text-7xl"
          >
            Workshops for All !
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="inter text-base sm:text-lg md:text-xl text-[#0C0A09] mt-4 md:mt-5 leading-relaxed md:leading-[35px] firasans font-medium"
          >
            At Mentoons, we conduct informative and interactive workshops that
            provide an effective and transformative experience for our
            participants. Through thought-provoking discussions, group
            activities, and practical exercises, our workshops empower
            individuals to develop a healthy and balanced relationship with
            technology.
          </motion.p>
        </div>
        <div className="w-full lg:w-auto mt-6 lg:mt-0">
          <AgeButton
            isInView={isInView}
            setSelectedCategory={setSelectedAge}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 md:gap-16 lg:gap-20 w-full max-w-lg mx-auto lg:mx-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
