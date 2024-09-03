import ProductCard from "../productCard/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { baseURL } from "../../Configs/libs";
import Loading from "../Loading";
import { useState } from "react";

const AllProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(8);

  const loadMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 8);
  };
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
    <div className="px-5 py-10 relative">
      {isLoading && <Loading></Loading>}
      <h1 className="text-center mb-5 text-2xl font-semibold text-[#823B35] uppercase">
        Order grocery and food online with same-day & get home delivery free
      </h1>
      <h1 className="text-3xl text-[#823B35] font-bold">JUST FOR YOU</h1>
      <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-3 ">
        {products.slice(0, visibleProducts).map((product, idx) => (
          <ProductCard key={idx} product={product}></ProductCard>
        ))}
      </div>
      <div className="flex justify-center">
        {visibleProducts < products.length && (
          <button
            onClick={loadMoreProducts}
            className="text-red-500 font-bold border border-red-500 px-32 py-2"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
