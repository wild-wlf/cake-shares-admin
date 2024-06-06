import React from 'react';
import { HandleGeneralInfoModalWrapper } from './GeneralInfoModal.styles';
import Button from '@/components/atoms/Button';

const GeneralInfoModal = ({ title, description, setOpen }) => {
  return (
    <HandleGeneralInfoModalWrapper>
      <span className="title">{title}</span>
      <p>{description}</p>

      <div className="btn-holder">
        <Button btntype="white" color="success" rounded md block onClick={() => setOpen(false)}>
          Close
        </Button>
      </div>
    </HandleGeneralInfoModalWrapper>
  );
};

export default GeneralInfoModal;
