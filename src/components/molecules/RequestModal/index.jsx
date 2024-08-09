import React, { useState } from 'react';
import { StyledReportModal } from './RequestModal.styles';
import Button from '@/components/atoms/Button';
import { AuthContext } from '@/context/authContext';
import { useContextHook } from 'use-context-hook';
import Toast from '@/components/molecules/Toast';
import { useForm } from '@/components/molecules/Form';
import Form from '@/components/molecules/Form';
import Field from '@/components/atoms/Field';
import notificationService from '@/services/notificationservice';

const RequestModal = ({ onClose = () => {}, item, title = 'Report Request!', btnText = 'Yes, Report' }) => {
  const { user } = useContextHook(AuthContext, v => ({
    user: v.user,
  }));

  const [form] = useForm();
  const [isLoading, setIsLoading] = useState(false);
 

  const onRequest = async data => {
    try {
      const { details } = data;

      setIsLoading(true);
      const payload = {
        details,
      };
      let response = await notificationService.requestMessage(payload);
      if (response.success) {
        Toast({
          type: 'success',
          message: `Requested Successfully!`,
        });
        onClose();
      }
    } catch ({ message }) {
      Toast({
        type: 'error',
        message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <StyledReportModal>
      <Form form={form} onSubmit={onRequest}>
        <span className="heading">{title}</span>

        <Form.Item
          name="details"
          type="textarea"
          placeholder="Write mesage..."
          rules={[
            { required: true, message: 'Please enter a report reason!' },
            {
              pattern: /^.{10,256}$/,
              message: 'Description must be between 10 to 256 characters.',
            },
          ]}>
          <Field />
        </Form.Item>

        <div>
          <Button rounded md btntype="danger" loader={isLoading} width="250" htmlType="submit">
            {btnText}
          </Button>
        </div>
      </Form>
    </StyledReportModal>
  );
};

export default RequestModal;
