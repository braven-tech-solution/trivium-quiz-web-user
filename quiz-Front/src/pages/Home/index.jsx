import { useEffect, useRef, useState } from "react";

import CoursePlan from "../../Components/CoursePlan";

import Courses from "../../Components/Courses";
import Expertise from "../../Components/Expertise";
import MapContainer from "../../Components/MapContainer";

import Quality from "../../Components/Quality";
import Services from "../../Components/Services";
import PortalModal from "../../Components/modal/portal-modal/PortalModal";
import HomeBanner from "../../Components/BannerSection/HomeBanner";
import AbstractContent from "../../Components/AbstractContent/AbstractContent";
import TopNavbar from "../../Components/TopNavbar/TopNavbar";
import Experience from "../../Components/Experience/Experience";
import Footer from "../../Components/Footer";
import LiveQuiz from "./LiveQuiz";
import Categories from "./Categories";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  // const homeBannerRef = useRef(null);
  const abstractContentRef = useRef(null);

  useEffect(() => {
    setOpen(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // const homeBannerTop = homeBannerRef.current.getBoundingClientRect().top;
      const abstractContentTop =
        abstractContentRef.current.getBoundingClientRect().top;

      // Check if HomeBanner or AbstractContent has reached the top of the viewport
      if (abstractContentTop <= 0) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const modalClose = () => {
    setOpen(!open);
  };

  return (
    <div>
      {/* {showNavbar && <TopNavbar showNavbar={showNavbar} />} */}
      {/* {open && <PortalModal close={modalClose} />} */}
      <div>
        <HomeBanner />
      </div>
      <LiveQuiz />
      <Categories />

      {/* <div ref={abstractContentRef}>
        <AbstractContent />
      </div> */}
      {/* 
      <Experience /> */}
      {/* <Courses /> */}
      {/* <Expertise /> */}
      {/* <Services /> */}
      {/* <Quality /> */}

      {/* <CoursePlan /> */}
      {/* <MapContainer /> */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
