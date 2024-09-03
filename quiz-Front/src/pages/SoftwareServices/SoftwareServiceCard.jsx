import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const SoftwareServiceCard = ({ software }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const { name, img } = software;
  const handleSingleCourse = (data) => {
    navigate(`/software-service/${data?.id}`);
  };
  const handlePurchase = (event) => {
    event.stopPropagation();
    if (!user?.email) {
      navigate("/login");
    } else {
      navigate("/quotation");
    }
  };
  return (
    <section
      onClick={() => handleSingleCourse(software)}
      className=" cursor-pointer"
    >
      <div className="md:w-[354px]   rounded-3xl  shadow-lg shadow-black ">
        <div className="w-full h-[181px] rounded-xl">
          <img
            src={img}
            alt=""
            className="rounded-t-3xl  w-full h-full p-[2px]"
          />
        </div>
        <div className="px-2 py-3 text-start">
          <h1 className="text-lg font-medium">{name}</h1>
          <div className="flex justify-between items-center mt-6">
            {/* <h1 className="font-semibold text-amber-500">
              Course Fee <span className="text-white">{price}</span> tk
            </h1> */}

            <button
              onClick={handlePurchase}
              className=" hover:bg-rose-800 bg-white rounded-3xl px-3 py-2 text-black hover:text-white transition-all duration-300"
            >
              Purchase
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareServiceCard;
