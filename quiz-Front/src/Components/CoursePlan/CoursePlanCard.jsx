import { Link } from "react-router-dom";
import { BiMinus } from "react-icons/bi";
import { HiPlus } from "react-icons/hi";
import MaterialsLi from "./MaterialsLi";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { CartContext } from "../../Context/CartContext";

const CoursePlanCard = ({ course }) => {
  const { name, price, materials } = course;
  const { user } = useContext(AuthContext);
  const [productModal, setProductModal] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const { cart, setCart, showCart, setShowCart } = useContext(CartContext);

  // console.log(course);

  const IncrementQuantity = (item) => {
    setShowCart(true);
    // console.log("item from main card", { item });
    const savedCart = JSON.parse(localStorage.getItem("w3Cart"));
    // console.log("first", savedCart);
    // if (quantity < product.stock) {
    const isExist = savedCart?.find((i) => i._id === item._id);
    const rest = savedCart?.filter((i) => i._id !== item._id) || [];
    // console.log(isExist);
    // console.log(rest);
    if (!isExist) {
      setQuantity(quantity + 1);
      setCart([...rest, { _id: item._id, quantity: 1, ...item }]);
      localStorage.setItem(
        "w3Cart",
        JSON.stringify([
          ...rest,
          {
            _id: item._id,
            quantity: 1,
            ...item,
          },
        ])
      );
    } else {
      setQuantity(isExist.quantity + 1);
      setCart([
        ...rest,
        {
          _id: isExist._id,
          quantity: isExist.quantity + 1,
          ...item,
        },
      ]);
      localStorage.setItem(
        "w3Cart",
        JSON.stringify([
          ...rest,
          {
            _id: isExist._id,
            quantity: isExist.quantity + 1,
            ...item,
          },
        ])
      );
    }
    // console.log("last", cart);
    // }
  };

  const DecrementQuantity = (item) => {
    if (quantity > 0) {
      const savedCart = JSON.parse(localStorage.getItem("w3Cart"));
      const isExist = savedCart?.find((i) => i._id === item._id);
      const rest = savedCart.filter((i) => i._id !== item._id) || [];
      if (isExist.quantity === 1) {
        setQuantity(0);
        setCart([...rest]);
        localStorage.setItem("w3Cart", JSON.stringify([...rest]));
      } else {
        setQuantity(isExist.quantity - 1);
        const newCart = [
          ...rest,
          {
            _id: isExist._id,
            quantity: isExist.quantity - 1,
            ...item,
          },
        ];
        setCart(newCart);
        localStorage.setItem("w3Cart", JSON.stringify(newCart));
      }
    }
  };

  useEffect(() => {
    const currentItem = cart?.find((i) => i._id === course._id);
    setQuantity(currentItem?.quantity || 0);
  }, [course._id, cart]);

  console.log({ productModal });
  return (
    <div className="bg-gradient-to-r from-[#fff] to-[#fff] rounded-md text-center text-[#005BC4] md:py-6 py-1 md:w-[296px] shadow-md shadow-white">
      <h1 className="md:text-2xl text-xl font-semibold uppercase">{name}</h1>
      <h1 className="md:text-2xl text-2xl font-medium">{price} tk</h1>
      <p className="font-bold uppercase text-black">Course Outline</p>
      <ul className="md:text-lg text-sm">
        {materials?.split(", ").map((item, idx) => (
          <MaterialsLi key={idx} item={item} />
        ))}
      </ul>
      {/* <Link to={"/checkout"}> */}
      <div className="flex items-center justify-center gap-2">
        <button className="bg-gradient-to-r from-[#0866FF] to-[#0866FF] px-2 py-1 rounded-md hover:from-[#9dbdf1] hover:to-[#0866FF] transition-all duration-300 my-2 shadow-xl text-white font-bold">
          {" "}
          {quantity > 0 ? (
            <span className="">Added To Cart</span>
          ) : (
            <span onClick={() => IncrementQuantity(course)}>Purchase</span>
          )}
        </button>
      </div>

      {/* <button className="bg-gradient-to-r from-[#BD10E0] to-[#efb7fa] px-2 py-1 rounded-md hover:from-[#efb7fa] hover:to-[#BD10E0] transition-all duration-300 my-2 shadow-xl text-white font-bold">
          Registration Now
        </button> */}
      {/* </Link> */}
    </div>
  );
};

export default CoursePlanCard;
