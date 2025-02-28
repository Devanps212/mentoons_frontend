const Explore = () => {
  const exploreGroups = [
    {
      img: "/groups/explore/age 2-5.png",
      mainTitle: "Ages 2 - 5",
      description:
        "Tiny Explorers Gazette: Discovering the wonders of the World for the Little Ones!",
      bg: "#F7941D",
    },
    {
      img: "/groups/explore/age 6-12.png",
      mainTitle: "Ages 6 - 12",
      description:
        "Junior Discoverers Chronicles: Unraveling the Marvels of Knowledge for Young Minds.",
      bg: "#652D90",
    },
    {
      img: "/groups/explore/age 13-19.png",
      mainTitle: "Ages 13 - 19",
      description: "Young Horizon: Breaking news and Trends for the Teens",
      bg: "#4285F4",
    },
    {
      img: "/groups/explore/20+.png",
      mainTitle: "Ages 20+",
      description: "Beyond boundaries: News for the grown up generation.",
      bg: "#F7941D",
    },
    {
      img: "/groups/explore/parents.png",
      mainTitle: "PARENTS & carers",
      description:
        "Parenting perspectives: Insights and updates for Moms & Dads",
      bg: "#652D90",
    },
  ];

  return (
    <div className="w-full px-4 py-6 md:px-8 lg:px-12">
      <h1 className="w-full text-left font-semibold text-3xl md:text-4xl">
        Explore Our <span className="text-[#F7941D]">Group</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {exploreGroups.map((data, index) => (
          <div
            className="rounded-lg shadow-xl p-5 w-3/4 max-w-sm mx-auto"
            key={index}
          >
            <div
              className="flex flex-col justify-between items-center overflow-hidden h-60 rounded-3xl"
              style={{ backgroundColor: data.bg }}
            >
              <h1 className="text-white font-extrabold text-lg sm:text-xl md:text-2xl text-center p-2">
                {data.mainTitle.toUpperCase()}
              </h1>
              <div className="w-48 sm:w-56 h-full flex justify-center items-center">
                <img
                  src={data.img}
                  alt={data.mainTitle?.toString()}
                  className="w-full h-full object-fill rounded-lg"
                />
              </div>
            </div>
            <div className="space-y-4 mt-4">
              {data.mainTitle && (
                <h1 className="font-semibold text-lg sm:text-xl md:text-2xl">
                  {data.mainTitle}
                </h1>
              )}
              <p className="text-sm sm:text-lg w-full text-left">
                {data.description}
              </p>
              <div className="flex justify-end">
                <button className="rounded-full px-6 py-2 bg-[#EC9600] font-extrabold text-sm sm:text-lg text-white cursor-pointer">
                  JOIN NOW
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="p-5 rounded-4xl border border-black shadow-lg w-3/4 h-fit flex flex-col justify-end self-end mx-auto">
          <h1 className="font-semibold text-5xl leading-10">
            Create your{" "}
            <span className="text-[#EC9600]">own group for Parents!</span>
          </h1>
          <p className="inter leading-6 text-base mt-2">
            Have a unique interest, challenge, or idea that isn’t represented in
            our existing groups? Build your own group!
          </p>
          <div className="flex justify-center items-center my-12">
            <button className="rounded-full px-5 py-2 bg-[#652D90] roboto font-extrabold text-lg text-white cursor-pointer">
              CREATE GROUP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
