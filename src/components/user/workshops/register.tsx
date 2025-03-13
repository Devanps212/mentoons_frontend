import { motion } from "framer-motion";
import useInView from "../../../customHooks/useInView";

const RegisterWorkshop = ({
  registerData,
  label,
}: {
  registerData: object;
  label: string;
}) => {
  const bg = Object.keys(registerData)[0];
  const image = Object.values(registerData)[0];
  const { isInView, ref } = useInView(0.3, false);

  const inputClasses =
    "w-full p-2 bg-white rounded-lg border border-gray-500 outline-none shadow-[2px_3px_1px_rgba(0,0,0,0.7)] sm:shadow-[4px_6px_1px_rgba(0,0,0,0.7)] focus:ring-2 focus:ring-blue-500";

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="p-5 sm:p-8 md:p-10"
      style={{ backgroundColor: bg }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold mb-4 md:mb-6 inter"
      >
        REGISTER FOR OUR{" "}
        {label.toUpperCase() === "CAREER"
          ? `${label.toUpperCase()} CORNER HERE`
          : `${label.toUpperCase()} CAMP HERE`}{" "}
      </motion.h1>

      <div className="flex flex-col lg:flex-row justify-around items-center lg:items-start gap-8 lg:gap-12 mt-6 md:mt-10 lg:mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="hidden sm:block w-full sm:w-3/4 md:w-2/3 lg:w-1/3"
        >
          <img src={image} alt={label} className="w-full object-cover" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex items-center inconsolata font-bold text-base sm:text-lg md:text-xl text-[#2F251B]"
        >
          <form onSubmit={() => {}} className="space-y-4 w-full">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              {[
                { label: "First Name", id: "firstName" },
                { label: "Last Name", id: "lastName" },
              ].map(({ label, id }) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="w-full sm:w-1/2"
                >
                  <label htmlFor={id} className="block mb-1">
                    {label}
                  </label>
                  <input type="text" id={id} className={inputClasses} />
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              {[
                { label: "Email", id: "email", type: "email" },
                { label: "Phone", id: "phone", type: "text" },
              ].map(({ label, id, type }) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="w-full sm:w-1/2"
                >
                  <label htmlFor={id} className="block mb-1">
                    {label}
                  </label>
                  <input type={type} id={id} className={inputClasses} />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <label htmlFor="message" className="block mb-1">
                Message
              </label>
              <textarea id="message" rows={5} className={inputClasses} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex justify-center sm:justify-end items-center mt-6"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-white p-2 rounded-xl hover:bg-blue-600 transition"
                style={{
                  backgroundColor: label === "Youth" ? "#EC9600" : "#4285F4",
                }}
              >
                Submit
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default RegisterWorkshop;
