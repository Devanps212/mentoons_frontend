import { PROBLEMS_FACED } from "../../../constants";

const ProblemCard = () => {
  return (
    <div className="w-full flex flex-wrap justify-between gap-6">
      {PROBLEMS_FACED.map((data, index) => (
        <div
          key={index}
          className="w-80 h-80 p-5 rounded-lg flex flex-col justify-center items-center"
          style={{ backgroundColor: data.color }}
        >
          <div className="w-[100%] h-[75%]">
            <img
              src={data.img}
              alt={data.text}
              className="w-full h-full object-fill rounded-md"
            />
          </div>
          <h1 className="inter font-semibold text-lg text-white text-center mt-3">
            {data.text}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default ProblemCard;
