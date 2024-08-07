import React, { useState } from 'react';
import Form, { useForm } from '@/components/molecules/Form';
import Button from '@/components/atoms/Button';
import { Container } from './styles';
import Field from '../Field';
import { convertToCurrencyFormat } from '@/helpers/common';
import Toast from '@/components/molecules/Toast';
import paymentService from '@/services/paymentService';

const PayoutModal = ({ currentAmount, setPayoutModal }) => {
  const [form] = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async value => {
    try {
      setIsLoading(true);
      const response = await paymentService.requestPayout({ amount: value.amount });
      if (response.success) {
        Toast({ type: 'success', message: response.message });
        setPayoutModal(false);
      } else {
        Toast({ type: 'error', message: response.message });
      }
    } catch (error) {
      Toast({ type: 'error', message: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Form form={form} onSubmit={submitHandler}>
        <div className="feildContainer">
          <div className="wrapper">
            <Form.Item
              label="Amount"
              type="input"
              rounded
              sm
              name="amount"
              placeholder="$100"
              rules={[
                {
                  required: true,
                  message: 'Amount is required',
                },
                {
                  transform: value => Number(value) > Number(currentAmount),
                  message: 'You cannot exceed from your wallet amount.',
                },
                {
                  pattern: /^\d+(\.\d+)?$/,
                  message: 'Please enter valid number',
                },
              ]}>
              <Field />
            </Form.Item>
          </div>
        </div>
        <div className="infoText">
          Please ensure that the amount does not exceed your current wallet balance of{' '}
          {convertToCurrencyFormat(currentAmount)}.
        </div>

        <div className="btnWrapper">
          <Button width={'170'} height={'40px'} loader={isLoading} rounded sm btntype="primary" htmlType={'submit'}>
            Confirm
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default PayoutModal;
