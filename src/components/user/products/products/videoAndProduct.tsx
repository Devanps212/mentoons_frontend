import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaPlayCircle } from "react-icons/fa";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

const videos = [
  "https://res.cloudinary.com/dacwu8tri/video/upload/v1741670403/Story_Reteller_Cards_13-19_1_ql64ys.mp4",
  "https://res.cloudinary.com/dacwu8tri/video/upload/v1741670480/Silent_Stories_Ages_6-12__04_1_ep8fzn.mp4",
  "https://res.cloudinary.com/dacwu8tri/video/upload/v1741670571/Story_Reteller_Cards_6-12_1_hottxm.mp4",
  "https://res.cloudinary.com/dacwu8tri/video/upload/v1741670298/Conversation_Starter_Cards_6-12_liitjh.mp4",
];

const VideoAndProduct = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [showPlayButton, setShowPlayButton] = useState(true);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        setShowPlayButton(false);
        videoRef.current.play();
      } else {
        setShowPlayButton(true);
        videoRef.current.pause();
      }
    }
  };

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    setShowPlayButton(true);
  };

  const prevVideo = () => {
    setCurrentVideoIndex(
      (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
    );
    setShowPlayButton(true);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="p-6 md:p-10 flex flex-col lg:flex-row justify-evenly items-center gap-6 bg-gradient-to-b from-[#FFE18B] to-[#F7941D]"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full sm:w-sm md:w-lg lg:w-xl"
      >
        <img
          src="/background/products/image48.png"
          className="w-full h-auto object-fill"
          alt="Product"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full md:w-2xl lg:w-2xl bg-black rounded-xl overflow-hidden"
      >
        <video
          key={currentVideoIndex}
          ref={videoRef}
          src={videos[currentVideoIndex]}
          muted
          className="w-full h-full"
          onClick={handlePlayPause}
        />
        {showPlayButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-16 md:w-20 lg:w-24 flex justify-center items-center"
            onClick={handlePlayPause}
          >
            <FaPlayCircle className="h-full w-full text-red-600" />
          </motion.button>
        )}
        <button
          onClick={prevVideo}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
        >
          <MdNavigateBefore size={30} />
        </button>
        <button
          onClick={nextVideo}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
        >
          <MdNavigateNext size={30} />
        </button>
      </motion.div>
    </motion.section>
  );
};

export default VideoAndProduct;
