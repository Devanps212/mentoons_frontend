import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center w-full p-5 bg-gradient-to-r from-[#FEB977] to-[#FF942E]">
      <div className="flex justify-between items-center gap-10">
        <div className="flex justify-start items-center">
          <img
            src="/logo/ec9141ccd046aff5a1ffb4fe60f79316.png"
            alt="mentoons-logo"
            className="w-68 h-25"
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-5 mx-auto font-semibold text-xl">
            <span className="after:content-['|'] after:ml-5 last:after:content-none">
              Home
            </span>
            <span className="after:content-['|'] after:ml-5 last:after:content-none">
              Comics
            </span>
            <span className="after:content-['|'] after:ml-5 last:after:content-none">
              Podcasts
            </span>
            <span className="after:content-['|'] after:ml-5 last:after:content-none">
              Workshops
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center">
            <FaLinkedinIn className="w-5 h-5 p-2 text-white" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
