/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Modal from "../Modal/CenterModal";

function ModalContainer({
  btnComponent,
  content,
  title,
  xl,
  lg,
  sm,
  isClosable,
  onModalClose = () => {},
  isOpen,
  imgPreview,
  width,
  helpModal,
  stateChanged = () => {},
}) {
  const [isVisible, setIsVisible] = useState(!!isOpen);
  const [p_isVisible, p_setIsVisible] = useState(!!isOpen);
  const showModal = () => {
    stateChanged({ [title]: true });
    setIsVisible(true);
    p_setIsVisible(true);
  };
  const handleCancel = () => {
    stateChanged({ [title]: false });
    setIsVisible(false);
  };
  useEffect(() => {
    if (p_isVisible && !isVisible) {
      stateChanged({ [title]: false });
      onModalClose();
    }
  }, [isVisible]);

  return (
    <>
      {btnComponent && btnComponent({ onClick: showModal })}
      <Modal
        title={title}
        open={isVisible}
        setOpen={setIsVisible}
        xl={xl}
        lg={lg}
        sm={sm}
        width={width}
        isClosable={isClosable}
        helpModal={helpModal}
        imgPreview={imgPreview}
      >
        {content({ onClose: handleCancel })}
      </Modal>
    </>
  );
}

export default ModalContainer;
