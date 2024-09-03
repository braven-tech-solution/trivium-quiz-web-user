import web3soft3 from "../../assets/web3soft3.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { BsFillSendArrowUpFill } from "react-icons/bs";
import { FaHouseDamage } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
import { useSettings } from "../../hooks/useSettings";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Footer = () => {
  const { settings } = useSettings();
  const { isOpen, user, setIsOpen } = useContext(AuthContext);
  return (
    <>
      <div id="aboutus">
        {}
        <div className=" text-center">
          {!user?.role && (
            <div className="h-[130px] bg-[#45604D] md:flex xs-flex-col justify-center items-center gap-5">
              <h1 className="md:text-[30px] text-[25px] font-bold">
                JOIN WITH US & GET 100 POINT
              </h1>
              <Link to={"/register"}>
                {" "}
                <button className=" uppercase md:mx-0 mx-auto bg-[#000000] py-3 px-10 flex  justify-center items-center gap-3 text-white  shadow-[10px_5px_10px_#000000] hover:shadow-[_-5px_-5px_10px_#000000] transition-all duration-300 hover:text-yellow-400">
                  Sign up for free <FaLongArrowAltRight className="text-4xl" />
                </button>
              </Link>
            </div>
          )}
        </div>
        <div className="flex md:flex-row flex-col justify-between md:px-32 px-6 py-24  md:bg-[#008081] md:text-black bg-black text-white gap-3">
          <div className=" flex flex-col  items-center gap-4">
            <span className="text-xl font-semibold uppercase text-center ">
              {/* <img
                src={settings?.logo}
                alt=""
                className=" w-[200px] h-[70px]"
              /> */}
              <h1 className="text-2xl text-white">Trivium Quiz</h1>
            </span>
            <div className=" text-md text-center capitalize w-[300px] text-[#FFFFFF]">
              {/* <p>{settings?.aboutUS}</p> */}
              <p>
                Be the best you with Trivium Quiz. Each quiz is a step towards
                self-improvement and mastery. Embrace the challenge, and watch
                yourself grow.
              </p>
            </div>
          </div>

          <div className="flex flex-col  items-start gap-2">
            <h1 className="text-xl font-bold capitalize text-white">
              Useful Link
            </h1>
            <div className="flex flex-col gap-3 text-md text-[#FFFFFF]">
              <a href="/">Home </a>
              <a href="/">Student Validation </a>
              <a href="/">Price Plan</a>
            </div>
          </div>
          <div className="flex flex-col  items-start gap-2">
            <h1 className="text-xl font-bold capitalize text-white">
              Contact Info
            </h1>
            <div className="flex flex-col gap-3 text-md text-[#FFFFFF]">
              <p className="flex  items-center gap-2 w-[220px] capitalize">
                <span>
                  <FaHouseDamage />
                </span>{" "}
                {settings?.location}
              </p>
              <p className="flex  items-center gap-2">
                <span>
                  <IoCall />
                </span>{" "}
                {settings?.phone}
              </p>
              <p className="flex  items-center gap-2 lowercase">
                <span>
                  <SiGmail />
                </span>{" "}
                {/* {settings?.email} */}
                triviumquiz@gmail.com
              </p>
            </div>
          </div>
          <div className=" w-[250px] flex flex-col  items-start gap-2">
            <h1 className="text-xl font-bold capitalize text-white">
              Subscribe
            </h1>
            <div className="flex flex-col  items-center gap-3">
              <p className="capitalize text-[#FFFFFF]">
                subscribe our newsletter to get update.
              </p>
              <div className="w-full relative">
                <input
                  placeholder="Your Email"
                  type="text"
                  className="w-full h-10 p-4 text-[#5b575f] rounded"
                />
                <BsFillSendArrowUpFill
                  size={20}
                  className="text-[#00D4C6] absolute top-[25%] right-2"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#ffff] text-black w-full h-[30px]  text-md pl-6">
          <div className="text-white flex flex-col justify-center items-center gap-5">
            <div className="flex gap-8 justify-center items-center text-black">
              <div>Your Privacy Choices</div>
              <div>Privacy Policy</div>
              <div>Terms and Conditions</div>
            </div>
            <div className="flex-col text-black">
              © 2024 All right reserved by Trivium Quiz
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
