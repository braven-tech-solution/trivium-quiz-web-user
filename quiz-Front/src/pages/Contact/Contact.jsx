import { Link } from "react-router-dom";
import ultimateBanner from "../../assets/courses/ultimateBanner.jpg";
import Experience from "../../Components/Experience/Experience";
import Courses from "../../Components/Courses";
import Services from "../../Components/Services";
import Marquee from "react-fast-marquee";
import Melvin from "../../assets/About/melvin.jpg";
import Edward from "../../assets/About/Edward.jpg";
import prince from "../../assets/About/Prince.jpg";
import Footer from "../../Components/Footer";
import { FaHouseDamage } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { FaRegClock } from "react-icons/fa";
import { useSettings } from "../../hooks/useSettings";
import ContactForm from "./ContactForm";
const Contact = () => {
  const { settings } = useSettings();
  return (
    <>
      <div className="relative bg-white">
        {/* Apply a semi-transparent overlay to darken the image */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img
          src={ultimateBanner}
          alt=""
          className="w-full h-[70vh] object-cover"
        />

        <div className="absolute top-[50%] w-full transform[-translate-x-1/2 ] text-center bg-slate-300/20 rounded-md p-1 text-white max-auto">
          <h1 className="text-5xl font-extrabold">Contact With Us</h1>
          <div className="flex justify-center font-semibold bg-[#10053F] ">
            <Link to={"/"}>Home</Link>
            <span>/</span>
            <p>Contact</p>
          </div>
        </div>
      </div>
      <div className="md:flex md:flex-row flex-col md:gap-1 gap-5 justify-evenly md:my-20 my-6 max-full mx-auto">
        <div className="flex flex-col items-center justify-center bg-[#cce1fc] w-full h-[100] py-5">
          <SiGmail className="text-[#C830E0]" size={30} />

          <p className="uppercase font-semibold">EMAIL ADDRESS</p>
          <p className="text-[#0A224C]">{settings?.email}</p>
        </div>
        <div className="flex flex-col items-center bg-[#cce1fc] w-full h-[100] py-5">
          <IoCall className="text-[#FF8A73]" size={30} />

          <p className="uppercase font-semibold ">Contact No</p>
          <p className="text-[#0A224C]">{settings?.phone}</p>
        </div>
        <div className="flex flex-col items-center bg-[#cce1fc] w-full h-[100] py-5">
          <FaHouseDamage className="text-[#0749B7]" size={30} />

          <p className="uppercase font-semibold">Location</p>
          <p className="capitalize text-center text-[#0A224C]">
            {settings?.location}
          </p>
        </div>
        <div className="flex flex-col items-center bg-[#cce1fc] w-full h-[100] py-5">
          <FaRegClock className="text-[#2FE4A2]" size={30} />

          <p className="uppercase font-semibold">Open</p>
          <p className="capitalize text-[#0A224C]">{settings?.officeTime}</p>
        </div>
      </div>
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;
