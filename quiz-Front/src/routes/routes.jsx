import { createBrowserRouter } from "react-router-dom";

import LoginForm from "../Components/auth/LoginForm";
import RegistrationForm from "../Components/auth/RegistrationForm";

import MainLayout from "../Layouts/MainLayout";
import SideBarLayout from "../Layouts/SidebarLayout";

import Home from "../pages/Home";
import DashboardLayout from "../Layouts/DashbordLayout/DashboardLayout";
import Profile from "../pages/Dashboard/Profile/Profile";

import PasswordChange from "../pages/Dashboard/PasswordChange/PasswordChange";
import Setting from "../pages/Dashboard/Setting/Setting";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

import Leaderboard from "../pages/Dashboard/Leaderboard/Leaderboard";
import Quiz from "../pages/Quiz/Quiz";
import LevelCategory from "../pages/Levels/LevelCategory";
import PrivateRoute from "./PrivateRoutes";

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
            path: "/contact",
            element: <Contact />,
          },
          {
            path: "/levels/quiz/:id",
            element: <Quiz />,
          },
          {
            path: "/levels/:id",
            element: (
              <PrivateRoute>
                <LevelCategory />
              </PrivateRoute>
            ),
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
            path: "/dashboard/leaderboard/",
            element: <Leaderboard />,
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
