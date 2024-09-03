/* eslint-disable react/no-unescaped-entities */
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { accessToken, baseURL } from "../../../Configs/libs";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import TableRow from "../../../Components/TableRow";
import TableCol from "../../../Components/TableCol";
import { FaEye } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import TableHeader from "../../../Components/TableHeader";
import toast from "react-hot-toast";

const CustomerOrders = () => {
  const { user, isOpen } = useContext(AuthContext);
  const queryClient = useQueryClient();
  // console.log(user);
  // const { data: orders = [], refetch } = useQuery({
  //   queryKey: ["ordersUnderOwner", user._id],
  //   queryFn: async () => {
  //     const res = await fetch(`${baseURL}/order/user/${user._id}/Orders`);
  //     const data = await res.json();
  //     // console.log("orderssssssssss", data?.data);
  //     return data.data;
  //   },
  // });
  const { data: orders = [], refetch } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await fetch(`${baseURL}/order`);
      const data = await res.json();
      // console.log("orderssssssssss", data?.data);
      return data.data;
    },
  });
  console.log(orders);
  const createOrderForDelivery = async (id) => {
    console.log(id);
    const res = await fetch(`${baseURL}/order/${id}`);
    const data = await res.json();
    console.log(data?.data);
    if (data?.data) {
      // try {
      //   const res = await fetch(`${baseURL}/product/${id}`, {
      //     method: "PATCH",
      //     headers: {
      //       "content-type": "application/json",
      //       authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      //     },
      //     body: JSON.stringify(newProduct),
      //   });
      //   const data = await res.json();
      //   if (data?.status === "success") {
      //     toast.success(data.message);
      //     setShowModalUpdate(false);
      //     refetch();
      //   }
      // } catch (err) {
      //   toast.error(err.message);
      // }
    }
  };

  const handleCancelOrder = async (_id) => {
    console.log(_id);
    try {
      const res = await fetch(`${baseURL}/order/${_id}`, {
        method: "delete",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${accessToken}`,
        },
      });

      const data = await res.json();
      if (data.status === "success") {
        toast.success(data.message);
        // refetch();
        queryClient.invalidateQueries("orders");
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <main>
      <div className="flex items center justify-between">
        <h2 className="text-xl     text-start font-semibold uppercase mb-5">
          Customer's Order
        </h2>
      </div>
      <div className="w-full overflow-y-auto rounded-md ">
        <TableHeader
          containerStyles="bg-secondary"
          fields={[
            "S.I",
            "Customer",
            "Phone No",
            "Service",
            "Total Price",
            "Address",
            // "NID Back",
            "Payment Status",
            "Payment Method",
            // "Delivery",

            "Action",
          ]}
        >
          {orders?.map((order, index) => (
            <TableRow key={index}>
              <TableCol>{index + 1}</TableCol>
              <TableCol styles={"  text-[15px]"}>
                {order?.orderedBy?.name} {order?.lastName}
              </TableCol>
              <TableCol styles={"  text-[15px]"}>
                {order?.contactInfo?.phone}
              </TableCol>
              <TableCol>
                {/* {order?.items?.product?.name} */}

                {order?.items?.map((item, idx) => (
                  <h1 className="text-start" key={idx}>
                    <span className="text-[#0866FF] font-bold">{idx + 1}</span>{" "}
                    {item?.productId?.name}
                  </h1>
                ))}
              </TableCol>
              <TableCol styles={"  text-[15px]"}> {order?.totalPrice}</TableCol>
              <TableCol styles={"  text-[15px]"}>
                {order?.contactInfo?.address}
              </TableCol>

              <TableCol styles={"text-red-700  text-[15px]"}>
                {order?.paymentStatus}
              </TableCol>
              <TableCol
                styles={
                  order.status === "active"
                    ? "text-primary text-[15px]"
                    : "text-red-500 text-[10px]"
                }
              >
                {order.paymentMethod}
              </TableCol>
              {/* <TableCol>
                <button
                  className="bg-indigo-500 shadow-lg shadow-indigo-500/50 py-1 px-2 rounded-lg text-white font-medium hover:bg-cyan-500 duration-300"
                  onClick={() => createOrderForDelivery(order?.id)}
                >
                  Delivery
                </button>
              </TableCol> */}

              <TableCol>
                <div className="flex items-end h-full justify-center gap-2">
                  <FaEye size={25} className="cursor-pointer"></FaEye>
                  <MdCancel
                    onClick={() => {
                      handleCancelOrder(order._id);
                    }}
                    size={25}
                    className="text-red-600 cursor-pointer"
                  ></MdCancel>

                  {/*<FaCheck
                  onClick={() => {
                    approveHandler(order);
                  }}
                  size={25}
                  className="text-primary  cursor-pointer"
                ></FaCheck> */}
                </div>
              </TableCol>
            </TableRow>
          ))}
        </TableHeader>
      </div>
    </main>
  );
};

export default CustomerOrders;
