import { useQuery } from "@tanstack/react-query";
import { baseURL } from "../../Configs/libs";

export const useQuizLevel = (id) => {
  const {
    data: levels = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["levels", id], // Include the id in the queryKey
    queryFn: async () => {
      const res = await fetch(`${baseURL}/level/${id}`);
      if (!res.ok) {
        throw new Error("Failed to fetch levels");
      }
      const data = await res.json();
      return data.data; // Assuming the levels data is under `data.data`
    },
    enabled: !!id, // Ensure the query runs only when id is available
  });

  return { levels, isLoading, error };
};
