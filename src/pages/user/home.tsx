import AddaHomeSection from "../../components/user/home/addaSection/addaHomeSection";
import Banner from "../../components/user/home/banner/banner";
import Membership from "../../components/user/home/membership/membership";
import Community from "../../components/user/home/mentoonsCommunity/communityHome/community";
import NewsSubscription from "../../components/user/home/newsSubscription/newsSubscription";
import TopUpArrow from "../../components/user/topUpArrrow/topUpArrow";

const Home = () => {
  return (
    <main className="relative py-10 h-auto overflow-x-hidden overflow-y-hidden">
      <div className="absolute top-0 left-1/4 w-[729.07px] h-[1943.73px] bg-[#FFE0BA] rounded-full -translate-x-1/2 blur-3xl z-[-1]"></div>
      <Banner />
      <AddaHomeSection />
      <Community />
      <Membership />
      <NewsSubscription />
      <TopUpArrow />
    </main>
  );
};

export default Home;
