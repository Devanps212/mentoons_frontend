import { Link } from "react-router-dom";
import { FooterLists } from "../../../types";

const FooterLinks = ({
  Links,
  label,
}: {
  Links: FooterLists[] | string[];
  label: string;
}) => {
  return (
    <div className="w-fit space-y-5">
      <h1 className="forum text-[24px] text-[#1A1D3B] tracking-[2.4px]">
        {label}
      </h1>
      <ul className="space-y-5">
        {Links.map((item, index) => (
          <li key={index} className="flex items-center gap-3 mulish">
            <Link to={`/${item}`}>
              {typeof item === "string" ? (
                <>
                  <span>✦</span>
                  <span className="text-white font-bold text-sm ml-2">
                    {item}
                  </span>
                </>
              ) : (
                <div className="flex gap-3">
                  <item.icon className="text-xl" />
                  <span className="text-white font-bold text-sm">
                    {item.value}
                  </span>
                </div>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
