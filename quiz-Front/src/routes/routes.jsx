import { createBrowserRouter } from "react-router-dom";

import LoginForm from "../Components/auth/LoginForm";
import RegistrationForm from "../Components/auth/RegistrationForm";
import AllCourses from "../pages/AllCourses";
import CourseDetails from "../pages/AllCourses/CourseDetails";
import SoftwareServices from "../pages/SoftwareServices/";
import WebSolutions from "../pages/WebSoltuions/";
import SoftwareDetails from "../pages/SoftwareServices/SoftwareDetails";
import WebSolutionDetails from "../pages/WebSoltuions/WebSolutionDetails";
import MainLayout from "../Layouts/MainLayout";
import SideBarLayout from "../Layouts/SidebarLayout";
import Checkout from "../Components/Checkout/Checkout";
import OrderPlaced from "../pages/OrderPlaced/OrderPlaced";

import Home from "../pages/Home";
import DashboardLayout from "../Layouts/DashbordLayout/DashboardLayout";
import Profile from "../pages/Dashboard/Profile/Profile";
import Shipping from "../pages/Shipping/Shipping";
import CustomerOrders from "../pages/Dashboard/CustomerOrders/CustomerOrders";
import CreateCategory from "../pages/Dashboard/CreateCategory";
import MyProducts from "../pages/Dashboard/MyProducts/MyProducts";
import Products from "../pages/Dashboard/Products";
import BannerManage from "../pages/Dashboard/BannerManage";
import PasswordChange from "../pages/Dashboard/PasswordChange/PasswordChange";
import Setting from "../pages/Dashboard/Setting/Setting";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import CoursePlan from "../Components/CoursePlan";
import Quotation from "../pages/Quotation/Quotation";
import QuotationManage from "../pages/Dashboard/QuotationManage/QuotationManage";
import Leaderboard from "../pages/Dashboard/Leaderboard/Leaderboard";
import Quiz from "../pages/Quiz/Quiz";
import LevelCategory from "../pages/Levels/LevelCategory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <SideBarLayout></SideBarLayout>,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/about",
            element: <About />,
          },
          {
            path: "/priceplan",
            element: <CoursePlan />,
          },
          {
            path: "/contact",
            element: <Contact />,
          },
          {
            path: "/levels/quiz",
            element: <Quiz />,
          },
          {
            path: "/levels/:id",
            element: <LevelCategory />,
          },
          {
            path: "/our-courses",
            element: <AllCourses />,
          },
          {
            path: "/course/:id",
            element: <CourseDetails />,
          },
          {
            path: "/software-services",
            element: <SoftwareServices />,
          },
          {
            path: "/software-service/:id",
            element: <SoftwareDetails></SoftwareDetails>,
          },
          {
            path: "/web-solutions",
            element: <WebSolutions></WebSolutions>,
          },
          {
            path: "/web-solutions/:id",
            element: <WebSolutionDetails />,
          },
          {
            path: "/checkout",
            element: <Checkout></Checkout>,
          },
          {
            path: "/quotation",
            element: <Quotation></Quotation>,
          },
          {
            path: "/orderPlaced/:orderedId",
            element: <OrderPlaced></OrderPlaced>,
          },
          // {
          //   path: "/searchedproduct/filtered",
          //   element: <SearchedProduct></SearchedProduct>,
          // },
          {
            path: "/login",
            element: <LoginForm />,
          },
          {
            path: "/register",
            element: <RegistrationForm />,
          },
        ],
      },
      {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
          {
            path: "/dashboard/",
            element: <Profile></Profile>,
          },
          {
            path: "/dashboard/profile/",
            element: <Profile></Profile>,
          },

          {
            path: "/dashboard/orders/",
            element: <Shipping></Shipping>,
          },
          {
            path: "/dashboard/leaderboard/",
            element: <Leaderboard />,
          },
          {
            path: "/dashboard/customers-orders/",
            element: <CustomerOrders></CustomerOrders>,
          },
          {
            path: "/dashboard/create-category/",
            element: <CreateCategory></CreateCategory>,
          },
          {
            path: "/dashboard/my-products",
            element: <MyProducts></MyProducts>,
          },
          {
            path: "/dashboard/products",
            element: <Products></Products>,
          },
          {
            path: "/dashboard/quotationManage",
            element: <QuotationManage></QuotationManage>,
          },
          {
            path: "/dashboard/banners",
            element: <BannerManage></BannerManage>,
          },

          {
            path: "/dashboard/change-password",
            element: <PasswordChange></PasswordChange>,
          },
          {
            path: "/dashboard/setting",
            element: <Setting></Setting>,
          },
          // {
          //   path: "/dashboard/vendor-form",
          //   element: <FormOne></FormOne>,
          // },
        ],
      },
    ],
  },

  {
    path: "*",
    // element: <NotFoundPage />,
  },
]);
