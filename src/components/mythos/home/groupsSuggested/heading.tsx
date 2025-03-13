const Heading = () => {
  const groups = [
    { color: "#FE8B7D", category: "Psychologists" },
    { color: "#FFB027", category: "Birthsigns" },
    { color: "#F73E3E", category: "Aries rising" },
    { color: "#88A6FF", category: "Career" },
    { color: "#5961EF", category: "Astrologers" },
    { color: "#FE8B7D", category: "Healers" },
    { color: "#FFB027", category: "Planets" },
  ];
  return (
    <div className="flex justify-between items-start gap-5 w-full">
      <div>
        <h1 className="montserrat font-bold text-[40px] tracking-wider text-[#1A1D3B]">
          GROUPS SUGGESTED FOR YOU
        </h1>
        <p className="mulish font-semibold text-xl text-[#1A1D3B] w-lg text-wrap mt-4">
          Create groups and connect with like-minded people from your community!
        </p>
        <div className="flex flex-wrap gap-5 mt-5">
          {groups.map((text, index) => (
            <button
              className="w-fit px-3 py-3 rounded-full text-md font-bold inter"
              style={{ background: text.color }}
              key={index}
            >
              #{text.category}
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-3 mr-5">
        <h2 className="mulish text-sm tracking-wider">FOR MEMEBERS ONLY</h2>
        <h1 className="flex justify-center items-center gap-3">
          <img
            src="/icons/mythos/star.png"
            alt="star-icon"
            className="h-3 w-3 sm:h-4 sm:w-4"
          />
          <span className="mulish text-lg font-bold tracking-normal">
            EXPLORE MORE
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Heading;
