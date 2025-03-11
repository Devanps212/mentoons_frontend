import { Outlet, useLocation } from "react-router-dom";
import PrimaryHeader from "../components/common/primaryHeader/primaryHeader";
import SecondaryHeader from "../components/common/secondaryHeader/secondaryHeader";
import Breadcrumbs from "../components/common/breadCrumbs/breadCrumbs";
import { useMemo } from "react";

const UserLayout = () => {
  const location = useLocation();
  const breadcrumbMap: Record<string, string> = {
    "/": "Home",
    "/adda": "Adda",
    "/products": "Products",
    "/comic": "Comic",
    "/assessment": "Assessment",
  };

  const breadcrumbs = useMemo(() => {
    const paths = location.pathname.split("/").filter(Boolean);
    const breadcrumbList = paths.map((path, index) => {
      const url = `/${paths.slice(0, index + 1).join("/")}`;
      return { label: breadcrumbMap[url] || path, href: url };
    });

    return [{ label: "Home", href: "/" }, ...breadcrumbList];
  }, [location.pathname]);

  return (
    <main className="min-h-screen">
      <PrimaryHeader />
      <SecondaryHeader />
      <div className="absolute top-1/6 left-10 p-4 z-10">
        <Breadcrumbs items={breadcrumbs} />
      </div>
      <Outlet />
    </main>
  );
};

export default UserLayout;
