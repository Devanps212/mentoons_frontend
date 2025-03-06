import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Discover from "./learnMore";
import { BLOGS } from "../../../constants";
import useInView from "../../../customHooks/useInView";

const BlogsForYou = () => {
  const { ref, isInView } = useInView(0.3, false);

  return (
    <section
      ref={ref}
      className="relative w-full p-20 px-5 sm:px-10 md:px-20 bg-[#1A1D3B] overflow-hidden"
    >
      <div className="absolute w-[200%] h-3/4 -bottom-1/3 -left-1/2 bg-gradient-to-b from-[#DBF77E] via-[#4C19E8] to-[#250A85] rounded-[50%] blur-[100px] opacity-40"></div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex justify-between items-center relative z-10"
      >
        <div>
          <h1 className="montserrat font-semibold text-2xl sm:text-4xl tracking-[2.5px] text-[#E39712]">
            BLOGS FOR YOU
          </h1>
          <h4 className="mulish text-[8px] md:text-sm tracking-[1.43px] text-white mt-2">
            FOR MEMBERS-ONLY
          </h4>
        </div>
        <Discover label="LEARN MORE" />
      </motion.div>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        className="rounded-lg mt-5"
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
        }}
      >
        {BLOGS.map((blog, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 w-full space-y-5"
            >
              <img
                src="/cards/mythos/blogs/shakeHands.png"
                alt="blog-post1"
                className="w-full h-1/2 object-cover"
              />
              <span className="text-[#9FE9FF] font-semibold text-md sm:text-sm md:text-base montserrat">
                {blog.date}
              </span>
              <h1 className="mt-1 cormorant font-semibold text-3xl sm:text-lg md:text-xl lg:text-3xl text-white">
                {blog.name}
              </h1>
              <Discover label="READ MORE" />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BlogsForYou;
