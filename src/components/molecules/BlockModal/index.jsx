import React from 'react';
import { VerficationModalWrapper } from './BlockModal.style';
import Image from 'next/image';
import VerificationIcon from '../../../_assets/verification.svg';
import Button from '../../atoms/Button';
import { AuthContext } from '@/context/authContext';
import { useContextHook } from 'use-context-hook';
import arrowImg from '../../../_assets/half-white-arrow.svg';

const BlockModal = ({ setOpen }) => {
  const { onLogout } = useContextHook(AuthContext, v => ({
    onLogout: v.onLogout,
  }));

  const logout = () => {
    onLogout();
    setOpen(false);
  };
  return (
    <VerficationModalWrapper>
      <Image src={VerificationIcon} alt="VerificationIcon" className="VerificationIcon" />
      <span>
        Your account has been blocked due to a violation of our policies. If you believe this is a mistake, please
        contact our support team for assistance
      </span>
      <div className="btn-holder">
        <Button type="success" color="success" rounded width="290" onClick={logout}>
          Logout
          <Image src={arrowImg} alt="arrow" />
        </Button>
      </div>
    </VerficationModalWrapper>
  );
};

export default BlockModal;
