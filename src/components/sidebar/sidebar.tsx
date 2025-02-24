import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="min-w-screen min-h-screen flex justify-center items-center bg-gray-400 bg-opacity-75">
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="px-5 py-3">
          <Link to="#">HOME</Link>
        </div>
        <div className="px-5 py-3">
          <Link to="#">HOME</Link>
        </div>
        <div className="px-5 py-3">
          <Link to="#">HOME</Link>
        </div>
        <div className="px-5 py-3">
          <Link to="#">HOME</Link>
        </div>
        <div className="px-5 py-3">
          <Link to="#">HOME</Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
