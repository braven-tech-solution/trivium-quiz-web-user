import { useQuery } from "@tanstack/react-query";
import { baseURL } from "../../Configs/libs";

export const useLoggedUser = () => {
  const { data: loggedUser = [] } = useQuery({
    queryKey: ["loggedUser"],
    queryFn: async () => {
      const token = localStorage.getItem("accessToken");

      const res = await fetch(`${baseURL}/users/leaderboard/login-user`, {
        method: "GET",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      return data.data;
    },
  });
  return { loggedUser };
};
