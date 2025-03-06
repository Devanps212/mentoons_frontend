import MythosCards from "./cards";

const StepsGuide = () => {
  const Steps = [
    {
      img: "/icons/mythos/steps/id.png",
      description: "GIve your Birth Details",
    },
    {
      img: "/icons/mythos/steps/paste.png",
      description: "Get your Personology Report",
    },
    {
      img: "/icons/mythos/steps/idea lamp with pencil (1).png",
      description: "Approach the Solution",
    },
    {
      img: "/icons/mythos/steps/account.png",
      description: "Observe the Changes",
    },
  ];
  return (
    <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center overflow-hidden bg-[#1A1D3B]">
      {Steps.map((data, index) => (
        <MythosCards data={data} index={index + 1} />
      ))}
    </section>
  );
};

export default StepsGuide;
