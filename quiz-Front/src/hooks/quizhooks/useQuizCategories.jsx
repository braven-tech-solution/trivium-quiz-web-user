import { useQuery } from "@tanstack/react-query";
import { baseURL } from "../../Configs/libs";

export const useQuizCategories = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ["categories2"],
    queryFn: async () => {
      const res = await fetch(`${baseURL}/category`);
      const data = await res.json();
      return data.data;
    },
  });
  return { categories };
};
