import React, { useEffect } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { ContentHolder, Head, StyledModal } from './Modal.styles';
import Image from 'next/image';
import { RxCross2 } from 'react-icons/rx';

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
  iscloseAble = true,
}) => {
  // console.log(open);
  useEffect(() => {
    const disableScroll = () => {
      document.body.style.overflow = 'hidden';
    };

    const enableScroll = () => {
      document.body.style.overflow = 'auto';
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
    if (iscloseAble) {
      setOpen(false);
    }
  };
  return (
    open && (
      <StyledModal
        open={open}
        onClick={handleClose}
        onKeyDown={e => {
          if (iscloseAble) {
            if (e.key === 'Escape') {
              handleClose();
            }
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
          onClick={e => e.stopPropagation()}
          tabIndex={-1}>
          <Head>
            {title && <strong className="title">{title}</strong>}
            {headImage && <Image src={headImage} alt="Icon" />}
            {
              <button type="button" className="closer" onClick={() => setOpen(false)} tabIndex={0}>
                <RxCross2 className="Icon" />
              </button>
            }
          </Head>
          {children}
        </ContentHolder>
      </StyledModal>
    )
  );
};

export default CenterModal;
