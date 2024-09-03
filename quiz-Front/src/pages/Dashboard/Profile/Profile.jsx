import { useContext, useState } from "react";
import InputText from "../../../Components/Inputs/InputText";
import InputSelection from "../../../Components/InputSelection/inputSelection";
import SubmitButton from "../../../Components/Buttons/SubmitButton";

import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import Loading from "../../../Components/Loading";
// import { CartContext } from "../../../Context/CartContext";
import { FiUpload } from "react-icons/fi";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user, loading } = useContext(AuthContext);
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
    image: user?.image,
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

  // console.log(user);
  // console.log(formData);

  return (
    <div
      //       className={`py-5 flex flex-col gap-3 items-center px-10  duration-700 ${
      //         showCart && isOpen ? "w-[70%] " : ""
      //       }
      // ${showCart && !isOpen ? "w-[74%] " : ""}`}
      className={`py-5 flex flex-col gap-3 items-center px-10  duration-700`}
    >
      <div className="w-full ">
        <div className="flex items-center justify-center  flex-col  gap-3 ">
          <div className="relative px-5py-2 border-solid border-2  shadow-[2px_2px_2px_gray,-2px_-2px_2px_gray] flex justify-center items-center h-28 flex-col gap-1 text-base  text-accent    w-32 group">
            {formData.image ? (
              Array.isArray(formData.image) ? (
                <p className="flex items-center flex-col gap-1">
                  {" "}
                  <span className="text-4xl text-red-500">
                    {formData.image.length}
                  </span>{" "}
                  images uploaded
                </p>
              ) : (
                <img
                  src={formData.image}
                  alt=""
                  className={`bg-secondary   w-32    h-full object-contain `}
                />
              )
            ) : (
              <p>Preview </p>
            )}
            <label
              htmlFor="image"
              className="absolute bottom-0 top-0 right-0 hidden  group-hover:block px-5    border-black text-center rounded-xl bg-white bg-opacity-60"
              // className={`px-5   border-dashed border-2 border-black flex justify-center items-center flex-col gap-1  rounded-xl `}
            >
              <FiUpload className=" text-black order-2 mx-auto mt-6 "></FiUpload>
              <p className="text-base   text-black order-3 ">Change Photo</p>
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
          </div>
        </div>
        {/* {error && (
            <p className="text-secondary text-xl ps-5 capitalize">
              {error && error}
            </p>
          )} */}
      </div>
      {/* <div className=" text-center w-full">
        {user?.role == "user" && (
          <Link
            className="px-3 w-full hover:text-white font-bold text-black  py-1  hover:bg-yellow-500 bg-red-500 rounded"
            to="/dashboard/vendor-form"
          >
            Become Vendor
          </Link>
        )}
      </div> */}

      <div className="md:w-[65%] w-full  bg-red-300 bg-opacity-10 flex flex-col justify-center items-center rounded-3xl">
        <InputText
          type="text"
          name="firstName"
          label="First Name"
          placeholder="Your firstName"
          onChange={handleInputText}
          initialValue={formData.firstName}
          error={errors.firstName}
          styles=" py-3 text-3xl font-bold uppercase"
        ></InputText>
        <InputText
          type="text"
          name="lastName"
          label="Last Name"
          placeholder="Your last Name"
          onChange={handleInputText}
          initialValue={formData.lastName}
          error={errors.lastName}
          styles="border-0  py-3 text-3xl font-bold uppercase"
        ></InputText>
        <InputText
          text="email"
          name="email"
          label="Your email"
          placeholder="Email"
          onChange={handleInputText}
          initialValue={formData.email}
          error={errors.email}
          styles="border-0  py-3 text-3xl font-bold "
        ></InputText>
        <InputText
          text="text"
          name="phone"
          label="phone Number"
          placeholder="your phone number"
          onChange={handleInputText}
          initialValue={formData.phone}
          error={errors.phone}
          styles="border-0  py-3 text-3xl font-bold uppercase"
        ></InputText>
        {/* <InputSelection
        label="gender"
        data={formData}
        setFormData={setFormData}
        field="gender"
        options={["male", "female"]}
        selectOp="select gender"
        containerStyles="border-2 py-3 text-3xl font-bold uppercase"
      ></InputSelection> */}
        <SubmitButton
          className="inline-block font-bold"
          disabled={
            !formData?.firstName ||
            !formData?.email ||
            !formData?.lastName ||
            !formData?.phone
          }
        >
          Submit
        </SubmitButton>
      </div>
    </div>
  );
};

export default Profile;
