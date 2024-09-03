import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { FiShoppingBag } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import { accessToken, baseURL } from "../../Configs/libs";
import CheckOutSingleItems from "../CheckOutSingleItems/CheckOutSingleItems";
import { useNavigate } from "react-router-dom";
import SubmitButton from "../Buttons/SubmitButton";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const CartDrawer = () => {
  const { cart, showCart, setShowCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  const [ids, setIds] = useState([]);
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products", ids.length],
    queryFn: async () => {
      if (ids?.length) {
        const res = await fetch(`${baseURL}/product/cart`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: accessToken,
          },
          body: JSON.stringify({ ids: ids, cart: cart }),
        });
        const data = await res.json();
        return data.data;
      }
      return [];
    },
  });
  // console.log(products);

  useEffect(() => {
    const cartedIds = cart?.map((i) => i._id);
    const sum = cart?.reduce((a, b) => {
      // console.log(a, b);
      return a + b.price * b.quantity;
    }, 0);
    setTotal(sum);

    setIds(cartedIds || []);
  }, [cart]);
  const navigateTOcheckout = () => {
    if (!total) {
      return;
    }

    if (!user?.email) {
      navigate("/login");
    } else {
      navigate("/checkout");
      setShowCart(false);
    }
  };

  return (
    <div
      className={` ${
        showCart ? "right-0" : "-right-[999px]"
      } duration-700 top-[110px]  z-[9999] w-[350px] overflow-hidden  rounded-3xl fixed bg-secondary h-[80vh] flex flex-col justify-between shadow-2xl `}
    >
      <div className="bg-[#F672AE] p-5  round-t-3xl text-white  flex items-center justify-between ">
        <div className="flex items-center gap-3">
          <FiShoppingBag size={25}></FiShoppingBag>
          <h1 className=" font-medium text-lg  text-[#fff]">
            <span> {cart?.length} Purchase Cart</span>
          </h1>
        </div>
        <div onClick={() => setShowCart(false)}>
          <AiOutlineCloseCircle size={25}></AiOutlineCloseCircle>
        </div>
      </div>
      <div className="flex-grow overflow-y-auto bg-white/85">
        {products?.map((product) => (
          <CheckOutSingleItems
            key={product?._id}
            product={product}
          ></CheckOutSingleItems>
        ))}
      </div>
      <div className="bg-[#F672AE]  text-white p-5  round-t-3xl   flex justify-center ">
        <SubmitButton
          className={`border-t border-spacing-3 font-medium rounded text-accent  text-sm mb-2 shadow-2xl duration-300 transition-all py-2 px-2 bg-blue-600 `}
          to="/dashboard/change-password"
          onClick={navigateTOcheckout}
          disabled={!total}
        >
          {" "}
          <span className="uppercase">Checkout Now | ৳ {total} tk</span>
        </SubmitButton>
      </div>
    </div>
  );
};

export default CartDrawer;
