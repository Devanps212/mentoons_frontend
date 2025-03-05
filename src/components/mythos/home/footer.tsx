import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { CONTACT_INFO, CAREER, PLANET } from "../../../constants";
import FooterLinks from "./footerLinks";
import { BiLogoInstagramAlt } from "react-icons/bi";

const MythosFooter = () => {
  return (
    <footer className="w-full py-25 flex justify-center items-center bg-[#E39712]">
      <div className="grid grid-cols-4 place-items-start px-20">
        <FooterLinks Links={CONTACT_INFO} label="CONTACT INFO" />
        <FooterLinks Links={CAREER} label="CAREER" />
        <FooterLinks Links={PLANET} label="PLANET" />
        <div className="w-fit space-y-10">
          <h1 className="forum text-[24px] text-[#1A1D3B] tracking-[2.4px] lg:whitespace-nowrap">
            SIGN-UP FOR OUR NEWSLETTER
          </h1>
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Email..."
                className="border border-gray-800 p-3 outline-none"
              />
              <button className="border border-l-0 flex items-center gap-2 bg-white px-6 py-3">
                <span>✦</span>
                <span className="text-[#E39712] mulish text-[13px]">
                  SUBMIT
                </span>
              </button>
            </div>
            <span className="text-sm text-gray-500">
              We promise not to spam you
            </span>
          </div>
          <div>
            <h1 className="forum text-[24px] text-[#1A1D3B] tracking-[2.4px]">
              SOCIAL MEDIA
            </h1>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#9FE9FF]">
                <FaFacebookF />
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#9FE9FF]">
                <FaTwitter />
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#9FE9FF]">
                <FaLinkedinIn />
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#9FE9FF]">
                <BiLogoInstagramAlt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MythosFooter;
