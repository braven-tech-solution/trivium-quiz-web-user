import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

// eslint-disable-next-line react/prop-types
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // const [total, setTotal] = useState(0);

  const user = {
    role: "user",
  };

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("w3Cart"));

    setCart(savedCart);
  }, []);

  const cardInfo = { cart, setCart, showCart, setShowCart };
  return (
    <CartContext.Provider value={cardInfo}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
