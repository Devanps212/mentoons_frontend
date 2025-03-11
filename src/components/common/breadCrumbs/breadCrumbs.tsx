import { BreadCrumbs } from "../../../types";

const Breadcrumbs = ({ items }: { items: BreadCrumbs[] }) => {
  return (
    <nav className="text-gray-600 text-sm">
      <ul className="flex items-center gap-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <a
              href={item.href}
              className={`hover:text-blue-600 ${
                index === items.length - 1 ? "text-gray-900 font-medium" : ""
              }`}
            >
              {item.label}
            </a>
            {index < items.length - 1 && <span className="mx-2">/</span>}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
