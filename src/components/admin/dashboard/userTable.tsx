import { BiCheckCircle, BiChevronDown } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@gmail.com",
    location: "Mumbai",
    occupation: "Freelance",
    subscription: 2,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith@gmail.com",
    location: "New York",
    occupation: "Designer",
    subscription: 3,
  },
];

const UserTable = () => {
  return (
    <div className="overflow-x-auto mt-10">
      <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <thead className="bg-gray-100 text-gray-600 uppercase text-sm font-semibold">
          <tr>
            <th className="py-3 px-4 text-left">
              <FaCheck className="text-gray-500" />
            </th>
            <th className="py-3 px-4 text-left">
              Learners <BiChevronDown className="inline" />
            </th>
            <th className="py-3 px-4 text-left">
              Location <BiChevronDown className="inline" />
            </th>
            <th className="py-3 px-4 text-left">
              Occupation <BiChevronDown className="inline" />
            </th>
            <th className="py-3 px-4 text-left">
              Subscription <BiChevronDown className="inline" />
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="py-3 px-4">
                <BiCheckCircle className="text-green-500" />
              </td>
              <td className="py-3 px-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div>
                  <h1 className="font-semibold">{user.name}</h1>
                  <span className="text-sm text-gray-500">{user.email}</span>
                </div>
              </td>
              <td className="py-3 px-4">{user.location}</td>
              <td className="py-3 px-4">{user.occupation}</td>
              <td className="py-3 px-4 font-semibold">{user.subscription}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-5 bg-white p-4 shadow-md rounded-lg">
        <button className="border border-gray-400 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition min-w-[100px]">
          Previous
        </button>
        <span className="text-gray-700 font-medium">Page 1 of 10</span>
        <button className="border border-gray-400 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition min-w-[100px]">
          Next
        </button>
      </div>
    </div>
  );
};

export default UserTable;
