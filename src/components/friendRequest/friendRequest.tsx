import { useState } from "react";
import { FRIEND_REQUEST } from "../../constants";
import { RequestInterface } from "../../types";

const FriendRequest = () => {
  const [requests, setRequests] = useState<RequestInterface[] | null>(
    FRIEND_REQUEST
  );
  
  setRequests(null) //remove

  return (
    <div className="flex flex-col items-center p-4 mt-10">
      {requests?.map(({ profilePic, userName }, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-white rounded-lg p-4 w-72 gap-4"
        >
          <div className="flex justify-start items-center gap-4 w-full">
            <div className="w-14 h-14 rounded-full border-2 border-gray-300 overflow-hidden">
              <img
                src={profilePic}
                alt={userName}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-medium">{userName}</h3>
          </div>
          <div className="flex justify-between w-full gap-3">
            <button className="flex-1 py-2 rounded-lg bg-gradient-to-r from-[#05f] via-[#09f] to-[#1E74FD] text-white font-medium hover:opacity-80 transition">
              Confirm
            </button>
            <button className="flex-1 py-2 rounded-lg bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 transition">
              Cancel
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FriendRequest;
