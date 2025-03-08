import HelperList from "../../components/helperList/helperList";
import AboutMythos from "../../components/mythos/about/aboutMythos";
import MythosFAQ from "../../components/mythos/about/faq";
import KnowAboutUs from "../../components/mythos/about/knowAboutUs";
import ProblemFaced from "../../components/mythos/about/problemFaced";
import Products from "../../components/mythos/about/products";

const MythosAbout = () => {
  const helps = {
    "Psychology assessment":
      "a thorough assessment of your intelligence based on Howard Gardner’s (theory of 9 intelligences)",
    "Planetary impacts":
      "on your academics and career along with a detailed assessment report will be provided with necessary guidelines ",
    "Get one-on-one": "video call session with our career guides ",
  };
  return (
    <>
      <AboutMythos />
      <ProblemFaced />
      <HelperList data={helps} label="HOW WE HELP YOU" />
      <Products />
      <KnowAboutUs />
      <MythosFAQ />
    </>
  );
};

export default MythosAbout;
