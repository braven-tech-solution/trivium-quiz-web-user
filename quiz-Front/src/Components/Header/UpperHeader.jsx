import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { useContext } from "react";
import Marquee from "react-fast-marquee";
import { useSettings } from "../../hooks/useSettings";

const UpperHeader = () => {
  const { user } = useContext(AuthContext);
  const { settings } = useSettings();
  return (
    <div
      className="md:flex md:flex-row flex-col  w-full justify-between items-center md:px-32 bg-gradient-to-r from-[#008081] to-[#008081] z-50 text-white"
      style={{
        boxShadow:
          "0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 15px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div className="flex  justify-center items-center gap-2 text-white">
        <h1 className="">{settings?.phone}</h1>

        <Link to={"/"}>
          <FiFacebook size={20}></FiFacebook>
        </Link>
        <Link to={"/"}>
          <FiLinkedin size={20}></FiLinkedin>
        </Link>
      </div>
      <div>
        <Marquee>
          <h1 className="font-semibold">
            {/* OPEN: <span className="capitalize">{settings?.officeTime}</span> */}
            OPEN <span className="capitalize">24/7</span>
          </h1>
        </Marquee>
      </div>
      <div>
        {user ? (
          " "
        ) : (
          <>
            {" "}
            <Link to={"/login"}>
              {" "}
              <button>Login</button>
            </Link>
            <span>/</span>
            <Link to={"/register"}>
              {" "}
              <button>Register</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default UpperHeader;
