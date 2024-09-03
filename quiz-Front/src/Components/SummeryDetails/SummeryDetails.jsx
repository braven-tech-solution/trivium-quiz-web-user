/* eslint-disable react/prop-types */

import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";

import { useNavigate } from "react-router-dom";

const SummeryDetails = ({ groupName, children, icon, path }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  // console.log(children);
  // shadow-[5px_5px_10px_#b8b8b8,_-5px_-5px_10px_#ffffff] hover:shadow-[-5px_-5px_10px_#b8b8b8,_5px_5px_10px_#ffffff]
  return (
    <details
      className={`border-t border-spacing-3 rounded text-accent  text-sm py-2  duration-500 transition-all `}
    >
      <summary
        className="text-sm flex justify-between items-center "
        onClick={() => {
          setOpen(!open);
          navigate(`${path}`);
        }}
      >
        <div className="flex items-center gap-2 ">
          <span className="text-sm w-4  h-4">
            <img className="w-5 h-auto" src={icon}></img>
          </span>
          <span className="text-[13px]">{groupName}</span>
        </div>
        <RiArrowRightSLine
          className={`${
            !open ? "   rotate-0 font-bold" : "rotate-90 text-black-600"
          } duration-1000 transition-transform text-xs`}
          size={20}
        ></RiArrowRightSLine>
      </summary>

      <ul className={`flex pl-1 flex-col gap-1 text-white py-1`}>{children}</ul>
    </details>
  );
};

export default SummeryDetails;
