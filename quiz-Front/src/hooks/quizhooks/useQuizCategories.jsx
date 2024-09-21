import { useQuery } from "@tanstack/react-query";
import { baseURL } from "../Configs/libs";

export const useCategories = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ["categoriess"],
    queryFn: async () => {
      const res = await fetch(`${baseURL}/category`);
      const data = await res.json();
      return data.data.categories;
    },
  });
  return { categories };
};
