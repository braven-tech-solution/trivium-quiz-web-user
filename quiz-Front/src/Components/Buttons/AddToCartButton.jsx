/* eslint-disable react/prop-types */
const AddToCartButton = ({ containerStyles, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-md text-secondary bg-[#0C6220] ${containerStyles}`}
    >
      Add to cart
    </button>
  );
};

export default AddToCartButton;
