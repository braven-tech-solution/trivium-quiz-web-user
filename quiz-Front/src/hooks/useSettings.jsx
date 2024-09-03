import { useQuery } from "@tanstack/react-query";
import { baseURL } from "../Configs/libs";

export const useSettings = () => {
  const { data: settings = [] } = useQuery({
    queryKey: ["settings"],
    queryFn: async () => {
      const res = await fetch(`${baseURL}/setting`);
      const data = await res.json();

      return data.data;
    },
  });
  return { settings };
};
