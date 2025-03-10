import { PROBLEMS_FACED } from "../../../constants";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Autoplay, Pagination, EffectCards } from "swiper/modules";
import "swiper/swiper-bundle.css";

const ProblemCard = () => {
  return (
    <div className="w-full px-4 py-8">
      <Swiper
        modules={[Navigation, Autoplay, Pagination, EffectCards]}
        spaceBetween={30}
        navigation
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        className="w-full"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {PROBLEMS_FACED.map((data, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center py-6"
          >
            <div
              className="w-full h-80 p-5 rounded-xl flex flex-col justify-center items-center shadow-xl transition-all duration-300 hover:shadow-2xl hover:translate-y-[-5px]"
              style={{ backgroundColor: data.color }}
            >
              <div className="w-[280px] flex justify-center items-center overflow-hidden rounded-lg">
                <img
                  src={data.img}
                  alt={data.text}
                  className="w-full h-full object-contain rounded-md transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="mt-4 w-full">
                <h1 className="inter font-bold text-xl text-white text-center px-2 leading-tight">
                  {data.text}
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProblemCard;
