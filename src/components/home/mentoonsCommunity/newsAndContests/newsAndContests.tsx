import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ClipLoader } from "react-spinners";
import Contests from "../contests/contests";
import FreeComics from "../freeComics/freeComics";

const NewsAndContests = () => {
  const [activeTab, setActiveTab] = useState("Mentoons Comics");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedComicType, setSelectedComicType] = useState<
    "picture" | "audio"
  >("picture");

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  return (
    <div className="w-full h-[500px] border border-transparent border-t-0 bg-white rounded-xl overflow-hidden shadow-xl z-999">
      <div className="flex w-full relative flex-col">
        <div className="flex w-full">
          {["Mentoons Comics", "Contests | Fun Section"].map((tab) => (
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
              {tab === "Mentoons Comics" ? (
                <>
                  <span>{tab}</span>
                  <span className="absolute top-1 right-3 bg-red-500 text-white text-[10px] rounded-full px-2 py-1">
                    Free
                  </span>
                </>
              ) : (
                tab
              )}
              {activeTab === tab && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-[4px] bg-white"
                />
              )}
            </motion.button>
          ))}
        </div>
        {activeTab === "Mentoons Comics" && (
          <div className="flex justify-start items-start gap-2">
            <button
              onClick={() => setSelectedComicType("picture")}
              className={`flex items-center justify-center px-3 py-2 w-1/4 text-xs sm:text-sm md:text-lg lg:text-xs xl:text-md font-semibold shadow-md transition-all duration-300 h-16 p-4 ${
                selectedComicType === "picture"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-800"
              }`}
            >
              <span className="text-center leading-tight">
                Illustrated <br /> Comic
              </span>
            </button>
            <button
              onClick={() => setSelectedComicType("audio")}
              className={`flex items-center justify-center px-3 py-2 w-1/4 text-xs sm:text-sm md:text-lg lg:text-xs font-semibold shadow-md transition-all duration-300 h-16 ${
                selectedComicType === "audio"
                  ? "bg-green-500 text-white"
                  : "bg-gray-300 text-gray-800"
              }`}
            >
              <span className="text-center leading-tight">
                Illustrated Audio <br /> Comic
              </span>
            </button>
          </div>
        )}
      </div>
      <div className="relative w-full h-[445px] z-999 bg-gradient-to-b from-sky-400 via-blue-300 to-blue-500 rounded-lg shadow-md overflow-hidden">
        <img
          src="/background/Vector.png"
          alt="cloud"
          className="absolute top-10 left-10 w-1/5"
        />
        <img
          src="/background/rb_35675 copy 1.png"
          alt="cloud"
          className="absolute top-10 right-10 w-sm"
        />
        <img
          src="/background/Group 566.png"
          alt="cloud"
          className="absolute top-10 right-5 w-24"
        />
        <img
          src="/background/Vector.png"
          alt="cloud"
          className="absolute bottom-10 left-10 w-1/5"
        />
        <img
          src="/background/Group 566.png"
          alt="cloud"
          className="absolute bottom-10 right-5 w-24"
        />
        {isLoading ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur-md rounded-lg">
            <ClipLoader color="#36d7b7" loading={true} size={50} />
            <p className="akshar text-gray-700">Loading ...</p>
          </div>
        ) : (
          <div className="w-full p-5 max-h-full overflow-auto bg-white/90 rounded-md shadow-inner">
            {activeTab === "Mentoons Comics" ? (
              <FreeComics
                setLoading={setIsLoading}
                comicType={selectedComicType}
              />
            ) : (
              <Contests />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsAndContests;
