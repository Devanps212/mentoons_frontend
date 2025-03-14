import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "../../components/common/loader/loader";
import MythosLayout from "../../layout/mythos";
const MythosHome = lazy(() => import("../../pages/mythos/home"));
const About = lazy(() => import("../../pages/mythos/about"));
const MythosSignUp = lazy(() => import("../../pages/mythos/signUp"));

const MythosRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<MythosLayout />}>
          <Route path="/" element={<MythosHome />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="/signup" element={<MythosSignUp />} />
      </Routes>
    </Suspense>
  );
};

export default MythosRouter;
