import { Swiper, SwiperSlide } from "swiper/react";
import Discover from "../home/learnMore";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/swiper-bundle.css";
import useInView from "../../../customHooks/useInView";
import { ProductsInterface } from "../../../types";

const Products = ({
  products,
  label,
  bg = "#E39712",
  text = "white",
}: {
  products: ProductsInterface[];
  label: string;
  bg?: string;
  text?: string;
}) => {
  const { ref, isInView } = useInView(0.3, false);

  return (
    <section
      ref={ref}
      className="py-8 sm:py-10 px-4 sm:px-6 md:px-10 lg:px-20"
      style={{ backgroundColor: bg }}
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="flex flex-col sm:flex-row justify-between items-center w-full mb-6 gap-4"
      >
        <h1 className="text-[#1A1D3B] font-semibold text-xl sm:text-2xl md:text-3xl lg:text-[36px] montserrat tracking-[1.5px] sm:tracking-[2.5px] text-center sm:text-left">
          {label}
        </h1>
        <div className="mt-2 sm:mt-0">
          <Discover label="LEARN MORE" text={text} />
        </div>
      </motion.div>
      <div className="block sm:hidden">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={10}
          slidesPerView={1}
          className="w-full mt-6"
        >
          {products.map((product, index) => (
            <SwiperSlide key={product.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
                className="flex flex-col items-center px-4"
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src={product.image}
                  alt={product.title}
                  className="w-full h-auto object-cover rounded-lg"
                />
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.3,
                  }}
                  className="text-center text-lg sm:text-xl md:text-2xl font-semibold text-[#1A1D3B] mt-3 inter"
                >
                  {product.title}
                </motion.h2>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden sm:block md:hidden">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={15}
          slidesPerView={2}
          className="w-full mt-8"
        >
          {products.map((product, index) => (
            <SwiperSlide key={product.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
                className="flex flex-col items-center px-2"
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src={product.image}
                  alt={product.title}
                  className="w-full h-auto object-cover rounded-lg"
                />
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.3,
                  }}
                  className="text-center text-xl font-semibold text-[#1A1D3B] mt-3 inter"
                >
                  {product.title}
                </motion.h2>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden md:block">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={3}
          className="w-full mt-10"
        >
          {products.map((product, index) => (
            <SwiperSlide key={product.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
                className="flex flex-col items-center"
              >
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={product.image}
                  alt={product.title}
                  className="w-full h-auto object-cover rounded-lg"
                />
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.3,
                  }}
                  className="text-center text-[22px] md:text-[24px] font-semibold text-[#1A1D3B] mt-4 inter"
                >
                  {product.title}
                </motion.h2>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Products;
