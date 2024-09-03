/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { FaBarsStaggered, FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar3 = ({ setIsOpen }) => {
  return (
    <nav
      className={`flex  flex-wrap items-center bg-[#F85606] justify-between  h-10 px-5 md:px-10   md:w-[1270px] w-full fixed top-20   z-[998]  shadow-4xl `}
    >
      <div className="w-1/2  md:w-auto ">
        <div className="text-white  uppercase text-2xl flex gap-7 items-center justify-starts ">
          <div
            onClick={() => setIsOpen((prev) => !prev)}
            className={`  p-[5px] md:pt-[5px] pt-4 rounded-sm md:hover:bg-secondary text-[#ffff] hover:text-black  duration-500 cursor-pointer font-bold`}
          >
            <FaBarsStaggered
              size={24}
              // className="text-white "
            ></FaBarsStaggered>
          </div>

          <div className="md:pt-0 pt-2 ">
            <Link to="/">
              <h2 className="text-xs text-center shadow-lg text-white font-semibold">
                Home
              </h2>
            </Link>
          </div>
          <div className="hidden lg:block ">
            <Link to="/category/womenfashion">
              <h2 className=" text-xs text-center  shadow-lg text-white font-semibold">
                Women's & Girls' Fashion
              </h2>
            </Link>
          </div>
          <div className="hidden lg:block">
            <Link to="category/electronics">
              <h2 className="  text-xs text-center  shadow-lg text-white font-semibold">
                Electronics Devices
              </h2>
            </Link>
          </div>
          {/* <div>
            <Link to="/category/ghee-gur">
              <h2 className="  text-xs text-center md:text-lg shadow-lg text-white">
                Ghee & Gur
              </h2>
            </Link>
          </div> */}
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="text-white  flex just gap-4 md:pt-0 pt-2 ">
          <Link to="/help-center" className="text-white font-semibold">
            Help Center
          </Link>
          <Link
            to="/"
            className="text-white flex justify-center items-center font-semibold"
          >
            <FaPhone className=""></FaPhone> 01833******
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar3;
