import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../../components/common/loader/loader";
import Layout from "../../pages/admin/layout/layout";
import Quote from "../../components/admin/quote";
const SignIn = lazy(() => import("../../pages/admin/signIn"));
const Dashboard = lazy(() => import("../../pages/admin/dashboard"));

const AdminRoute = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/quote" element={<Quote />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AdminRoute;
