import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const FounderNote = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full h-auto pt-10"
    >
      <h1 className="text-[48px] font-semibold pl-20 pb-10">
        The Founder’s Note
      </h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className="flex justify-start items-start pt-10 gap-10 bg-gradient-to-b from-[rgba(251,177,62,10)] to-[rgba(255,227,166,10)]"
      >
        <motion.img
          src="/founder/image 28.png"
          alt="founder image"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="w-[550px] h-[562px]"
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="flex flex-col justify-start items-start w-[600px] gap-10"
        >
          <div className="fredoka">
            <h1 className="underline decoration-3 underline-offset-6 font-normal text-[61px] tracking-[0.96px] leading-[1.2]">
              Mahesh
            </h1>
            <h2 className="font-medium text-[35px] text-[#131315] leading-[1.3]">
              Founder & CEO
            </h2>
          </div>
          <p className="inter font-normal text-[24px] text-[#0C0A09] leading-11">
            I hope this letter finds you in good health and high spirits. I am
            writing to bring to your attention a matter of great concern that
            has been witnessed in our society lately – social media addiction.
            <br />
            <Link to="#">
              <strong className="underline decoration-[1.2px] underline-offset-3">
                Read More
              </strong>
            </Link>
          </p>
          <div className="pt-5">
            <h4 className="font-bold text-[16px] tracking-wider epilogue">
              CONNECT WITH ME HERE
            </h4>
            <div className="flex items-center gap-4 pt-5">
              {[
                { icon: <FaFacebookF />, label: "Facebook" },
                { icon: <FaLinkedinIn />, label: "LinkedIn" },
                { icon: <BiLogoInstagramAlt />, label: "Instagram" },
              ].map((social, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 0.7 + index * 0.2,
                  }}
                >
                  <Link
                    to="#"
                    className="w-12 h-12 flex items-center justify-center bg-[#EC9600] text-white text-2xl rounded-full transition-all duration-300 hover:bg-[#c77f00] shadow-md"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default FounderNote;
