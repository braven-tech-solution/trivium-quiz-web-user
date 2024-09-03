/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";
import SubmitButton from "../../Components/Buttons/SubmitButton";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { baseURL } from "../../Configs/libs";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Quotation = () => {
  const { user, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    clientName: "",
    clientEmail: "",
    clientPhoneNumber: "",
    clientProjectTitle: "",
    projectDetails: "",
    notes: "",
    serviceFeatures: "",
  });
  useEffect(() => {
    if (user) {
      setFormState({
        ...formState,
        clientEmail: user.email || "",
        clientName: user.firstName + " " + user.lastName || "",

        clientPhoneNumber: user.phone,
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleFormSubmit = async () => {
    const quotationData = {
      name: formState?.clientName,
      email: formState?.clientEmail,
      phone: formState?.clientPhoneNumber,
      serviceTitle: formState?.clientProjectTitle,
      serviceDetails: formState.projectDetails,
      featureNeeded: formState?.serviceFeatures,
      notes: formState.notes,
      quotedBy: {
        name: user?.firstName,
        id: user?._id,
      },
    };

    setLoading(true);
    try {
      const res = await fetch(`${baseURL}/quotation`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(quotationData),
      });

      const data = await res.json();
      // console.log("from database", data);
      if (data?.status === "success") {
        toast.success(data.message);
        setLoading(false);
        navigate("/");
      } else {
        toast.error(data.message);
        setLoading(false);
      }
    } catch (err) {
      toast.error(err?.message);
      console.log(err);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-5 pt-28">
      <h1 className="text-3xl font-bold ">Quotation Form</h1>
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <label className="font-medium capitalize">
                Client name<span className="text-red-600 text-2xl">*</span>:
              </label>
              <input
                type="text"
                name="clientName"
                value={formState.clientName}
                onChange={handleChange}
                className="px-3 py-1 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 capitalize"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium capitalize">
                Client email<span className="text-red-600 text-2xl">*</span>:
              </label>
              <input
                type="email"
                name="clientEmail"
                value={formState.clientEmail}
                onChange={handleChange}
                className="px-3 py-1 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium capitalize">
                Client phone number
                <span className="text-red-600 text-2xl">*</span>:
              </label>
              <input
                type="tel"
                name="clientPhoneNumber"
                value={formState.clientPhoneNumber}
                onChange={handleChange}
                className="px-3 py-1 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col">
              <label className="font-medium ">
                Service or Project Title
                <span className="text-red-600 text-2xl">*</span>:
              </label>
              <input
                type="text"
                name="clientProjectTitle"
                value={formState.clientProjectTitle}
                onChange={handleChange}
                className="px-3 py-1 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>
            {/* project details  */}
            <div className="flex flex-col md:col-span-2">
              <label className="font-medium">Service or Project Details:</label>
              <textarea
                name="projectDetails"
                value={formState.projectDetails}
                onChange={handleChange}
                // rows={5}
                className="w-full px-3 pb-10 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>

            {/* <div className="flex flex-col">
              <label className="font-medium">Number of employees:</label>
              <select
                name="numberOfEmployees"
                value={formState.numberOfEmployees}
                onChange={handleChange}
                className="px-3 py-1 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              >
                <option value="">Select number of employees</option>
                <option value="1-10">1-10 Employees</option>
                <option value="11-100">11-100 Employees</option>
                <option value="101+">101+ Employees</option>
              </select>
            </div> */}
            <div className="flex flex-col md:col-span-2">
              <label className="font-medium capitalize">
                Service or Feature You Need
                <span className="text-red-600 text-2xl">*</span>:
              </label>
              <textarea
                name="serviceFeatures"
                value={formState.serviceFeatures}
                onChange={handleChange}
                className="w-full px-3 pb-10 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="write your features or service & separate with Comma"
              />
            </div>
            <div className="flex flex-col md:col-span-2">
              <label className="font-medium">Notes:</label>
              <textarea
                name="notes"
                value={formState.notes}
                onChange={handleChange}
                className="w-full px-3 py-1 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>
          <SubmitButton
            className="group relative md:w-1/2 w-full mt-2 flex justify-center mx-auto py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            onClick={handleFormSubmit}
          >
            Submit
          </SubmitButton>
        </div>
        <p className="mt-4">
          Go to live chat in{" "}
          <a
            href="https://wa.me/+1780-394-0467"
            className="text-blue-600 underline"
            target="_blank"
          >
            whatsapp
          </a>{" "}
          or{" "}
          <a
            href="https://m.me/TheUniverseIT"
            className="text-blue-600 underline"
            target="_blank"
          >
            Messenger
          </a>{" "}
          for more information
        </p>
        <div className="mt-4 flex space-x-4">
          <a
            href="https://wa.me/+1780-394-0467"
            className="flex items-center space-x-2"
            target="_blank"
          >
            <FaWhatsapp className="text-green-500" size={24} />
            <span>WhatsApp</span>
          </a>
          <a
            href="https://m.me/TheUniverseIT"
            className="flex items-center space-x-2"
            target="_blank"
          >
            <FaFacebookMessenger className="text-blue-500" size={24} />
            <span>Messenger</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Quotation;
