import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Discover = ({ label }: { label: string }) => {
  return (
    <Link
      to="#"
      className="flex items-center gap-2 mt-10 text-white w-fit group"
    >
      <img src="/icons/mythos/star.png" alt="star-icon" className="h-3 w-3" />
      <span className="font-bold text-[13px] tracking-[1.3px]">{label}</span>
      <FaChevronRight className="text-white text-sm transition-transform group-hover:translate-x-2" />
    </Link>
  );
};

export default Discover;
