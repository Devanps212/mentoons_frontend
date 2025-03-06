import ProblemCard from "./problemCard";

const ProblemFaced = () => {
  return (
    <section className="py-10 px-4 md:px-20 bg-[#1A1D3B]">
      <h1 className="text-[#E39712] font-semibold text-3xl sm:text-4xl md:text-[36px] montserrat mb-6 tracking-[2.5px]">
        THE PROBLEMS FACED BY PEOPLE
      </h1>
      <div className="flex justify-between items-center px-10 mt-20">
        <ProblemCard />
      </div>
    </section>
  );
};

export default ProblemFaced;
