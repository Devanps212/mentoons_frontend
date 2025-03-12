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
    <section className="relative px-5 md:p-20 mt-10 space-y-5">
      <div className="absolute -top-1/5 right-0 translate-y-2 w-48 h-48 z-0">
        <img
          src="/user/workshops/image 40.png"
          alt="career corner"
          className="w-full cover-fit"
        />
      </div>
      <div className="flex justify-between items-end gap-10 z-10">
        <div
          ref={ref}
          className="flex flex-col h-full justify-end text-center md:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[#EC9600] font-medium text-4xl md:text-7xl"
          >
            Workshops for All !
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="inter text-md md:text-xl text-[#0C0A09] mt-5 md:w-2xl mx-auto md:mx-0 leading-[35px] firasans font-medium"
          >
            At Mentoons, we conduct informative and interactive workshops that
            provide an effective and transformative experience for our
            participants. Through thought-provoking discussions, group
            activities, and practical exercises, our workshops empower
            individuals to develop a healthy and balanced relationship with
            technology.
          </motion.p>
        </div>
        <AgeButton
          isInView={isInView}
          setSelectedCategory={setSelectedAge}
          className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-20 w-full max-w-xl"
        />
      </div>
    </section>
  );
};

export default Hero;
