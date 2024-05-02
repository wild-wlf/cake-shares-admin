import React, { useEffect } from "react";
import { StyledKycBuyer } from "./KycBuyer.styles";
import UploadFile from "@/components/molecules/UploadFile";
import Button from "../../Button";

const KycBuyerLevelOne = ({ setOpen, setKycLevel }) => {
  function handelKycLevel() {
    setOpen(false);
    setKycLevel(2);
  }
  return (
    <StyledKycBuyer>
      <span className="kycdiscreption">Upgrade to KYC Level 1</span>
      <label htmlFor="" className="fakelabel">
        ID Proof
      </label>
      <div className="combineField">
        <UploadFile
          uploadTitle="Upload Front Side of Passport"
          onChange={(e) => console.log(e)}
        />
        <UploadFile
          uploadTitle="Upload Back Side of Passport"
          onChange={(e) => console.log(e)}
          id="back"
        />
      </div>
      <Button rounded md btntype="primary" width="214" onClick={handelKycLevel}>
        Complete Verification
      </Button>
    </StyledKycBuyer>
  );
};

export default KycBuyerLevelOne;
