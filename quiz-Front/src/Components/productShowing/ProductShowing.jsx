import { Swiper, SwiperSlide } from "swiper/react";
import { baseURL } from "../../Configs/libs";
import { useQuery } from "@tanstack/react-query";

import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ProductCard from "../productCard/ProductCard";

const ProductShowing = () => {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(`${baseURL}/product`);
      const data = await res.json();
      // console.log(data.data.products);
      return data.data.products;
    },
  });
  return (
    <div className="">
      <h1
        className="text-3xl font-semibold text-black uppercase text-center bg-secondary px-10 py-3 rounded-md 
         shadow-[5px_5px_10px_#b8b8b8,_-5px_-5px_10px_#ffffff] hover:shadow-[-5px_-5px_10px_#b8b8b8,_5px_5px_10px_#ffffff] duration-500 transition-all "
      >
        Products
      </h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
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
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper p-10 h-screen w-screen "
      >
        {products.map((product, idx) => (
          <SwiperSlide key={idx} className="pb-10 ">
            <ProductCard key={idx} product={product}></ProductCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductShowing;
