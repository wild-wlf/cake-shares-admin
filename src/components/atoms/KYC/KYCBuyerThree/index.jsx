import React, { useState, useContext, useEffect } from 'react';
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
import { IoIosArrowRoundBack } from 'react-icons/io';
import { KycContext } from '@/context/KycContext';
const KYCBuyerThree = ({
  setOpen,
  setKycLevel,
  kycData,
  setSuccessfulModal,
  setKyc2,
  setKycData,
  setText,
  setTitle,
}) => {
  const [form] = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const { setKyc4 } = useContext(KycContext);
  const { user, refetch } = useContextHook(AuthContext, v => ({
    user: v.user,
    refetch: v.refetch,
  }));

  useEffect(() => {
    if (kycData?.personalImage) {
      form.setFieldsValue({
        personalImage: kycData?.personalImgUrl,
      });
    }
  }, [kycData, form]);

  async function handelKycLevel(imageSrc) {
    try {
      const personalImage = await bas64toFile(imageSrc, `${user?.fullName}_personalImage`);
      setIsLoading(true);
      const payload = {
        userId: user?._id,
        kycRequestLevel: 3,
        personalImage,
        taxNumber: '',

        ...kycData,
      };
      const formDataToSend = new FormData();
      Object.keys(payload).forEach(key => {
        if ((key === 'bankDetails' || key === 'ownerDetails') && typeof payload[key] === 'object') {
          formDataToSend.append(key, JSON.stringify(payload[key]));
        } else {
          formDataToSend.append(key, payload[key]);
        }
      });
      await kycService.requestKyc(formDataToSend);
      setSuccessfulModal(true);
      setText(
        `Congratulations! Your KYC verification is complete. Now you're ready to unlock the full potential of CakeShares Platform and start adding & managing your products.`,
      );
      setTitle('KYC Upgraded Successful!');
      setOpen(false);
      refetch();
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
      <div className="back-icon">
        <IoIosArrowRoundBack
          onClick={() => {
            setKyc2(true);
            setOpen(false);
          }}
          size={45}
        />
      </div>
      <div className="twoCol">
        <span className="description">Facial Info:</span>
      </div>
      <label htmlFor="" className="fakelabel">
        Facial Recognition
      </label>
      {user.sellerType === 'Individual' ? (
        <WebCam handelKycLevel={handelKycLevel} isLoading={isLoading} />
      ) : (
        <WebCam
          setKyc4={setKyc4}
          setOpen={setOpen}
          setKycData={setKycData}
          kycData={kycData}
          // handelKycLevel={handelKycLevel}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          bas64toFile={bas64toFile}
        />
      )}
    </StyledKycBuyer>
  );
};

export default KYCBuyerThree;
