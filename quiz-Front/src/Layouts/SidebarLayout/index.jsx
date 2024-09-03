import { Outlet } from "react-router-dom";
import Siderbar from "../../Components/Sidebar";
import CartDrawer from "../../Components/CartDrawer/CartDrawer";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const SideBarLayout = () => {
  const { isOpen, setIsOpen } = useContext(AuthContext);
  useEffect(() => {
    const handleResize = () => {
      const isBigDevice = window.innerWidth == 768; // You can adjust the threshold as needed
      setIsOpen(isBigDevice);
    };

    // Initial call to set the initial state based on the window width
    handleResize();

    // Attach the resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className={` flex items-start  relative  `}>
        <div
          className={`min-w-[230px] duration-300 mt-10 overflow-y-scroll bg-secondary shadow-[5px_5px_5px_#ddd]  z-[999]  px-5 min-h-screen  max-h-screen   fixed  left-0   bg-white ${
            !isOpen
              ? "md:absolute top-20   transition-all left-[-999px]"
              : "md:fixed "
          } `}
        >
          <Siderbar></Siderbar>
        </div>
        {isOpen && (
          <div className="hidden md:block  md:min-w-[230px] duration-700 transition-all"></div>
        )}
        <div className={`w-full    ${isOpen && "md:calc-width"}`}>
          <div className="h-screen duration-700 ">
            <Outlet></Outlet>
          </div>
        </div>
        <CartDrawer></CartDrawer>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default SideBarLayout;
