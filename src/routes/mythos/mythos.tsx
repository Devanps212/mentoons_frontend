import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "../../components/loader/loader";
const Header = lazy(() => import("../../components/mythos/home/nav"));
const MythosHome = lazy(() => import("../../pages/mythos/home"));

const MythosRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Routes>
        <Route path="/" element={<MythosHome />} />
      </Routes>
    </Suspense>
  );
};

export default MythosRouter;
