import { lazy } from "react";
import { Outlet } from "react-router-dom";
const Header = lazy(() => import("../components/mythos/home/nav"));

const MythosLayout = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};

export default MythosLayout;
