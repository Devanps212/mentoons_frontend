const StatsCard = () => {
    const stats = [
      { value: "750K", label: "Website Traffic" },
      { value: "7,500", label: "Subscriptions" },
      { value: "7,500", label: "Total Earned" },
      { value: "7,500", label: "Distributions" },
    ];
    return (
      <div className="px-5 py-3 grid grid-cols-4 place-items-center">
        {stats.map((data, index) => (
          <div className="rounded-lg shadow-xl p-12 text-center" key={index}>
            <span className="block font-sans font-bold text-[#232D42] text-3xl">
              {data.value}
            </span>
            <span className="block poppins text-[20px] whitespace-nowrap text-[#8A92A6]">
              {data.label}
            </span>
          </div>
        ))}
      </div>
    );
  };
  
  export default StatsCard;
  