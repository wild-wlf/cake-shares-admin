import React, { useEffect, useState } from 'react';
import { Container } from '../BankModal/BankStyles';

import paymentService from '@/services/paymentService';
import { loadStripe } from '@stripe/stripe-js';
import CardForm from './CardForm';
import { Elements } from '@stripe/react-stripe-js';

const CardModal = ({ openCardNext }) => {
  const [stripePromise, setStripePromise] = useState();

  useEffect(() => {
    paymentService
      .getStripeConfig()
      .then(async result => {
        const { publishableKey } = result;
        setStripePromise(loadStripe(publishableKey));
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <Container>
      {stripePromise ? (
        <Elements stripe={stripePromise}>
          <CardForm openCardNext={openCardNext} />
        </Elements>
      ) : (
        'Loading Stripe payment...'
      )}
    </Container>
  );
};

export default CardModal;
