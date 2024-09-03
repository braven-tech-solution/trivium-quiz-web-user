/* eslint-disable react/prop-types */
const SubmitButton = ({ children, className, disabled, onClick }) => {
  return (
    // <div className="flex justify-center ">
    <button
      onClick={onClick}
      className={` px-7 capitalize inline-block py-2 rounded-full green ${className} ${
        disabled
          ? "bg-red-500 cursor-not-allowed"
          : "bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
      }`}
      disabled={disabled}
    >
      {children}
    </button>
    // </div>
  );
};

export default SubmitButton;
