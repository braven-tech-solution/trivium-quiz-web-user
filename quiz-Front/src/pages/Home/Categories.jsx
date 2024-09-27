import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuizCategories } from "../../hooks/quizhooks/useQuizCategories";

const Categories = () => {
  const navigate = useNavigate();
  const { categories } = useQuizCategories();

  const navigateToSubCategory = (id) => {
    navigate(`/levels/${id}`);
  };
  return (
    <div className="mb-10 mx-auto">
      <p className="text-3xl font-semibold mb-3">
        Categories -{categories?.length}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-14 mx-auto">
        {categories.map((category) => (
          <div
            key={category?._id}
            onClick={() => navigateToSubCategory(category?._id)}
            className="bg-[#037E83] w-[300px] h-[300px] mx-auto rounded flex justify-center items-center font-semibold text-xl cursor-pointer"
          >
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
