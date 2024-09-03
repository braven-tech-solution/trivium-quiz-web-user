/* eslint-disable no-unsafe-optional-chaining */
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { baseURL } from "../../Configs/libs";

import ProductCard from "../productCard/ProductCard";

const SearchedProduct = () => {
  //   const [existedProduct, setExistedProduct] = useState([]);
  const location = useLocation();
  let searchedQuery = location.search
    .split("?filter=")[1]
    .split("%20")[0]
    .toLowerCase();
  // console.log("location", searchedQuery);
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(`${baseURL}/product`);
      const data = await res.json();
      // console.log(data.data.products);
      return data.data.products;
    },
  });
  const existed = products.filter((product) =>
    product.name.includes(searchedQuery)
  );
  // console.log("existed", existed);

  return (
    <div className="pl-2 text-center">
      {existed && (
        <div className="pt-3">
          <h1 className="text-2xl font-semibold">
            Available Product Count :{existed.length}{" "}
          </h1>
          <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-3 ">
            {existed.map((product, idx) => (
              <ProductCard key={idx} product={product}></ProductCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchedProduct;
