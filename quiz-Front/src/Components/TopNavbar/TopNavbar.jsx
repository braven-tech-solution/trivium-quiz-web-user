import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { FaHome } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import web3soft3 from "../../assets/web3soft3.png";
import { FaBarsStaggered } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { FaUser } from "react-icons/fa";
import { TbShoppingCart } from "react-icons/tb";

import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { baseURL } from "../../Configs/libs";
import ProfileCard from "../ProfileCard/ProfileCard";
import { useSettings } from "../../hooks/useSettings";
import { CartContext } from "../../Context/CartContext";
const TopNavbar = ({ showNavbar }) => {
  const { user, logOut, isOpen, setIsOpen } = useContext(AuthContext);
  const { cart, setShowCart, showCart } = useContext(CartContext);
  // console.log(categories);
  const navigate = useNavigate();
  const { settings } = useSettings();

  const { data: products = [], refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      // const res = await fetch(`${baseURL}/product?page=1&limit=10`);
      // http://localhost:5000/api/v1/product/owner?email=admin@gmail.com
      const res = await fetch(`${baseURL}/product`);
      const data = await res.json();

      return data.data.products;
    },
  });
  const { data: categoriesMain = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch(`${baseURL}/category`);
      const data = await res.json();
      return data.data.categories;
    },
  });

  const handleNavigate = (id, category) => {
    console.log(id);
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
    <nav
      className={`${
        showNavbar
          ? "md:px-10 md:pt-1  top-0 fixed z-[999] w-full bg-[#ffffff] transition-transform duration-700 md:h-[80px] h-[50px]"
          : "md:px-10 md:pt-1 pt-0 top-[-100] fixed z-[999] w-full bg-[#001973]  transition-all duration-700"
      } `}
    >
      <div className="flex justify-between items-center relative">
        <div className="flex justify-center items-center">
          <Link to={"/"}>
            <span className="">
              {/* <img
                src={settings?.logo}
                alt=""
                className="md:w-[200px] md:h-[70px]  w-[100px] h-[40px]"
              /> */}
              <h1>Trivium Quiz</h1>
            </span>
          </Link>
        </div>

        <div className="w-full md:block hidden">
          <ul className="flex flex-grow justify-around items-center">
            <li className="relative">
              <Link to={"/"} className="flex justify-center items-center gap-1">
                <FaHome size={20}></FaHome>
                <span className="text-lg ">Home</span>
              </Link>
            </li>
            <li className="relative">
              <Link
                to={"/about"}
                className="flex justify-center items-center gap-1"
              >
                <span className="text-lg ">About</span>
              </Link>
            </li>
            {/* <li className="group h-20 flex">
              <div className="flex items-center gap-1 cursor-pointer">
                <span className="text-lg">Services</span>
                <IoIosArrowDown className="text-lg"></IoIosArrowDown>
              </div>
              <div className="hidden  group-hover:block absolute top-20 left-0 bg-white py-10 px-7  shadow-lg w-[100%] transition-all duration-200 ease-out ">
                <div className="grid md:grid-cols-3 grid-cols-1">
                  {categoriesMain?.map((item) => (
                    <div key={item._id}>
                      <h1 className="text-[#005BC4] capitalize py-6 text-3xl font-bold">
                        {item.name === "course" ? "IT Training" : item.name}
                      </h1>

                      <div>
                        {products
                          .filter((product) => product.category.id === item._id)
                          .map((product) => (
                            <li
                              key={product.id}
                              className="text-[#008cff] pb-2 text-lg hover:text-[#42DFD5] hover:font-semibold cursor-pointer duration-700"
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
            <li className=" relative group h-20 flex ">
              <div className="flex items-center gap-1 cursor-pointer">
                <span className="text-lg">IT Training</span>
                <IoIosArrowDown className="text-lg"></IoIosArrowDown>
              </div>
              <div className="hidden group-hover:block absolute top-full w-[300px] left-0 bg-white py-2 px-4 shadow-lg text-center rounded">
                <ul className="rounded">
                  {products
                    ?.filter((product) => product.category.name === "course")
                    .map((item, idx) => (
                      <Link key={idx} to={`/course/${item?._id}`}>
                        <li
                          key={idx}
                          className="text-[#005bc4] hover:text-white font-semibold  mb-1 py-4 hover:bg-[#0DB2B7] transition-all duration-700 shadow-md rounded cursor-pointer"
                        >
                          {item?.name}
                        </li>
                      </Link>
                    ))}
                </ul>
              </div>
            </li>

            <li className="relative group h-20 flex items-center">
              <Link to={"/software-services"}>
                <div className="flex items-center gap-1 cursor-pointer">
                  <span className="text-lg">Software Services</span>
                  <IoIosArrowDown className="text-lg"></IoIosArrowDown>
                </div>
              </Link>

              <div className="hidden group-hover:block absolute top-full w-[300px] left-0 bg-white py-2 px-4 shadow-lg text-center rounded">
                <ul>
                  {products
                    .filter(
                      (product) => product.category.name === "Software Services"
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
            <li className="relative">
              <Link to={"/priceplan"}>
                <span className="text-lg">Price Plan</span>
              </Link>
            </li> */}
            {/* <li className="relative">
             <span className="text-lg">Price Plan</span>
           </li> */}
            <li className="relative">
              <Link to={"/contact"}>
                <span className="text-lg">Contact</span>
              </Link>
            </li>
            {/* <li className="relative">
             <Link to={"/our-courses"}>
               <span className="text-lg">Career With Us</span>
             </Link>
           </li> */}
          </ul>
        </div>
        {/* <div className="flex items-center space-x-6">
          <div
            className="relative cursor-pointer"
            onClick={() => setShowCart(!showCart)}
          >
            <TbShoppingCart
              className="text-[#9E6661]"
              size={26}
            ></TbShoppingCart>
            <span className="absolute -top-1 -right-2 bg-[#F15A29] w-5 h-5 rounded-full flex items-center justify-center text-xs border border-white">
              {cart?.length || 0}
            </span>
          </div>

          {user?.email && (
            <div className="group relative cursor-pointer">
              {user?.image ? (
                <img
                  src={user?.image}
                  alt=""
                  className="w-12 h-12 border-2 rounded-full border-[#823B35]"
                />
              ) : (
                <FaUser
                  size={25}
                  className="w-12 h-12 border-2 rounded-full border-[#823B35]"
                ></FaUser>
              )}
              <ProfileCard></ProfileCard>
            </div>
          )}

          <div
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden block pr-[5px] md:pt-[5px] rounded-sm md:hover:bg-secondary text-[#ffff] hover:text-black transition-all duration-500 cursor-pointer font-bold"
          >
            {isOpen ? (
              <ImCross size={30} className="text-[#9E6661]"></ImCross>
            ) : (
              <FaBarsStaggered
                size={30}
                className="text-[#9E6661]"
              ></FaBarsStaggered>
            )}
          </div>
        </div> */}
        {/* <div className="flex">
          {user?.email && (
            <div className="group relative">
              {user?.image ? (
                <img
                  src={user?.image}
                  alt=""
                  className="w-12 h-12 border-2   rounded-full  border-[#823B35]"
                />
              ) : (
                <FaUser
                  size={25}
                  className="w-12 h-12 border-2   rounded-full  border-[#823B35] "
                ></FaUser>
              )}

              <ProfileCard></ProfileCard>
            </div>
          )}
          <div
            onClick={() => setIsOpen((prev) => !prev)}
            // md:hidden block
            className={` md:hidden block p-[5px] md:pt-[5px] pt-4 rounded-sm md:hover:bg-secondary text-[#ffff] hover:text-black transition-all  duration-500 cursor-pointer font-bold`}
          >
            {isOpen ? (
              <ImCross size={20}></ImCross>
            ) : (
              <FaBarsStaggered size={20}></FaBarsStaggered>
            )}
          </div>
        </div> */}
      </div>
    </nav>
  );
};

export default TopNavbar;
