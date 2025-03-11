import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "../../components/common/loader/loader";
import Comic from "../../components/user/home/comic/comic";
import UserLayout from "../../layout/user";

const Home = lazy(() => import("../../pages/user/home"));
const Adda = lazy(() => import("../../pages/adda/adda"));
const Products = lazy(() => import("../../pages/user/products"));
const Assessment = lazy(() => import("../../pages/user/assessment"));
const Workshops = lazy(() => import("../../pages/user/workshops"));

const UserRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="adda" element={<Adda />} />
          <Route path="products/" element={<Products />} />
          <Route path="comic" element={<Comic />} />
          <Route path="assessment" element={<Assessment />} />
          <Route path="workshops" element={<Workshops />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default UserRouter;
