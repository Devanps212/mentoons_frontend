import { FaArrowRight } from "react-icons/fa";

const JoinCards = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-1/4 p-5 mt-5 bg-[#E39712] rounded-xl flex flex-col items-center gap-7 text-center">
        <img
          src="/icons/mythos/joinOurGroups/Book with information on astrology and the influence of the moon on personality.png"
          alt="icon"
          className="w-42"
        />
        <h1 className="font-semibold text-gray-800 text-lg">ASTROLOGY</h1>
        <p className="font-normal text-white text-base">
          Astrologers study how celestial bodies influence human behavior, using
          birth charts to predict events and provide guidance. Specializing in
          areas like relationships and career, they offer readings and advice
          based on planetary alignments.
        </p>
        <span className=" w-full flex justify-end items-center gap-2 font-medium text-base ">
          View More <FaArrowRight />
        </span>
      </div>
    </div>
  );
};

export default JoinCards;
