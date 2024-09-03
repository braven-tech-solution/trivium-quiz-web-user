/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-extra-boolean-cast */

import { useForm } from "react-hook-form";
import Field from "../common/Field";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import Loading from "../common/Loading";
import { baseURL } from "../../Configs/libs";

const RegistrationForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm();

  const submitForm = async (formData) => {
    // toast.success("Account Create Successfully.");
    // console.log();
    try {
      const res = await fetch(`${baseURL}/user/sign-up`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      // console.log(data);
      if (data?.status === "success") {
        toast.success(data.message);
        setLoading(false);
      } else {
        toast.error(data.message);
        setLoading(false);
      }
    } catch (err) {
      toast.error(err?.message);
      // console.log(err);
    }

    navigate("/login");
    reset();
  };

  return (
    <section className="container bg-[#0866FF]/50 h-screen">
      <div className="w-full md:w-1/3 mx-auto bg-[#fff] p-8 rounded-md ">
        <h2 className="text-2xl font-bold mb-6">Register</h2>
        <form onSubmit={handleSubmit(submitForm)}>
          <Field label="First Name" error={errors.firstName}>
            <input
              {...register("firstName", {
                required: "First Name is Required",
              })}
              className={`border ${
                !!errors.firstName ? "border-red-500" : "border-white/20 "
              } w-full p-3 bg-[#c1f0f0] border-b-black  rounded-md focus:outline-none focus:border-indigo-500`}
              type="firstName"
              name="firstName"
              id="firstName"
              placeholder="ex: John"
            />
          </Field>
          <Field label="Last Name" error={errors.lastName}>
            <input
              {...register("lastName")}
              className={`border ${
                !!errors.lastName ? "border-red-500" : "border-white/20 "
              } w-full p-3 bg-[#c1f0f0] border-b-black  rounded-md focus:outline-none focus:border-indigo-500`}
              type="lastName"
              name="lastName"
              id="lastName"
              placeholder="ex: Doe"
            />
          </Field>
          <Field label="Email" error={errors.email}>
            <input
              {...register("email", { required: "Email ID is Required" })}
              className={`border ${
                !!errors.email ? "border-red-500" : "border-white/20 "
              } w-full p-3 bg-[#c1f0f0] border-b-black  rounded-md focus:outline-none focus:border-indigo-500`}
              type="email"
              name="email"
              id="email"
              placeholder="ex: John@gmail.com"
            />
          </Field>
          <Field label="Phone No" error={errors.phone}>
            <input
              {...register("phone", { required: "Phone No is Required" })}
              className={`border ${
                !!errors.phone ? "border-red-500" : "border-white/20 "
              } w-full p-3 bg-[#c1f0f0] border-b-black rounded-md focus:outline-none focus:border-indigo-500`}
              type="phone"
              name="phone"
              id="phone"
              placeholder="ex: +1 866-967-1070"
            />
          </Field>
          {/* <Field label="Address" error={errors.address}>
            <input
              {...register("address", { required: "Address is Required" })}
              className={`border ${
                !!errors.address ? "border-red-500" : "border-white/20 "
              } w-full p-3 bg-[#030317] border  rounded-md focus:outline-none focus:border-indigo-500`}
              type="address"
              name="address"
              id="address"
            />
          </Field> */}
          {/* <Field label="Profile Photo" error={errors.image}>
            <input
              {...register("image", { required: "Image is required" })}
              type="file"
              className={`border ${
                errors.image ? "border-red-500" : "border-white/20"
              } w-full p-3 bg-[#030317] border rounded-md focus:outline-none focus:border-indigo-500`}
              name="image"
              id="image"
              accept="image/*" // Restrict to image files
            />
          </Field> */}

          <Field label="Password" error={errors.password}>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Your password must be at least 8 characters",
                },
              })}
              className={`border ${
                !!errors.password ? "border-red-500" : "border-white/20 "
              } w-full p-3 bg-[#c1f0f0] border-b-black  rounded-md focus:outline-none focus:border-indigo-500`}
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </Field>
          <p>{errors?.root?.random?.message}</p>
          <Field>
            <button
              type="submit"
              className="w-full bg-[#0866FF] text-white p-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
            >
              Register
            </button>
          </Field>
          <p className="text-center">
            Don't have an account?{" "}
            <a href="/login" className="text-indigo-600 hover:underline">
              Login
            </a>
          </p>
          {loading && <Loading></Loading>}
        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;
