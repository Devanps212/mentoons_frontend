import { BiFilter, BiPlus, BiSearch } from "react-icons/bi";
import StatsCard from "../../components/admin/dashboard/statsCard";
import UserTable from "../../components/admin/dashboard/userTable";

const Dashboard = () => {
  return (
    <div className="m-5 rounded-xl shadow-lg bg-white">
      <StatsCard />
      <div className="p-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <button className="px-3 py-2 rounded-lg border border-gray-300 w-auto flex items-center poppins text-sm text-[#344054] cursor-pointer">
              <BiFilter className="text-xl" />
              <span className="ml-3">Filter</span>
            </button>
            <button className="px-3 py-2 bg-[#EC9600] rounded-lg border border-gray-300 w-auto flex items-center poppins text-sm text-[#344054] cursor-pointer text-white">
              <BiPlus className="text-xl" />
              <span className="ml-3">Add a user</span>
            </button>
          </div>
          <div className="flex justify-start p-2 items-center rounded-md border border-gray-400">
            <BiSearch className="text-xl" />
            <input
              type="text"
              placeholder="Search"
              className="outline-none ml-3"
            />
          </div>
        </div>
        <UserTable />
      </div>
    </div>
  );
};

export default Dashboard;
