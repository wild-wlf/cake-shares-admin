import React, { useState } from "react";
import {
  Step,
  StepWrapper,
  StepWrapperContainar,
  StyledKycBuyer,
} from "../KYCBuyer/KycBuyer.styles";
import UploadFile from "@/components/molecules/UploadFile";
import Button from "../../Button";
import { useForm } from "@/components/molecules/Form";
import Form from "@/components/molecules/Form/Form";
import WebCam from "../../WebCam";

const KYCBuyerThree = ({ setOpen, setKycLevel }) => {
  const [form] = useForm();

  const [step, setStep] = useState(1);
  const optionData = [{ label: "Buyer Level Two", value: "Buyer Level Two" }];
  function handelKycLevel() {
    setOpen(false);
    setKycLevel(4);
  }
  return (
    <StyledKycBuyer>
      <div className="twoCol">
        <span className="kycdiscreption">Biometric Verification required.</span>
      </div>
      <label htmlFor="" className="fakelabel">
        Facial Recognition
      </label>
      <WebCam handelKycLevel={handelKycLevel} />
    </StyledKycBuyer>
  );
};

export default KYCBuyerThree;
