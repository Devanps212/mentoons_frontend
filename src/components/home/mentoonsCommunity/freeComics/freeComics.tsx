// import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
// import { API } from "../../../config/configFile";
import { Comics } from "../../../../types";
import { Link } from "react-router-dom";
import { FREECOMICS, FREEAUDIOCOMICS } from "../../../../constants/index";
import { motion } from "framer-motion";

const FreeComics = ({ comicType }: { comicType: "picture" | "audio" }) => {
  const [comicList, setComicList] = useState<Comics[] | null>(null);

  useEffect(() => {
    // const fetchComics = async () => {
    //   const api =
    //     comicType === "picture" ? API.freePictureComics : API.freeAudioComics;
    //   try {
    //     const comicsData: AxiosResponse = await axios.post(api);
    //     setComicList(comicsData.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // fetchComics();
    if (comicType === "picture") {
      setComicList(FREECOMICS);
    } else {
      setComicList(FREEAUDIOCOMICS);
    }
  }, [comicType]);
  //   Un-comment this when backend integration and remove CONSTANTS

  return (
    <div className="grid grid-cols-2 place-items-center gap-4 p-6 overflow-y-auto">
      {comicList &&
        comicList.length > 0 &&
        comicList.map(({ image, _id }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: index * 0.3,
            }}
            className="relative w-42 h-48 border border-gray-400 rounded-md shadow-3xl overflow-hidden group"
          >
            <motion.img
              whileHover={{ y: -5 }}
              src={image}
              alt="comic-1"
              className="object-fill w-full h-full rounded-md"
            />
            <motion.div className="absolute inset-0 bg-gray-700 opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out" />
            <motion.div className="absolute w-full p-3 bg-green-400 text-black text-center bottom-0 rounded-b-md translate-y-100 group-hover:translate-y-0 transition duration-300 ease-in-out">
              <Link to={`/comic/${_id}`} className="block w-full h-full">
                {comicType === "picture" ? "Read Comic" : "Watch Comic"}
              </Link>
            </motion.div>
          </motion.div>
        ))}
    </div>
  );
};

export default FreeComics;
