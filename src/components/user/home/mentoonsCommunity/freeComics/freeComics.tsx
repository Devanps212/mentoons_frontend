import "./freeComic.css";
import { useEffect, useState } from "react";
import { Comics } from "../../../../../types";
import { Link } from "react-router-dom";
import { FREECOMICS, FREEAUDIOCOMICS } from "../../../../../constants";
import { motion } from "framer-motion";
// import ComicApi from "../../../../api/comics";

const FreeComics = ({
  comicType,
}: // setLoading,
{
  comicType: "picture" | "audio";
  // setLoading: (val: boolean) => void;
}) => {
  const [comicList, setComicList] = useState<Comics[] | null>(null);

  // useEffect(() => {
  //   const fetchComics = async () => {
  //     setLoading(true);
  //     const api = comicType === "picture" ? "/picture" : "/audio";
  //     try {
  //       const comicsData = await ComicApi.freeComics(api);
  //       setComicList(comicsData.data.comics);
  //     } catch (error) {
  //       console.log(error);
  //       setComicList(comicType === "picture" ? FREECOMICS : FREEAUDIOCOMICS);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchComics();
  // }, [comicType]);
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

  return (
    <div className="h-screen overflow-y-auto pb-20 scrollbar-hide">
      <div className="grid sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-2 place-items-center gap-4 p-6">
        {comicList &&
          comicList.length > 0 &&
          comicList.map((comic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay: index * 0.3,
              }}
              className="relative md:h-35 xl:w-34 xl:h-34 border border-gray-400 rounded-md shadow-3xl overflow-hidden group"
            >
              <motion.img
                whileHover={{ y: -5 }}
                src={comic.image}
                alt="comic"
                className="object-cover w-full h-full rounded-md"
              />
              <motion.div className="absolute inset-0 bg-gray-700 opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out" />
              <motion.div className="absolute w-full p-3 bg-green-400 text-black text-center bottom-0 rounded-b-md translate-y-100 group-hover:translate-y-0 transition duration-300 ease-in-out">
                <Link
                  to="/comic"
                  state={{ comic }}
                  className="block w-full h-full"
                >
                  {comicType === "picture" ? "Read Comic" : "Watch Comic"}
                </Link>
              </motion.div>
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default FreeComics;
