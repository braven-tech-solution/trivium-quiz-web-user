import { useQuery } from "@tanstack/react-query";
import { FaCheck } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import toast from "react-hot-toast";
import { baseURL } from "../../../Configs/libs";
import TableHeader from "../../../Components/TableHeader";
import TableRow from "../../../Components/TableRow";
import TableCol from "../../../Components/TableCol";

const PendingVendor = () => {
  const { data: pendingVendors, refetch } = useQuery({
    queryKey: ["pendingVendors"],
    queryFn: async () => {
      const res = await fetch(`${baseURL}/user/pending-vendors`);
      const data = await res.json();
      // console.log("pending vendors", data.data);
      return data.data;
    },
  });

  const approveHandler = async (applicantData) => {
    // console.log(applicantData);
    applicantData.vendorProcess = "approved";
    applicantData.role = "vendor";
    // console.log("update", applicantData);
    try {
      const res = await fetch(
        `${baseURL}/user?gmailaddress=${applicantData.email}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify(applicantData),
        }
      );

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
          {pendingVendors?.map((pendingVendor, index) => (
            <TableRow key={index}>
              <TableCol>{index + 1}</TableCol>
              <TableCol styles={"  text-[15px]"}>
                {pendingVendor?.firstName} {pendingVendor?.lastName}
              </TableCol>
              <TableCol styles={"  text-[15px]"}>
                {pendingVendor?.phone}
              </TableCol>
              <TableCol styles={"  text-[15px]"}>{pendingVendor?.Tin}</TableCol>
              <TableCol>
                <img
                  src={pendingVendor?.nidfront}
                  className="w-20 h-10 mx-auto"
                  alt={pendingVendor?.nidfront}
                />
              </TableCol>
              <TableCol>
                <img
                  src={pendingVendor?.nidback}
                  className="w-20 h-10 mx-auto"
                  alt={pendingVendor?.nidback}
                />
              </TableCol>
              <TableCol styles={"text-red-700  text-[15px]"}>
                {pendingVendor?.vendorProcess}
              </TableCol>
              <TableCol
                styles={
                  pendingVendor.status === "active"
                    ? "text-primary text-[15px]"
                    : "text-red-500 text-[10px]"
                }
              >
                {pendingVendor.status}
              </TableCol>
              <TableCol>
                <div className="flex items-end h-full justify-center gap-2">
                  <FaEye size={25} className="cursor-pointer"></FaEye>
                  <MdCancel
                    size={25}
                    className="text-red-600 cursor-pointer"
                  ></MdCancel>

                  <FaCheck
                    onClick={() => {
                      approveHandler(pendingVendor);
                    }}
                    size={25}
                    className="text-primary  cursor-pointer"
                  ></FaCheck>
                </div>
              </TableCol>
            </TableRow>
          ))}
        </TableHeader>
      </div>
    </main>
  );
};

export default PendingVendor;
