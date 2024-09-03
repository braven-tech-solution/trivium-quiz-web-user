/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Loading from "../Componentss/common/Loading";

const PrivateRoute = ({ children }) => {
  const { auth, loading } = useAuth();

  const location = useLocation();

  //   if (loading) {
  //     return <Loading />;
  //   }

  if (auth?.user?.email) {
    return children;
  }

  return <Navigate to="/sign-in" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
