import { useState } from "react";
import { motion } from "framer-motion";

const News = () => {
  const [activeTab, setActiveTab] = useState("news");

  return (
    <div className="w-3/4 h-[500px] border bg-white rounded-xl overflow-hidden shadow-lg">
      <div className="flex w-full relative">
        {["News", "Blogs"].map((tab) => (
          <motion.button
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase())}
            className={`relative px-5 py-3 w-1/2 text-lg font-semibold tracking-wide transition-all duration-300 ${
              activeTab === tab.toLowerCase()
                ? "text-white"
                : "text-gray-800 hover:text-[#2575fc]"
            }`}
            style={{
              background:
                activeTab === tab.toLowerCase()
                  ? "linear-gradient(to right, #6a11cb, #2575fc)"
                  : "#d0e1ff",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tab}
            {activeTab === tab.toLowerCase() && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 right-0 h-[4px] bg-white"
              />
            )}
          </motion.button>
        ))}
      </div>
      <div className="w-full h-[550px] overflow-auto">
        <iframe
          src={
            activeTab === "news"
              ? "https://mentoonsnews.com/"
              : "https://medium.com/"
          }
          className="w-full h-full border-none"
        ></iframe>
      </div>
    </div>
  );
};

export default News;
