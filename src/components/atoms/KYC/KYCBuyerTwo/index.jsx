import React, { useState, useContext } from 'react';
import { Step, StepWrapper, StepWrapperContainar, StyledKycBuyer } from '../KYCBuyer/KycBuyer.styles';
import Button from '../../Button';
import { useForm } from '@/components/molecules/Form';
import Form from '@/components/molecules/Form/Form';
import Select from '../../Select';
import Field from '@/components/molecules/Field';
import Toast from '@/components/molecules/Toast';
import { KycContext } from '@/context/KycContext';

const KycBuyerLevelTwo = ({ setOpen, setKycLevel, setKycData }) => {
  const [form] = useForm();
  const { setKyc3 } = useContext(KycContext);
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(data) {
    try {
      const { residenceProofImage, ...bankDetails } = data;
      setIsLoading(true);
      setKycData(prev => ({
        ...prev,
        residenceProofImage,
        bankDetails,
      }));
      setKyc3(true);
      setOpen(false);
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
        <span className="kycdiscreption">Verification required. Please provide some details.</span>
      </div>
      <Form form={form} onSubmit={onSubmit}>
        <Form.Item
          type="text"
          label="Bank Name"
          name="bankName"
          placeholder="Bank of England"
          rules={[
            { required: true, message: 'Please enter bank name' },
            {
              pattern: /^.{3,30}$/,
              message: 'Please enter a valid bank name',
            },
          ]}>
          <Field maxLength={30} />
        </Form.Item>
        <div className="combineFields">
          <Form.Item
            type="text"
            label="Account Holder Name"
            name="accountHolder"
            placeholder="Alex Mertiz"
            rules={[
              {
                required: true,
                message: 'Account Holder Name is Required',
              },
              {
                min: 2,
                message: 'Account Holder Name should be at least 2 characters.',
              },
              {
                max: 64,
                message: 'Account Holder Name should not exceed 64 characters.',
              },
            ]}>
            <Field maxLength={30} />
          </Form.Item>
          <Form.Item
            type="number"
            label="Account Number"
            name="accountNumber"
            placeholder="35402755003895"
            rules={[
              { required: true, message: 'Please enter account number' },
              {
                pattern: /^.[0-9]{8,34}$/,
                message: 'Please enter a valid account number',
              },
            ]}>
            <Field />
          </Form.Item>
        </div>

        <label htmlFor="" className="fakelabel">
          Residence Proof
        </label>
        <Form.Item
          rounded
          name="residenceProofImage"
          type="img"
          document
          fileSize="5"
          accept="image/jpeg, image/jpg, image/png, application/pdf"
          uploadTitle="Upload a copy of bills, bank statement"
          rules={[{ required: true, message: 'Please Upload Residence Proof!' }]}>
          <Field />
        </Form.Item>

        <Button rounded md btntype="primary" loader={isLoading} width="214" htmlType="submit">
          Continue
        </Button>
      </Form>
    </StyledKycBuyer>
  );
};

export default KycBuyerLevelTwo;
