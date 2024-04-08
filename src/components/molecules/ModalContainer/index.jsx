import React, { useEffect, useState } from "react";
import Modal from "../Modal/CenterModal";

function ModalContainer({
  btnComponent,
  title,
  xl,
  lg,
  sm,
  isClosable,
  onModalClose = () => {},
  imgPreview,
  width,
  helpModal,
  children,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const showModal = () => {
    setIsVisible(true);
  };

  const handleCancel = () => {
    onModalClose();
    setIsVisible(false);
  };
  useEffect(() => {
    if (!isVisible) {
      onModalClose();
    }
  }, [isVisible]);

  return (
    <>
      {btnComponent && btnComponent({ onClick: showModal })}
      <Modal
        title={title}
        open={isVisible}
        setOpen={(x) => {
          setIsVisible(x);
        }}
        xl={xl}
        lg={lg}
        sm={sm}
        width={width}
        helpModal={helpModal}
        imgPreview={imgPreview}
      >
        {children}
      </Modal>
    </>
  );
}

export default ModalContainer;
