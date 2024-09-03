import { useEffect, useState } from "react";
import img from "../../assets/courses/BI.jpg";
import { products } from "../../data/data";

import SoftwareServiceCard from "./SoftwareServiceCard";
const SoftwareServices = () => {
  const [softwareServices, setSoftwareServices] = useState([]);
  useEffect(() => {
    const softwareProduct = products?.filter(
      (product) => product.category.name === "Software Services"
    );
    setSoftwareServices([...softwareServices, ...softwareProduct]);
  }, []);
  return (
    <div className="pt-28 container mx-auto min-h-screen">
      <h1 className="md:text-6xl text-xl my-10 text-[#9619B0] font-bold">
        Software Services
      </h1>
      <p className="md:w-[50%] w-full">
        Our Software Services offer a range of paid software solutions to meet
        your needs. We provide access to trendy software that is in demand
        globally, empowering you with the tools you need to succeed.
        Additionally, our lab facilities feature high-end computers with the
        required configurations, allowing you to practice and enhance your
        skills after class. Our courses are designed to build confidence and
        proficiency throughout your learning journey.
      </p>
      <div className="text-center md:w-[60%] w-full mx-auto">
        <h1 className="md:text-3xl text-xl text-[#9619B0] font-semibold mb-4 mt-6 capitalize">
          Contact Us & Get Access to these Useful softwares
        </h1>
      </div>
      <div className="flex justify-center min-h-screen">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6  my-10 mx-auto justify-center">
          {softwareServices?.map((software) => (
            <SoftwareServiceCard key={software?.id} software={software} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoftwareServices;
