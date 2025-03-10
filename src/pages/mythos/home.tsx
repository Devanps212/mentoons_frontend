import HelperList from "../../components/common/helperList/helperList";
import MythosBanner from "../../components/mythos/home/banner";
import BlogsForYou from "../../components/mythos/home/blogsForYou";
import CosmicInfluence from "../../components/mythos/home/cosmicInfluence";
import MythosFooter from "../../components/mythos/home/footer";
import MembershipPlans from "../../components/mythos/home/membershipPlans";
import PersonalReport from "../../components/mythos/home/personalReport";
import SignUpSection from "../../components/mythos/home/signUp";
import StepsGuide from "../../components/mythos/home/stepGuide";
// import Testimonials from "../../components/mythos/home/testimonials";

const Home = () => {
  const helps = {
    "Clarity, Purpose & Vision":
      "Establishes a clear academic, career, and life path tailored to your strengths and destiny.",
    "Career Session with a Psychologist":
      "Gain expert psychological guidance to align your aspirations with your innate potential.",
    "Time-Saving & Efficient":
      "Avoid unnecessary career experiments by making informed choices based on planetary movements and expert insights.",
  };
  return (
    <>
      <MythosBanner />
      <CosmicInfluence />
      <PersonalReport />
      <StepsGuide />
      <HelperList data={helps} label="HOW IT HELPS YOU" />
      {/* <Testimonials /> */}
      <BlogsForYou />
      <MembershipPlans />
      <SignUpSection />
      <MythosFooter />
    </>
  );
};

export default Home;
