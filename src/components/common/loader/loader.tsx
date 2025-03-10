import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <ClipLoader color="#36d7b7" loading={true} size={50} />
        <p className="akshar">Loading ...</p>
      </div>
    </div>
  );
};
export default Loader;
