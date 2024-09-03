/* eslint-disable react/prop-types */
const GetMoreCard = ({ title, description, image }) => {
   return (
      <div className="rounded-lg bg-[#fff] shadow-[5px_5px_5px_5px_#ddd]">
         <div className="p-5">
            <h3 className="text-2xl font-semibold capitalize mb-1">{title}</h3>
            <p className="text-[15px] mb-4 text-justify">
               {description.slice(0, 150)}
            </p>
         </div>
         <img src={image} alt="" className="w-full h-auto rounded-b-lg" />
      </div>
   );
};

export default GetMoreCard;
