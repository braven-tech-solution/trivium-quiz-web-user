import { useQuery } from "@tanstack/react-query";
import { baseURL } from "../../Configs/libs";
import CategoryCard from "../CategoryCard/CategoryCard";
import Marquee from "react-fast-marquee";
import Loading from "../Loading/index";

const PopularCategorySection = () => {
  const { data: subCategories = [], isLoading } = useQuery({
    queryKey: ["subCategories"],
    queryFn: async () => {
      const res = await fetch(`${baseURL}/sub-category`);
      const data = await res.json();
      // console.log(data);
      return data.data.subCategories;
    },
  });
  // console.log("popularCategories", subCategories);
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="">
      <h1
        className="text-3xl font-semibold text-[#823B35] uppercase text-center bg-secondary px-10 py-3 rounded-md 
         shadow-[5px_5px_10px_#b8b8b8,_-5px_-5px_10px_#ffffff] hover:shadow-[-5px_-5px_10px_#b8b8b8,_5px_5px_10px_#ffffff] duration-500 transition-all  "
      >
        Popular Sub-Categories
      </h1>

      {/* <div className="grid md:grid-cols-3  lg:grid-cols-4 grid-cols-2 gap-5 px-10 py-10"> */}
      <div className=" px-10 py-10">
        <Marquee gap={20}>
          {subCategories?.map((i) => (
            <CategoryCard
              key={i._id}
              _id={i._id}
              title={i.name}
              image={i.banner}
              path={`/category/${i?.category?.name}${i?.path}`}
            ></CategoryCard>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default PopularCategorySection;
