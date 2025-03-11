import AssessmentCards from "../../components/user/assessment/assessmentCards";
import DiscoverYourself from "../../components/user/assessment/discoverYourself";
import SampleReport from "../../components/user/assessment/sampleRepoert";
import ProductsFAQ from "../../components/user/products/faq/faq";

const Assessment = () => {
  return (
    <>
      <DiscoverYourself />
      <SampleReport />
      <AssessmentCards />
      <ProductsFAQ />
    </>
  );
};

export default Assessment;
