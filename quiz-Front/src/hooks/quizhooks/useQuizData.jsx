import { useQuery } from "@tanstack/react-query";
import { baseURL } from "../../Configs/libs";

export const useQuizData = () => {
  const { data: quizData = [] } = useQuery({
    queryKey: ["quizdata"],
    queryFn: async () => {
      const res = await fetch(`${baseURL}/`);
      const data = await res.json();
      return data.data;
    },
  });
  return { quizData };
};
