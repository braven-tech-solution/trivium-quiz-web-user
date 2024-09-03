import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { products } from "../../data/data";
import ultimateBanner from "../../assets/courses/ultimateBanner.jpg";
import { useProducts } from "../../hooks/useProducts";
import SubmitButton from "../../Components/Buttons/SubmitButton";

const WebSolutionDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [WebSolution, setWebSolution] = useState({});
  const { products } = useProducts();
  useEffect(() => {
    if (products.totalProducts) {
      const WebSolution = products?.products?.find(
        (product) => product._id == id
      );
      setWebSolution({ ...WebSolution });
    }
  }, [id, products.totalProducts]);
  const handleWebSolutionPath = (id) => {
    navigate(`/web-solutions/${id}`);
  };
  const handleQuotationApply = () => {
    navigate("/quotation");
  };
  return (
    <section className="mb-20">
      <div className="relative bg-white ">
        {/* Apply a semi-transparent overlay to darken the image */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img
          src={ultimateBanner}
          alt=""
          className="w-full h-[70vh] object-cover"
        />

        <div className="absolute top-[50%] w-full transform[-translate-x-1/2 ] text-center bg-slate-300/20 rounded-md p-1 text-white max-auto">
          <h1 className="text-5xl font-extrabold">{WebSolution?.name}</h1>
          <div className="flex justify-center font-semibold bg-[#0866FF] ">
            <Link to={"/"}>Home</Link>
            <span>/</span>
            <p>web-solutions / {WebSolution?.name}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="mt-10 grid md:grid-cols-12 grid-cols-8 gap-3">
          <div className="col-span-7 row-span-1  mx-auto shadow-lg rounded shadow-black">
            <img src={WebSolution?.img} alt="" className="w-full h-full  p-2" />
          </div>

          <div className="border border-black col-span-4 ">
            {products &&
              products?.products
                ?.filter((product) => product.category.name === "web solution")
                .map((solution) => (
                  <div
                    onClick={() => handleWebSolutionPath(solution?._id)}
                    key={solution._id}
                    className="flex items-center w-full border-b border-black border-spacing-1 pb-2 pl-2
                 cursor-pointer hover:bg-[#0866FF] hover:text-[#ffff] hover:font-bold duration-700"
                  >
                    <h1 className="w-full">{solution?.name}</h1>
                  </div>
                ))}
          </div>
        </div>
      </div>

      {/* details */}
      <div className="pt-4  md:w-[60%] w-full mt-4">
        <h1 className="bg-[#0866FF] text-3xl text-white">
          Product Description
        </h1>
        <p>{WebSolution?.productDescription}</p>
      </div>

      <div className="container mt-6">
        {WebSolution &&
          WebSolution?.features?.split(", ").map((feature, idx) => (
            <section key={idx}>
              <h1 className="capitalize pt-5  text-black">
                <span className="text-[#0866FF] shadow-sm shadow-white">
                  {" "}
                  1.{idx}{" "}
                </span>
                {feature}
              </h1>
            </section>
          ))}
      </div>
      <div className="container mt-10 ">
        <h1 className="capitalize pt-10 text-3xl font-semibold text-[#0866FF]">
          Why Do You Need to Choose our {WebSolution?.productName}? (Importance)
        </h1>
        {WebSolution &&
          WebSolution?.importance?.split(", ").map((item, idx) => (
            <div key={idx} className="pt-5  md:w-[60%] w-full">
              <h1 className="capitalize   text-green-300">
                <span className="text-blue-600 shadow-sm shadow-white">
                  {" "}
                  1.{idx}
                </span>
                <span className="text-black">{item}</span>
              </h1>
            </div>
          ))}
        <SubmitButton
          className="group relative md:w-1/2 w-full mt-2 flex justify-center mx-auto py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          onClick={handleQuotationApply}
        >
          Go For Quotation
        </SubmitButton>
      </div>
    </section>
  );
};

export default WebSolutionDetails;
