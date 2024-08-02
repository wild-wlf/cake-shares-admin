import React, { useState } from 'react';
import { Container } from '../BankModal/BankStyles';

import Button from '@/components/atoms/Button';

import { CardCvcElement, CardExpiryElement, CardNumberElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { InputWrapper } from './CreditCard.styles';
import paymentService from '@/services/paymentService';
import Toast from '../Toast';

const CardForm = ({ openCardNext, setPaymentMethod }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(true);
  const comission = 0.2;
  const stripe = useStripe();
  const elements = useElements();

  const calculateComission = (value, percent = 0.2) => {
    const amount = (percent / 100) * value;

    return amount.toFixed(2);
  };

  const formSubmitHandler = async () => {
    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    try {
      const cardElement = elements.getElement(CardNumberElement);

      const { token, error } = await stripe.createToken(cardElement, { name });

      if (error) {
        Toast({ type: 'error', message: 'Error while creating token' });
        setLoading(false);
      }

      if (token) {
        const amountInCents = Number(amount) * 100;

        const intent = {
          amount: amountInCents,
          payment_method_id: token.id,
          amount_after_comission: amount - calculateComission(amount, comission),
        };

        const response = await paymentService.createPaymentIntent(intent);

        if (response.success) {
          setPaymentMethod(response.data.payment_method);
          openCardNext();
          setLoading(true);
        } else {
          setLoading(false);
        }
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const stripeElemStyle = {
    border: '2px solid var(--light)',
    background: 'var(--white)',
    outline: 'none',
    height: '45px',
    padding: '12px 23px',
    width: '100%',
    fontFamily: 'Outfit',
    transition: 'border var(--animation-speed) ease-in-out',
    color: 'var(--secondary-text-color)',
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: '500',
    borderRadius: '60px',
  };
  return (
    <Container>
      <h3 className="Heading">Almost there! Fill in the details to top up your wallet.</h3>
      <InputWrapper>
        <div className="inputBox">
          <label>
            <span>*</span>Card Holder Name
          </label>

          <input
            type="text"
            className="customInput"
            placeholder="Alex Martiz"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="inputBox">
          <label>
            <span>*</span>Card Number
          </label>
          <div style={stripeElemStyle}>
            <CardNumberElement
              onReady={() => {
                setReady(false);
              }}
              options={{
                hidePostalCode: true,
              }}
            />
          </div>
        </div>
        <div className="inputBox">
          <label>
            <span>*</span>Expiry Date
          </label>
          <div style={stripeElemStyle}>
            <CardExpiryElement
              options={{
                hidePostalCode: true,
                style: {
                  base: {},
                },
              }}
            />
          </div>
        </div>
        <div className="inputBox">
          <label>
            <span>*</span>Card Holder Name
          </label>
          <div style={stripeElemStyle}>
            <CardCvcElement
              options={{
                hidePostalCode: true,
                style: {
                  base: {},
                },
              }}
            />
          </div>
        </div>
        <div className="inputBox">
          <label>
            <span>*</span>Enter Amount (cakeshares will deduct 0.2% comission on this)
          </label>

          <input
            type="text"
            className="customInput"
            placeholder="$2,000,00"
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
        </div>
      </InputWrapper>
      {calculateComission(amount, comission) > 0 && (
        <span style={{ marginTop: '10px', display: 'block' }}>
          After deeduction of ${calculateComission(amount, comission)} comission, You wil get $
          {amount - calculateComission(amount, comission)} in your wallet
        </span>
      )}
      <div style={{ marginTop: '10px' }}>
        <Button
          htmlType={'submit'}
          rounded
          width={'170px'}
          height={'40px'}
          sm
          disabled={ready}
          loader={loading}
          btntype="green"
          onClick={formSubmitHandler}>
          Top up Now
        </Button>
      </div>
    </Container>
  );
};

export default CardForm;
