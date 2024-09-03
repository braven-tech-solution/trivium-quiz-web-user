/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { BsTrashFill } from "react-icons/bs";
import { FaEye, FaWhatsapp, FaFacebookMessenger } from "react-icons/fa6"; // Add necessary imports
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import { accessToken, baseURL } from "../../../Configs/libs";
import ActionButton from "../../../Components/Buttons/ActionButton";
import TableHeader from "../../../Components/TableHeader";
import TableRow from "../../../Components/TableRow";
import TableCol from "../../../Components/TableCol";
import CommonModal from "../../../CommonModal/CommonModal";
import SubmitButton from "../../../Components/Buttons/SubmitButton";
import { useProducts } from "../../../hooks/useProducts";
import { format } from "date-fns"; // Import format from date-fns

const QuotationManage = () => {
  const { user } = useContext(AuthContext);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const { products } = useProducts();
  const queryClient = useQueryClient();
  const [formState, setFormState] = useState({
    clientName: "",
    clientEmail: "",
    clientPhoneNumber: "",
    clientProjectTitle: "",
    projectDetails: "",
    notes: "",
    serviceFeatures: "",
    createdAt: new Date(),
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

  const { data: quotations = [], refetch } = useQuery({
    queryKey: ["quotations"],
    queryFn: async () => {
      const res = await fetch(`${baseURL}/quotation`);
      const data = await res.json();
      return data.data;
    },
  });

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${baseURL}/quotation/${id}`, {
        method: "delete",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${accessToken}`,
        },
      });

      const data = await res.json();
      if (data.status === "success") {
        toast.success(data.message);
        queryClient.invalidateQueries("quotations");
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleFormSubmit = () => {
    console.log("nothing to submit");
  };

  return (
    <main>
      <div className="flex items-center justify-between ">
        <h2 className="text-xl mx-auto font-bold text-[#0866FF] uppercase mb-5">
          Customer's Quotations
        </h2>
      </div>
      <div className="w-full overflow-x-auto rounded-md px-5 mt-2 text-white bg-white ">
        <TableHeader
          containerStyles="bg-secondary "
          fields={[
            "S.I",
            "Name",
            "Email",
            "Phone",
            "Service Title",
            "Feature Needed",
            "Created At",
            "Action",
          ]}
        >
          {quotations?.map((quotation, index) => (
            <TableRow key={index}>
              <TableCol>{index + 1}</TableCol>
              <TableCol styles="min-w-[100px]">{quotation.name}</TableCol>
              <TableCol styles="min-w-[100px]">{quotation.email}</TableCol>
              <TableCol styles="w-[40px]">{quotation.phone}</TableCol>
              <TableCol styles="">{quotation.serviceTitle}</TableCol>
              <TableCol styles="">{quotation.featureNeeded}</TableCol>
              <TableCol styles="">
                {format(
                  new Date(quotation.createdAt),
                  "eeee, MMMM do, yyyy h:mm a"
                )}
              </TableCol>
              <TableCol>
                <div className="flex items-end h-full justify-center ">
                  <BsTrashFill
                    onClick={() => handleDelete(quotation._id)}
                    size={20}
                    className="text-red-500 block cursor-pointer mr-1"
                  />
                  <FaEye
                    size={25}
                    className={"text-[#0866FF] block cursor-pointer"}
                    onClick={() => {
                      setFormState({
                        ...formState,
                        clientName: quotation?.name,
                        clientEmail: quotation?.email,
                        clientPhoneNumber: quotation?.phone,
                        clientProjectTitle: quotation?.phone,
                        projectDetails: quotation?.serviceDetails,
                        serviceFeatures: quotation?.featureNeeded,
                        notes: quotation?.notes,
                        createdAt: quotation?.createdAt,
                        id: quotation._id,
                      });

                      setShowModalUpdate(true);
                    }}
                  />
                </div>
              </TableCol>
            </TableRow>
          ))}
        </TableHeader>
      </div>

      {showModalUpdate && (
        <CommonModal
          setShow={setShowModalUpdate}
          className="max:h-[80vh] overflow-y-auto"
          containerStyles="w-[90%] md:w-[60%]"
        >
          <div className="min-h-screen bg-gray-100 flex flex-col items-center  px-5 ">
            <h1 className="text-3xl font-bold text-[#0866FF]">
              Quotation Details
            </h1>
            <h1 className="text-xl font-bold text-[#0866FF]">
              {" "}
              {format(
                new Date(formState.createdAt),
                "eeee, MMMM do, yyyy h:mm a"
              )}
            </h1>
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
              <div className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex flex-col">
                    <label className="font-medium capitalize">
                      Client name
                      <span className="text-red-600 text-2xl">*</span>:
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
                      Client email
                      <span className="text-red-600 text-2xl">*</span>:
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
                  <div className="flex flex-col md:col-span-2">
                    <label className="font-medium">
                      Service or Project Details:
                    </label>
                    <textarea
                      name="projectDetails"
                      value={formState.projectDetails}
                      onChange={handleChange}
                      className="w-full px-3 pb-10 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    />
                  </div>
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
                {/* <SubmitButton
                  className="group relative md:w-1/2 w-full mt-2 flex justify-center mx-auto py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  onClick={handleFormSubmit}
                >
                  Submit
                </SubmitButton> */}
              </div>
              {/* <p className="mt-4">
                Go to live chat in{" "}
                <a
                  href="https://wa.me/+1780-394-0467"
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  whatsapp
                </a>{" "}
                or{" "}
                <a
                  href="https://m.me/TheUniverseIT"
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
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
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="text-green-500" size={24} />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="https://m.me/TheUniverseIT"
                  className="flex items-center space-x-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookMessenger className="text-blue-500" size={24} />
                  <span>Messenger</span>
                </a>
              </div> */}
            </div>
          </div>
        </CommonModal>
      )}
    </main>
  );
};

export default QuotationManage;
