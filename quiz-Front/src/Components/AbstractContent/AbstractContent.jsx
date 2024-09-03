import { GrServices } from "react-icons/gr";
import { MdOutlineSecurity } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";
// import { MdContactSupport } from "react-icons/md";
import abs1 from "../../assets/abstractBg/abstract1.png";
import abs2 from "../../assets/abstractBg/abstract2.png";
import abs3 from "../../assets/abstractBg/abstract3.png";
import abs4 from "../../assets/abstractBg/abstract4.png";

const AbstractContent = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 hidden">
      <div
        className="bg-cover bg-center bg-no-repeat md:w-[255px]  md:h-[257px] shadow-sm shadow-white"
        style={{
          backgroundImage: `url(${abs1})`,
        }}
      >
        <div className="flex flex-col justify-center items-center pt-10">
          <GrServices className="text-black" size={80} />
          <h1 className="capitalize text-xl w-40 text-[#1E1E1E] font-semibold text-center">
            provide all kind of It services
          </h1>
        </div>
      </div>
      <div
        className="bg-cover bg-center bg-no-repeat md:w-[255px]  md:h-[257px] shadow-sm shadow-white"
        style={{
          backgroundImage: `url(${abs2})`,
        }}
      >
        <div className="flex flex-col justify-center items-center pt-10">
          <MdOutlineSecurity className="text-black" size={80} />
          <h1 className="capitalize text-xl w-40 text-[#1E1E1E] font-semibold text-center">
            solution for all security
          </h1>
        </div>
      </div>
      <div
        className="bg-cover bg-center bg-no-repeat md:w-[255px]  md:h-[257px] shadow-sm shadow-white"
        style={{
          backgroundImage: `url(${abs3})`,
        }}
      >
        <div className="flex flex-col justify-center items-center pt-10">
          <FaPeopleGroup className="text-black" size={80} />
          <h1 className="capitalize text-xl w-40 text-[#1E1E1E] font-semibold text-center">
            most expert peoples
          </h1>
        </div>
      </div>
      <div
        className="bg-cover bg-center bg-no-repeat md:w-[255px]  md:h-[257px] shadow-sm shadow-white"
        style={{
          backgroundImage: `url(${abs4})`,
        }}
      >
        <div className="flex flex-col justify-center items-center pt-10">
          <AiOutlineGlobal className="text-black" size={80} />
          <h1 className="capitalize text-xl w-40 text-[#1E1E1E] font-semibold text-center">
            global support for all
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AbstractContent;
