import { BiComment, BiShare } from "react-icons/bi";
import Likes from "../likes/likes";
import { FaRegBookmark } from "react-icons/fa6";

const Posts = () => {
  return (
    <div className="flex flex-col justify-start items-center gap-5 p-5 shadow-xl rounded-xl w-full min-h-fit">
      <div className="flex justify-start items-center gap-3 w-full">
        <div className="w-18 h-18 rounded-full overflow-hidden">
          <img
            src="/profilePictures/pexels-stefanstefancik-91227.jpg"
            alt="user-profile-picture"
            className="h-full w-full object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col figtree">
          <span className="Futura Std">Hardik</span>
          <span className="figtree text-sm text-[#807E7E]">
            Teacher at Divim Technology
          </span>
          <span className="figtree text-[12px] text-[#807E7E]">
            25 Nov at 12:24 PM
          </span>
        </div>
      </div>

      <p className="figtree text-[#3E3E59] text-base w-full break-words">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>

      <div className="w-full">
        <img
          src="/deleteItAtIntegration/post image.png"
          alt="posts"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>

      <div className="flex justify-between items-center px-5 w-full">
        <div className="flex justify-start items-center gap-13">
          <Likes />
          <div className="flex items-center gap-3">
            <button className="rounded-full w-12 h-12 p-2 border border-gray-400 flex justify-center items-center">
              <BiComment className="w-6 h-6 text-yellow-500" />
            </button>
            <span className="text-[#605F5F] text-base figtree text-sm">12</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded-full w-12 h-12 p-2 border border-gray-400 flex justify-center items-center">
              <BiShare className="w-6 h-6 text-[#EC9600]" />
            </button>
            <span className="text-[#605F5F] text-base figtree text-sm">5</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="rounded-full w-12 h-12 p-2 flex justify-center items-center">
            <FaRegBookmark className="w-6 h-6 text-[#D56A11]" />
          </button>
          <span className="text-[#605F5F] text-base figtree text-sm">5</span>
        </div>
      </div>
    </div>
  );
};

export default Posts;
