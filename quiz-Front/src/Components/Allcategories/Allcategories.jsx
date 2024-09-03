import { useQuery } from "@tanstack/react-query";
import { baseURL } from "../../Configs/libs";
import CategoryCard from "../CategoryCard/CategoryCard";
import Marquee from "react-fast-marquee";

const Allcategories = () => {
  const { data: subCategories = [] } = useQuery({
    queryKey: ["sub-categories"],
    queryFn: async () => {
      const res = await fetch(`${baseURL}/sub-category`);
      const data = await res.json();
      // console.log(data.data.subCategories);
      return data.data.subCategories;
    },
  });
  return (
    <div>
      <h1 className=" text-3xl text-red-500 mt-10 font-semibold uppercase text-center m-auto">
        <Marquee>
          <h1 className="">Forget Rest And Enjoy The Best</h1>
        </Marquee>
      </h1>
      <h1 className="text-center text-3xl font-semibold uppercase mb-10 pt-5">
        All Categories
      </h1>
      <div className="grid md:grid-cols-3  lg:grid-cols-4 grid-cols-2 gap-5 px-10 py-2">
        {subCategories?.map((i) => (
          <CategoryCard
            key={i._id}
            _id={i._id}
            title={i.name}
            image={i.banner}
            path={`/category/${i?.category?.name}${i?.path}`}
          ></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Allcategories;
