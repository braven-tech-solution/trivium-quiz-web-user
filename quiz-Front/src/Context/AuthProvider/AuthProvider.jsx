/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { accessToken, baseURL } from "../../Configs/libs";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  // const [loading, setLoading] = useState(false);

  //change value in isOpen state
  // useEffect(() => {
  //   const handleResize = () => {
  //     const isBigDevice = window.innerWidth > 768; // You can adjust the threshold as needed
  //     setIsOpen(isBigDevice);
  //   };

  //   // Initial call to set the initial state based on the window width
  //   handleResize();

  //   // Attach the resize event listener
  //   window.addEventListener("resize", handleResize);

  //   // Cleanup the event listener on component unmount
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  useEffect(() => {
    setLoading(true);
    fetch(`${baseURL}/user/me`, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setLoading(false);
          setUser(data.data);
        } else {
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [user?.role]);

  const logOut = () => {
    localStorage.removeItem("accessToken");
    setUser(null);
  };
  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    logOut,
    isOpen,
    setIsOpen,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
