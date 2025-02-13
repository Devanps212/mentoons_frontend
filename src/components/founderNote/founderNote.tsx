import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const FounderNote = () => {
  return (
    <section className="w-full h-auto pt-10">
      <h1 className="text-[48px] font-semibold pl-20 pb-10">
        The Founder’s Note
      </h1>
      <div className="flex justify-start items-start pt-10 gap-10 bg-gradient-to-b from-[rgba(251,177,62,10)] to-[rgba(255,227,166,10)]">
        <img
          src="/founder/image 28.png"
          alt="founder image"
          className="w-[550px] h-[562px]"
        />
        <div className="flex flex-col justify-start items-start w-[600px] gap-10">
          <div className="fredoka">
            <h1 className="underline decoration-3 underline-offset-6 font-normal text-[61px] tracking-[0.96px] leading-[1.2]">
              Mahesh
            </h1>
            <h2 className="font-medium text-[35px] text-[#131315] leading-[1.3]">
              Founder & CEO
            </h2>
          </div>
          <p className="inter font-normal text-[24px] text-[#0C0A09] leading-11">
            I hope this letter finds you in good health and high spirits. I am
            writing to bring to your attention a matter of great concern that
            has been witnessed in our society lately – social media addiction.
            <br />
            <strong className="underline decoration-[1.2px] underline-offset-3">
              Read More
            </strong>
          </p>
          <div className="pt-5">
            <h4 className="font-bold text-[16px] tracking-wider epilogue">
              CONNECT WITH ME HERE
            </h4>
            <div className="flex items-center gap-4 pt-5">
              <Link
                to="#"
                className="w-12 h-12 flex items-center justify-center bg-[#EC9600] text-white text-2xl rounded-full transition-all duration-300 hover:bg-[#c77f00] shadow-md"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </Link>
              <Link
                to="#"
                className="w-12 h-12 flex items-center justify-center bg-[#EC9600] text-white text-2xl rounded-full transition-all duration-300 hover:bg-[#c77f00] shadow-md"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                to="#"
                className="w-12 h-12 flex items-center justify-center bg-[#EC9600] text-white text-2xl rounded-full transition-all duration-300 hover:bg-[#c77f00] shadow-md"
                aria-label="Instagram"
              >
                <BiLogoInstagramAlt />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderNote;
