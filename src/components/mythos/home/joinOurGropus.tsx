import JoinCards from "./joinCards";
import Discover from "./learnMore";

const JoinOurGropus = () => {
  return (
    <section className="w-full px-5 p-20 px-30 bg-[#1A1D3B]">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="montserrat font-semibold text-4xl tracking-[2.5px] text-[#E39712] text-start">
            JOIN OUR GROUPS
          </h1>
          <h4 className="mulish text-sm tracking-[1.43px] text-white mt-2">
            FOR MEMBERS-ONLY
          </h4>
        </div>
        <Discover label="EXPLORE MORE" />
      </div>
      <JoinCards />
    </section>
  );
};

export default JoinOurGropus;
