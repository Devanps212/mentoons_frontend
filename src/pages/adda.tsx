import { useEffect } from "react";
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
    <div className="flex justify-center items-start w-full p-4 sm:p-6 gap-4 sm:gap-8">
      <div className="flex flex-col w-full gap-6 sm:gap-8">
        <UserStatus />
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
          <div className="hidden lg:flex col-span-1 items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md">
            <h1 className="text-lg font-semibold">Hello</h1>
          </div>
          <div className="col-span-1 sm:col-span-2 flex flex-col gap-6">
            <AddPosts />
            <Posts />
          </div>
          <div className="col-span-1 flex flex-col gap-6">
            <div className="shadow-lg p-4 rounded-lg bg-white">
              <FriendRequest />
            </div>
            <Meme />
            {/* <Birthday /> Uncomment if needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adda;
