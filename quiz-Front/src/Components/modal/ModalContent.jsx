import closeIcon from "../../assets/icons/close.svg";
import discount from "../../assets/discount.jpg";

const ModalContent = ({ close }) => {
  return (
    <>
      <section className="fixed left-0 top-0 w-full h-full grid place-items-center bg-slate-800/50 backdrop-blur-sm z-50">
        {/* <!-- Search Container --> */}
        <div className="relative w-6/12 mx-auto  p-4 border border-slate-600/50 rounded-lg shadow-lg shadow-slate-400/10">
          <img src={discount} alt="" className="w-full" />
          <span onClick={close}>
            <img
              src={closeIcon}
              alt="Close"
              className="absolute right-2 top-2 cursor-pointer w-8 h-8"
            />
          </span>
        </div>
      </section>
    </>
  );
};

export default ModalContent;
