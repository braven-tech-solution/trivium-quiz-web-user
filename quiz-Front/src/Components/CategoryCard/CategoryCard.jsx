/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

const CategoryCard = ({ _id, image, title, path, imageStyles }) => {
  return (
    <div
      // className="text-center"
      className="bg-secondary shadow-[5px_5px_-5px_-5px_#ddd] text-center p-3 rounded-md hover:shadow-[5px_2px_5px_5px_#ddd] duration-300 transition-all ease-in gap-2 "
    >
      <img
        src={image}
        alt=""
        className={`w-[95%] md:w-full md:h-[180px] mx-auto rounded-lg mb-2 h-[150px] object-cover ${imageStyles}`}
      />
      <Link
        className="text-red-500 hover:underline  text-base  uppercase  font-medium"
        to={path}
      >
        {title}
      </Link>
    </div>
  );
};

export default CategoryCard;
