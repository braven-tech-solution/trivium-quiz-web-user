/* eslint-disable react/no-unescaped-entities */
import Marquee from "react-fast-marquee";

import { GrServices } from "react-icons/gr";
import { MdOutlineSecurity } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";
import { MdContactSupport } from "react-icons/md";

const Expertise = () => {
  return (
    <div className="md:flex flex-col  md:flex-row-reverse justify-center mt-10 md:container shadow-2xl shadow-slate-200 py-10">
      <div className="md:w-[50%] w-[100%] px-2">
        <h1 className="md:text-5xl text-2xl font-bold text-[#0866FF]">
          We Have 10 Years{" "}
        </h1>
        <h1 className="md:text-5xl text-2xl font-bold">of Experience</h1>
        <h1 className="bg-gradient-to-r from-[#0866FF] to-[#0866FF] text-transparent bg-clip-text font-bold md:text-5xl text-2xl">
          in IT Related Solutions
        </h1>
        <p>
          Over the past three years, our team has been dedicated to providing
          exceptional IT services tailored to meet the unique needs of our
          clients.{" "}
          <span className="md:block hidden">
            From software development to cybersecurity, cloud computing, and
            beyond, we've consistently delivered innovative solutions that drive
            business growth and success.
          </span>
        </p>
      </div>
      <div className="md:w-[50%] w-[100%]">
        <Marquee pauseOnHover={true} direction="right">
          <div className="flex flex-col justify-center items-center w-[180px] h-[210px] bg-gradient-to-r from-[#0866FF] to-[#0866FF] text-white rounded-md shadow-lg mr-6">
            <GrServices size={50}></GrServices>
            <h1 className="font-bold">Provide All Kind of</h1>
            <h1 className="font-semibold">IT Services</h1>
          </div>
          <div className="flex flex-col justify-center items-center w-[180px] h-[210px] bg-gradient-to-r from-[#0866FF] to-[#0866FF] text-white rounded-md shadow-lg mr-6">
            <MdOutlineSecurity size={50}></MdOutlineSecurity>
            <h1 className="font-bold">Solution for</h1>
            <h1 className="font-semibold">All Security</h1>
          </div>
          <div className="flex flex-col justify-center items-center w-[180px] h-[210px] bg-gradient-to-r from-[#0866FF] to-[#0866FF] text-white rounded-md shadow-lg mr-6">
            <GrUserExpert size={50}></GrUserExpert>
            <h1 className="font-bold">People With</h1>
            <h1 className="font-semibold">Quality Expertness</h1>
          </div>
          <div className="flex flex-col justify-center items-center w-[180px] h-[210px] bg-gradient-to-r from-[#0866FF] to-[#0866FF] text-white rounded-md shadow-lg mr-6">
            <MdContactSupport size={50}></MdContactSupport>
            <h1 className="font-bold">Global Support</h1>
            <h1 className="font-semibold">for All Client</h1>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Expertise;
