import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center max-w-screen h-23 px-16 shadow-[0px_11.42px_11.42px_rgba(0,0,0,0.25)]">
      <ul className="flex justify-center items-center gap-33 text-[34.27px] text-center font-medium text-[#3C4043]">
        <li>
          <Link to="#">Home</Link>
        </li>
        <li>
          <Link to="#">Friends</Link>
        </li>
        <li>
          <Link to="#">Groups</Link>
        </li>
        <li>
          <Link to="#">Products</Link>
        </li>
      </ul>
      <ul className="flex justify-center items-center gap-8">
        <li>
          <Link to="#">
            <img
              src="/icons/41c2d9e593672d1ce41fbedfb5c03b61.png"
              alt="message-icon"
              className="w-[64px] h-[62.83px]"
            />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img
              src="/icons/41c3ea947c5851ac1c96b872e2864ebe.png"
              alt="user-icon"
              className="w-[64px] h-[62.83px]"
            />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img
              src="/icons/8af5920c91db64b840d2fe4dc85b6a4d.png"
              alt="message-icon"
              className="w-[64px] h-[62.83px]"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
