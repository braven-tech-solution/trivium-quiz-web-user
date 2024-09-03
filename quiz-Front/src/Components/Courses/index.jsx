import Marquee from "react-fast-marquee";
import { MdDeveloperBoardOff } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import { FaComputer } from "react-icons/fa6";

const Courses = () => {
  return (
    <div className="flex md:flex-row flex-col   justify-center  mt-10 md:container shadow-2xl shadow-slate-200 py-10">
      <div className="md:w-[50%] w-[100%] px-2">
        <h1 className="md:text-5xl text-2xl font-bold text-[#0866FF]">
          Embrace the Future &{" "}
        </h1>
        <h1 className="md:text-5xl text-2xl font-bold">Become an </h1>
        <h1 className="bg-gradient-to-r from-[#0866FF] to-[#0866FF] text-transparent bg-clip-text font-bold md:text-5xl text-2xl">
          IT Pro Today
        </h1>
        <p>
          Embrace the limitless horizons of possibility and become a trailblazer
          in the ever-evolving landscape of Information Technology.{" "}
          <span className="md:block hidden">
            Unleash your brilliance, seize the opportunities, and pave the way
            for a future limited only by your imagination.
          </span>
        </p>
      </div>
      <div className="md:w-[50%] w-[100%]">
        <Marquee pauseOnHover={true}>
          <div className="flex flex-col justify-center items-center w-[180px] h-[210px] bg-gradient-to-r from-[#0866FF] to-[#0866FF] text-white rounded-md shadow-lg mr-6">
            <FaReact size={50}></FaReact>
            <h1 className="font-bold">Web Development</h1>
            <h1 className="font-semibold">With MERN STACK</h1>
          </div>
          <div className="flex flex-col justify-center items-center w-[180px] h-[210px] bg-gradient-to-r from-[#0866FF] to-[#0866FF] text-white rounded-md shadow-lg mr-6">
            <FaPython size={50}></FaPython>
            <h1 className="font-bold">Web Development</h1>
            <h1 className="font-semibold">With PYTHON</h1>
          </div>
          <div className="flex flex-col justify-center items-center w-[180px] h-[210px] bg-gradient-to-r from-[#0866FF] to-[#0866FF] text-white rounded-md shadow-lg mr-6">
            <SiFlutter size={50}></SiFlutter>
            <h1 className="font-bold">App Development</h1>
            <h1 className="font-semibold">With Flutter</h1>
          </div>
          <div className="flex flex-col justify-center items-center w-[180px] h-[210px] bg-gradient-to-r from-[#0866FF] to-[#0866FF] text-white rounded-md shadow-lg mr-6">
            <FaComputer size={50}></FaComputer>
            <h1 className="font-bold">Machine Learning</h1>
            <h1 className="font-semibold">With PYTHON</h1>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Courses;
