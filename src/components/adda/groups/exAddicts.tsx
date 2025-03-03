import GroupCards from "../cards/cards";

const ExAddicts = () => {
  const ExAddicts = [
    {
      img: "/groups/explore/age 2-5.png",
      mainTitle: "EX-ADDICTS SUPPORT",
      subTitle: "Ex-Addicts Support Groups",
      description:
        "Share recovery journeys and build resilience with like-minded individuals.",
      bg: "#F7941D",
    },
    {
      img: "/groups/explore/age 2-5.png",
      mainTitle: "PROFESSIONAL GROWTH",
      subTitle: "Professional Growth",
      description:
        "Career Corner: Network, seek advice, and explore new opportunities.",
      bg: "#F7941D",
    },
    {
      img: "/groups/explore/age 2-5.png",
      mainTitle: "PARENTING GUIDANCE",
      subTitle: "Parenting Guidance",
      description:
        "Learn and share strategies for effective and compassionate parenting.",
      bg: "#F7941D",
    },
  ];

  return (
    <div className="w-full px-4 py-6 md:px-8 lg:px-12 mt-20">
      <h1 className="w-full text-left font-semibold text-3xl md:text-4xl">
        Ex- Addicts Support Groups
      </h1>
      <GroupCards cardData={ExAddicts} type="specializedRole" />
    </div>
  );
};

export default ExAddicts;
