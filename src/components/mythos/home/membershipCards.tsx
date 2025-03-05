import { MythosPlan } from "../../../types";
import MythosButton from "./button";

const PlanCards = ({ plan, index }: { plan: MythosPlan; index: number }) => {
  return (
    <div
      className="w-[40%] h-auto rounded-4xl border border-white border-2 mx-auto text-center p-12 flex flex-col"
      key={index}
    >
      <h1 className="cormorant font-bold text-[34px] text-white">PSYMYTH</h1>
      <span className="montserrat text-[#9FE9FF] font-semibold text-sm">
        {plan.duration} MONTH PLAN
      </span>
      <ul className="text-center montserrat font-medium text-sm space-y-6 py-5 text-white flex-grow">
        {plan.benefits.map((benefit, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: benefit }}></li>
        ))}
      </ul>
      <span className="font-bold cormorant text-5xl text-[#9FE9FF] mb-10">
        ₹{plan.price}
      </span>
      <div className="flex justify-center items-center">
        <MythosButton label="GET NOW" />
      </div>
    </div>
  );
};

export default PlanCards;
