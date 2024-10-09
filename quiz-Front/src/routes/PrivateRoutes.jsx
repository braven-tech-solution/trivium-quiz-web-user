/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  // const { auth, loading } = useAuth();
  const { user, logOut } = useContext(AuthContext);

  const location = useLocation();

  //   if (loading) {
  //     return <Loading />;
  //   }

  if (user?.email) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
