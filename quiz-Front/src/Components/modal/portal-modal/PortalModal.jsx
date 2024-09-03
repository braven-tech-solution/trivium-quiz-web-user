import Portal from "../../../Portal";
import ModalContent from "../ModalContent";

const PortalModal = ({ close }) => {
  return (
    <>
      <Portal>
        <ModalContent close={close}></ModalContent>
      </Portal>
    </>
  );
};

export default PortalModal;
