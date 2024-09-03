import { useContext, useEffect, useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { baseURL } from "../../Configs/libs";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const MyOrders = () => {
  const { user, isOpen } = useContext(AuthContext);
  const [myOrders, setMyOrders] = useState([]);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  useEffect(() => {
    fetch(`${baseURL}/order/user/${user._id}`)
      .then((res) => res.json())
      .then((data) => {
        setMyOrders(data.data);
      });
  }, []);

  const handleOrderClick = (orderId) => {
    setSelectedOrderId((prevSelectedOrderId) =>
      prevSelectedOrderId === orderId ? null : orderId
    );
  };

  return (
    <div className="p-12 grid lg:grid-cols-2 md:grid-cols-2 gap-10 ">
      <div className="lg:w-[70%] bg-[#ffffff] rounded-md">
        <h2 className="text-4xl font-extrabold text-gray opacity-70 mb-6">
          My Purchase..
        </h2>
        {myOrders?.map((order, index) => (
          <div
            key={index}
            className={`border p-2  rounded-lg cursor-pointer bg-[#0866FF]  ${
              selectedOrderId === order.id ? "border-sky-400" : ""
            }`}
            onClick={() => handleOrderClick(order.id)}
          >
            <div className="flex gap-5">
              <p className="border px-2  rounded-lg font-semibold ">
                {order.process}
              </p>
              {/* <p className="text-sm">1 Shipments</p> */}
            </div>
            <p className="mt-2">
              ID : <span className="font-bold">{order.id}</span>{" "}
            </p>
            <p className="">
              Total : <span className="font-bold">{order?.totalPrice}</span>{" "}
            </p>

            {/* Show/hide button for small devices */}
            <button
              className="text-xl border p-1 rounded-lg cursor-pointer relative left-60  focus:outline-none lg:hidden bg-green-500 text-white "
              onClick={() => handleOrderClick(order?.id)}
            >
              {/* {selectedOrderId === order.id ? (
                <div className="flex  items-center gap-5">
                  <p>Hide details</p> <FaAngleRight></FaAngleRight>{" "}
                </div>
              ) : (
                <div className="flex  rounded-lg items-center gap-5">
                  {" "}
                  <p>Show details</p> <FaAngleDown />{" "}
                </div>
              )} */}
            </button>

            {/* Detailed information for each individual order on small devices */}
            {selectedOrderId === order?.id && (
              <div className="mt-4 text-sm lg:hidden">
                {order?.items?.map((product, index) => (
                  <div className="flex gap-10 items-center " key={index}>
                    <div>
                      <img
                        className="w-16 h-16 rounded-full mb-4"
                        src={product.productId.images}
                        alt={product.productName}
                      />
                    </div>
                    <div className="text-justify">
                      <p> {product.productName}</p>
                      <p>Quantity: {product.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Clicking on the entire order toggles its selection */}
            <div
              className={`hidden ${
                selectedOrderId === order.id ? "lg:block" : ""
              }`}
              onClick={() => handleOrderClick(order.id)}
            ></div>
          </div>
        ))}
      </div>

      <div className="hidden lg:block">
        {selectedOrderId && (
          <div className="max-h-96 overflow-y-auto">
            <h2 className="text-4xl font-extrabold text-gray opacity-70">
              My Purchase Details...
            </h2>
            <div key={selectedOrderId} className="">
              <div className=" mt-6 border rounded-xl">
                <div className="p-2 text-sm">
                  {myOrders
                    .find((order) => order.id === selectedOrderId)
                    ?.items.map((product) => (
                      <div
                        className="flex gap-10 items-center"
                        key={product.productName}
                      >
                        <div>
                          <img
                            className="w-16 h-16 rounded-full mb-4"
                            src={product.productId.img}
                            alt={product.productName}
                          />
                        </div>
                        <div className="flex gap-10 justify-end items-end">
                          <p className="capitalize">{product.productId.name}</p>
                          <p className="capitalize">
                            {" "}
                            {/* quantity : {product.quantity} */}
                          </p>
                          <p>{product.price}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
