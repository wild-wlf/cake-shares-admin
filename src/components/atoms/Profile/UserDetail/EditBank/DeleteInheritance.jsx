import React from "react";
import { StyledEditForm } from "./EditForm.styles";
import Button from "@/components/atoms/Button";

const DeleteInheritance = ({ onClose, setSuccessModal }) => {
  return (
    <StyledEditForm>
      <strong className="subTitle">Delete Inheritance!</strong>
      <span className="discreption">
        Are you sure you want to delete this Inheritance?
      </span>
      <div className="buttonWrap">
        <Button
          type="white"
          rounded
          sm
          width
          onClick={() => {
            onClose();
          }}
        >
          No
        </Button>
        <Button
          rounded
          sm
          width
          type="danger"
          onClick={() => {
            setSuccessModal(true);
            onClose();
          }}
        >
          Yes,Delete
        </Button>
      </div>
    </StyledEditForm>
  );
};

export default DeleteInheritance;
