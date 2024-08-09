import React,{useState} from 'react';
import { VerficationModalWrapper } from './BlockModal.style';
import Image from 'next/image';
import VerificationIcon from '../../../_assets/verification.svg';
import Button from '../../atoms/Button';
import { AuthContext } from '@/context/authContext';
import { useContextHook } from 'use-context-hook';
import arrowImg from '../../../_assets/half-white-arrow.svg';
import RequestModal from '../RequestModal';
import CenterModal from '../Modal/CenterModal';
import InfoIcon from '../../../_assets/infoIcon.png';

const BlockModal = ({ setOpen }) => {
  const { onLogout } = useContextHook(AuthContext, v => ({
    onLogout: v.onLogout,
  }));
  const [requestModal, setRequestModal] = useState(false);
  const logout = () => {
    onLogout();
    setOpen(false);
  };
  return (
    <>
    <CenterModal open={requestModal} setOpen={setRequestModal} headImage={InfoIcon} width="543">
        <RequestModal
          onClose={() => {
            setRequestModal(false);
          }}
          title="Request for Account Re-Activation"
          btnText="Request"
        />
      </CenterModal>
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
        <Button type="success" color="info" rounded width="290" onClick={() => setRequestModal(true)}>
          Contact with admin
          {/* <Image src={arrowImg} alt="arrow" /> */}
        </Button>
      </div>
    </VerficationModalWrapper>
    </>
  );
};

export default BlockModal;
