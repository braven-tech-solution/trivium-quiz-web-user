/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import ActionButton from "../Buttons/ActionButton";
import { useQuery } from "@tanstack/react-query";
import { baseURL } from "../../Configs/libs";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Banner = ({ banner }) => {
  const navigate = useNavigate();
  const { isOpen } = useContext(AuthContext);

  const { title, offerId, offerType, buttonText, imageURL, description } =
    banner;

  const styles = {
    background: `linear-gradient(90deg, rgba(48, 97, 221, 0),rgba(48, 97, 221, 0)), url(${imageURL}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "center bottom",
    objectFit: "cover",
    // width: "100%"
  };
  // const { data: offerItem = {} } = useQuery({
  //   queryKey: ["offerItem", offerId, offerType],
  //   queryFn: async () => {
  //     if (offerId) {
  //       const res = await fetch(`${baseURL}/${offerType}/${offerId}`);
  //       const data = await res.json();
  //       return data.data;
  //     }
  //     return {};
  //   },
  // });

  // const { data: categories = [] } = useQuery({
  //   queryKey: ["categories"],
  //   queryFn: async () => {
  //     if (offerItem?._id) {
  //       const res = await fetch(`${baseURL}/category`);
  //       const data = await res.json();
  //       return data.data.categories;
  //     }
  //     return [];
  //   },
  // });
  // const { data: subCategories = [] } = useQuery({
  //   queryKey: ["subCategories"],
  //   queryFn: async () => {
  //     if (offerItem?._id) {
  //       const res = await fetch(`${baseURL}/sub-category`);
  //       const data = await res.json();
  //       return data.data.subCategories;
  //     }
  //     return [];
  //   },
  // });

  //   const handleCategoryAction = async () => {
  //     return navigate(`/category${offerItem?.path}`);
  //   };

  //   const handleSubCategory = () => {
  //     const category = categories.find((i) => i._id === offerItem?.category?.id);
  //     return navigate(`/category${category?.path}${offerItem?.path}`);
  //   };

  // console.log(subCategories, "sub cate");

  // const handleProductAction = () => {
  //   const category = categories.find((i) => i._id === offerItem?.category?.id);
  //   const subCategory = subCategories.find(
  //     (i) => i._id === offerItem?.subCategory?.id
  //   );

  //   return navigate(
  //     `/category${category?.path}${subCategory?.path}/${offerItem?._id}`
  //   );
  // };

  return (
    <div
      className={`  py-14 px-10 w-50  flex items-center justify-start   sm:h-[68vh] xs:h-[18vh] duration-300   ${
        !isOpen && "md:h-[450px]  h-[18vh] duration-300"
      }   `}
      // className={`  py-14 px-10 w-50  flex items-center justify-start h-[68vh]`}
      style={styles}
    >
      {/* <div className=" lg:w-2/5 flex gap-3 flex-col p-3 bg-opacity-75 rounded-md bg-white  ">
        <h2 className="text-4xl font-medium capitalize mb-3 ">{title}</h2>
        <p className="text-xl  font-normal ">{description}</p>
        {offerItem.name && offerType === "category" && (
          <ActionButton
            handleAction={handleCategoryAction}
            containerStyles="bg-primary text-lg text-secondary font-semibold rounded-lg   inline-block w-auto mr-auto mt-5 capitalize"
          >
            {buttonText}
          </ActionButton>
        )}
        {offerItem.name && offerType === "sub-category" && (
          <ActionButton
            handleAction={handleSubCategory}
            containerStyles="bg-primary text-lg text-secondary font-semibold rounded-lg   inline-block w-auto mr-auto mt-5 capitalize"
          >
            {buttonText}
          </ActionButton>
        )}
        {offerItem.name && offerType === "product" && (
          <ActionButton
            handleAction={handleProductAction}
            containerStyles="bg-primary text-lg text-secondary font-semibold rounded-lg   inline-block w-auto mr-auto mt-5 capitalize"
          >
            {buttonText}
          </ActionButton>
        )}
      </div> */}
    </div>
  );
};

export default Banner;
