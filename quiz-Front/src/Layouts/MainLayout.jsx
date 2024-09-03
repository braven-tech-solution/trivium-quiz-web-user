import { Outlet } from "react-router-dom";

// import Footer from "../components/common/Footer";
import Header from "../Components/Header";
import UpperHeader from "../Components/Header/UpperHeader";

import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";

const MainLayout = () => {
  const { setIsOpen, isOpen } = useContext(AuthContext);

  return (
    <div className="relative w-full">
      <UpperHeader />

      <Header setIsOpen={setIsOpen} isOpen={isOpen} />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
