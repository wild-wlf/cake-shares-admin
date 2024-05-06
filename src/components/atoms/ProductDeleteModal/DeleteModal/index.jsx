import React from "react";
import { DeleteModalWrapper } from "./DeleteModal.style";
import Button from "../../Button";

const DeleteModal = ({ closeDeleteModal, openSuccessfulModal }) => {
  return (
    <DeleteModalWrapper>
      <div className="title-div">
        <h2>Delete Product!</h2>
        <span>Are you sure you want to delete this Product?</span>
      </div>
      <div className="btn-wrapper">
        <Button sm rounded btntype="cancel" onClick={closeDeleteModal}>
          No
        </Button>
        <Button
          sm
          rounded
          btntype="danger"
          className="danger"
          onClick={openSuccessfulModal}
        >
          Yes, Delete
        </Button>
      </div>
    </DeleteModalWrapper>
  );
};

export default DeleteModal;
