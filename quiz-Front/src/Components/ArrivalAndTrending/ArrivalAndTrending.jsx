/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unsafe-optional-chaining */
import { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { baseURL } from "../../Configs/libs";
import ProductCard from "../productCard/ProductCard";

const ArrivalAndTrending = () => {
  const [buttonActive, setButtonActive] = useState(true);
  const [trendingData, settrendingData] = useState([]);
  const [arrivalData, setArrival] = useState([]);

  const [visibleProducts, setVisibleProducts] = useState(8);

  const loadMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 8);
  };

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["productss"],
    queryFn: async () => {
      const res = await fetch(`${baseURL}/product`);
      const data = await res.json();
      setArrival([...data?.data?.products]);
      const reverseData = [...data?.data?.products];
      settrendingData(reverseData.reverse());
      // console.log(data);
      return data;
    },
  });
  const arrivalHandler = () => {
    setButtonActive(true);
    // setArrival(products);
  };
  const trendingHandler = () => {
    setButtonActive(false);
    // settrendingData([...arrivalData].reverse());
  };
  // console.log(products);
  // console.log(trendingData, "trnding");
  // console.log(arrivalData, "arrival");
  // console.log(buttonActive);
  return (
    <div className="bg-[#F5F5F5]">
      <div className="flex justify-between p-5">
        <div className="flex gap-4">
          <button
            onClick={arrivalHandler}
            className={`border border-black px-3 py-2 ${
              buttonActive ? "bg-black text-white" : ""
            } `}
          >
            New Arrivals
          </button>
          <button
            onClick={trendingHandler}
            className={`border border-black px-3 py-2 ${
              buttonActive ? "" : "bg-black text-white"
            }`}
          >
            What's Trending
          </button>
        </div>
        <button className="border border-black px-3 py-2 uppercase">
          View All
        </button>
      </div>

      <div>
        <div className=" grid md:grid-cols-4 grid-cols-2">
          {buttonActive &&
            arrivalData
              ?.slice(0, visibleProducts)
              .map((product, idx) => (
                <ProductCard key={idx} product={product} />
              ))}
        </div>
        <div className="flex justify-center">
          {buttonActive && visibleProducts < arrivalData.length && (
            <button
              onClick={loadMoreProducts}
              className="text-red-500 font-bold border border-red-500 px-32 py-2"
            >
              Load More
            </button>
          )}
        </div>
      </div>
      <div>
        <div className=" grid md:grid-cols-4 grid-cols-2">
          {!buttonActive &&
            trendingData
              ?.slice(0, visibleProducts)
              .map((product, idx) => (
                <ProductCard key={idx} product={product} />
              ))}
        </div>
        <div className="flex justify-center">
          {!buttonActive && visibleProducts < trendingData.length && (
            <button
              onClick={loadMoreProducts}
              className="text-red-500 font-bold border border-red-500 px-32 py-2"
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArrivalAndTrending;
