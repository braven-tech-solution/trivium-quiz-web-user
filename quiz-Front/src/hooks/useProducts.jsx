import { useQuery } from "@tanstack/react-query";
import { baseURL } from "../Configs/libs";

export const useProducts = () => {
  const { data: products = [] } = useQuery({
    queryKey: ["productss"],
    queryFn: async () => {
      const res = await fetch(`${baseURL}/product`);
      const data = await res.json();

      return data.data;
    },
  });
  return { products };
};
