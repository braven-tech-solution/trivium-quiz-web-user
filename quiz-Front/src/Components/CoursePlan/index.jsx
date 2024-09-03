import bg from "../../assets/CoursePlanBg.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import CoursePlanCard from "./CoursePlanCard";
import { useProducts } from "../../hooks/useProducts";
// import { products } from "../../data/data";

const CoursePlan = () => {
  const { products } = useProducts();
  const bgStyle = {
    background: `linear-gradient(90deg, rgba(48, 97, 221, 0),rgba(48, 97, 221, 0)), url(${bg}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "center bottom",
    objectFit: "fit",
    // width: "100%"
  };
  return (
    <div
      className={` px-10 w-full md:h-full h-[70vh] duration-300 `}
      style={bgStyle}
    >
      <div className=" text-[#0866FF]">
        <h1 className="capitalize text-center md:text-5xl  font-bold md:pt-20  md:mb-20 mb-1 mt-10">
          Price Plan for our all plans
        </h1>
        <div className="md:w-[80%] w-full mx-auto shadow-2xl">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            scrollbar={{ draggable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            className="w-full mx-auto  "
          >
            {products &&
              products.products
                ?.filter((item) => item?.category?.name === "course")
                ?.map((course) => (
                  <SwiperSlide key={course._id}>
                    <CoursePlanCard course={course} />
                  </SwiperSlide>
                ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CoursePlan;
