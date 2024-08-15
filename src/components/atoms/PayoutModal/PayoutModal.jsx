import React, { useState } from 'react';
import Form, { useForm } from '@/components/molecules/Form';
import Button from '@/components/atoms/Button';
import { Container } from './styles';
import Field from '../Field';
import { convertToCurrencyFormat } from '@/helpers/common';
import Toast from '@/components/molecules/Toast';
import paymentService from '@/services/paymentService';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/context/authContext';

const PayoutModal = ({ currentAmount, setPayoutModal }) => {
  const { refetch } = useContextHook(AuthContext, v => ({
    refetch: v.refetch,
  }));
  const comission = 0;
  const [form] = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState();

  const submitHandler = async value => {
    try {
      setIsLoading(true);
      const response = await paymentService.requestPayout({
        amountIn: value.amount,
        amountEx: value.amount - calculateComission(value.amount, comission),
      });
      if (response.success) {
        Toast({ type: 'success', message: response.message });
        setPayoutModal(false);
        refetch();
      } else {
        Toast({ type: 'error', message: response.message });
      }
    } catch (error) {
      Toast({ type: 'error', message: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  const calculateComission = (value, percent = 0.4) => {
    const amount = (percent / 100) * value;

    return amount.toFixed(2);
  };

  return (
    <Container>
      <Form form={form} onSubmit={submitHandler}>
        <div className="feildContainer">
          <div className="wrapper">
            <Form.Item
              label={`Amount (Cakeshares will deduct ${comission}% comission on this)`}
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
                  transform: value => {
                    setAmount(value);
                    return Number(value) > Number(currentAmount);
                  },
                  message: 'You cannot exceed from your wallet amount.',
                },
                {
                  pattern: /^[1-9]\d*(\.\d+)?|0\.\d*[1-9]\d*$/,
                  message: 'Amount must be greater than zero',
                },
                {
                  pattern: /^\d+(\.\d{1,2})?$/,
                  message: 'Amount must have up to 2 decimal places',
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

        {calculateComission(amount, comission) > 0 && (
          <span style={{ marginTop: '10px', display: 'block' }}>
            Cakeshaes will get ${calculateComission(amount, comission)} from ${amount}.
          </span>
        )}

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
