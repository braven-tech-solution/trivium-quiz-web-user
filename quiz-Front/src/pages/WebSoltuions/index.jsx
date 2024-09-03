import { useEffect, useState } from "react";
import WebSolutionCard from "./WebSolutionCard";
import { products } from "../../data/data";
const WebSolutions = () => {
  const [webSolution, setWebSolution] = useState([]);
  useEffect(() => {
    const productsSolutions = products.filter(
      (product) => product.category.name === "web solution"
    );
    setWebSolution([...webSolution, ...productsSolutions]);
  }, []);
  return (
    <div className="pt-28 container mx-auto min-h-screen">
      <h1 className="md:text-6xl text-xl my-10 text-[#9619B0] font-bold">
        Web Solution
      </h1>
      <p className="md:w-[50%] w-full">
        Our Web Solution offers a variety of paid software solutions tailored to
        meet your requirements. We provide access to cutting-edge software
        solutions that are in high demand worldwide, equipping you with the
        necessary tools for success. Furthermore, our web solution includes
        state-of-the-art lab facilities equipped with high-end computers
        featuring the required configurations. This enables you to refine and
        enhance your skills outside of class. Our courses are meticulously
        designed to instill confidence and proficiency in you as you progress
        through your learning journey.
      </p>
      <div className="text-center md:w-[60%] w-full mx-auto">
        <h1 className="md:text-6xl text-2xl text-[#DFD0B5] font-semibold mb-4 mt-6 capitalize">
          Contact Us & Get the service you need
        </h1>
      </div>
      <div className="flex justify-center min-h-screen">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6  my-10 mx-auto justify-center">
          {webSolution?.map((solution) => (
            <WebSolutionCard key={solution?.id} webSolution={solution} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebSolutions;
