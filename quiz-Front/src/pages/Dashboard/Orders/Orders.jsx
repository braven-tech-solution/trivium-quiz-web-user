import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import { CartContext } from "../../../Context/CartContext";

import { FaCartShopping } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import { baseURL } from "../../../Configs/libs";

const Orders = () => {
  const { user, isOpen } = useContext(AuthContext);
  const { showCart, cart } = useContext(CartContext);

  // console.log(user);

  const { data: userAllorders } = useQuery({
    queryKey: ["userOrders", user?._id],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/api/v1/order/user/${user?._id}`
      );
      const data = await res.json();
    },
  });

  return (
    <div
      className={`py-5  px-10  duration-700 ${
        showCart && isOpen ? "w-[70%] " : ""
      } 
      ${showCart && !isOpen ? "w-[74%] " : ""}  `}
    >
      {userAllorders?.length}
      <div className="grid">
        <div>My Orders</div>
        <div>Order Details</div>
      </div>
    </div>
  );
};

export default Orders;
