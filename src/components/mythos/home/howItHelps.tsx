import Discover from "./learnMore";

const HowItHelps = () => {
  const helps = {
    "Clarity, Purpose & Vision":
      "Establishes a clear academic, career, and life path tailored to your strengths and destiny.",
    "Career Session with a Psychologist":
      "Gain expert psychological guidance to align your aspirations with your innate potential.",
    "Time-Saving & Efficient":
      "Avoid unnecessary career experiments by making informed choices based on planetary movements and expert insights.",
  };

  return (
    <section className="relative flex flex-col justify-start items-start gap-5 px-30 py-20 w-full bg-[#1A1D3B] bg-[url('/public/background/mythos/section/stars_background.png')] bg-center overflow-hidden">
      <div className="absolute top-5 -right-60 -translate-x-1/5 w-[43%]">
        <img
          src="/background/mythos/mars.png"
          alt="mars-image"
          className="w-full object-cover opacity-50"
        />
      </div>
      <h1 className="montserrat font-semibold text-4xl tracking-[2.5px] text-[#E39712]">
        HOW IT HELPS YOU?
      </h1>
      <ul className="flex flex-col justify-center items-center gap-3 pt-10 px-0 md:px-2 lg:px-4">
        {Object.entries(helps).map(([key, value], index) => (
          <li
            key={index}
            className="group flex flex-row justify-between items-center gap-5 fredoka w-full max-w-4xl p-5 rounded-lg"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 montserrat flex items-center justify-center px-4 py-2 rounded-md text-center text-2xl md:text-3xl lg:text-[42px] font-medium text-[#44464B]">
              <span className="text-[#9FE9FF]">0{index + 1}</span>
            </div>
            <div className="text-left w-full text-white">
              <p className="leading-6 text-base md:text-[14px] lg:text-[16px] xl:text-[19px] pt-4 w-full md:w-[500px] lg:w-[600px] mulish">
                <span className="font-extrabold">{key}</span>:{" "}
                <span className="font-normal">{value}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
      <Discover label="LEARN MORE" />
    </section>
  );
};

export default HowItHelps;
