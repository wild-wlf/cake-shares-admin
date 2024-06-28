import React, { useState, useContext, useEffect } from 'react';
import { Step, StepWrapper, StepWrapperContainar, StyledKycBuyer } from '../KYCBuyer/KycBuyer.styles';
import Button from '../../Button';
import { useForm } from '@/components/molecules/Form';
import Form from '@/components/molecules/Form/Form';
import Select from '../../Select';
import Field from '@/components/molecules/Field';
import Toast from '@/components/molecules/Toast';
import { KycContext } from '@/context/KycContext';
import { IoIosArrowRoundBack } from 'react-icons/io';
import kycService from '@/services/kycService';
import { AuthContext } from '@/context/authContext';
import { useContextHook } from 'use-context-hook';

const KycBuyerLevelFour = ({ setOpen, setKycLevel, setKycData, kycData, setKyc3 }) => {
  const [form] = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const { user, setPermission } = useContextHook(AuthContext, v => ({
    user: v.user,
    setPermission: v.setPermission,
  }));

  useEffect(() => {
    if (kycData?.bankDetails?.taxNumber) {
      form.setFieldsValue({
        taxNumber: kycData?.taxDetails?.taxNumber,
        companyDocumentImage: kycData?.companyDocumentImage,
      });
    }
  }, [kycData, form]);

  async function onSubmit(data) {
    try {
      // const { companyDocumentImage, taxNumber } = data;
      setIsLoading(true);
      const payload = {
        userId: user?._id,
        kycRequestLevel: 3,
        taxNumber: data?.taxNumber,
        companyDocumentImage: data?.companyDocumentImage,
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
      <div className="back-icon">
        <IoIosArrowRoundBack
          onClick={() => {
            setKyc3(true);
            setOpen(false);
          }}
          size={45}
        />
      </div>
      <div className="twoCol">
        <span className="description">Please provide your Bssiness details:</span>
      </div>
      <Form form={form} onSubmit={onSubmit}>
        <Form.Item
          type="number"
          label="Tax Number"
          name="taxNumber"
          placeholder="35402755003895"
          rules={[
            { required: true, message: 'Please enter Tax number' },
            {
              pattern: /^[0-9]{8,34}$/,
              message: 'Please enter a valid Tax number',
            },
          ]}>
          <Field />
        </Form.Item>

        <label htmlFor="" className="fakelabel">
          Company Documents
        </label>
        <Form.Item
          rounded
          name="companyDocumentImage"
          type="img"
          document
          fileSize="5"
          img={kycData?.companyDocumentImage || ''}
          accept="image/jpeg, image/jpg, image/png, application/pdf"
          uploadTitle="Upload Comapny documents"
          rules={[{ required: true, message: 'Please Upload Comapny documents!' }]}>
          <Field />
        </Form.Item>

        <Button rounded md btntype="primary" loader={isLoading} width="214" htmlType="submit">
          Submit
        </Button>
      </Form>
    </StyledKycBuyer>
  );
};

export default KycBuyerLevelFour;
