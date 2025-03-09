const ProductsBanner = () => {
  const comic = {
    "6-12": "#FCE83E",
    "13-19": "#EF4444",
    "20+": "#4E90FF",
    Parents: "#34A853",
  };

  return (
    <section className="w-full h-[550px] p-7 flex flex-col justify-between items-center bg-[url('/background/products/image49.png')] bg-center bg-cover">
      <h1 className="font-medium text-5xl">Mentoons Store</h1>
      <ul className="grid grid-cols-2 md:grid-cols-4 place-items-center gap-3">
        {Object.entries(comic).map(([key, value], index) => (
          <li key={index}>
            <button
              className="px-15 py-3 border border-black rounded-full montserrat font-bold text-xl transition-all hover:opacity-80 hover:scale-105 cursor-pointer"
              style={{ backgroundColor: value }}
            >
              {key}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductsBanner;
