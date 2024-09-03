import { useContext, useState } from "react";
import InputText from "../../Components/Inputs/InputText";
import ImageUpload from "../../Components/ImageUpload";
import { accessToken, baseURL } from "../../Configs/libs";
import toast from "react-hot-toast";
import SubmitButton from "../../Components/Buttons/SubmitButton";
import { useNavigate } from "react-router-dom";
import Loading from "../../Components/Loading";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { CartContext } from "../../Context/CartContext";
import InputSelection from "../InputSelection/inputSelection";

const FormOne = () => {
  window.scrollTo(0, 0);
  const { user, setUser } = useContext(AuthContext);
  const { showCart } = useContext(CartContext);
  const { isOpen } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    firstName: user?.firstName,
    lastName: user?.lastName,
    email: user?.email,
    nidfront: user?.nidfront,
    nidback: "",
    shopname: "",
    Tin: "",
    vendorProcess: "pending",
    phone: user?.phone,

    gender: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    nidfront: "",
    nidback: "",
    shopname: "",
    Tin: "",
    phone: "",
    image: "",
    role: "",
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleInputText = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (!value) {
      setFormData({ ...formData, [name]: "" });
      setErrors({ ...errors, [name]: `${name} shouldn't be empty` });
    } else {
      setFormData({ ...formData, [name]: value });
      setErrors({ ...errors, [name]: "" });
    }
  };

  // const handlePhone = (e) => {
  //   const phone = e.target.value;
  //   if (phone === "") {
  //     setErrors({ ...errors, phone: "phone number should't be empty" });
  //     setFormData({ ...formData, phone: "" });
  //   } else if (!/^[\d-\s]+$/.test(phone)) {
  //     setErrors({ ...errors, phone: "number should be valid" });
  //     setFormData({ ...formData, phone: "" });
  //   } else {
  //     setErrors({ ...errors, phone: "" });
  //     setFormData({ ...formData, phone: phone });
  //   }
  // };

  const handleImageUpload = async (e) => {
    const name = e.target.name;
    const image = e.target.files[0];
    const newFromData = new FormData();
    newFromData.append("image", image);
    if (!image) {
      setErrors({ ...errors, [name]: "Please select an image" });
      setFormData({ ...formData, [name]: "" });
      return;
    }
    try {
      const res = await fetch(`${baseURL}/image`, {
        method: "POST",
        body: newFromData,
      });

      const data = await res.json();

      if (data.status === "success") {
        setFormData({ ...formData, [name]: data.data.imageUrl });
        toast.success("Category Logo Uploaded");
        setErrors({ ...errors, [name]: "" });
      } else {
        setFormData({ ...formData, [name]: "" });
        setErrors({ ...errors, [name]: data.message });
      }
    } catch (err) {
      setErrors({ ...errors, [name]: err.message });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // const { confirm, ...user } = formData;
    // console.log(formData);
    setLoading(true);
    try {
      const res = await fetch(`${baseURL}/user/me`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data?.status === "success") {
        toast.success(data.message);
        setLoading(false);
      } else {
        toast.error(data.message);
        setLoading(false);
      }
    } catch (err) {
      toast.error(err?.message);
      console.log(err);
    }
    setLoading(true);
    fetch(`${baseURL}/user/me`, {
      headers: {
        "content-type": "application/json",
        authorization: accessToken,
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

    navigate("/");
  };

  // console.log(formData);
  return (
    <div
      className={`flex items-center justify-center  w-full gap-5 md:max-h-screen ${
        showCart && isOpen ? "w-[70%] " : ""
      }  
${showCart && !isOpen ? "w-[74%] " : ""}`}
    >
      {user?.vendorProcess !== "pending" ? (
        <div className=" w-full md:px-10 text-white ">
          <form
            onSubmit={onSubmit}
            className="md:w-[75%] w-full  mx-auto bg-yellow-400 py-1  px-5 rounded "
          >
            <h2 className="text-3xl font-semibold capitalize ">Vendor Form</h2>
            <div className="grid grid-cols-2 gap-3">
              <InputText
                type="text"
                name="firstName"
                label="First Name"
                placeholder="enter  your first name"
                // onChange={handleInputText}
                error={errors.firstName}
                initialValue={formData.firstName}
                styles={``}
              ></InputText>
              <InputText
                type="text"
                name="lastName"
                label="last Name"
                placeholder="enter  your last name"
                // onChange={handleInputText}
                error={errors.lastName}
                initialValue={formData?.lastName}
                styles={``}
              ></InputText>

              <InputText
                type="text"
                name="phone"
                label="your phone"
                placeholder="enter your phone"
                // onChange={handlePhone}
                error={errors.phone}
                initialValue={formData?.phone}
                styles={``}
              ></InputText>
              <InputText
                type="text"
                name="shopname"
                label="Shop Name"
                placeholder="enter your Shop name"
                onChange={handleInputText}
                error={errors.firstName}
                styles={``}
              ></InputText>
              <InputText
                type="text"
                name="Tin"
                label="TIN (Optional)"
                placeholder="enter your Tin"
                onChange={handleInputText}
                error={errors.firstName}
                styles={``}
              ></InputText>
              <InputSelection
                label="Gender"
                data={formData}
                setData={setFormData}
                field="gender"
                options={["Male", "Female"]}
                selectOp="Select Gender"
              />

              <div className="w-full col-span-2">
                <label htmlFor="">
                  <p className="font-large">NID Front</p>
                  <ImageUpload
                    id="nidfront"
                    onChange={handleImageUpload}
                    error={errors.nidfront}
                    image={formData.nidfront}
                    isMultiple={false}
                    imageStyles={`bg-secondary object-contain`}
                  ></ImageUpload>
                </label>
              </div>
              <div className="w-full col-span-2">
                <label htmlFor="" className="">
                  <p className="font-large">NID Back</p>
                  <ImageUpload
                    id="nidback"
                    onChange={handleImageUpload}
                    error={errors.nidback}
                    image={formData.nidback}
                    isMultiple={false}
                    imageStyles={`bg-secondary object-contain`}
                  ></ImageUpload>
                </label>
              </div>

              {/* <div className="flex item-center flex-col gap-2 justify-center text-xs">
            <label htmlFor="role">Select Account Type</label>
            <div className="flex gap-2">
              <div className="flex items-center justify-start gap-1  text-white">
                <input
                  type="radio"
                  id="user"
                  name="role"
                  value="user"
                  className="text-base capitalize"
                  checked={formData.role === "user"}
                  onClick={(e) =>
                    setFormData({
                      ...formData,
                      role: e.target.value,
                    })
                  }
                />
                <label className="text-sm capitalize" htmlFor="user">
                  user
                </label>
              </div>
              <div className="flex items-center justify-start gap-1 text-white">
                <input
                  type="radio"
                  id="vendor"
                  name="role"
                  className="text-base capitalize"
                  value="vendor"
                  checked={formData.role === "vendor"}
                  onClick={(e) =>
                    setFormData({
                      ...formData,
                      role: e.target.value,
                    })
                  }
                />
                <label className="text-sm capitalize" htmlFor="dealer">
                  Vendor
                </label>
              </div>
            </div>
          </div> */}
              <div className="md:col-span-2 ">
                <SubmitButton
                  className=" w-[150px] mx-auto my-3 tracking-widest "
                  disabled={
                    !formData?.firstName ||
                    !formData?.lastName ||
                    !formData?.email ||
                    !formData?.phone ||
                    !formData?.gender ||
                    !formData?.nidfront ||
                    !formData?.nidback ||
                    !formData?.shopname
                  }
                >
                  Apply
                </SubmitButton>
              </div>
            </div>
            {loading && <Loading></Loading>}
          </form>
        </div>
      ) : (
        <div>
          <h1 className="text-center bg-red-400 p-4 text-lg font-semibold shadow-[5px_5px_10px_#b8b8b8,_-5px_-5px_10px_#b8b8b8] rounded-md">
            <span> You already completed vendor form.</span>
            <br />
            Your Vendor-ship process is Pending
          </h1>
        </div>
      )}
      {/* <div className=" md:w-1/2 flex items-center justify-center">
            <img src={banner} alt="" className="object-contain w-[80%]" />
         </div> */}
    </div>
  );
};

export default FormOne;
