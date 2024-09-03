import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

import Banner from "./Banner";

const BannerSection = ({ banners }) => {
  return (
    <div className=" border-b-2 border-blue-50">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className=""
      >
        {banners?.map((banner, idx) => (
          <SwiperSlide key={banner.banner}>
            <Banner
              banner={banner.banner}
              ques={banner.ques}
              ans={banner.ans}
              key={banner.banner}
            ></Banner>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSection;
