import { useEffect } from "react";
import Birthday from "../components/adda/birthdayCard/birthday";
import FriendRequest from "../components/adda/friendRequest/friendRequest";
import Meme from "../components/adda/memeOfTheDay/meme";
import UserStatus from "../components/adda/userStatus/userStatus";

const Adda = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="flex justify-evenly items-start w-full pt-12">
        <div className="flex flex-col justify-start items-start">
          <UserStatus />
        </div>
        <div className="flex flex-col justify-center items-center gap-10">
          <Birthday />
          <Meme />
          <div className="shadow-xl">
            <FriendRequest />
          </div>
        </div>
      </div>
    </>
  );
};

export default Adda;
