import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../../components/common/loader/loader";
const Home = lazy(() => import("../../pages/adda/adda"));
const Groups = lazy(() => import("../../pages/adda/groups"));

const PrimaryHeader = lazy(
  () => import("../../components/common/primaryHeader/primaryHeader")
);
const SecondaryHeader = lazy(
  () => import("../../components/common/secondaryHeader/secondaryHeader")
);

const AddaRoute = () => {
  return (
    <Suspense fallback={<Loader />}>
      <PrimaryHeader />
      <SecondaryHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/groups" element={<Groups />} />
      </Routes>
    </Suspense>
  );
};

export default AddaRoute;
