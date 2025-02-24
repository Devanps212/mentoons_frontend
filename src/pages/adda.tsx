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
          <div className="hidden lg:flex col-span-1 items-start justify-start p-4 bg-white rounded-lg shadow-xl h-fit">
            <div className="flex flex-col justify-center items-center w-full">
              <div className="text-center p-5">
                <h1 className="text-6xl font-semibold text-[#FF4500]">
                  Mahesh
                </h1>
                <h2 className="text-2xl font-medium text-[#008080]">
                  Founder & CEO
                </h2>
              </div>
              <div className="flex justify-center items-center text-center rounded-lg w-full h-auto p-3">
                <img
                  src="/founder/image 28.png"
                  alt="founder image"
                  className="max-w-xs w-60 h-60 rounded-full border-4 border-[#6A5ACD]"
                />
              </div>
              <p
                className="text-[#555555] text-lg px-6"
                style={{ textAlign: "justify" }}
              >
                I hope this letter finds you in good health and high spirits. I
                am writing to bring to your attention a matter of great concern
                that has been witnessed in our society lately – social media
                addiction.
              </p>
            </div>
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
