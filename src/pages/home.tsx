import AddaHomeSection from "../components/addaSection/addaHomeSection";
import Banner from "../components/banner/banner";
import ContentSafety from "../components/contentSafety/contentSafety";

const Home = () => {
  return (
    <>
      <ContentSafety />
      <Banner />
      <div className="px-20">
        <AddaHomeSection />
      </div>
    </>
  );
};

export default Home;
