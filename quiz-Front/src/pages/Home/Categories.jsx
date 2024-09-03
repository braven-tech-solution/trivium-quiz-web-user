import React from "react";

const Categories = () => {
  return (
    <div className="mb-10 mx-auto">
      <p className="text-3xl font-semibold mb-3">Categories</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-14 mx-auto">
        <div className="bg-[#037E83] w-[300px] h-[300px] mx-auto rounded"></div>
        <div className="bg-[#037E83] w-[300px] h-[300px] mx-auto rounded"></div>
        <div className="bg-[#037E83] w-[300px] h-[300px] mx-auto rounded"></div>
        <div className="bg-[#037E83] w-[300px] h-[300px] mx-auto rounded"></div>
        <div className="bg-[#037E83] w-[300px] h-[300px] mx-auto rounded"></div>
        <div className="bg-[#037E83] w-[300px] h-[300px] mx-auto rounded"></div>
      </div>
    </div>
  );
};

export default Categories;
