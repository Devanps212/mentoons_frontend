import MythosButton from "./button";

const PersonalReport = () => {
  return (
    <section className="relative py-10 w-full h-auto flex justify-between items-center gap-20 px-20 overflow-hidden">
      <img
        src="/background/mythos/personalReport/h3-rev-png5.png.png"
        className="absolute -bottom-30 right-0 w-1/2 z-[-1]"
        alt="bg-icon"
      />
      <div className="absolute inset-0 bg-[#1A1D3B] z-[-2]"></div>
      <div className="relative z-10 w-full h-full">
        <img src="/background/mythos/personalReport/Exploring virtual reality with vr headset.png" />
      </div>
      <div className="relative z-10 w-full min-h-[400px] space-y-20">
        <h1 className="text-[#E39712] font-semibold text-4xl montserrat tracking-[2.5px] leading-[60px]">
          ABOUT MENTOONS PERSONOLOGY REPORT
        </h1>
        <ul className="text-white space-y-8 mulish text-lg mt-6">
          <li className="flex items-center">
            <span className="mr-2">•</span>
            This includes psychology-based assessments.
          </li>
          <li className="flex items-center">
            <span className="mr-2">•</span>
            Get Psychological Report and Mythological Report.
          </li>
          <li className="flex items-center">
            <span className="mr-2">•</span>
            Purpose of life based on birth star.
          </li>
        </ul>
        <MythosButton label="VIEW SAMPLE REPORT" />
      </div>
    </section>
  );
};

export default PersonalReport;
