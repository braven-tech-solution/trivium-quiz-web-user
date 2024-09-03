import InputText from "../../../Components/Inputs/InputText";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import { CartContext } from "../../../Context/CartContext";
import SubmitButton from "../../../Components/Buttons/SubmitButton";
import InputSelection from "../../../Components/InputSelection/inputSelection";
import Loading from "../../../Components/Loading";
import { useState } from "react";
import { useEffect } from "react";

const PasswordChange = () => {
  const { user, loading } = useContext(AuthContext);
  const { showCart } = useContext(CartContext);
  const { isOpen } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    firstName: user?.firstName,
    lastName: user?.lastName,
    email: user?.email,
    gender: user?.gender,
    phone: user?.phone,
  });
  const [errors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    phone: "",
  });
  useEffect(() => {
    setFormData({
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      gender: user?.gender,
      phone: user?.phone,
    });
  }, [user]);
  if (loading && !user?.email) {
    return <Loading></Loading>;
  }
  // console.log(user);

  return (
    <div
      className={`py-5 flex flex-col gap-3 items-start px-10  duration-700 ${
        showCart && isOpen ? "w-[70%] " : ""
      } 
${showCart && !isOpen ? "w-[74%] " : ""}  `}
    >
      <InputText
        type="text"
        name="firstName"
        label="First Name"
        placeholder="Your firstName"
        initialValue={formData.firstName}
        error={errors.firstName}
        styles=" py-3 text-3xl font-bold uppercase"
      ></InputText>
      <InputText
        type="text"
        name="lastName"
        label="Last Name"
        placeholder="Your last Name"
        initialValue={formData.lastName}
        error={errors.lastName}
        styles="border-0  py-3 text-3xl font-bold uppercase"
      ></InputText>
      <InputText
        text="email"
        name="email"
        label="Your email"
        placeholder="Email"
        initialValue={formData.email}
        error={errors.email}
        styles="border-0  py-3 text-3xl font-bold "
      ></InputText>
      <InputText
        text="text"
        name="phone"
        label="phone Number"
        placeholder="your phone number"
        initialValue={formData.phone}
        error={errors.phone}
        styles="border-0  py-3 text-3xl font-bold uppercase"
      ></InputText>
      <InputSelection
        label="gender"
        data={formData}
        setFormData={setFormData}
        field="gender"
        options={["male", "female"]}
        selectOp="select gender"
        containerStyles="border-2 py-3 text-3xl font-bold uppercase"
      ></InputSelection>
      <SubmitButton
        className="inline-block"
        disabled={
          !formData?.firstName ||
          !formData?.email ||
          !formData?.lastName ||
          !formData?.phone ||
          !formData?.gender
        }
      >
        Submit
      </SubmitButton>
    </div>
  );
};

export default PasswordChange;
