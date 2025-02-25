import { FaRegLaughSquint, FaUser, FaUserFriends } from "react-icons/fa";
import { FiBell } from "react-icons/fi";

const BottomNav = ({
  setActive,
}: {
  setActive: React.Dispatch<
    React.SetStateAction<
      "home" | "notification" | "memeBanner" | "friendRequest"
    >
  >;
}) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center gap-10 bg-white border border-gray-300 p-0 h-12">
      <div className="relative group" onClick={() => setActive("notification")}>
        <button className="relative outline-none cursor-pointer">
          <FiBell className="text-3xl" />
        </button>
        <span className="absolute top-0 -right-2 w-5 h-5 bg-red-600 text-white text-xs flex items-center justify-center rounded-full">
          1
        </span>
        <div className="absolute -top-10 -right-8 bg-gray-800 text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Notification
        </div>
      </div>

      <div
        onClick={() => setActive("home")}
        className="absolute -top-4 w-16 h-16 rounded-full bg-yellow-500 flex justify-center items-center z-10 border-4 border-white"
      >
        <img
          src="/logo/ec9141ccd046aff5a1ffb4fe60f79316.png"
          alt="Mentoons Icon"
          className="w-full h-full object-contain rounded-full"
        />
      </div>
      <div className="relative group" onClick={() => setActive("memeBanner")}>
        <button className="relative outline-none cursor-pointer">
          <FaRegLaughSquint className="text-3xl" />
        </button>
        <div className="absolute -top-10 -right-8 bg-gray-800 text-white text-sm px-3 py-1 whitespace-nowrap rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Banner & Meme
        </div>
      </div>

      <div
        className="relative group"
        onClick={() => setActive("friendRequest")}
      >
        <button className="relative outline-none cursor-pointer">
          <FaUserFriends className="text-3xl" />
          <span className="absolute -top-1 -right-2 w-5 h-5 bg-red-600 text-white text-xs flex items-center justify-center rounded-full">
            1
          </span>
        </button>
        <div className="absolute -top-10 -right-10 bg-gray-800 text-white text-sm px-3 py-1 whitespace-nowrap rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Friend Request
        </div>
      </div>

      <div className="relative group">
        <button className="relative outline-none cursor-pointer">
          <FaUser className="text-3xl" />
        </button>
        <div className="absolute -top-10 -right-5 bg-gray-800 text-white text-sm px-3 py-1 whitespace-nowrap rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Profile
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
