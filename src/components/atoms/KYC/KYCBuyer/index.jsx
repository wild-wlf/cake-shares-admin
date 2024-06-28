import React, { useContext, useEffect, useState } from 'react';
import { StyledKycBuyer } from './KycBuyer.styles';
import Button from '../../Button';
import Toast from '@/components/molecules/Toast';
import { KycContext } from '@/context/KycContext';
import Field from '@/components/molecules/Field';
import { useForm } from '@/components/molecules/Form';
import Form from '@/components/molecules/Form/Form';
import { IoIosArrowRoundBack } from 'react-icons/io';

const KycBuyerLevelOne = ({ setOpen, setKycLevel, setKycData, kycData, setKyc0 }) => {
  const { setKyc2 } = useContext(KycContext);
  const [isLoading, setIsLoading] = useState(false);
  const [form] = useForm();

  useEffect(() => {
    if (kycData?.passportImageFront) {
      form.setFieldsValue({
        passportImageFront: kycData?.passportImageFront,
        passportImageBack: kycData?.passportImageBack,
      });
    }
  }, [kycData, form]);
 

  const onSubmit = data => {
    try {
      setIsLoading(true);
      setKycData(prev => ({
        ...prev,
        ...data,
      }));
      setOpen(false);
      setKyc2(true);
    } catch (error) {
      Toast({
        type: 'error',
        message,
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <StyledKycBuyer>
      <div className="back-icon">
        <IoIosArrowRoundBack
          onClick={() => {
            setKyc0(true);
            setOpen(false);
          }}
          size={45}
        />
      </div>
      <Form form={form} onSubmit={onSubmit}>
        <span className="kycdiscreption">ID Proof Info:</span>
        <label htmlFor="" className="fakelabel">
          Upload ID
        </label>
        <div className="combineField">
          <Form.Item
            noMargin
            rounded
            name="passportImageFront"
            type="img"
            img={kycData?.passportImageFront || ''}
             document
            fileSize="5"
            accept="image/jpeg, image/jpg, image/png, application/pdf"
            uploadTitle="Upload Front Side of Passport"

            
            rules={[{ required: true, message: 'Please Upload Front Side of Passport Image!' }]}>
            <Field />
          </Form.Item>
          <Form.Item
            noMargin
            rounded
            name="passportImageBack"
            type="img"
            document
            img={kycData?.passportImageBack || ''}
            fileSize="5"
            accept="image/jpeg, image/jpg, image/png, application/pdf"
            uploadTitle="Upload Back Side of Passport"
            id="back"
            rules={[{ required: true, message: 'Please Upload Back Side of Passport Image!' }]}>
            <Field />
          </Form.Item>
        </div>
        <Button rounded md btntype="primary" width="214" htmlType="submit">
          Continue
        </Button>
      </Form>
    </StyledKycBuyer>
  );
};

export default KycBuyerLevelOne;
