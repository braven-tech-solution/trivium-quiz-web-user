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
                <li className="group   relative text-[#005bc4] hover:text-white font-semibold  mb-1 py-4 hover:bg-[#0DB2B7] transition-all duration-700 shadow-md rounded cursor-pointer w-full ">
                  <div className="flex justify-center items-center gap-1 cursor-pointer">
                    <span className="text-lg">Services</span>
                  </div>
                  <div className="hidden  group-hover:block absolute top-full left-0 bg-white shadow-lg w-[100%] transition-all duration-200 ease-out z-[999] scroll-mr-48">
                    <div className=" text-left">
                      {categoriesMain?.map((item) => (
                        <div key={item._id}>
                          <h1 className="text-[#005BC4] capitalize py-6 text-3xl font-bold">
                            {item.name === "course" ? "IT Training" : item.name}
                          </h1>

                          <div>
                            {products
                              ?.filter(
                                (product) => product.category.id === item._id
                              )
                              ?.map((product) => (
                                <li
                                  key={product._id}
                                  className="text-[#005bc4] hover:text-white font-semibold  mb-1 py-4 hover:bg-[#0DB2B7] transition-all duration-700 shadow-md rounded cursor-pointer w-full"
                                  onClick={() =>
                                    handleNavigate(
                                      product._id,
                                      product.category.name
                                    )
                                  }
                                >
                                  {product?.name}
                                </li>
                              ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
                <li className=" relative text-[#005bc4] hover:text-white font-semibold  mb-1 py-4 hover:bg-[#0DB2B7] transition-all duration-700 shadow-md rounded cursor-pointer w-full group z-[998]">
                  <div className="cursor-pointer">
                    <span className="text-lg">IT Training</span>
                  </div>
                  <div className="hidden group-hover:block absolute top-full w-[300px] left-0 bg-white py-2 px-4 shadow-lg text-center rounded">
                    <ul className="rounded  text-left">
                      {products
                        ?.filter((item) => item.category.name === "course")
                        .map((product, idx) => (
                          <Link key={idx} to={`/course/${product?._id}`}>
                            <li
                              key={idx}
                              className="text-[#005bc4] hover:text-white font-semibold  mb-1 py-4 hover:bg-[#0DB2B7] transition-all duration-700 shadow-md rounded cursor-pointer"
                            >
                              {product?.name}
                            </li>
                          </Link>
                        ))}
                    </ul>
                  </div>
                </li>
                <li className="relative text-[#005bc4] hover:text-white font-semibold  mb-1 py-4 hover:bg-[#0DB2B7] transition-all duration-700 shadow-md rounded cursor-pointer w-full group  z-[997]">
                  <Link to={"/software-services"}>
                    <div className=" cursor-pointer">
                      <span className="text-lg">Software Services</span>
                    </div>
                  </Link>

                  <div className="hidden group-hover:block absolute top-full w-[300px] left-0 bg-white py-2 px-4 shadow-lg  rounded  text-left">
                    <ul>
                      {products
                        ?.filter(
                          (product) =>
                            product?.category.name === "Software Services"
                        )
                        ?.map((item, idx) => (
                          <Link key={idx} to={`software-service/${item?._id}`}>
                            <li className="text-[#005bc4] hover:text-white font-semibold  mb-1 py-4 hover:bg-[#0DB2B7] transition-all duration-700 shadow-md rounded cursor-pointer">
                              {item?.name}
                            </li>
                          </Link>
                        ))}
                    </ul>
                  </div>
                </li>
                {/* <li className="relative text-[#005bc4] hover:text-white font-semibold  mb-1 py-4 hover:bg-[#0DB2B7] transition-all duration-700 shadow-md rounded cursor-pointer w-full">
                  <span className="text-lg">Price Plan</span>
                </li> */}
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
