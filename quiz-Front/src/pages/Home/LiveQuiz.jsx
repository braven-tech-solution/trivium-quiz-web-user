import React from "react";

import Marquee from "react-fast-marquee";

const LiveQuiz = () => {
  return (
    <div className="mx-auto bg-[#008081] my-7 text-2xl rounded ">
      <div className="w-[75%] mx-auto ">
        {" "}
        {/* Add `mx-auto` and `text-center` */}
        <div className="flex justify-between font-bold">
          <p>Live Quiz</p>
          <p>47:58:28</p>
        </div>
        <Marquee>
          <p className="font-semibold bg-gradient-to-r from-white to-[#6F9B30] bg-clip-text text-transparent">
            Your Live Quiz Will be Held at 10 PM
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default LiveQuiz;
