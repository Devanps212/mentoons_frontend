import AssessmentCards from "../../components/user/assessment/assessmentCards";
import DiscoverYourself from "../../components/user/assessment/discoverYourself";
import SampleReport from "../../components/user/assessment/sampleRepoert";
import FAQ from "../../components/user/products/faq/faq";
import { FAQ_PRODUCT } from "../../constants";

const Assessment = () => {
  return (
    <>
      <DiscoverYourself />
      <SampleReport />
      <AssessmentCards />
      <FAQ data={FAQ_PRODUCT} />
    </>
  );
};

export default Assessment;
