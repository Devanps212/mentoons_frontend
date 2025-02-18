import { COMMUNITY } from "../../../../constants";

const Details = () => {
  return (
    <ul className="flex flex-col justify-center items-center gap-15 pt-10">
      {COMMUNITY.map(({ title, description, color }, index) => (
        <li
          className="flex justify-start items-start gap-5 fredoka"
          key={index}
        >
          <div
            className="w-18 h-19 flex items-center justify-center px-6 py-2 rounded-md text-center text-[42px] font-medium text-[#44464B]"
            style={{ backgroundColor: color }}
          >
            0{index + 1}
          </div>

          <div>
            <h1 className="fredoka text-3xl font-semibold text-[#131315] underline decoration-2 underline-offset-3">
              {title}
            </h1>
            <p className="font-normal leading-5 text-[19px] pt-4 w-[600px]">
              {description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Details;
