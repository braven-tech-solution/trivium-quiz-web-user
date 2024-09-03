/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { FiPlus } from "react-icons/fi";
import { HiMinus } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";
import toast from "react-hot-toast";
// eslint-disable-next-line react/prop-types
const CheckOutSingleItems = ({ product }) => {
  const { cart, setCart, total } = useContext(CartContext);

  const [user, setUser] = useState({ role: "user" });
  const [currentItem, setCurrentItem] = useState({});
  const [quantity, setQuantity] = useState(0);
  const IncrementQuantity = (item) => {
    const savedCart = JSON.parse(localStorage.getItem("w3Cart"));

    //  if (quantity < product.stock) {
    const isExist = savedCart?.find((i) => i._id === item?._id);
    const rest = savedCart?.filter((i) => i._id !== item?._id) || [];
    if (!isExist._id) {
      setQuantity(quantity + 1);
      setCart([...rest, { ...item, _id: item._id, quantity: 1 }]);
      // console.log([...rest, { ...item, _id: item._id, quantity: 1 }]);
      localStorage.setItem(
        "w3Cart",
        JSON.stringify([...rest, { ...item, _id: item._id, quantity: 1 }])
      );
    } else {
      setQuantity(isExist.quantity + 1);
      const newCart = [
        ...rest,
        { ...item, _id: isExist._id, quantity: isExist.quantity + 1 },
      ];
      setCart(newCart);
      localStorage.setItem("w3Cart", JSON.stringify(newCart));
      // }
      // console.log("last", cart);
    }
  };

  const DecrementQuantity = (item) => {
    if (quantity > 0) {
      const savedCart = JSON.parse(localStorage.getItem("w3Cart"));
      const isExist = savedCart?.find((i) => i._id === item?._id);
      const rest = savedCart.filter((i) => i._id !== item?._id) || [];
      if (isExist.quantity === 1) {
        setQuantity(0);
        setCart([...rest]);
        localStorage.setItem("w3Cart", JSON.stringify([...rest]));
      } else {
        setQuantity(isExist.quantity - 1);
        const newCart = [
          ...rest,
          { ...item, _id: isExist._id, quantity: isExist.quantity - 1 },
        ];
        setCart(newCart);
        localStorage.setItem("w3Cart", JSON.stringify(newCart));
      }
    } else {
      toast.error("quantity shouldn't be 0");
    }
  };

  const removeFromCart = (_id) => {
    const rest = cart.filter((i) => i._id !== _id);
    setCart([...rest]);
    localStorage.setItem("w3Cart", JSON.stringify([...rest]));
  };

  useEffect(() => {
    const MatachedItem = cart?.find((i) => i._id === product._id);
    setCurrentItem(MatachedItem);
    setQuantity(MatachedItem?.quantity);
  }, [product._id, cart]);

  return (
    <div
      key={product._id}
      className="flex items-center justify-between border-b  border-gray-300"
    >
      <div className="flex flex-col gap-1 items-center justify-center px-3 h-[100px] ">
        <button
          //  disabled={quantity === product.stock}
          disabled={product.status === "out-of-stock"}
          onClick={() => IncrementQuantity(product)}
          className={`w-5 h-5 text-white flex items-center justify-center rounded-full bg-primary text-xl ${
            // quantity === product.stock && "cursor-not-allowed"
            product.status === "out-of-stock" && "cursor-not-allowed"
          }`}
        >
          <FiPlus size={20}></FiPlus>
        </button>
        <span>{currentItem?.quantity}</span>
        <button
          disabled={!quantity}
          onClick={() => DecrementQuantity(product)}
          className={`w-5 h-5 text-white flex items-center justify-center rounded-full bg-primary text-xl ${
            quantity === 0 && "cursor-not-allowed"
          }`}
        >
          <HiMinus size={20}></HiMinus>
        </button>
      </div>
      <div>
        <img
          src={product.thumbnail}
          className="object-contain w-10 h-auto "
          alt=""
        />
      </div>
      <div className="text-center">
        <h3 className="uppercase text-sm font-semibold ">{product.name}</h3>
        <div className="text-sm mt-1">
          {user?.role === "user" ? (
            <>
              <p>
                ${product.price} x {quantity}
              </p>
            </>
          ) : (
            <p>
              ${product.price} x {quantity}
            </p>
          )}
        </div>
      </div>
      <div className="px-3 flex">
        <button onClick={() => removeFromCart(product._id)}>
          <GrFormClose></GrFormClose>
        </button>
      </div>
    </div>
  );
};

export default CheckOutSingleItems;
