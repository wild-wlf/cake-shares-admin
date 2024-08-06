import React, { useState } from 'react';
import { StyledReportModal } from './ReportModal.styles';
import Button from '@/components/atoms/Button';
import { AuthContext } from '@/context/authContext';
import { useContextHook } from 'use-context-hook';
import Toast from '@/components/molecules/Toast';
import { useForm } from '@/components/molecules/Form';
import Form from '@/components/molecules/Form';
import Field from '@/components/atoms/Field';
import notificationService from '@/services/notificationservice';

const ReportModal = ({ onClose = () => {}, item, title = 'Report Request!', btnText = 'Yes, Report' }) => {
  const { user } = useContextHook(AuthContext, v => ({
    user: v.user,
  }));

  const [form] = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedReason, setSelectedReason] = useState('inappropriate language');
  const [otherReason, setOtherReason] = useState('');

  const onReport = async data => {
    try {
      const { details } = data;

      setIsLoading(true);
      const payload = {
        messageId: item?._id,
        conversationId: item?.conversationId,
        reportedBy: user?._id,
        reason: selectedReason,
        details: selectedReason === 'other' ? details : '',
      };
      let response = await notificationService.reportMessage(payload);
      if (response.success) {
        Toast({
          type: 'success',
          message: `Reported Successfully!`,
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

  const handleRadioChange = e => {
    setSelectedReason(e.target.value);
    if (e.target.value !== 'other') {
      setOtherReason('');
    }
  };

  return (
    <StyledReportModal>
      <Form form={form} onSubmit={onReport}>
        <span className="heading">{title}</span>
        <div className="text">
          <p>Tell us your concern.</p>
        </div>

        <div className="radio-group">
          <label>
            <input
              type="radio"
              value="inappropriate language"
              checked={selectedReason === 'inappropriate language'}
              onChange={handleRadioChange}
            />
            Inappropriate Language
          </label>
          <label>
            <input
              type="radio"
              value="harassment or abuse"
              checked={selectedReason === 'harassment or abuse'}
              onChange={handleRadioChange}
            />
            Harassment or Abuse
          </label>
          <label>
            <input
              type="radio"
              value="hate speech"
              checked={selectedReason === 'hate speech'}
              onChange={handleRadioChange}
            />
            Hate Speech
          </label>
          <label>
            <input type="radio" value="spam" checked={selectedReason === 'spam'} onChange={handleRadioChange} />
            Spam
          </label>
          <label>
            <input type="radio" value="other" checked={selectedReason === 'other'} onChange={handleRadioChange} />
            Other
          </label>
        </div>

        {selectedReason === 'other' && (
          <Form.Item
            name="details"
            type="textarea"
            placeholder="Write Reason..."
            rules={[
              { required: true, message: 'Please enter a report reason!' },
              {
                pattern: /^.{10,256}$/,
                message: 'Report description must be between 10 to 256 characters.',
              },
            ]}>
            <Field />
          </Form.Item>
        )}
        <div>
          <Button rounded md btntype="danger" loader={isLoading} width="250" htmlType="submit">
            {btnText}
          </Button>
        </div>
      </Form>
    </StyledReportModal>
  );
};

export default ReportModal;
