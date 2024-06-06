import React from 'react';
import { AdvertiseSuccessfulModalWrapper } from './AdvertiseSuccessfulModal.style';

const AdvertiseSuccessfulModal = ({ advertisedDays }) => {
  return (
    <AdvertiseSuccessfulModalWrapper>
      <h2>Product Advertised Successful!</h2>
      <span>Your product has been successfully advertised for {advertisedDays} days.</span>
    </AdvertiseSuccessfulModalWrapper>
  );
};

export default AdvertiseSuccessfulModal;
