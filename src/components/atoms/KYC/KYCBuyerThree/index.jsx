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
import userService from "@/services/userService";
import {AuthContext} from "@/context/authContext";
import {useContextHook} from "use-context-hook";
import Toast from "@/components/molecules/Toast";

const KYCBuyerThree = ({setOpen, setKycLevel}) => {
    const [form] = useForm();
    const {user, setPermission} = useContextHook(AuthContext, v => ({
        user: v.user,
        setPermission: v.setPermission,
    }));
    const [step, setStep] = useState(1);
    const optionData = [{label: "Buyer Level Two", value: "Buyer Level Two"}];
    async function handelKycLevel() {
        // setKycLevel(4);
        const obj = {
            userId: user._id,
            kycRequestLevel: 1,
        };
        try {
            await userService.updateKyc(obj);
            Toast({
                type: "success",
                message: "Kyc Request submitted successfully",
            });
            setOpen(false);
            setPermission();
        } catch (error) {
            console.log(error);
        }
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
