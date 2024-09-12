import { Link, useNavigate } from "react-router-dom";
import { categoriesMain, products } from "../../data/data";
import { useQuery } from "@tanstack/react-query";
import { baseURL } from "../../Configs/libs";

const Siderbar = () => {
  const navigate = useNavigate();

  const { data: products = [], refetch } = useQuery({
    queryKey: ["products3"],
    queryFn: async () => {
      // const res = await fetch(`${baseURL}/product?page=1&limit=10`);
      // http://localhost:5000/api/v1/product/owner?email=admin@gmail.com
      const res = await fetch(`${baseURL}/product`);
      const data = await res.json();

      return data.data.products;
    },
  });
  const { data: categoriesMain = [] } = useQuery({
    queryKey: ["categories3"],
    queryFn: async () => {
      const res = await fetch(`${baseURL}/category`);
      const data = await res.json();
      return data.data.categories;
    },
  });

  const handleNavigate = (id, category) => {
    console.log(id, category);
    if (category === "course") {
      navigate(`/course/${id}`);
    }
    if (category === "Software Services") {
      navigate(`/software-service/${id}`);
    }
    if (category === "web solution") {
      navigate(`/web-solutions/${id}`);
    }
  };
  return (
    <div className=" w-full bg-black/70 ">
      {/* <ProfileInfo></ProfileInfo> */}
      <div className=" my-2 capitalize  ">
        <nav className=" pt-2  top-4 absolute z-40 w-full">
          <div className="flex flex-col justify-between items-center ">
            <div className="w-full ">
              <ul className="text-center">
                <li className="relative text-[#005bc4] hover:text-white font-semibold  mb-1 py-4 hover:bg-[#0DB2B7] transition-all duration-700 shadow-md rounded cursor-pointer w-full">
                  <Link to={"/"} className=" ">
                    <span className="">Home</span>
                  </Link>
                </li>
                <li className="relative text-[#005bc4] hover:text-white font-semibold  mb-1 py-4 hover:bg-[#0DB2B7] transition-all duration-700 shadow-md rounded cursor-pointer w-full">
                  <Link to={"/about"} className=" ">
                    <span className="">About</span>
                  </Link>
                </li>

                <li className="relative text-[#005bc4] hover:text-white font-semibold  mb-1 py-4 hover:bg-[#0DB2B7] transition-all duration-700 shadow-md rounded cursor-pointer w-full">
                  <Link to={"/contact"}>
                    <span className="text-lg">Contact</span>
                  </Link>
                </li>
                {/* <li className="relative text-[#005bc4] hover:text-white font-semibold  mb-1 py-4 hover:bg-[#0DB2B7] transition-all duration-700 shadow-md rounded cursor-pointer w-full">
                  <Link to={"/our-courses"}>
                    <span className="text-lg">Career With Us</span>
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Siderbar;
