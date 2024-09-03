/* eslint-disable react/prop-types */
import { HiPlus } from "react-icons/hi";
import AddToCartButton from "../Buttons/AddToCartButton";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiMinus } from "react-icons/bi";
// import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
// import InnerImageZoom from "react-inner-image-zoom";
const ProductModal = ({
  product,
  setModalShow,
  quantity,
  DecrementQuantity,
  IncrementQuantity,
}) => {
  const user = {
    role: "user",
  };
  return (
    <div className=" fixed z-[999] top-0 left-0  w-full min-h-screen md:h-screen bg-primary bg-opacity-50 flex items-center justify-center ">
      <div className=" overflow-y-scroll md:overflow-auto max-h-[90vh] md:max-h-auto md:mt-0 w-[95%] md:w-[70%] lg:w-[55%]  xl:w-[60%] bg-secondary px-5  py-5 flex rounded-lg relative z-50">
        <div
          className="px-2  md:top-5 md:right-7 top-5 right-2 rounded-full text-red-500 absolute cursor-pointer  z-[999]"
          onClick={() => setModalShow(false)}
        >
          <AiFillCloseCircle
            size={30}
            className="text-2xl  rounded-full "
          ></AiFillCloseCircle>
        </div>
        <div className="flex flex-col gap-5 md:flex-row  w-full">
          <div className=" md:w-[40%] flex items-center justify-center gap-5">
            <InnerImageZoom
              className="object-contain"
              src={product.thumbnail}
              zoomScale={2}
            />
          </div>
          <div className=" md:w-[60%] flex-grow">
            <h2 className=" sm:text-2xl lg:text-[26px] font-extrabold capitalize">
              {product.productName}
            </h2>

            <p className="px-2 my-1 py-[1px] rounded-full inline-block bg-primary bg-opacity-75 text-primary text-sm  capitalize font-medium ">
              <span className="text-white ml-1">stock : </span>
              <span className="text-red-500">{product?.stock}</span>
            </p>
            <p className=" text-gray-700 text-base my-5">
              Most fresh vegetables are low in calories and have a water content
              in excess of 70 percent, with only about 3.5 percent protein and
              less than 1 percent fat. ... The root vegetables include beets,
              carrots, radishes, sweet potatoes, and turnips. Stem vegetables
              include asparagus and kohlrabi.
            </p>
            {/* <h3 className="text-3xl font-bold ">
                     <span className="text-red-500">
                        ${" "}
                        {user?.role === "dealer" ? (
                           product.dealerPrice
                        ) : (
                           <>
                              {product.price -
                                 (product.price * product.discount) / 100}
                           </>
                        )}
                     </span>
                     <small className="text-[24px]">
                        <del>${product.price}</del>
                     </small>
                  </h3> */}
            <div className="flex items-center  gap-5 justify-between my-3">
              <div className=" w-1/2 gap-5 rounded-md flex items-center justify-between bg-white border border-gray-400">
                <button
                  className={`p-3 ${quantity === 0 && " cursor-not-allowed"}`}
                  disabled={quantity === 0}
                  onClick={() => DecrementQuantity(product)}
                >
                  <BiMinus
                    size={20}
                    className="text-black text-xl font-bold"
                  ></BiMinus>
                </button>
                <span className="text-xl">{quantity}</span>
                <button
                  className={`p-3 ${
                    quantity === product.stock && " cursor-not-allowed"
                  }`}
                  disabled={quantity === product?.stock}
                  onClick={() => IncrementQuantity(product)}
                >
                  <HiPlus
                    size={20}
                    className="text-black text-xl font-bold"
                  ></HiPlus>
                </button>
              </div>
              <div className="w-1/2">
                <AddToCartButton
                  // onClick={() => addToCart(product._id)}
                  containerStyles={`py-[10px] font-bold`}
                ></AddToCartButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
