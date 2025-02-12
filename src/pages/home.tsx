import AddaHomeSection from "../components/addaSection/addaHomeSection";
import Banner from "../components/banner/banner";
// import ContentSafety from "../components/contentSafety/contentSafety";

const Home = () => {
  return (
    <>
      <div className="relative px-20 py-10 h-auto">
        <div className="absolute top-0 left-90 w-96 h-auto bg-yellow-500 rounded-full -translate-x-1/2 blur-3xl opacity-50"></div>
        <Banner />
        <div className="px-20">
          <AddaHomeSection />
        </div>
      </div>
    </>
  );
};

export default Home;
