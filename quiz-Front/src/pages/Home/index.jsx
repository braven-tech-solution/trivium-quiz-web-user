import { useEffect, useRef, useState } from "react";

import HomeBanner from "../../Components/BannerSection/HomeBanner";

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

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
