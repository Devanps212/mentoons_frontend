import { MYTHOS_PLANS } from "../../../constants";
import PlanCards from "./membershipCards";

const MembershipPlans = () => {
  return (
    <section className="relative w-full p-20 px-30 bg-[#1A1D3B] mx-auto overflow-hidden">
      <img
        src="/background/mythos/AY.png"
        alt="bg-moon"
        className="absolute top-1/2 left-1/2 w-[90%] h-[100%] max-w-none object-cover transform -translate-x-1/2 -translate-y-1/2 z-0 shadow-2xl shadow-black/30"
      />
      <div className="absolute inset-0 bg-[rgba(26,29,59,0.85)] z-0"></div>
      <div className="relative z-[1] text-white text-center">
        <h1 className="montserrat font-semibold text-4xl text-[#E39712]">
          Check Our Membership Plan
        </h1>
        <div className="flex justify-center gap-3 mt-16">
          {MYTHOS_PLANS.map((plan, index) => (
            <PlanCards key={index} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipPlans;
