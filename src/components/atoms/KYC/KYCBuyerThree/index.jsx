import React, { useState } from 'react';
import { Step, StepWrapper, StepWrapperContainar, StyledKycBuyer } from '../KYCBuyer/KycBuyer.styles';
import UploadFile from '@/components/molecules/UploadFile';
import Button from '../../Button';
import { useForm } from '@/components/molecules/Form';
import Form from '@/components/molecules/Form/Form';
import WebCam from '../../WebCam';
import userService from '@/services/userService';
import { AuthContext } from '@/context/authContext';
import { useContextHook } from 'use-context-hook';
import Toast from '@/components/molecules/Toast';
import kycService from '@/services/kycService';
import { bas64toFile } from '@/helpers/common';

const KYCBuyerThree = ({ setOpen, setKycLevel, kycData }) => {
  const [form] = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const { user, setPermission } = useContextHook(AuthContext, v => ({
    user: v.user,
    setPermission: v.setPermission,
  }));
  async function handelKycLevel(imageSrc) {
    try {
      const personalImage = await bas64toFile(imageSrc, `${user?.fullName}_personalImage`);
      setIsLoading(true);
      const payload = {
        userId: user?._id,
        kycRequestLevel: 3,
        personalImage,
        ...kycData,
      };
      console.log('PAYLOAD: ', payload);
      const formDataToSend = new FormData();
      Object.keys(payload).forEach(key => {
        if (key === 'bankDetails' && typeof payload[key] === 'object') {
          formDataToSend.append(key, JSON.stringify(payload[key]));
        } else {
          formDataToSend.append(key, payload[key]);
        }
      });
        await kycService.requestKyc(formDataToSend);
      Toast({
        type: 'success',
        message: `KYC Requested Successfully!`,
      });
      setOpen(false);
      setPermission(prev => !prev);
    } catch ({ message }) {
      Toast({
        type: 'error',
        message,
      });
    } finally {
      setIsLoading(false);
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
      <WebCam handelKycLevel={handelKycLevel} isLoading={isLoading} />
    </StyledKycBuyer>
  );
};

export default KYCBuyerThree;
