import { BiCog, BiHome, BiTask, BiUpload, BiUser, BiX } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="rounded bg-white border border-gray-200 rounded-xl shadow-xl w-1/5 h-screen">
      <div className="flex justify-between items-center w-full p-5">
        <div className="inter">
          <h1 className="text-2xl font-semibold text-[#171218]">Account</h1>
          <h5 className="text-[13px] font-normal text-black">
            Manage your Account Info
          </h5>
        </div>
        <BiX className="text-xl" />
      </div>
      <nav className="flex flex-col justify-start items-center w-full p-2 mt-5">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex justify-start items-center hover:bg-gray-100 rounded-lg w-full gap-3 p-3 ${
              isActive
                ? "bg-orange-500 text-white"
                : "text-[#F7941D] hover:bg-gray-100"
            }`
          }
        >
          <BiHome className="text-2xl" />
          DashBoard
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) =>
            `flex justify-start items-center hover:bg-gray-100 rounded-lg w-full gap-3 p-3 ${
              isActive
                ? "bg-orange-500 text-white"
                : "text-[#F7941D] hover:bg-gray-100"
            }`
          }
        >
          <BiUser className="text-2xl" />
          <span>User</span>
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            `flex justify-start items-center hover:bg-gray-100 rounded-lg w-full gap-3 p-3 ${
              isActive
                ? "bg-orange-500 text-white"
                : "text-[#F7941D] hover:bg-gray-100"
            }`
          }
        >
          <BiUpload className="text-2xl" />
          <span>Products</span>
        </NavLink>
        <NavLink
          to="/tasks"
          className={({ isActive }) =>
            `flex justify-start items-center hover:bg-gray-100 rounded-lg w-full gap-3 p-3 ${
              isActive
                ? "bg-orange-500 text-white"
                : "text-[#F7941D] hover:bg-gray-100"
            }`
          }
        >
          <BiTask className="text-2xl" />
          <span>Tasks</span>
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex justify-start items-center hover:bg-gray-100 rounded-lg w-full gap-3 p-3 ${
              isActive
                ? "bg-orange-500 text-white"
                : "text-[#F7941D] hover:bg-gray-100"
            }`
          }
        >
          <BiCog className="text-2xl" />
          <span>Settings</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default AdminSidebar;
