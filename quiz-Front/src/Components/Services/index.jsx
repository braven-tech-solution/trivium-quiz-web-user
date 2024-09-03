import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ServiceCard from "./ServiceCard";
import { GiTeacher } from "react-icons/gi";
import { FaSms } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { GrTechnology } from "react-icons/gr";
import { MdOutlineWeb } from "react-icons/md";
import { FaDigitalTachograph } from "react-icons/fa";
import { FaMobileScreenButton } from "react-icons/fa6";
import { SiTaichigraphics } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { AiOutlineSolution } from "react-icons/ai";
import { TbTournament } from "react-icons/tb";
const initialServices = [
  {
    id: uuidv4(),
    name: "Live Quiz",
    logo: <GiTeacher />,
  },

  {
    id: uuidv4(),
    name: "Level Up Quiz",
    logo: <CgWebsite />,
  },
  {
    id: uuidv4(),
    name: "Custom Quiz Creation",
    logo: <GrTechnology />,
  },
  {
    id: uuidv4(),
    name: "Performance Analytics",
    logo: <FaDigitalTachograph />,
  },
  {
    id: uuidv4(),
    name: "Quiz Tournaments",
    logo: <TbTournament />,
  },
  {
    id: uuidv4(),
    name: "Interactive Learning Modules",
    logo: <SiTaichigraphics />,
  },
  // {
  //   id: uuidv4(),
  //   name: "UI/UX Design",
  //   logo: <MdDesignServices />,
  // },
  // {
  //   id: uuidv4(),
  //   name: "Web Development",
  //   logo: <MdOutlineWeb />,
  // },
  // {
  //   id: uuidv4(),
  //   name: "Web Solution",
  //   logo: <AiOutlineSolution />,
  // },
];
const Services = () => {
  const [services, setServices] = useState(initialServices);
  return (
    <div className="mb-10 ">
      <div className="md:w-[50%] w-full md:mx-auto">
        <h1 className="text-center text-4xl font-bold bg-gradient-to-r from-[#0866FF] to-[#0866FF] text-transparent bg-clip-text">
          Our Services
        </h1>
        <p>
          <p className="font-bold">
            Want to Sharpen Your Mind with the Best Quizzes?
          </p>{" "}
          In today’s world, staying sharp is essential. Trivium Quiz offers
          top-notch challenges to elevate your knowledge and skills. Discover
          why we’re the go-to platform for personal growth.
        </p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 space-y-10 justify-center items-center bg-custom-gradient">
        {services?.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
