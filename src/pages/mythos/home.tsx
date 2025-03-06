import MythosBanner from "../../components/mythos/home/banner";
import BlogsForYou from "../../components/mythos/home/blogsForYou";
import CosmicInfluence from "../../components/mythos/home/cosmicInfluence";
import MythosFooter from "../../components/mythos/home/footer";
import HowItHelps from "../../components/mythos/home/howItHelps";
import MembershipPlans from "../../components/mythos/home/membershipPlans";
import PersonalReport from "../../components/mythos/home/personalReport";
import SignUpSection from "../../components/mythos/home/signUp";
import StepsGuide from "../../components/mythos/home/stepGuide";
import Testimonials from "../../components/mythos/home/testimonials";

const Home = () => {
  return (
    <>
      <MythosBanner />
      <CosmicInfluence />
      <PersonalReport />
      <StepsGuide />
      <HowItHelps />
      <Testimonials />
      <BlogsForYou />
      <MembershipPlans />
      <SignUpSection />
      <MythosFooter />
    </>
  );
};

export default Home;
