/* eslint-disable no-extra-boolean-cast */
import Field from "../common/Field";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";

import axios from "axios";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { baseURL } from "../../Configs/libs";

const LoginForm = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm();

  const submitForm = async (formData) => {
    // console.log("clicked");
    setLoading(true);
    try {
      const res = await fetch(`${baseURL}/users/login`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data?.success) {
        setUser(data.data);
        toast.success(data.message);
        setLoading(false);
        navigate(from, { replace: true });
        localStorage.setItem("accessToken", data.data.accessToken);
      } else {
        toast.error(data.message);
        setLoading(false);
      }
    } catch (err) {
      toast.error(err?.message);
      console.log(err);
      setLoading(false);
    }
    reset();
  };

  return (
    <section className="container pt-32 h-screen bg-[#0866FF]/50">
      <div className="w-full md:w-1/3 mx-auto bg-[#fff] p-8 rounded-md mt-12">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#0866FF]">
          Make Your Move With Trivium Quiz
        </h2>
        <form onSubmit={handleSubmit(submitForm)}>
          <Field label="Email" error={errors.email}>
            <input
              {...register("email", { required: "Email ID is Required" })}
              className={`border ${
                // eslint-disable-next-line no-extra-boolean-cast
                !!errors.email ? "border-red-500" : "border-white/20 "
              } w-full p-3 bg-[#c1f0f0] border-b-black  rounded-md focus:outline-none focus:border-indigo-500`}
              type="email"
              name="email"
              id="email"
              placeholder="ex: john@gmail.com"
            />
          </Field>

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
              Login
            </button>
          </Field>
          <p className="text-center">
            Don't have an account?{" "}
            <Link to="/register" className="text-indigo-600 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
