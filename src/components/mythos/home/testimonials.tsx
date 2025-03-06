import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import useInView from "../../../customHooks/useInView";

const Testimonials = () => {
  const { ref, isInView } = useInView(0.3, false);

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
    <section
      ref={ref}
      className="w-full p-20 px-5 sm:px-10 md:px-20 bg-[#1A1D3B] bg-[url('/background/mythos/section/stars_background.png')] bg-center"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full text-start"
      >
        <h1 className="montserrat font-semibold text-2xl sm:text-4xl tracking-[2.5px] text-[#E39712]">
          TESTIMONIALS
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
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
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="p-6 w-full"
              >
                <p className="text-white mulish font-bold text-sm sm:text-lg md:text-xl lg:text-2xl">
                  {feedback}
                </p>
                <h3 className="text-md sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#9FE9FF] mt-10">
                  {name}
                </h3>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Testimonials;
