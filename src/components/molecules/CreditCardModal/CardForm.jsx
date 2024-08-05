import React, { useEffect, useState } from 'react';
import { Container } from '../BankModal/BankStyles';

import Button from '@/components/atoms/Button';

import { CardCvcElement, CardExpiryElement, CardNumberElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { InputWrapper } from './CreditCard.styles';
import paymentService from '@/services/paymentService';
import Toast from '../Toast';
import CheckBox from '../CheckBox';

const CardForm = ({ openCardNext }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [cardDetails, setCardDetails] = useState(false);
  const [isCardClicked, setIsCardClicked] = useState('');
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(true);
  const comission = 0.2;
  const stripe = useStripe();
  const elements = useElements();

  const { cards_data, cards_loading } = paymentService.GetAllCards();

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
      let response = null;
      if (isCardClicked != '') {
        const amountInCents = Number(amount) * 100;
        const intent = {
          amount: amountInCents,
          amount_after_comission: amount - calculateComission(amount, comission),
          card_id: isCardClicked,
        };
        response = await paymentService.createPaymentIntent(intent);
      } else {
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
            save_card_details: cardDetails,
            cardDetails: {
              last4: token.card.last4,
              exp_month: token.card.exp_month,
              exp_year: token.card.exp_year,
            },
          };

          response = await paymentService.createPaymentIntent(intent);
        }
      }

      if (response.success) {
        openCardNext();
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const cardClickHandler = _ => setIsCardClicked(_.id);

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

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        {cards_loading
          ? 'Loading Cards'
          : cards_data.map(_ => {
              return (
                <div
                  style={{ border: '1px solid red', padding: '10px 20px', borderRadius: '10px', cursor: 'pointer' }}
                  onClick={() => cardClickHandler(_)}>
                  <span>{_.brand}</span> <button>**** **** **** {_.last4}</button>
                </div>
              );
            })}
      </div>

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
            disabled={isCardClicked != ''}
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
                disabled: isCardClicked != '',
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
                disabled: isCardClicked != '',
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
                disabled: isCardClicked != '',
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
        <div className="inputBox checkbox">
          <CheckBox
            label="Save card Details"
            fieldName="save_card_details"
            value={cardDetails}
            disabled={isCardClicked != ''}
            onChange={e => setCardDetails(e.isChecked)}
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
