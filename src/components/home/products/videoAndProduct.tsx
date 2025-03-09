import { useRef, useState } from "react";
import { FaPlayCircle } from "react-icons/fa";

const VideoAndProduct = () => {
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

  return (
    <section className="w-full p-13 flex justify-evenly items-center gap-10 bg-gradient-to-b from-[#FFE18B] to-[#F7941D]">
      <div className="w-lg">
        <img
          src="/background/products/image48.png"
          className="w-full h-full object-fill"
        />
      </div>
      <div className="relative w-2xl">
        <video
          ref={videoRef}
          src="/video/addiction/We know THE STRUGGLES our youth is facing_03.mp4"
          muted
          className="w-full h-full rounded-xl"
          onClick={handlePlayPause}
        />
        {showPlayButton && (
          <button
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-24 flex justify-center items-center"
            onClick={handlePlayPause}
          >
            <FaPlayCircle className="h-full w-full text-red-600" />
          </button>
        )}
      </div>
    </section>
  );
};

export default VideoAndProduct;
