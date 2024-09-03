import { Link } from "react-router-dom";
import ultimateBanner from "../../assets/courses/ultimateBanner.jpg";
import aboutBanner from "../../assets/quiz/banner5.jpg";
import Experience from "../../Components/Experience/Experience";
import Courses from "../../Components/Courses";
import Services from "../../Components/Services";
import Marquee from "react-fast-marquee";
import Melvin from "../../assets/About/melvin.jpg";
import Edward from "../../assets/About/Edward.jpg";
import prince from "../../assets/About/Prince.jpg";
import Footer from "../../Components/Footer";
const About = () => {
  return (
    <>
      <div className="relative bg-white">
        {/* Apply a semi-transparent overlay to darken the image */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img
          src={aboutBanner}
          alt=""
          className="w-full h-[70vh] object-cover"
        />

        <div className="absolute top-[50%] w-full transform[-translate-x-1/2 ] text-center bg-slate-300/20 rounded-md p-1 text-white max-auto">
          <h1 className="text-5xl font-extrabold">About</h1>
          <div className="flex justify-center font-semibold bg-[#10053F] ">
            <Link to={"/"}>Home</Link>
            <span>/</span>
            <p>About</p>
          </div>
        </div>
      </div>
      {/* <Experience /> */}
      <Services />
      {/* <div className="mt-20">
        <p className="capitalize text-center text-6xl text-[#296EEB] font-bold mb-10">
          We are ready to help your business
        </p>
        <Marquee pauseOnHover={true}>
          <div className="flex gap-24">
            <div className="flex flex-col justify-center items-center ">
              <img src={Melvin} alt="" className="w-[200px] h-[200px]" />
              <p>Melvin Mondol</p>
              <p>CEO/FOUNDER</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src={Edward} alt="" className="w-[200px] h-[200px]" />
              <p>Edward Mondol</p>
              <p>CO-FOUNDER/CHAIRMAN</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src={prince} alt="" className="w-[200px] h-[200px]" />
              <p>Prince Talukder</p>
              <p>Cloud Engineer</p>
            </div>
          </div>
        </Marquee>
        <div>
          <Footer />
        </div>
      </div> */}
      <Footer />
    </>
  );
};

export default About;
