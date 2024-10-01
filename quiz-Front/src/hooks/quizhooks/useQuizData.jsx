import { useQuery } from "@tanstack/react-query";
import { baseURL } from "../../Configs/libs";

export const useQuizData = (id) => {
  const { data: quizData = [] } = useQuery({
    queryKey: ["quizdata", id],
    queryFn: async () => {
      const res = await fetch(`${baseURL}/question/${id}`);
      const data = await res.json();
      return data.data;
    },
  });
  return { quizData };
};
