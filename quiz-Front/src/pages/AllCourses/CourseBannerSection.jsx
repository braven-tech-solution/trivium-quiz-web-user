import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import img from "./img";

const imgSection = ({ banner }) => {
  return (
    <div className="w-[100%]">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className=""
      >
        <SwiperSlide>
          <img banner={banner}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img banner={banner}></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default imgSection;
