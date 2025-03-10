import useInView from "../../../../customHooks/useInView";
import { motion } from "framer-motion";

const ChallengesFaced = () => {
  const { isInView, ref } = useInView(0.3, false);
  const challenges = [
    {
      challenge: "LOW CONFIDENCE",
      img: "/background/products/challengesParents/low confidence.png",
    },
    {
      challenge: "AGGRESSIVE BEHAVIOUR",
      img: "/background/products/challengesParents/aggressiveBehaviour.png",
    },
    {
      challenge: "LACK OF COMMUNICATION",
      img: "/background/products/challengesParents/lackOfCommunication.png",
    },
    {
      challenge: "DISOBEDIENCE",
      img: "/background/products/challengesParents/disobedience.png",
    },
  ];

  return (
    <section ref={ref} className="w-full px-5 py-10 md:py-15">
      <h1 className="text-center firasans font-medium text-3xl md:text-4xl">
        Challenges Faced By Parents
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mt-8 place-items-center">
        {challenges.map(({ challenge, img }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="p-3 flex flex-col items-center text-center w-full max-w-[180px] md:max-w-[200px] lg:max-w-[250px]"
          >
            <motion.div
              whileHover={{
                y: -5,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full h-auto overflow-hidden rounded-full"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                src={img}
                alt={challenge}
                className="w-full h-auto object-cover rounded-full"
              />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mt-5 inter font-extrabold text-md md:text-lg text-[#2F251B]"
            >
              {challenge}
            </motion.h1>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ChallengesFaced;
