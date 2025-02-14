import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MagnifyingGlass } from "react-loader-spinner";
import Contests from "../contests/contests";

const NewsAndContests = () => {
  const [activeTab, setActiveTab] = useState("Mentoons news");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (activeTab === "contests | Fun Section") {
      setIsLoading(false);
    }
  }, [activeTab]);

  return (
    <div className="w-1/3 h-[500px] border bg-white rounded-xl overflow-hidden shadow-lg">
      <div className="flex w-full relative flex-col">
        <div className="flex w-full">
          {["contests | Fun Section", "Mentoons news"].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setIsLoading(true);
              }}
              className={`relative px-5 py-3 w-1/2 text-lg font-semibold tracking-wide transition-all duration-300 ${
                activeTab === tab
                  ? "text-white"
                  : "text-gray-800 hover:text-[#2575fc]"
              }`}
              style={{
                background:
                  activeTab === tab
                    ? "linear-gradient(to right, #6a11cb, #2575fc)"
                    : "#d0e1ff",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-[4px] bg-white"
                />
              )}
            </motion.button>
          ))}
        </div>
        <AnimatePresence>
          {activeTab === "Mentoons news" && (
            <motion.div
              key="subscribe-button"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full text-center bg-white py-2 border-b"
            >
              <a
                href="https://mentoonsnews.com/subscribe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline"
              >
                Subscribe Now
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="w-full h-[445px] relative overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white">
            <MagnifyingGlass
              visible={true}
              height="80"
              width="80"
              ariaLabel="magnifying-glass-loading"
              glassColor="#c0efff"
              color="#e15b64"
            />
            <p className="akshar">Loading ...</p>
          </div>
        )}

        <div className="w-full h-full overflow-hidden">
          {activeTab === "Mentoons news" ? (
            <iframe
              src="https://mentoonsnews.com/"
              className="w-full h-full border-none overflow-hidden"
              style={{ overflowX: "hidden" }}
              onLoad={() => setIsLoading(false)}
            ></iframe>
          ) : (
            <Contests />
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsAndContests;
