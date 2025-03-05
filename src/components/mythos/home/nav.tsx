import { Link } from "react-router-dom";

const MythosHeader = () => {
  const headerText = ["HOME", "CAREER", "GROUPS", "WORKSHOPS", "BLOG", "SHOP"];

  return (
    <header className="w-full p-5 bg-[#E39712]">
      <nav className="max-w-full px-10 flex justify-between items-center">
        <Link to="/mythos">
          <img
            src="/logo/mythos/Logo 2.png"
            alt="company logo"
            className="h-15 w-15"
          />
        </Link>

        <ul className="flex items-center gap-8 mulish text-white">
          {headerText.map((text, index) => (
            <li
              key={index}
              className="relative mulish font-bold text-sm tracking-[1.5px] group"
            >
              <Link
                to={
                  text === "HOME" ? "/mythos" : `/mythos/${text.toLowerCase()}`
                }
                className="relative"
              >
                {text}
                <span className="absolute left-1/2 -bottom-2 h-[2px] w-0 bg-gray-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex justify-center items-center gap-5">
          <button className="flex justify-center items-center rounded-full w-12 h-12 outline-dashed outline-2 outline-gray-600 cursor-pointer">
            <img
              src="/icons/mythos/Vector.png"
              alt="search-icon"
              className="w-6 h-6"
            />
          </button>

          <button className="relative flex justify-center items-center rounded-full w-12 h-12 outline-dashed outline-2 outline-gray-600 cursor-pointer">
            <img
              src="/icons/mythos/Vector (1).png"
              alt="search-icon"
              className="w-6 h-6"
            />
            <span className="absolute -top-2 right-0 border-[#E39712] w-5 h-5 bg-[#E39712] rounded-full text-white">
              0
            </span>
          </button>
          <button className="flex justify-center items-center rounded-full w-12 h-12 outline-dashed outline-2 outline-gray-600 cursor-pointer">
            <img
              src="/icons/mythos/Vector (2).png"
              alt="search-icon"
              className="w-8 h-8"
            />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default MythosHeader;
