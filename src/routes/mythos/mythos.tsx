import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "../../components/common/loader/loader";
const Header = lazy(() => import("../../components/mythos/home/nav"));
const MythosHome = lazy(() => import("../../pages/mythos/home"));
const About = lazy(() => import("../../pages/mythos/about"));

const MythosRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Routes>
        <Route path="/" element={<MythosHome />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  );
};

export default MythosRouter;
