import { useQuery } from "@tanstack/react-query";

import { FaEye } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import toast from "react-hot-toast";
import { baseURL } from "../../../Configs/libs";
import TableHeader from "../../../Components/TableHeader";
import TableRow from "../../../Components/TableRow";
import TableCol from "../../../Components/TableCol";

const ApprovedVendor = () => {
  const { data: vendorList, refetch } = useQuery({
    queryKey: ["approvedVendors"],
    queryFn: async () => {
      const res = await fetch(`${baseURL}/user/approved-vendors`);
      const data = await res.json();
      // console.log("approved", data.data);
      return data.data;
    },
  });

  //   const approveHandler = async (vendor) => {
  //     console.log(vendor);
  //     vendor.vendorProcess = "approved";
  //     vendor.role = "vendor";
  //     console.log("update", vendor);
  //     try {
  //       const res = await fetch(
  //         `${baseURL}/user?gmailaddress=${vendor.email}`,
  //         {
  //           method: "PATCH",
  //           headers: {
  //             "content-type": "application/json",
  //             authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //           },
  //           body: JSON.stringify(vendor),
  //         }
  //       );

  //       const data = await res.json();
  //       if (data?.status === "success") {
  //         toast.success(data.message);
  //         // setLoading(false);
  //       } else {
  //         toast.error(data.message);
  //         // setLoading(false);
  //       }
  //     } catch (err) {
  //       toast.error(err?.message);
  //       console.log(err);
  //     }
  //     refetch();
  //   };
  const handleCancelVendorship = async (vendor) => {
    // console.log(vendor);
    vendor.vendorProcess = "false";
    vendor.role = "user";
    // console.log("update", vendor);
    try {
      const res = await fetch(`${baseURL}/user?gmailaddress=${vendor.email}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(vendor),
      });

      const data = await res.json();
      if (data?.status === "success") {
        toast.success(data.message);
        // setLoading(false);
      } else {
        toast.error(data.message);
        // setLoading(false);
      }
    } catch (err) {
      toast.error(err?.message);
      console.log(err);
    }
    refetch();
  };
  return (
    <main>
      <div className="flex items center justify-between">
        <h2 className="text-xl     text-start font-semibold uppercase mb-5">
          Pending Vendor List
        </h2>
      </div>
      <div className="w-full overflow-y-auto rounded-md px-5">
        <TableHeader
          containerStyles="bg-secondary"
          fields={[
            "S.I",
            "name",
            "Phone No",
            "TIN",
            "NID Front",
            "NID Back",
            "account status",
            "Vendor Status",

            "Action",
          ]}
        >
          {vendorList?.map((vendor, index) => (
            <TableRow key={index}>
              <TableCol>{index + 1}</TableCol>
              <TableCol styles={"  text-[15px]"}>
                {vendor?.firstName} {vendor?.lastName}
              </TableCol>
              <TableCol styles={"  text-[15px]"}>{vendor?.phone}</TableCol>
              <TableCol styles={"  text-[15px]"}>{vendor?.Tin}</TableCol>
              <TableCol>
                <img
                  src={vendor?.nidfront}
                  className="w-20 h-10 mx-auto"
                  alt={vendor?.nidfront}
                />
              </TableCol>
              <TableCol>
                <img
                  src={vendor?.nidback}
                  className="w-20 h-10 mx-auto"
                  alt={vendor?.nidback}
                />
              </TableCol>
              <TableCol styles={"text-red-700  text-[15px]"}>
                {vendor?.vendorProcess}
              </TableCol>
              <TableCol
                styles={
                  vendor.status === "active"
                    ? "text-primary text-[15px]"
                    : "text-red-500 text-[10px]"
                }
              >
                {vendor.status}
              </TableCol>
              <TableCol>
                <div className="flex items-end h-full justify-center gap-2">
                  <FaEye size={25} className="cursor-pointer"></FaEye>
                  <MdCancel
                    onClick={() => {
                      handleCancelVendorship(vendor);
                    }}
                    size={25}
                    className="text-red-600 cursor-pointer"
                  ></MdCancel>

                  {/*<FaCheck
                    onClick={() => {
                      approveHandler(vendor);
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

export default ApprovedVendor;
