import React from "react";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();
  const navigateToSubCategory = () => {
    navigate("/levels");
  };
  return (
    <div className="mb-10 mx-auto">
      <p className="text-3xl font-semibold mb-3">Categories</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-14 mx-auto">
        <div
          onClick={navigateToSubCategory}
          className="bg-[#037E83] w-[300px] h-[300px] mx-auto rounded flex justify-center items-center font-semibold text-xl cursor-pointer"
        >
          Android Development
        </div>
        <div
          onClick={navigateToSubCategory}
          className="bg-[#037E83] w-[300px] h-[300px] mx-auto rounded flex justify-center items-center font-semibold text-xl cursor-pointer"
        >
          Android Development
        </div>
        <div
          onClick={navigateToSubCategory}
          className="bg-[#037E83] w-[300px] h-[300px] mx-auto rounded flex justify-center items-center font-semibold text-xl cursor-pointer"
        >
          Android Development
        </div>
      </div>
    </div>
  );
};

export default Categories;
