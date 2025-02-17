import { useEffect, useState } from "react";
import { UserStatusInterface } from "../../types";
import { FaPlus } from "react-icons/fa";
import { STATUSES } from "../../constants";
import axios, { AxiosError } from "axios";

const UserStatus = () => {
  const [statuses, setStatuses] = useState<UserStatusInterface[]>(STATUSES);

  setStatuses(STATUSES); //remove

  useEffect(() => {
    const fetchUserStatus = async () => {
      try {
        const userData = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/user/status`
        );

        console.log(userData);
        // setStatuses(userData.data);
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          console.log(error.message);
        } else {
          console.log(error);
        }
      }
    };

    fetchUserStatus();
  }, []);

  return (
    <div className="flex justify-start items-center gap-10 p-[2px] w-full">
      <div className="flex flex-col justify-center items-center gap-1">
        <label
          htmlFor="upload"
          className="w-25 h-25 relative bg-[#FFDC9F] border-dotted border-3 border-[#EC9600] rounded-full flex justify-center items-center"
          style={{ borderSpacing: "10px" }}
        >
          <FaPlus className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#EC9600] text-3xl font-bolder p-1 border-3 border-[#EC9600] rounded-full" />
          <input
            type="file"
            id="upload"
            hidden
            accept="image/jpeg, image/jpg"
          />
        </label>
        <span className="text-center">Share Story</span>
      </div>
      {statuses.map(({ isWatched, userProfilePic, userName }, index) => (
        <div key={index} className="flex flex-col justify-center gap-1">
          <div
            className={`w-25 h-25 bg-red-500 rounded-full border-3 flex justify-center items-center ${
              isWatched ? "border-gray-400" : "border-blue-500"
            }`}
          >
            <img
              src={userProfilePic}
              alt={userName}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <span className="text-center">{userName}</span>
        </div>
      ))}
    </div>
  );
};

export default UserStatus;
