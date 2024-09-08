import { useContext, useEffect } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { NavLink, Outlet } from "react-router-dom";

import CartDrawer from "../../Components/CartDrawer/CartDrawer";

const DashboardLayout = () => {
  const { isOpen, user, setIsOpen } = useContext(AuthContext);

  useEffect(() => {
    const handleResize = () => {
      const isBigDevice = window.innerWidth > 768; // You can adjust the threshold as needed
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
    <div className="flex items-start relative">
      <div
        className={`min-w-[230px] duration-300 overflow-y-scroll bg-[#EFF3F7] text-black z-[99]  p-3 min-h-screen max-h-screen  fixed  ${
          !isOpen ? "md:absolute top-20 transition-all left-[-999px]" : ""
        } `}
      >
        <div className="flex flex-col w-full my-5 uppercase">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `border-t font-medium border-spacing-3 rounded text-sm mb-2 shadow-[5px_5px_10px_#b8b8b8,_-5px_-5px_10px_#ffffff] hover:shadow-[-5px_-5px_10px_#b8b8b8,_5px_5px_10px_#ffffff] duration-300 transition-all py-2 ${
                isActive ? "bg-[#008081] text-white" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `border-t font-medium border-spacing-3 rounded text-sm mb-2 shadow-[5px_5px_10px_#b8b8b8,_-5px_-5px_10px_#ffffff] hover:shadow-[-5px_-5px_10px_#b8b8b8,_5px_5px_10px_#ffffff] duration-300 transition-all py-2 ${
                isActive ? "bg-[#008081] text-white" : ""
              }`
            }
          >
            My Profile
          </NavLink>

          {user?.role === "user" && (
            <NavLink
              to="/dashboard/leaderboard"
              className={({ isActive }) =>
                `border-t font-medium border-spacing-3 rounded text-sm mb-2 shadow-[5px_5px_10px_#b8b8b8,_-5px_-5px_10px_#ffffff] hover:shadow-[-5px_-5px_10px_#b8b8b8,_5px_5px_10px_#ffffff] duration-300 transition-all py-2 ${
                  isActive ? "bg-[#008081] text-white" : ""
                }`
              }
            >
              Leaderboard
            </NavLink>
          )}
          {user?.role === "admin" && (
            <NavLink
              to="/dashboard/setting"
              className={({ isActive }) =>
                `border-t font-medium border-spacing-3 rounded text-sm mb-2 shadow-[5px_5px_10px_#b8b8b8,_-5px_-5px_10px_#ffffff] hover:shadow-[-5px_-5px_10px_#b8b8b8,_5px_5px_10px_#ffffff] duration-300 transition-all py-2 ${
                  isActive ? "bg-[#008081] text-white" : ""
                }`
              }
            >
              Settings
            </NavLink>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="hidden md:block md:min-w-[220px] duration-500 transition-all"></div>
      )}
      <div className={`w-full ${isOpen && "md:calc-width"}`}>
        <div className="h-screen py-5 px-5">
          <Outlet />
        </div>
      </div>
      <CartDrawer />
    </div>
  );
};

export default DashboardLayout;
