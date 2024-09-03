/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBarsStaggered, FaRegUser } from "react-icons/fa6";
import { RiNotification3Line } from "react-icons/ri";
import { TbShoppingCart } from "react-icons/tb";
import { IoMdSearch } from "react-icons/io";
import { CartContext } from "../../Context/CartContext";
import { FiLogOut } from "react-icons/fi";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import ProfileCard from "../ProfileCard/ProfileCard";

import img from ".././../assets/Fabrilook/Febrilook.svg";
import img2 from "../../../public/gmart.jpeg";
import AdminVendorRoute from "../../Routes/AdminVendorRoute/AdminVendorRoute";

const Navbar2 = ({ setIsOpen }) => {
  const { user, logOut } = useContext(AuthContext);
  const { cart, setShowCart, showCart } = useContext(CartContext);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // console.log("user");
  // console.log(user);

  function handleSearchQuery() {
    // console.log("click", searchQuery === "");
    if (searchQuery === "") {
      return;
    } else {
      navigate(`/searchedproduct/filtered?filter=${searchQuery}`);
      setSearchQuery("");
    }
  }
  const handleEnter = (e) => {
    // console.log("enter", searchQuery);

    if (searchQuery === "") {
      return;
    }
    if (e.key === "Enter") {
      navigate(`/searchedproduct/filtered?filter=${searchQuery}`);
      setSearchQuery("");
    }
  };

  return (
    <nav
      className={`flex  flex-wrap items-center bg-[#F85606] justify-center md:justify-between h-24 sm:h-4 md:h-20 px-5 md:px-10    fixed md:w-[1270px] w-full  top-0 z-[999]  shadow-2xl `}
    >
      <div className="w-1/2  md:w-auto md:order-1">
        <div className="text-white font-bold uppercase text-2xl flex gap-3 items-center justify-starts ">
          {/* <div
            onClick={() => setIsOpen((prev) => !prev)}
            className={`  p-[5px] rounded-sm hover:bg-secondary text-[#3C3D36] hover:text-red-700  duration-500 cursor-pointer   font-bold
                `}
          >
            <FaBarsStaggered size={24}></FaBarsStaggered>
          </div> */}
          <Link to="/">
            <img
              src={img}
              alt=""
              className="md:w-32 w-16 rounded-lg"
              style={{ filter: "brightness(90%)" }}
            />
          </Link>
          <Link to="/">
            <h2 className="md:block hidden text-xs text-center md:text-lg shadow-lg text-[#3C3D36]"></h2>
          </Link>
        </div>
      </div>
      <div className=" order-3 w-3/4  md:order-2  md:w-[50%] lg:[60%] rounded-md relative ">
        <input
          type="text"
          placeholder="search products"
          style={{ "::placeholder": { color: "red" } }}
          name="search"
          value={searchQuery}
          className="w-full px-3 py-1 md:py-3 h-full rounded-md  font-light border border-[#414042]"
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          onKeyDown={handleEnter}
        />

        <IoMdSearch
          onClick={handleSearchQuery}
          className="text-[#F15A29] absolute top-1/2 right-[10px] -translate-y-1/2 cursor-pointer"
          size={25}
        ></IoMdSearch>
      </div>
      <div className=" w-1/2 md:w-auto md:order-3 flex items-center justify-end gap-5 text-secondary font-bold">
        <div className="relative" onClick={() => setShowCart(!showCart)}>
          <TbShoppingCart className="text-[#ffff]" size={26}></TbShoppingCart>
          <span className="absolute -top-1 -right-2  bg-[#F15A29]  w-5  h-5 rounded-full flex  items-center justify-center text-xs border border-white">
            {cart?.length || 0}
          </span>
        </div>
        {user?.email ? (
          <>
            <div className="group relative">
              <img
                src={user?.image}
                alt=""
                className="w-12 h-12 border-2   rounded-full  border-[#823B35]"
              />
              <ProfileCard></ProfileCard>
            </div>
            <RiNotification3Line
              className="text-[#ffff]"
              size={25}
            ></RiNotification3Line>
          </>
        ) : (
          <Link to="/sign-in">
            <FaRegUser size={24} className="text-[#ffff]"></FaRegUser>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar2;
