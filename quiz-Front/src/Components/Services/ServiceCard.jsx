const ServiceCard = ({ service }) => {
  return (
    <>
      <div className=" group flex flex-col justify-center items-center ">
        <div className="  group-hover:transform group-hover:scale-x-[-1] transition duration-300">
          <span className="text-[#0866FF] text-[70px] ">{service?.logo}</span>
        </div>
        <h1 className="text-2xl text-[#0866FF] font-semibold ">
          {service?.name}
        </h1>
      </div>
    </>
  );
};

export default ServiceCard;
