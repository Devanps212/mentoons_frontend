import { motion } from "framer-motion";

const ChallengesFaced = () => {
  const challenges = [
    {
      challenge: "LOW CONFIDENCE",
      img: "/background/products/image49.png",
    },
    {
      challenge: "AGGRESSIVE BEHAVIOUR",
      img: "/background/products/image49.png",
    },
    {
      challenge: "LACK OF COMMUNICATION",
      img: "/background/products/image49.png",
    },
    {
      challenge: "DISOBEDIENCE",
      img: "/background/products/image49.png",
    },
  ];

  return (
    <section className="w-full p-10 py-15">
      <h1 className="text-center firasans font-medium text-4xl">
        Challenges Faced By Parents
      </h1>
      <div className="grid grid-cols-4 place-items-center gap-3 mt-10">
        {challenges.map(({ challenge, img }, index) => (
          <div className="p-3 mx-auto flex flex-col items-center" key={index}>
            <motion.div
              whileHover={{
                y: -5,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-64 h-64 overflow-hidden rounded-full"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                src={img}
                alt={challenge}
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>
            <h1 className="text-center mt-5 inter font-extrabold text-lg text-[#2F251B]">
              {challenge}
            </h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChallengesFaced;
