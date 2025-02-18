import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const FounderNote = () => {
  return (
    <section className="w-full p-5 bg-gradient-to-b from-[#FBB13E] to-[#FFE3A6]">
      <div className="flex justify-center items-start gap-10 px-5">
        <div className="flex flex-col items-start w-full max-w-4xl gap-10 bg-white p-6 rounded-lg shadow-xl h-[400px] overflow-y-auto">
          <div className="text-center">
            <h1 className="text-6xl font-semibold text-[#0C0A09]">Mahesh</h1>
            <h2 className="text-2xl font-medium text-[#131315]">
              Founder & CEO
            </h2>
          </div>

          <div className="flex justify-center">
            <img
              src="/founder/image 28.png"
              alt="founder image"
              className="rounded-lg shadow-lg max-w-xs"
            />
          </div>

          <p className="text-lg text-[#0C0A09] leading-relaxed mt-6">
            I hope this letter finds you in good health and high spirits. I am
            writing to bring to your attention a matter of great concern that
            has been witnessed in our society lately – social media addiction.
            <br />
            <a
              href="#"
              className="text-[#EC9600] font-semibold underline hover:text-[#c77f00]"
            >
              Read More
            </a>
          </p>

          <div className="pt-5">
            <h4 className="font-bold text-lg tracking-wide text-[#131315]">
              CONNECT WITH ME HERE
            </h4>
            <div className="flex gap-4 pt-5">
              {[
                { icon: <FaFacebookF />, label: "Facebook" },
                { icon: <FaLinkedinIn />, label: "LinkedIn" },
                { icon: <BiLogoInstagramAlt />, label: "Instagram" },
              ].map((social, index) => (
                <div
                  key={index}
                  className="w-12 h-12 flex items-center justify-center bg-[#EC9600] text-white text-2xl rounded-full transition-all duration-300 hover:bg-[#c77f00] shadow-md"
                  aria-label={social.label}
                >
                  {social.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderNote;
