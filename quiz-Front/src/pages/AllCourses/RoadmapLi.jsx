import React from "react";

const RoadmapLi = ({ item, serial }) => {
  return (
    <li className="list-none capitalize">
      <span className=" pr-2 text-[#0866FF] font-semibold">
        {" "}
        1.{serial + 1}
      </span>
      {item}
    </li>
  );
};

export default RoadmapLi;
