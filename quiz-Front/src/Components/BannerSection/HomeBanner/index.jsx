import BannerSection from "../index";

import banner1 from "../../../assets/quiz/banner1.jpg";
import banner2 from "../../../assets/quiz/banner2.jpg";
import banner3 from "../../../assets/quiz/banner3.jpg";
import banner4 from "../../../assets/quiz/banner4.jpg";
import banner5 from "../../../assets/quiz/banner5.jpg";
import { baseURL } from "../../../Configs/libs";
import { useQuery } from "@tanstack/react-query";

// const banners = [
//   {
//     banner: new URL(`../../../assets/heroImg/banner1.jpg`, import.meta.url)
//       .href,
//     ques: "Who We Are",
//     ans: "We are corporate brand design service provider",
//   },
//   {
//     banner: banner2,
//     ques: "Who We Are",
//     ans: "we are software design service provider",
//   },
//   {
//     banner: banner3,
//     ques: "Who We Are",
//     ans: "we are website design and development service provider",
//   },
// ];
const banners = [
  {
    banner: banner1,
    ques: "Challenge Yourself",
    ans: "Test your limits with Trivium Quiz. Push your mind, elevate your skills.",
  },
  {
    banner: banner2,
    ques: "Be Your Best",
    ans: "Unlock potential through engaging quizzes. Strive for excellence with Trivium Quiz",
  },
  {
    banner: banner3,
    ques: "Quiz Your Way to Success",
    ans: "Take on quizzes that inspire growth and knowledge. Achieve more with Trivium Quiz",
  },
  {
    banner: banner4,
    ques: "Level Up with Trivium",
    ans: "Challenge yourself daily with quizzes designed to sharpen your mind.",
  },
  {
    banner: banner5,
    ques: "Think. Learn. Grow",
    ans: " Engage with Trivium Quiz to enhance your knowledge and skills",
  },
];

const HomeBanner = () => {
  // const { data: banners, refetch } = useQuery({
  //   queryKey: ["banners"],
  //   queryFn: async () => {
  //     const res = await fetch(`${baseURL}/banner?page=1&limit=10`);
  //     const data = await res.json();
  //     return data.data.banners;
  //   },
  // });
  return (
    <div className="md:mt-0 mt-10">
      <BannerSection banners={banners} />
    </div>
  );
};

export default HomeBanner;
