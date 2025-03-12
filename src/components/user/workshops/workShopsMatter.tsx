const WorkShopsMatter = ({ matter }: { matter: string[] }) => {
  const images = [
    {
      img: "/icons/user/workshop/Learning.png",
      heading: "Engaging Learning",
    },
    {
      img: "/icons/user/workshop/Personal Growth.png",
      heading: "Character Development",
    },
    {
      img: "/icons/user/workshop/Stage.png",
      heading: "Relatable Scenarios",
    },
    {
      img: "/icons/user/workshop/Full Family.png",
      heading: "Family Bonding",
    },
  ];
  return (
    <section className="p-15 px-20 flex justify-between items-start">
      <ul className="flex flex-col justify-center items-start gap-10 w-1/2">
        {matter.map((data, index) => (
          <li className="flex items-center justify-center gap-3" key={index}>
            <div className="w-10 h-10">
              <img
                src={images[index].img}
                alt={data}
                className="w-full object-cover"
              />
            </div>
            <h1 className="inter text-xl">
              <span className="font-bold">{images[index].heading} : </span>
              <span className="font-medium">{data}</span>
            </h1>
          </li>
        ))}
      </ul>
      <div className="relative flex justify-center items-start w-1/3">
        <img
          src="/user/workshops/workshop_Matters/Why our workshops matter_.png"
          alt="workshopMater"
          className="w-full h-full object-cover"
        />
        <img
          src="/user/workshops/workshop_Matters/Young man thinking and trying to solve problem.png"
          alt="thinkingMan"
          className="absolute -bottom-40 -right-20 w-42 h-48"
        />
      </div>
    </section>
  );
};

export default WorkShopsMatter;
