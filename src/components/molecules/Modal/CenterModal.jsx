import React, { useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";
import { ContentHolder, Head, StyledModal } from "./Modal.styles";
import Image from "next/image";

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
  title,
  headImage,
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
        }}>
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
          tabIndex={-1}>
          <Head>
            {title && <strong className="title">{title}</strong>}
            {headImage && <Image src={headImage} alt="Icon" />}
            <div
              type="button"
              className="closer"
              onClick={handleClose}
              tabIndex={0}>
              <MdOutlineClose size={25} className="Icon" />
            </div>
          </Head>
          {children}
        </ContentHolder>
      </StyledModal>
    )
  );
};

export default CenterModal;
