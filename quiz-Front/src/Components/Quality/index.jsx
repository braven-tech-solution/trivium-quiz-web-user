import qualityImg from "../../assets/quality.png";

const Quality = () => {
  return (
    <div className="flex md:flex-row flex-col mt-16  h-full ">
      <div className="md:w-[50%] w-full md:pl-1 pl-10 rounded-md bg-gradient-to-r from-[#EFF3F7] to-[#EFF3F7]">
        <img src={qualityImg} alt="" className=" rounded-md" />
      </div>
      <div className="md:w-[50%] w-full bg-gradient-to-r from-[#EFF3F7] to-[#EFF3F7] flex justify-center items-center rounded-md">
        <div className="md:px-6 px-1">
          <h1 className="text-4xl font-bold text-[#0866FF]">
            {" "}
            Our Quality & skills.
          </h1>
          <p>
            {" "}
            Web3Soft Solution is a company where every solution and service is
            based on innovation. Our wide range of services that we provide
            speak volumes about the skills we possess. Web3Soft Solution
            consultants and resources possess strong industry knowledge and
            domain expertise. With a strong focus on reviving the software
            development and web development market, Web3Soft Solution intends to
            use its skills and bring a brand new approach to the industry. Here
            is a lowdown on the skills that we posses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quality;
