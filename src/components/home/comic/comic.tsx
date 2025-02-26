import { useLocation } from "react-router-dom";

const Comic = () => {
  const { state } = useLocation();
  console.log(state);
  return <div></div>;
};

export default Comic;
