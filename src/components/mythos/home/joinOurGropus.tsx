import JoinCards from "./joinCards";
import Discover from "./learnMore";
import { JOIN } from "../../../constants";

const JoinOurGropus = () => {
  return (
    <section className="relative w-full px-5 p-20 px-30 bg-[#1A1D3B]">
      <img
        src="/background/mythos/joinGroups/Vector.png"
        alt="vector-path"
        className="absolute top-3/5 left-1/2 w-[50%] h-[100%] transform -translate-x-1/2 -translate-y-1/2 object-center"
      />
      <div className="relative flex justify-between items-center">
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
      <div className="relative flex justify-between w-full mt-20">
        {JOIN.map((data, index) => (
          <JoinCards cards={data} index={index} />
        ))}
      </div>
    </section>
  );
};

export default JoinOurGropus;
