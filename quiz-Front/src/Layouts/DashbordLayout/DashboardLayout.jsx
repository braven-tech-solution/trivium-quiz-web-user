/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { Link, Outlet } from "react-router-dom";
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
    <div className={` flex items-start  relative  `}>
      <div
        className={`min-w-[230px] duration-300 overflow-y-scroll bg-[#EFF3F7] text-black   z-[99] mt-10  p-3 min-h-screen  max-h-screen top-24  fixed  left-0   ${
          !isOpen
            ? "md:absolute top-20   transition-all left-[-999px]"
            : "md:fixed "
        } `}
      >
        <div className="flex  flex-col w-full my-5  uppercase">
          <Link
            className="border-t font-medium border-spacing-3 rounded text-accent  text-sm mb-2 shadow-[5px_5px_10px_#b8b8b8,_-5px_-5px_10px_#ffffff] hover:shadow-[-5px_-5px_10px_#b8b8b8,_5px_5px_10px_#ffffff] duration-300 transition-all py-2"
            to="/"
          >
            Home
          </Link>
          <Link
            className="border-t font-medium border-spacing-3 rounded text-accent  text-sm mb-2 shadow-[5px_5px_10px_#b8b8b8,_-5px_-5px_10px_#ffffff] hover:shadow-[-5px_-5px_10px_#b8b8b8,_5px_5px_10px_#ffffff] duration-300 transition-all py-2"
            to="/dashboard/"
          >
            My Profile
          </Link>

          {user?.role === "user" && (
            <Link
              className="border-t font-medium border-spacing-3 rounded text-accent  text-sm mb-2 shadow-[5px_5px_10px_#b8b8b8,_-5px_-5px_10px_#ffffff] hover:shadow-[-5px_-5px_10px_#b8b8b8,_5px_5px_10px_#ffffff] duration-300 transition-all py-2"
              to="/dashboard/orders"
            >
              My Orders
            </Link>
          )}
          {user?.role === "admin" && (
            <>
              <Link
                className="border-t font-medium border-spacing-3 rounded text-accent  text-sm mb-2 shadow-[5px_5px_10px_#b8b8b8,_-5px_-5px_10px_#ffffff] hover:shadow-[-5px_-5px_10px_#b8b8b8,_5px_5px_10px_#ffffff] duration-300 transition-all py-2"
                to="/dashboard/customers-orders"
              >
                Customer's Orders
              </Link>
              <Link
                className="border-t font-medium border-spacing-3 rounded text-accent  text-sm mb-2 shadow-[5px_5px_10px_#b8b8b8,_-5px_-5px_10px_#ffffff] hover:shadow-[-5px_-5px_10px_#b8b8b8,_5px_5px_10px_#ffffff] duration-300 transition-all py-2"
                to="/dashboard/quotationManage"
              >
                Customer's Quotations
              </Link>
              <Link
                className="border-t font-medium border-spacing-3 rounded text-accent  text-sm mb-2 shadow-[5px_5px_10px_#b8b8b8,_-5px_-5px_10px_#ffffff] hover:shadow-[-5px_-5px_10px_#b8b8b8,_5px_5px_10px_#ffffff] duration-300 transition-all py-2"
                to="/dashboard/my-products"
              >
                My Products
              </Link>
              <Link
                className="border-t font-medium border-spacing-3 rounded text-accent  text-sm mb-2 shadow-[5px_5px_10px_#b8b8b8,_-5px_-5px_10px_#ffffff] hover:shadow-[-5px_-5px_10px_#b8b8b8,_5px_5px_10px_#ffffff] duration-300 transition-all py-2"
                to="/dashboard/create-category"
              >
                Create Category
              </Link>
              {/* <Link
                className="border-t font-medium border-spacing-3 rounded text-accent  text-sm mb-2 shadow-[5px_5px_10px_#b8b8b8,_-5px_-5px_10px_#ffffff] hover:shadow-[-5px_-5px_10px_#b8b8b8,_5px_5px_10px_#ffffff] duration-300 transition-all py-2"
                to="/dashboard/create-subcategory"
              >
                Create Sub-Category
              </Link> */}
              {/* <Link
                className="border-t font-medium border-spacing-3 rounded text-accent  text-sm mb-2 shadow-[5px_5px_10px_#b8b8b8,_-5px_-5px_10px_#ffffff] hover:shadow-[-5px_-5px_10px_#b8b8b8,_5px_5px_10px_#ffffff] duration-300 transition-all py-2"
                to="/dashboard/products"
              >
                All Products
              </Link> */}
              <Link
                className="border-t font-medium border-spacing-3 rounded text-accent  text-sm mb-2 shadow-[5px_5px_10px_#b8b8b8,_-5px_-5px_10px_#ffffff] hover:shadow-[-5px_-5px_10px_#b8b8b8,_5px_5px_10px_#ffffff] duration-300 transition-all py-2"
                to="/dashboard/banners"
              >
                Banner
              </Link>
              <Link
                className="border-t font-medium border-spacing-3 rounded text-accent  text-sm mb-2 shadow-[5px_5px_10px_#b8b8b8,_-5px_-5px_10px_#ffffff] hover:shadow-[-5px_-5px_10px_#b8b8b8,_5px_5px_10px_#ffffff] duration-300 transition-all py-2"
                to="/dashboard/setting"
              >
                Settings
              </Link>
              {/* <Link
                className="border-t font-medium border-spacing-3 rounded text-accent  text-sm mb-2 shadow-[5px_5px_10px_#b8b8b8,_-5px_-5px_10px_#ffffff] hover:shadow-[-5px_-5px_10px_#b8b8b8,_5px_5px_10px_#ffffff] duration-300 transition-all py-2"
                to="/dashboard/pending-vendor"
              >
                Pending Vendor
              </Link> */}
              {/* <Link
                className="border-t font-medium border-spacing-3 rounded text-accent  text-sm mb-2 shadow-[5px_5px_10px_#b8b8b8,_-5px_-5px_10px_#ffffff] hover:shadow-[-5px_-5px_10px_#b8b8b8,_5px_5px_10px_#ffffff] duration-300 transition-all py-2"
                to="/dashboard/approved-vendor"
              >
                Approved Vendor
              </Link> */}
            </>
          )}

          {/* <Link
            className="border-t border-spacing-3 font-medium rounded text-accent  text-sm mb-2 shadow-[5px_5px_10px_#b8b8b8,_-5px_-5px_10px_#ffffff] hover:shadow-[-5px_-5px_10px_#b8b8b8,_5px_5px_10px_#ffffff] duration-300 transition-all py-2"
            to="/dashboard/change-password"
          >
            Change Password
          </Link> */}

          {/* <Link
            className="border-t border-spacing-3 font-medium rounded text-accent  text-sm mb-2 shadow-[5px_5px_10px_#b8b8b8,_-5px_-5px_10px_#ffffff] hover:shadow-[-5px_-5px_10px_#b8b8b8,_5px_5px_10px_#ffffff] duration-300 transition-all py-2"
            to="/dashboard/vendor-form"
          >
            Create Product
          </Link> */}
        </div>
      </div>
      {isOpen && (
        <div className="hidden md:block  md:min-w-[220px] duration-500 transition-all"></div>
      )}
      <div className={`w-full py-32  ${isOpen && "md:calc-width"}`}>
        <div className="h-screen py-5 px-5">
          {" "}
          <Outlet></Outlet>
        </div>
      </div>
      <CartDrawer></CartDrawer>
    </div>
  );
};

export default DashboardLayout;
