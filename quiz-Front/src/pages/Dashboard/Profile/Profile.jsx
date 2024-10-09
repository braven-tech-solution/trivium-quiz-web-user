import { useContext, useState } from "react";
import InputText from "../../../Components/Inputs/InputText";
import InputSelection from "../../../Components/InputSelection/inputSelection";
import SubmitButton from "../../../Components/Buttons/SubmitButton";
import { GiCelebrationFire } from "react-icons/gi";

import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import Loading from "../../../Components/Loading";
// import { CartContext } from "../../../Context/CartContext";
import { FiUpload } from "react-icons/fi";

import sohag from "../../../assets/profile/sohag.jpg";
import { useLoggedUser } from "../../../hooks/quizhooks/useLoggedUser";

const Profile = () => {
  const { user, loading } = useContext(AuthContext);
  const { loggedUser } = useLoggedUser();

  // const { showCart } = useContext(CartContext);
  const { isOpen } = useContext(AuthContext);
  // console.log("show cart", showCart);

  if (loading && !user?.email) {
    return <Loading></Loading>;
  }
  const [formData, setFormData] = useState({
    firstName: user?.firstName,
    lastName: user?.lastName,
    email: user?.email,
    gender: user?.gender,
    phone: user?.phone,
    image: sohag,
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    phone: "",
  });
  const handleInputText = (e) => {
    // console.log(e.target.name);
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };
  console.log(loggedUser);
  if (!loggedUser || !loggedUser?._id) {
    return <div>Loading...</div>;
  }
  return (
    <div
      className={`py-5 flex flex-col gap-3 items-center md:px-10  duration-700`}
    >
      <div className="w-full ">
        <div className="flex items-center justify-center  flex-col  gap-3 ">
          {/* <div className="relative px-5py-2 border-solid border-2  shadow-[2px_2px_2px_gray,-2px_-2px_2px_gray] flex justify-center items-center h-28 flex-col gap-1 text-base  text-accent rounded-full   w-32 group">
            {formData.image ? (
              Array.isArray(formData.image) ? (
                <p className="flex items-center flex-col gap-1">
                  {" "}
                  <span className="text-4xl text-red-500 ">
                    {formData.image.length}
                  </span>{" "}
                  images uploaded
                </p>
              ) : (
                <img
                  src={formData.image}
                  alt=""
                  className={`bg-secondary  rounded-full object-contain `}
                />
              )
            ) : (
              <p>Preview </p>
            )}
            <label
              htmlFor="image"
              className="absolute bottom-0 top-0 right-0 hidden  group-hover:block px-5    border-black text-center rounded-full bg-white bg-opacity-60 "
              // className={`px-5   border-dashed border-2 border-black flex justify-center items-center flex-col gap-1  rounded-xl `}
            >
              <FiUpload className=" text-black order-2 mx-auto mt-6 rounded-full"></FiUpload>
              <p className="text-base   text-black order-3 rounded-full">
                Change Photo
              </p>
              <input
                id="image"
                name="image"
                className={`text-xl absolute top-0 left-0  order-1 text-center m-auto invisible text-white `}
                // onChange={onChange}
                type="file"
                accept="image/*"
                // value={formData.image}
                // multiple={isMultiple}
              />
            </label>
          </div> */}
          <div className="relative px-5 py-2 border-solid border-2 shadow-[2px_2px_2px_gray,-2px_-2px_2px_gray] flex justify-center items-center h-32 w-32 flex-col gap-1 text-base text-accent rounded-full group">
            {formData.image ? (
              Array.isArray(formData.image) ? (
                <p className="flex items-center flex-col gap-1">
                  <span className="text-4xl text-red-500">
                    {formData.image.length}
                  </span>
                  images uploaded
                </p>
              ) : (
                <img
                  src={formData.image}
                  alt=""
                  className="bg-secondary rounded-full object-contain"
                />
              )
            ) : (
              <p>Preview</p>
            )}
            <label
              htmlFor="image"
              className="absolute bottom-0 top-0 right-0 hidden group-hover:block px-5 border-black text-center rounded-full bg-white bg-opacity-60"
            >
              <FiUpload className="text-black order-2 mx-auto mt-6 rounded-full"></FiUpload>
              <p className="text-base text-black order-3 rounded-full">
                Change Photo
              </p>
              <input
                id="image"
                name="image"
                className="text-xl absolute top-0 left-0 order-1 text-center m-auto invisible"
                type="file"
                accept="image/*"
              />
            </label>
          </div>

          <div>
            <h1 className="text-2xl font-semibold">{loggedUser.fullName}</h1>
          </div>
        </div>
      </div>

      <div className="md:w-[65%] w-full  bg-opacity-10 flex flex-col justify-center items-center rounded-3xl border-solid border-[#606969] border-2 text-white shadow-[1px_1px_10px_#606969,_-1px_-1px_10px_#606969] hover:shadow-[-5px_-5px_10px_#606969,_5px_5px_10px_#606969] duration-300 transition-all">
        <div className="flex flex-col md:flex-row justify-around w-full">
          <h1 className="text-xl font-semibold bg-[#008081] px-2 py-2 mt-2 rounded text-center ">
            Strength :<span>🔥</span> {loggedUser.strength}
          </h1>
          <h1 className="text-xl font-semibold bg-[#008081] px-2 py-2 mt-2 rounded text-center ">
            Point :⭐{loggedUser.point}
          </h1>
        </div>

        <hr className="border-[#3C6263] my-4 w-full" />
        <div className="w-full my-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-2 mx-auto">
            <div className="bg-[#037E83] md:w-[250px] w-[90%] md:h-[150px] py-2 px-3 mx-auto rounded-md flex flex-col justify-center items-center text-xl font-bold text-white">
              <h1>Complete Quiz</h1>
              <h1 className="py-2 px-3 rounded-full bg-[#3C6263]">
                {loggedUser.completeQuiz}
              </h1>
            </div>
            <div className="bg-[#037E83] md:w-[250px] w-[90%] md:h-[150px] py-2 px-3 mx-auto rounded-md flex flex-col justify-center items-center text-xl font-bold text-white">
              <h1>Question Answer</h1>
              <h1 className="py-2 px-3 rounded-full bg-[#3C6263]">
                {loggedUser.questionAnswer}
              </h1>
            </div>
            <div className="bg-[#037E83] md:w-[250px] w-[90%] md:h-[150px] py-2 px-3 mx-auto rounded-md flex flex-col justify-center items-center text-xl font-bold text-white">
              <h1>Wrong Answer</h1>
              <h1 className="py-2 px-3 rounded-full bg-[#3C6263]">
                {" "}
                {loggedUser.incorrectAnswer}
              </h1>
            </div>
            <div className="bg-[#037E83] md:w-[250px] w-[90%] md:h-[150px] py-2 px-3 mx-auto rounded-md flex flex-col justify-center items-center text-xl font-bold text-white">
              <h1>Correct Answer</h1>
              <h1 className="py-2 px-3 rounded-full bg-[#3C6263]">
                {" "}
                {loggedUser.correctAnswer}
              </h1>
            </div>
          </div>
        </div>

        {/* <InputText
          type="text"
          name="firstName"
          label="First Name"
          placeholder="Your firstName"
          onChange={handleInputText}
          initialValue={formData.firstName}
          error={errors.firstName}
          styles=" py-3 text-3xl font-bold uppercase"
        ></InputText> */}
        {/* <SubmitButton
          className="inline-block font-bold"
          disabled={
            !formData?.firstName ||
            !formData?.email ||
            !formData?.lastName ||
            !formData?.phone
          }
        >
          Submit
        </SubmitButton> */}
      </div>
    </div>
  );
};

export default Profile;
