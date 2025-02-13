import Birthday from "../components/birthdayCard/birthday";
import FriendRequest from "../components/friendRequest/friendRequest";
import Meme from "../components/memeOfTheDay/meme";
import UserStatus from "../components/userStatus/userStatus";

const Adda = () => {
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
