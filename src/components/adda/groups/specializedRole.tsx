const Specialized = () => {
  const exploreGroups = [
    {
      img: "/groups/explore/Man helping friend to stand up.png",
      mainTitle: "NGOs",
      subTitle: "NGOs",
      description: "Collaborate on social impact projects and initiatives.",
      bg: "#F7941D",
    },
    {
      img: "/groups/explore/Psychologist.png",
      mainTitle: "Psychologists",
      subTitle: "Psychologists Group",
      description:
        "Exchange insights and advice with mental health professionals.",
      bg: "#4285F4",
    },
    {
      img: "/groups/explore/teachers.png",
      mainTitle: "Academic Teachers",
      subTitle: "Academic Teachers",
      description: "Discuss teaching strategies and educational trends.",
      bg: "#652D90",
    },
    // {
    //   img: "/groups/explore/age 2-5.png",
    //   mainTitle: "Social Media Enthusiasts",
    //   subTitle: "Social Media Enthusiasts",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //   bg: "#F7941D",
    // },
    // {
    //   img: "/groups/explore/age 2-5.png",
    //   mainTitle: "Gamers and Influencers",
    //   subTitle: "Gamers and Influencers",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //   bg: "#F7941D",
    // },
    // {
    //   img: "/groups/explore/age 2-5.png",
    //   mainTitle: "Cooking Enthusiasts",
    //   subTitle: "Cooking Enthusiasts",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //   bg: "#F7941D",
    // },
  ];

  return (
    <div className="w-full px-4 py-6 md:px-8 lg:px-12 mt-20">
      <h1 className="w-full text-left font-semibold text-3xl md:text-4xl">
        Specialized Roles
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
                  alt={data.mainTitle}
                  className="w-full h-full object-fill rounded-lg"
                />
              </div>
            </div>
            <div className="space-y-4 mt-4">
              {data.subTitle && (
                <h1 className="font-semibold text-lg sm:text-xl md:text-2xl">
                  {data.subTitle}
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
      </div>
    </div>
  );
};

export default Specialized;
