import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { CartContext } from "../../Context/CartContext";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { baseURL } from "../../Configs/libs";
import CommonModal from "../../CommonModal/CommonModal";
import bkashimg from "../../../public/bkash.png";
import nagadImg from "../../../public/nagad.png";
import rocketImg from "../../../public/rocket.png";
import QRcode from "../../../public/WhatsApp Image 2023-12-05 at 3.33.46 PM.jpeg";
import InputText from "../../Components/Inputs/InputText";
import SubmitButton from "../../Components/Buttons/SubmitButton";
import toast from "react-hot-toast";
import { FaThumbsUp } from "react-icons/fa6";

const OrderPlaced = () => {
  const { user, setLoading } = useContext(AuthContext);
  const { showCart, cart, isOpen } = useContext(CartContext);
  const { orderedId } = useParams();
  const [bkashOpen, setBkashOpen] = useState(false);
  const [formData, setFormData] = useState({
    bkashNo: "",
    transactionId: "",
  });

  const handleInputText = (e) => {
    const name = e.target.name;
    const value = e.target.value.trim().toLowerCase();
    if (!value) {
      setFormData({ ...formData, [name]: "" });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // const paymentMethods = [
  //   { id: 1, name: "Bkash" },
  //   { id: 2, name: "Nagad" },
  //   { id: 3, name: "Rocket" },
  // ];

  const {
    data: orderData,
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["OrderPlaced"],
    queryFn: async () => {
      const res = await fetch(`${baseURL}/order/${orderedId}`);
      const data = await res.json();

      return data.data;
    },
  });

  const handleBkashPayment = async (e) => {
    e.preventDefault();

    const paymentInfo = { ...formData };

    setLoading(true);
    try {
      const res = await fetch(`${baseURL}/order/${orderedId}/paymentInfo`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({
          paymentInfo,
          paymentMethod: "bkash",
          paymentStatus: "completed",
        }),
      });

      const data = await res.json();

      if (data?.success === true) {
        toast.success(data.message);
        setLoading(false);
        setBkashOpen(false);
        refetch();
      } else {
        toast.error(data.message);
        setLoading(false);
      }
    } catch (err) {
      toast.error(err?.message);
      // console.log(err);
    }
  };
  //   ${
  //     showCart && isOpen ? "w-[70%] " : ""
  //   }
  // ${showCart && !isOpen ? "w-[74%] " : ""}
  return (
    <div className="min-h-screen  flex flex-col gap-3 items-start px-10 ">
      <div className="card card-side bg-[#e9e4e6] shadow-xl mx-auto w-full md:w-1/3">
        <div className="card-body space-y-6 flex flex-col justify-center items-center h-[600px]">
          <h1 className="bg-[#FFFFFF] flex flex-col justify-center items-center font-medium rounded shadow-[4px_4px_5px_#FDD679] text-[#36D352]">
            <FaThumbsUp size={50} className="text-[#37D354]"></FaThumbsUp>
            <span className="text-2xl">Your Order has been placed</span>
          </h1>
          <h1>
            <span className="text-[#3C3D36] font-semibold">
              Billing User:{" "}
              <span className="capitalize">
                {user?.firstName} {user?.lastName}
              </span>
            </span>
            {orderData?.shippingAddress}
          </h1>
          <h2>
            <span className="text-[#3C3D36] font-semibold">Order ID:</span>{" "}
            {orderData?.id}
          </h2>
          <h2 className="text-[#3C3D36] font-semibold">
            Total Amount: <span>{orderData?.totalPrice}</span>
          </h2>
          <h1 className="text-[#3C3D36] font-semibold">
            Paid With:{" "}
            <input
              type="text"
              className="border px-1 shadow-[4px_4px_5px_#E5E6E6] rounded capitalize text-center"
              value={orderData?.paymentMethod}
              readOnly
            />
          </h1>
        </div>
      </div>
      {bkashOpen && (
        <CommonModal
          setShow={setBkashOpen}
          containerStyles="w-[90%] md:w-[60%]"
        >
          <div className="flex gap-3 flex-col items-start justify-center md:justify-between bg-secondary p-3 rounded-md mt-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
              <div className="flex justify-center">
                <img src={QRcode} alt="" className="w-[180px] h-[180px]" />
              </div>
              <form onSubmit={handleBkashPayment} className="bg-[#F8F8F8]">
                <h1 className="text-center text-xl font-medium">
                  Payment Information
                </h1>
                <div className="bg-[#F8F8F8] w-full rounded p-2">
                  <InputText
                    type="text"
                    name="bkashNo"
                    onChange={handleInputText}
                    placeholder="Bkash No"
                    label="Your Bkash Number"
                  />
                </div>
                <div className="bg-[#F8F8F8] w-full rounded p-2">
                  <InputText
                    type="text"
                    name="transactionId"
                    onChange={handleInputText}
                    placeholder="Transaction ID"
                    label="Transaction ID"
                  />
                </div>
                <SubmitButton
                  className="text-black font-semibold w-[150px] my-5 mx-auto py-1 text-lg capitalize"
                  disabled={!formData?.bkashNo || !formData?.transactionId}
                >
                  Submit
                </SubmitButton>
              </form>
            </div>
          </div>
        </CommonModal>
      )}
    </div>
  );
};

export default OrderPlaced;
