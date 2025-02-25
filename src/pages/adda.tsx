import { useEffect, useState } from "react";
import FriendRequest from "../components/adda/friendRequest/friendRequest";
import Meme from "../components/adda/memeOfTheDay/meme";
import UserStatus from "../components/adda/userStatus/userStatus";
import AddPosts from "../components/adda/addPosts/addPosts";
import Posts from "../components/adda/addPosts/posts/posts";
import Influencer from "../components/adda/influencer/influencer";
import FounderNote from "../components/home/founderNote/founderNote";
import BottomNav from "../components/adda/bottomNav/bottomNav";
import Notification from "../components/adda/notifications/notification";

const Adda = () => {
  const [mobile, setMobile] = useState(window.innerWidth < 768);
  const [activeSection, setActiveSection] = useState<
    "home" | "notification" | "memeBanner" | "friendRequest"
  >("home");

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleSize = () => {
      setMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleSize);

    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return (
    <>
      <div className="flex justify-center items-start w-full p-4 sm:p-6 gap-4 sm:gap-8">
        <div className="flex flex-col w-full gap-6 sm:gap-8">
          <UserStatus />
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
            <div className="hidden lg:flex col-span-1 items-start justify-start p-4 bg-white rounded-lg shadow-xl h-fit">
              <FounderNote scroll={true} />
            </div>
            {mobile ? (
              <>
                {activeSection === "notification" && <Notification />}
                {activeSection === "friendRequest" && (
                  <div className="shadow-lg p-2 md:p-4 rounded-lg bg-white">
                    <FriendRequest />
                  </div>
                )}
                {activeSection === "memeBanner" && (
                  <>
                    <Influencer />
                    <Meme />
                  </>
                )}
                {activeSection === "home" && (
                  <div className="col-span-1 sm:col-span-2 flex flex-col gap-6">
                    <AddPosts />
                    <Posts />
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="col-span-1 sm:col-span-2 flex flex-col gap-6">
                  <AddPosts />
                  <Posts />
                </div>
                <div className="col-span-1 flex flex-col gap-6 hidden md:block">
                  <div className="shadow-lg p-2 md:p-4 rounded-lg bg-white">
                    <FriendRequest />
                  </div>
                  <Influencer />
                  <Meme />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <BottomNav setActive={setActiveSection} />
    </>
  );
};

export default Adda;
