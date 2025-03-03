import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const Testimonials = () => {
  const details = {
    "Sara M - Mentoons Member":
      "As a Celestial Explorer member, I look forward to my personalized monthly horoscopes and early access to astrological forecasts.",
    "David L - Cosmic Seeker":
      "The astrological insights have truly helped me align my goals with the cosmic energies. Highly recommended!",
    "Emily R - Star Gazer":
      "I love the detailed planetary movements and how they relate to my personal and professional life.",
    "James T - Lunar Enthusiast":
      "The exclusive reports and cosmic guidance have given me a fresh perspective on decision-making.",
    "Olivia K - Astrology Aficionado":
      "Getting early access to astrological forecasts has been a game-changer for planning important events in my life.",
  };

  return (
    <section className="w-full px-5 p-20 px-30 bg-[#1A1D3B] bg-[url('/public/background/mythos/section/stars_background.png')] bg-center">
      <div className="w-full text-start">
        <h1 className="montserrat font-semibold text-4xl tracking-[2.5px] text-[#E39712] text-start">
          TESTIMONIALS
        </h1>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="rounded-lg mt-5"
        >
          {Object.entries(details).map(([name, feedback], index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="p-6 w-full">
                <p className="text-white mulish font-bold text-2xl">
                  {feedback}
                </p>
                <h3 className="text-2xl font-semibold text-[#9FE9FF] mt-10">
                  {name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
