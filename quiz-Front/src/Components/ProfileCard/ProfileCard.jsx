import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

const ProfileCard = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);
  // console.log(" soyeb user");

  return (
    // -right-[999px]
    <div className=" absolute group-hover:top-0 -top-[999px] right-0  group-hover:translate-y-[35%] duration-700   bg-white rounded-xl w-[200px]  shadow-[2px_2px_2px_2px_#ddd] z-[999]">
      <h1 className="text-black capitalize  text-[17px] font-medium p-5  ">
        {user?.firstName} {user.lastName}
      </h1>
      <div className="flex items-center justify-start flex-col text-sm capitalize ">
        <Link
          className=" px-3 w-full hover:text-white text-black  py-1  hover:bg-yellow-500 rounded"
          to="/dashboard/profile"
        >
          Profile
        </Link>
      </div>
      <div className="flex px-3 mt-2 items-start justify-start pb-5">
        <Link to="/">
          <FiLogOut
            size={22}
            onClick={logOut}
            className=" inline-block text-red-500"
          ></FiLogOut>
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
