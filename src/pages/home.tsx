import AddaHomeSection from "../components/home/addaSection/addaHomeSection";
import Banner from "../components/home/banner/banner";
import Footer from "../components/home/footer/footer";
import Membership from "../components/home/membership/membership";
import Community from "../components/home/mentoonsCommunity/communityHome/community";
import NewsSubscription from "../components/home/newsSubscription/newsSubscription";
import useInView from "../customHooks/useInView";
import { motion } from "framer-motion";

const Home = () => {
  const { ref: sectionRef, isInView } = useInView(0.3, false);

  return (
    <div className="relative py-10 h-auto">
      <div className="absolute top-0 left-1/4 w-[729.07px] h-[1943.73px] bg-[#FFE0BA] rounded-full -translate-x-1/2 blur-3xl z-[-1]"></div>
      <Banner />
      <AddaHomeSection />
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-gradient-to-r from-[rgba(255,187,68,0.7)] to-[rgba(253,185,147,0.7)]"
      >
        <Community />
        <Membership />
      </motion.div>
      <NewsSubscription />
      <Footer />
    </div>
  );
};

export default Home;
