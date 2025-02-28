import { BiBell } from "react-icons/bi";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-7 p-5 w-full bg-white">
      <h1 className="text-xl font-semibold">Admin</h1>
      <div className="flex items-center gap-6">
        <BiBell className="text-xl" />
        <div className="rounded-full w-8 h-8 bg-gray-300"></div>
      </div>
    </header>
  );
};

export default Header;
