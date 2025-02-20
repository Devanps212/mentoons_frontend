import { useEffect } from "react";
// import Birthday from "../components/adda/birthdayCard/birthday";
import FriendRequest from "../components/adda/friendRequest/friendRequest";
import Meme from "../components/adda/memeOfTheDay/meme";
import UserStatus from "../components/adda/userStatus/userStatus";
import AddPosts from "../components/adda/addPosts/addPosts";
import Posts from "../components/adda/addPosts/posts/posts";

const Adda = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="flex justify-evenly items-start w-full p-5">
        <div className="flex flex-col justify-start items-start gap-10 p-5">
          <UserStatus />
          <div className="flex justify-between items-center gap-5 w-full">
            <div className="w-1/3">
              
            </div>
            <div className="flex flex-col justify-center items-center gap-10 w-3/4">
              <AddPosts />
              <Posts />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="shadow-xl">
            <FriendRequest />
          </div>
          <Meme />
          {/* <Birthday /> */}
        </div>
      </div>
    </>
  );
};

export default Adda;
