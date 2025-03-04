import { MythosCardProps } from "../../../types";

const MythosCards = ({
  data,
  index,
}: {
  data: MythosCardProps;
  index: number;
}) => {
  return (
    <div className="w-[99.5%] h-[550px] p-14 flex flex-col items-center justify-between text-center bg-[#E39712]">
      <img
        src={data.img}
        className="w-40 h-40 max-w-full max-h-full object-contain"
        alt={`Step ${index} icon`}
      />
      <h1 className="montserrat font-semibold text-5xl text-[#1A1D3B]">
        STEP {index}
      </h1>
      <p className="mulish font-semibold text-4xl leading-[40px] text-white">
        {data.description}
      </p>
    </div>
  );
};

export default MythosCards;
