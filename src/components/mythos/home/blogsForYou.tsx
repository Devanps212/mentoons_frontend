import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Discover from "./learnMore";
import { BLOGS } from "../../../constants";

const BlogsForYou = () => {
  return (
    <section className="relative w-full p-20 px-30 bg-[#1A1D3B] overflow-hidden">
      <div className="absolute w-[200%] h-3/4 -bottom-1/3 -left-1/2 bg-gradient-to-b from-[#DBF77E] via-[#4C19E8] to-[#250A85] rounded-[50%] blur-[100px] opacity-40"></div>

      <div className="flex justify-between items-center">
        <div>
          <h1 className="montserrat font-semibold text-4xl tracking-[2.5px] text-[#E39712] text-start">
            BLOGS FOR YOU
          </h1>
          <h4 className="mulish text-sm tracking-[1.43px] text-white mt-2">
            FOR MEMBERS-ONLY
          </h4>
        </div>
        <Discover label="LEARN MORE" />
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={2}
        loop={true}
        className="rounded-lg mt-5"
      >
        {BLOGS.map((blog, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="p-6 w-full space-y-5">
              <img
                src="/cards/mythos/blogs/shakeHands.png"
                alt="blog-post1"
                className="w-full h-1/2 object-cover"
              />
              <span className="text-[#9FE9FF] font-semibold text-base montserrat">
                {blog.date}
              </span>
              <h1 className="mt-1 cormorant font-semibold text-3xl text-white">
                {blog.name}
              </h1>
              <Discover label="READ MORE" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BlogsForYou;
