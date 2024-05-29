import React from "react";
import { VerficationModalWrapper } from "./VerficationModal.style";
import Image from "next/image";
import VerificationIcon from "../../../_assets/verification.svg";
import { useContextHook } from "use-context-hook";
import arrowImg from "../../../_assets/half-white-arrow.svg";
import Button from "@/components/atoms/Button";
import { AuthContext } from "@/context/authContext";

const VerficationModal = ({ setOpen }) => {
  const { onLogout } = useContextHook(AuthContext, (v) => ({
    onLogout: v.onLogout,
  }));

  const logout = () => {
    onLogout();
    setOpen(false);
  };
  return (
    <VerficationModalWrapper>
      <Image
        src={VerificationIcon}
        alt="VerificationIcon"
        className="VerificationIcon"
      />
      <span>
        Your request is currently being processed, and you will receive a
        notification within 48 hours.
      </span>
      <div className="btn-holder">
        <Button
          type="success"
          color="success"
          rounded
          width="290"
          onClick={logout}
        >
          Logout
          <Image src={arrowImg} alt="arrow" />
        </Button>
      </div>
    </VerficationModalWrapper>
  );
};

export default VerficationModal;
