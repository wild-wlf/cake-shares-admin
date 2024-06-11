import React, { useState, useContext } from 'react';
import { StyledKycBuyer } from '../KYCBuyer/KycBuyer.styles';
import Button from '../../Button';
import { useForm } from '@/components/molecules/Form';
import Form from '@/components/molecules/Form/Form';
import Field from '@/components/molecules/Field';
import Toast from '@/components/molecules/Toast';
import { KycContext } from '@/context/KycContext';

const KycBuyerLevelZero = ({ setOpen, setKycLevel, setKycData }) => {
  const [form] = useForm();
  const { setKyc1 } = useContext(KycContext);
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(data) {
    try {
      setIsLoading(true);
      setKycData(prev => ({
        ...prev,
        ownerDetails: data,
      }));
      setKyc1(true);
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
        <span className="kycdiscreption">Please provide your Business details.</span>
      </div>
      <Form form={form} onSubmit={onSubmit}>
        <div className="combineFields">
          <Form.Item
            type="text"
            label="Business Name"
            name="businessName"
            placeholder="Foster Agency"
            rules={[
              { required: true, message: 'Business Name is Required!' },
              {
                message: 'Maximum Character Length is 256',
              },
            ]}>
            <Field />
          </Form.Item>
          <Form.Item
            type="email"
            label="Business Email"
            name="businessEmail"
            placeholder="info@fosteragency.com"
            rules={[
              { required: true, message: 'Business Email is Required!' },
              { email: true, message: 'Please enter a valid email' },
              { max: 40, message: 'Email should be at max 40 characters!' },
            ]}>
            <Field />
          </Form.Item>
        </div>
        <div className="combineFields">
          <Form.Item
            type="text"
            label="Owner Full Name"
            name="ownerFullName"
            placeholder="John Doe"
            rules={[
              { required: true, message: 'Owner Full Name is Required!' },
              {
                message: 'Maximum Character Length is 256',
              },
            ]}>
            <Field />
          </Form.Item>
          <Form.Item
            type="tel"
            label="Owner Phone Number"
            name="ownerPhoneNumber"
            placeholder="+1 123 456 789"
            rules={[
              { required: true, message: 'Owner Phone Number is Required!' },
              {
                message: 'Maximum Character Length is 256',
              },
            ]}>
            <Field />
          </Form.Item>
        </div>
        <Button rounded md btntype="primary" loader={isLoading} width="214" htmlType="submit">
          Continue
        </Button>
      </Form>
    </StyledKycBuyer>
  );
};

export default KycBuyerLevelZero;
