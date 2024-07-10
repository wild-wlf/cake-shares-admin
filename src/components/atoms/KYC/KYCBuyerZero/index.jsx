import React, { useState, useEffect, useContext } from 'react';
import { StyledKycBuyer } from '../KYCBuyer/KycBuyer.styles';
import Button from '../../Button';
import { useForm } from '@/components/molecules/Form';
import Form from '@/components/molecules/Form/Form';
import Field from '@/components/molecules/Field';
import Toast from '@/components/molecules/Toast';
import { KycContext } from '@/context/KycContext';

const KycBuyerLevelZero = ({ setOpen, setKycLevel, setKycData, kycData }) => {
  const [form] = useForm();
  const { setKyc1 } = useContext(KycContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (kycData) {
      form.setFieldsValue({
        businessName: kycData?.ownerDetails?.businessName,
        businessEmail: kycData?.ownerDetails?.businessEmail,
        ownerFullName: kycData?.ownerDetails?.ownerFullName,
        ownerPhoneNumber: kycData?.ownerDetails?.ownerPhoneNumber,
      });
    }
  }, [kycData, form]);

  function onSubmit(data) {
    try {
      const { ...ownerDetails } = data;
      setIsLoading(true);
      setKycData(prev => ({
        ...prev,
        ownerDetails,
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
              { minLength: 3, message: 'Business Name should be at least 3 characters.' },
              { maxLength: 30, message: 'Business Name should not exceed 30 characters.' },
            ]}>
            <Field maxLength={30} />
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
              { required: true, message: 'Full Name is Required' },
              { minLength: 3, message: 'Full Name should be at least 3 characters.' },
              { pattern: /^[a-zA-Z\s]*$/, message: 'Only alphabets are allowed' },
              { maxLength: 20, message: 'Full Name should not exceed 20 characters.' },
            ]}>
            <Field maxLength={20} />
          </Form.Item>
          <Form.Item
            label="Owner Phone Number"
            name="ownerPhoneNumber"
            placeholder="+1 123 456 789"
            rules={[
              { required: true, message: 'Owner Phone Number is Required!' },
              { pattern: /^\+/, message: 'Phone number must start with a + followed by the country code.' },
              { pattern: /^\+[0-9]{1,15}$/, message: 'Phone number should be up to 15 digits long.' },
            ]}>
            <Field type="text" />
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
