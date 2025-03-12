const WhatToExpect = ({
  expectations,
  label,
}: {
  expectations: string[];
  label: string;
}) => {
  const images = [
    {
      img: "/user/workshops/workshopsCamps/buddyCamp/interactive-group-discussions.png",
      clr: "#4285F4",
    },
    {
      img: "/user/workshops/workshopsCamps/buddyCamp/peer-learning-activities.png",
      clr: "#EF4444",
    },
    {
      img: "/user/workshops/workshopsCamps/buddyCamp/practical-workshops.png",
      clr: "#22C55E",
    },
    {
      img: "/user/workshops/workshopsCamps/buddyCamp/expert-guidance.png ",
      clr: "#F7941D",
    },
  ];

  return (
    <section className="px-5 md:p-20">
      <h1 className="text-center firasans font-medium text-4xl">
        What To Expect from {label} Camp?
      </h1>
      <div className="grid grid-cols-4 place-items-center gap-5 mt-10 px-16">
        {expectations.map((data, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center"
          >
            <div className="w-40 h-40 rounded-full p-5 flex justify-center items-center">
              <img
                src={images[index]?.img}
                alt={data}
                className="w-full object-cover"
              />
            </div>
            <h3
              className="text-xl font-semibold inter "
              style={{ color: images[index].clr }}
            >
              {data}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatToExpect;
