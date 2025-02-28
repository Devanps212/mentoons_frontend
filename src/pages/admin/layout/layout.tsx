import { Outlet } from "react-router-dom";
import AdminSidebar from "../../../components/admin/sidebar";
import Header from "../../../components/admin/header";

const Layout = () => {
  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <div className="flex flex-col w-full">
        <Header />
        <div className="bg-gray-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
