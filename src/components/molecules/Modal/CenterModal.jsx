import React, { useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import { ContentHolder, Head, StyledModal } from "./Modal.styles";

const CenterModal = ({
  children,
  open,
  setOpen,
  bg,
  padding,
  width,
  radius,
  desktopRight,
  desktopTop,
  setIsEditing,
}) => {
  useEffect(() => {
    const disableScroll = () => {
      document.body.style.overflow = "hidden";
    };

    const enableScroll = () => {
      document.body.style.overflow = "auto";
    };

    if (open) {
      disableScroll();
    } else {
      enableScroll();
    }

    return () => {
      enableScroll();
    };
  }, [open]);

  const handleClose = () => {
    setIsEditing?.({
      status: false,
    });
    setOpen(false);
  };
  return (
    open && (
      <StyledModal
        open={open}
        onClick={handleClose}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            handleClose();
          }
        }}
      >
        <ContentHolder
          bg={bg}
          padding={padding}
          width={width}
          radius={radius}
          desktopRight={desktopRight}
          desktopTop={desktopTop}
          role="dialog"
          aria-modal="true"
          onClick={(e) => e.stopPropagation()}
          tabIndex={-1}
        >
          <Head>
            <button
              type="button"
              className="closer"
              onClick={handleClose}
              tabIndex={0}
            >
              <IoIosClose size={25} color="var(--white)" />
            </button>
          </Head>
          {children}
        </ContentHolder>
      </StyledModal>
    )
  );
};

export default CenterModal;
