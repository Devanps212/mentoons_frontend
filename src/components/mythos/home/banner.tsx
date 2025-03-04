import MythosButton from "./button";

const MythosBanner = () => {
  return (
    <section className="w-full max-h-screen flex justify-center items-center py-10 bg-[#1A1D3B] mulish bg-[url('/public/background/mythos/section/stars_background.png')] bg-center px-20">
      <div className="space-y-5 p-5 text-center flex flex-col justify-center items-center">
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
