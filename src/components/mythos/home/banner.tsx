import MythosButton from "./button";

const MythosBanner = () => {
  return (
    <section className="relative w-full h-screen flex justify-center items-center py-10 bg-[#1A1D3B] mulish px-20 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="/background/mythos/banner/Planets 2_1.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="relative space-y-5 p-5 text-center flex flex-col justify-center items-center">
        <h1 className="text-[#E39712] font-semibold text-[54px] tracking-[1.9px] montserrat">
          LET THE PLANETS GUIDE YOUR CAREER
        </h1>
        <p className="font-semibold text-2xl w-[45%] text-white">
          Feeling stuck in life? Let your birth sign find solutions to all your
          problems
        </p>
        <div className="flex justify-center mt-10">
          <MythosButton label="FIND YOUR PATH" />
        </div>
        <img
          src="/icons/mythos/Subtract.png"
          alt="subtract-icon"
          className="h-44 w-44 mt-25 drop-shadow-[0px_10px_0px_rgba(200,200,200,0.3)]"
        />
      </div>
    </section>
  );
};

export default MythosBanner;
