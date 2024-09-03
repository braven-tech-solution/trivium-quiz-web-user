import { FaShopify } from "react-icons/fa6";

const FeatureSection = () => {
   return (
      <div className="px-10 py-10 grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
         <div
            className="flex items-center justify-start gap-10 bg-secondary px-10 py-3 rounded-md 
         shadow-[5px_5px_10px_#b8b8b8,_-5px_-5px_10px_#ffffff] hover:shadow-[-5px_-5px_10px_#b8b8b8,_5px_5px_10px_#ffffff] duration-500 transition-all"
         >
            <FaShopify size={25}></FaShopify>
            <h5>
               {" "}
               <span className="text-red-500 font-medium ">
                  20000+ product
               </span>{" "}
               to shop from
            </h5>
         </div>
         <div
            className="flex items-center   justify-start gap-10 bg-secondary px-10 py-3 rounded-md 
         shadow-[5px_5px_10px_#b8b8b8,_-5px_-5px_10px_#ffffff] hover:shadow-[-5px_-5px_10px_#b8b8b8,_5px_5px_10px_#ffffff] duration-500 transition-all"
         >
            <FaShopify size={25}></FaShopify>
            <h5>
               {" "}
               <span className="text-red-500 font-medium ">
                  20000+ product
               </span>{" "}
               to shop from
            </h5>
         </div>
         <div
            className="flex items-center justify-start gap-10 bg-secondary px-10 py-3 rounded-md 
         shadow-[5px_5px_10px_#b8b8b8,_-5px_-5px_10px_#ffffff] hover:shadow-[-5px_-5px_10px_#b8b8b8,_5px_5px_10px_#ffffff] duration-500 transition-all"
         >
            <FaShopify size={25}></FaShopify>
            <h5>
               {" "}
               <span className="text-red-500 font-medium ">
                  20000+ product
               </span>{" "}
               to shop from
            </h5>
         </div>
         <div
            className="flex items-center  justify-start gap-10 bg-secondary px-10 py-3 rounded-md 
         shadow-[5px_5px_10px_#b8b8b8,_-5px_-5px_10px_#ffffff] hover:shadow-[-5px_-5px_10px_#b8b8b8,_5px_5px_10px_#ffffff] duration-500 transition-all"
         >
            <FaShopify size={25}></FaShopify>
            <h5>
               {" "}
               <span className="text-red-500 font-medium ">
                  20000+ product
               </span>{" "}
               to shop from
            </h5>
         </div>
      </div>
   );
};

export default FeatureSection;
