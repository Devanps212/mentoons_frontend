import MythosBanner from "../../components/mythos/home/banner";
import CosmicInfluence from "../../components/mythos/home/cosmicInfluence";
import HowItHelps from "../../components/mythos/home/howItHelps";
import JoinOurGropus from "../../components/mythos/home/joinOurGropus";
import PersonalReport from "../../components/mythos/home/personalReport";
import StepsGuide from "../../components/mythos/home/stepGuide";
import Testimonials from "../../components/mythos/home/testimonilas";

const Home = () => {
  return (
    <>
      <MythosBanner />
      <CosmicInfluence />
      <PersonalReport />
      <StepsGuide />
      <HowItHelps />
      <Testimonials />
      <JoinOurGropus />
    </>
  );
};

export default Home;
