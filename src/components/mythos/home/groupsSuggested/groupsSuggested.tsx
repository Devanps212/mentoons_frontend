import Heading from "./heading";

const GroupsSuggested = () => {
  return (
    <section className="px-20 py-10 flex flex-col items-center gap-8">
      <Heading />
      <div className="flex flex-wrap justify-between items-start w-full gap-6">
        <div className="flex flex-col justify-center gap-4 p-5 bg-yellow-500 w-full lg:w-1/4 rounded-xl shadow-md">
          <h1 className="text-2xl font-bold mulish">Astrologers</h1>
          <p className="text-xs inter leading-relaxed">
            Astrologers study how celestial bodies influence human behavior,
            using birth charts to predict events and provide guidance.
          </p>
          <img
            src="/cards/mythos/suggestedGroups/Purple magic ball with cards and incense stick.png"
            alt="purple_ball"
            className="w-[275px] h-[304px] mx-auto object-contain"
          />
        </div>

        <div className="flex flex-col justify-between w-full gap-7 lg:w-1/2">
          <div className="flex items-start justify-start p-6 bg-[#567AE5] rounded-xl shadow-md">
            <div className="w-3/5">
              <h1 className="text-2xl font-bold mulish">Psychologists</h1>
              <p className="text-xs inter tracking-tight leading-relaxed">
                Psychologists specialize in studying human behavior and mental
                processes, using scientific methods to understand thoughts,
                emotions, and actions.
              </p>
            </div>
            <img
              src="/cards/mythos/suggestedGroups/female psychologist sits and explains.png"
              alt="psychologists"
              className="w-[178px] h-[178px] object-contain flex-shrink-0"
            />
          </div>

          <div className="flex items-start justify-start p-6 bg-[#59DCA3] rounded-xl shadow-md">
            <div className="w-3/5">
              <h1 className="text-2xl font-bold mulish">Reiki Healers</h1>
              <p className="text-xs inter tracking-tight leading-relaxed">
                Reiki healers use hands-on energy healing to promote relaxation,
                reduce stress, and rebalance energy centers for overall
                well-being.
              </p>
            </div>
            <img
              src="/cards/mythos/suggestedGroups/woman doing yoga.png"
              alt="reiki_healers"
              className="w-[178px] h-[178px] object-contain flex-shrink-0"
            />
          </div>
        </div>

        <div className="flex flex-col w-full lg:w-1/5 gap-6">
          {[
            { name: "Aries", color: "#E39712", img: "aries.png" },
            { name: "Taurus", color: "#567AE5", img: "taurus.png" },
          ].map((sign) => (
            <div
              key={sign.name}
              className={`flex flex-col items-center p-4 bg-[${sign.color}] rounded-xl shadow-md`}
            >
              <img
                src={`/cards/mythos/suggestedGroups/${sign.img}`}
                alt={sign.name.toLowerCase()}
                className="w-20 h-20"
              />
              <h1 className="text-lg font-bold mulish">{sign.name}</h1>
              <p className="text-xs inter text-center leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GroupsSuggested;
