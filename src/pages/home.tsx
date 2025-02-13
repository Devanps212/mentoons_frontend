import AddaHomeSection from "../components/addaSection/addaHomeSection";
import Banner from "../components/banner/banner";
import FounderNote from "../components/founderNote/founderNote";
import Community from "../components/mentoonsCommunity/communityHome/community";

const Home = () => {
  return (
    <>
      <div className="relative py-10 h-auto">
        <div className="absolute top-0 left-1/4 w-[729.07px] h-[1943.73px] bg-[#FFE0BA] rounded-full -translate-x-1/2 blur-3xl z-[-1]"></div>
        <Banner />
        <AddaHomeSection />
        <Community />
        <FounderNote />
      </div>
    </>
  );
};

export default Home;
