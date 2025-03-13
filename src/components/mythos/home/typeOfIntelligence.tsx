import MythosButton from "./button";

const TypeOfIntelligence = () => {
  const intelligence = [
    "Based on Howard Gardner's theory of multiple intelligences",
    "Find out which intelligence type you ae based on our psychologist approved assessments",
    "Take control of your life with the detailed solutions we provide you with the assessment.",
  ];

  return (
    <section className="relative px-30 py-7 flex flex-col md:flex-row justify-between items-center gap-4 bg-[#FEEBD5]">
      <img
        src="/icons/mythos/h3-rev-png2.png.png"
        alt="all_intelligence"
        className="absolute top-15 right-20 w-8 h-10"
      />
      <div className="flex flex-col justify-start items-start max-w-xl">
        <h1 className="text-2xl md:text-4xl font-bold mb-6 montserrat w-xl leading-[1.8] text-[#1A1D3B] tracking-wider">
          WHAT TYPE OF INTELLIGENCE ARE YOU?
        </h1>
        <ul className="space-y-6 mb-8 mulish mt-6 space-y-8 w-lg">
          {intelligence.map((item, index) => (
            <li
              className="flex items-start text-base md:text-xl text-[#1A1D3B]"
              key={index}
            >
              <span className="mr-2 text-xl mt-1.5">⬤</span>
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-5">
          <MythosButton label="LEARN MORE" bg="#1A1D3B" textClr="white" />
        </div>
      </div>

      <div className="w-full md:w-4/6 lg:w-5/6 max-w-lg md:max-w-2xl h-auto md:h-[450px] lg:h-[550px]">
        <img
          src="/background/mythos/typesOfIntelligence/image 8.png"
          alt="intelligence"
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
};

export default TypeOfIntelligence;
