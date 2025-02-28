import Explore from "../../components/adda/groups/explore";
import Parents from "../../components/adda/groups/parents";
import Specialized from "../../components/adda/groups/specializedRole";

const Groups = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="flex flex-col justify-center items-center w-full">
        <Parents />
        <Explore />
        <Specialized />
      </div>
    </div>
  );
};

export default Groups;
