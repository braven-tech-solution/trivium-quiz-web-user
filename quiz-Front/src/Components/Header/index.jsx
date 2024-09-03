import { FaHome } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { TbShoppingCart } from "react-icons/tb";
import { FcAbout } from "react-icons/fc";
import { MdOutlineContactPage } from "react-icons/md";

import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { useContext } from "react";
import ProfileCard from "../ProfileCard/ProfileCard";

import { FaUser } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { baseURL } from "../../Configs/libs";
import { useSettings } from "../../hooks/useSettings";
import { CartContext } from "../../Context/CartContext";
import { useProducts } from "../../hooks/useProducts";

const Header = ({ setIsOpen, isOpen }) => {
  const { user, logOut } = useContext(AuthContext);
  const { cart, setShowCart, showCart } = useContext(CartContext);
  const { settings } = useSettings();
  const { products } = useProducts();
  const navigate = useNavigate();
  // console.log(products.products);

  // const { data: products = [], refetch } = useQuery({
  //   queryKey: ["products"],
  //   queryFn: async () => {
  //     const res = await fetch(`${baseURL}/product`);
  //     const data = await res.json();

  //     return data.data.products;
  //   },
  // });

  const { data: categoriesMain = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch(`${baseURL}/category`);
      const data = await res.json();
      return data.data.categories;
    },
  });

  const handleNavigate = (id, category) => {
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
      className="md:px-10 md:pt-1 pt-2 shadow-2xl bg-[#008081]  z-[999] w-full text-white"
      style={{
        boxShadow:
          "0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 15px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div className="flex justify-between items-center relative">
        <div className="flex justify-center items-center">
          <Link to={"/"}>
            <span className="">
              {/* <img
                src={settings?.logo}
                alt={settings?.name}
                className=" md:w-[200px] md:h-[70px]  w-[100px] h-[40px]"
              /> */}
              <h1 className=" font-bold text-2xl">Trivium Quiz</h1>
            </span>
          </Link>
        </div>

        <div className=" md:block hidden">
          <ul className="flex flex-grow justify-between items-center space-x-8">
            <li className="relative">
              <Link to={"/"} className="flex justify-center items-center gap-1">
                <FaHome size={20} className="text-[#2196F3]"></FaHome>
                <span className="text-xl">Home</span>
              </Link>
            </li>
            <li className="relative">
              <Link
                to={"/about"}
                className="flex justify-center items-center gap-1 "
              >
                <FcAbout size={20} className="" />
                <span className="text-xl">About</span>
              </Link>
            </li>
            {/* <li className="group h-20 flex">
              <div className="flex items-center gap-1 cursor-pointer">
                <span className="text-xl">Services</span>
                <IoIosArrowDown className="text-xl"></IoIosArrowDown>
              </div>
              <div className="hidden group-hover:block absolute top-20 left-0 bg-white py-10 px-7 shadow-xl w-[100%] transition-all duration-200 ease-out z-[999]">
                <div className="grid md:grid-cols-3 grid-cols-1">
                  {categoriesMain?.map((item) => (
                    <div key={item._id}>
                      <h1 className="text-[#005BC4] capitalize py-6 text-3xl font-bold">
                        {item.name === "course" ? "IT Training" : item.name}
                      </h1>

                      <div>
                        {products.products
                          ?.filter(
                            (product) => product.category.id === item._id
                          )
                          ?.map((product) => (
                            <li
                              key={product.id}
                              className="text-[#008cff] pb-2 text-xl hover:text-[#42DFD5] hover:font-semibold cursor-pointer duration-700"
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
            <li className="relative group h-20 flex">
              <div className="flex items-center gap-1 cursor-pointer">
                <span className="text-xl">IT Training</span>
                <IoIosArrowDown className="text-xl"></IoIosArrowDown>
              </div>
              <div className="hidden group-hover:block absolute top-full w-[300px] left-0 bg-white py-2 px-4 shadow-xl text-center rounded z-[999]">
                <ul className="rounded">
                  {products.products
                    ?.filter((product) => product.category.name === "course")
                    .map((item, idx) => (
                      <Link key={idx} to={`/course/${item?._id}`}>
                        <li
                          key={idx}
                          className="text-[#005bc4] hover:text-white font-semibold mb-1 py-4 hover:bg-[#0DB2B7] transition-all duration-700 shadow-md rounded cursor-pointer"
                        >
                          {item?.name}
                        </li>
                      </Link>
                    ))}
                </ul>
              </div>
            </li>

            <li className="relative group h-20 flex items-center">
              <Link to={"/"}>
                <div className="flex items-center gap-1 cursor-pointer">
                  <span className="text-xl">Software Services</span>
                  <IoIosArrowDown className="text-xl"></IoIosArrowDown>
                </div>
              </Link>

              <div className="hidden group-hover:block absolute top-full w-[300px] left-0 bg-white py-2 px-4 shadow-xl text-center rounded z-[999]">
                <ul>
                  {products.products
                    ?.filter(
                      (product) => product.category.name === "Software Services"
                    )
                    ?.map((item, idx) => (
                      <Link key={idx} to={`software-service/${item?._id}`}>
                        <li className="text-[#005bc4] hover:text-white font-semibold mb-1 py-4 hover:bg-[#0DB2B7] transition-all duration-700 shadow-md rounded cursor-pointer">
                          {item?.name}
                        </li>
                      </Link>
                    ))}
                </ul>
              </div>
            </li>
            <li className="relative">
              <Link to={"/priceplan"}>
                <span className="text-xl">Price Plan</span>
              </Link>
            </li> */}
            <li className="relative">
              <Link
                to={"/contact"}
                className="flex justify-center items-center gap-1"
              >
                <MdOutlineContactPage size={20} className="text-[#2196F3]" />
                <span className="text-xl">Contact</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-6">
          {/* <div
            className="relative cursor-pointer"
            onClick={() => setShowCart(!showCart)}
          >
            <TbShoppingCart className="text-[#ffff]" size={26}></TbShoppingCart>
            <span className="absolute -top-1 -right-2 bg-[#F15A29] w-5 h-5 rounded-full flex items-center justify-center text-xs border border-white">
              {cart?.length || 0}
            </span>
          </div> */}

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
            className="md:hidden block pr-[5px] md:pt-[5px]  rounded-sm md:hover:bg-secondary text-[#ffff] hover:text-black transition-all duration-500 cursor-pointer font-bold"
          >
            {isOpen ? (
              <ImCross size={30}></ImCross>
            ) : (
              <FaBarsStaggered size={30}></FaBarsStaggered>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
