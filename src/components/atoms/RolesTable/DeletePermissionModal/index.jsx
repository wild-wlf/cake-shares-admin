import React from "react";
import { DeleteModalWrapper } from "./DeletePermissionModal.style";
import Button from "../../Button";

const DeletePermissionModal = ({ closeDeleteModal, openSuccessfulModal }) => {
  return (
    <DeleteModalWrapper>
      <div className="title-div">
        <h2>Delete Role!</h2>
        <span>Are you sure you want to delete this Role?</span>
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

export default DeletePermissionModal;
