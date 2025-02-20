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

    console.log(selectedComicType);
  }, [activeTab, selectedComicType]);

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
          <div className="flex justify-start items-start">
            <button
              onClick={() => setSelectedComicType("picture")}
              className={`px-3 py-2 text-sm md:24 lg:w-28 font-semibold shadow-md transition-all duration-300 ${
                selectedComicType === "picture"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-800"
              }`}
            >
              Illustrated <br /> Comic
            </button>
            <button
              onClick={() => setSelectedComicType("audio")}
              className={`px-3 py-2 md:w-24 lg:w-28 text-sm font-semibold shadow-md transition-all duration-300 ${
                selectedComicType === "audio"
                  ? "bg-green-500 text-white"
                  : "bg-gray-300 text-gray-800"
              }`}
            >
              Illustrated <br /> Audio Comic
            </button>
            <div></div>
          </div>
        )}
      </div>
      <div className="w-full h-[445px] relative z-999">
        {isLoading ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white">
            <ClipLoader color="#36d7b7" loading={true} size={50} />
            <p className="akshar">Loading ...</p>
          </div>
        ) : (
          <div className="w-full p-6 max-h-full overflow-auto">
            {activeTab === "Mentoons Comics" ? (
              <FreeComics comicType={selectedComicType} />
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
