import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AuthButton = ({
  isAuthenticated,
  handleLogout,
}: {
  isAuthenticated: boolean;
  handleLogout: () => void;
}) => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <button
      className="w-36 md:w-40 flex justify-center items-center bg-gray-700 py-1 gap-5 cursor-pointer"
      onClick={isAuthenticated ? handleLogout : handleLogin}
    >
      <FaUser className="bg-gray-300 rounded-full p-1 w-5 h-5 md:w-8 md:h-8" />
      <div className="text-[10px] sm:text-xs tracking-wider text-start inter">
        <span>My Account</span>
        <br />
        <span className="font-medium text-[10px]">
          {isAuthenticated ? "LOG OUT" : "LOG IN / SIGN UP"}
        </span>
      </div>
    </button>
  );
};

export default AuthButton;
