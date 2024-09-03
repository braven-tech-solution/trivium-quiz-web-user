import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { CartContext } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";
import SubmitButton from "../Buttons/SubmitButton";
import { toast } from "react-toastify";
import { baseURL } from "../../Configs/libs";

const Checkout = () => {
  const { user, setLoading } = useContext(AuthContext);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    country: "United States (US)",
    phone: "",
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvc: "",
  });

  const { showCart, cart, setCart, isOpen } = useContext(CartContext);
  // console.log(user);

  window.scroll(0, 0);

  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      setFormData({
        ...formData,
        email: user.email || "",
        firstName: user.firstName || "",
        lastName: user.lastName || "",
      });
    }
  }, [user]);

  let price = 0;
  let discount = 0;
  if (cart) {
    for (const cartItem of cart) {
      cartItem.quantity = cartItem.quantity || 1;
      price = price + cartItem.price * cartItem.quantity;
      discount = discount + cartItem.discount;
    }
  } else {
    return;
  }
  // console.log(cart);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission

    // console.log("Form submitted", formData);
  };
  const goForPay = async () => {
    let itemsObject = [];
    cart.forEach((product) => {
      let object = {}; // Create a new object for each product
      object["productId"] = product._id;
      object["quantity"] = product.quantity;
      object["price"] = product.price;
      itemsObject.push(object);
    });
    const orderedData = {
      items: itemsObject,
      totalPrice: price,
      address: formData.address,
      contactInfo: {
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
      },
      orderedBy: {
        name: user?.firstName,
        id: user?._id,
      },
    };
    // console.log("ordered Data", orderedData);
    setLoading(true);
    try {
      const res = await fetch(`${baseURL}/order/create-order`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(orderedData),
      });

      const data = await res.json();
      // console.log("from database", data);
      if (data?.status === "success") {
        toast.success(data.message);
        setLoading(false);
        setCart([]);
        localStorage.removeItem("cart");
        navigate(`/orderPlaced/${data.data.id}`);
      } else {
        toast.error(data.message);
        setLoading(false);
      }
    } catch (err) {
      toast.error(err?.message);
      console.log(err);
    }
  };
  // console.log("Before Submit", formData);
  return (
    <>
      <div className=" bg-gray-100 flex justify-center mt-10 pt-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full space-t-8 bg-white px-8 pt-8 rounded-lg shadow-md">
          {step === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-1">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
                  Contact
                </h2>

                <form className="space-y-6 ">
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="sr-only">
                        First name
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="sr-only">
                        Last name
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="address" className="sr-only">
                      Address
                    </label>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      required
                      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="city" className="sr-only">
                        Town / City
                      </label>
                      <input
                        id="city"
                        name="city"
                        type="text"
                        required
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Town / City"
                        value={formData.city}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="country" className="sr-only">
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        value={formData.country}
                        onChange={handleChange}
                      >
                        <option>United States (US)</option>
                        <option>Canada</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="sr-only">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </form>
                <div className="flex justify-between mt-6"></div>
              </div>

              <div className="space-y-6">
                <div className="text-right">
                  <h3 className="text-3xl font-extrabold text-gray-900 text-center">
                    Your Order
                  </h3>
                  <p className="text-center text-sm text-gray-600">
                    Your billing info
                  </p>
                  <div className="border-t">
                    {cart?.map((item) => (
                      <div key={item._id} className="flex justify-between py-2">
                        <span className="text-gray-600">
                          {item?.name}{" "}
                          <span className="text-xs bg-orange-500 px-1 rounded text-white font-semibold">
                            Discount {item?.discount}%
                          </span>
                        </span>
                        <span className="font-medium text-gray-900">
                          {item?.price}
                        </span>
                      </div>
                    ))}
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium text-gray-900">{price}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Discount</span>
                      <span className="font-medium text-gray-900">
                        {price} X {discount}%
                      </span>
                      <span className="font-medium text-gray-900">
                        {price * (discount / 100)}
                      </span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Tax</span>
                      <span className="font-medium text-gray-900">$0.00</span>
                    </div>
                    --------------------------------
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600 text-xl font-semibold">
                        Total
                      </span>
                      <span className="font-medium text-gray-900">
                        ${price - price * (discount / 100)}
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 text-sm text-gray-600">
                    <div>
                      <span></span>
                    </div>
                  </div>
                  <div className="mt-6 text-sm text-gray-600">
                    <p></p>
                    <p className="font-medium mt-2"></p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-3xl font-extrabold text-gray-900 text-center">
                Payment
              </h2>
              <p className="text-center text-sm text-gray-600">
                Confirm your order
              </p>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="cardName" className="sr-only">
                    Name on card
                  </label>
                  <input
                    id="cardName"
                    name="cardName"
                    type="text"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Name on card"
                    value={formData.cardName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="cardNumber" className="sr-only">
                    Card number
                  </label>
                  <input
                    id="cardNumber"
                    name="cardNumber"
                    type="text"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Card number"
                    value={formData.cardNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expiryDate" className="sr-only">
                      Expiry date
                    </label>
                    <input
                      id="expiryDate"
                      name="expiryDate"
                      type="text"
                      required
                      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Expiry date (MM/YY)"
                      value={formData.expiryDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="cvc" className="sr-only">
                      CVC
                    </label>
                    <input
                      id="cvc"
                      name="cvc"
                      type="text"
                      required
                      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="CVC"
                      value={formData.cvc}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex justify-between mt-6">
                  <button
                    onClick={handlePrevStep}
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    ← Back
                  </button>
                  <SubmitButton
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    disabled={
                      !formData?.cardName ||
                      !formData?.cardNumber ||
                      !formData?.expiryDate ||
                      !formData?.cvc
                    }
                    onClick={goForPay}
                  >
                    Confirm Order
                  </SubmitButton>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
      {step === 1 && (
        <SubmitButton
          onClick={handleNextStep}
          className="group relative md:w-1/2 w-full mt-2 flex justify-center mx-auto py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          disabled={
            !formData?.firstName ||
            !formData?.lastName ||
            !formData?.email ||
            !formData?.phone ||
            !formData?.address
          }
        >
          CONTINUE TO PAYMENT →
        </SubmitButton>
      )}
    </>
  );
};

export default Checkout;

// priceless product should be discuss with coutaton
