import { useState, useEffect } from "react";
import { BiShare } from "react-icons/bi";
import { FaWhatsapp, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";

interface PostDetails {
  title: string;
  description: string;
  postUrl: string;
  imageUrl: string;
  author: string;
  role: string;
  timestamp: string;
  likes: number;
  comments: number;
  saves: number;
}

const Share = ({ postDetails }: { postDetails: PostDetails }) => {
  const [showShareOptions, setShareOptions] = useState(false);
  const shareText = `${postDetails.title} - ${postDetails.description}`;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(".share-container")) {
        setShareOptions(false);
      }
    };

    if (showShareOptions) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showShareOptions]);

  return (
    <div className="relative flex items-center gap-3 share-container">
      <motion.button
        className="rounded-full w-12 h-12 p-2 border border-gray-400 flex justify-center items-center"
        onClick={() => setShareOptions(!showShareOptions)}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1, boxShadow: "0px 4px 10px rgba(0,0,0,0.2)" }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <BiShare className="w-6 h-6 text-[#EC9600] transform scale-x-[-1]" />
      </motion.button>

      <span className="text-[#605F5F] text-base figtree text-sm">
        {postDetails.saves}
      </span>

      {showShareOptions && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 15 }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
            type: "spring",
            stiffness: 120,
          }}
          className="absolute bottom-16 left-0 bg-white shadow-xl p-3 rounded-lg border border-gray-300 flex justify-center items-center gap-3 z-10"
        >
          <a
            href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
              shareText + " " + postDetails.postUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center text-green-600 p-2"
          >
            <FaWhatsapp className="w-5 h-5" />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
              postDetails.postUrl
            )}&text=${encodeURIComponent(shareText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center text-blue-500 p-2"
          >
            <FaTwitter className="w-5 h-5" />
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
              postDetails.postUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center text-blue-700 p-2"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              postDetails.postUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center text-blue-600 p-2"
          >
            <FaFacebook className="w-5 h-5" />
          </a>
        </motion.div>
      )}
    </div>
  );
};

export default Share;
