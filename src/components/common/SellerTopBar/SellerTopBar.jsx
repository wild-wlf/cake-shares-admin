import React, { useContext, useEffect, useRef, useState } from 'react';
import { Container, DataContainer } from './SellerbarStyles';
import Image from 'next/image';
import { KycContext } from '../../../context/KycContext';
import KycLevel from '@/components/atoms/KYC/KycLevel';
import Notifications from '../../../components/molecules/Notifications';
import bell from '../../../_assets/bell.svg';
import Button from '@/components/atoms/Button';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import CenterModal from '@/components/molecules/Modal/CenterModal';
import CreateNewProduct from '../Portfolio/CreateNewProduct';
import { AuthContext } from '@/context/authContext';
import { useContextHook } from 'use-context-hook';
import SuccessModal from '@/components/molecules/SuccessModal/SuccessModal';
import successImage from '../../../_assets/successIcon.png';
import notificationService from '@/services/notificationservice';

const SellerTopBar = ({ title, tagLine, suffix }) => {
  const { user } = useContextHook(AuthContext, v => ({
    user: v.user,
  }));
  const [notifications, setNotifications] = useState(false);
  const [createProductModal, setCreateProductModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [fetchNotifications, setfetchNotifications] = useState(false);
  const [isBadge, setIsBadge] = useState(false);
  const notificationsRef = useRef(null);

  function handleCreateProduct() {
    setSuccessModal(true);
    setCreateProductModal(false);
  }

  const openSideNav = () => {
    document.body.classList.toggle('sideNav-active');
    document.body.style.overflow = 'hidden';
  };

  const handleReadAllNotification = async () => {
    try {
      const response = await notificationService.readAllNotifications();

      if (response.success) {
        setfetchNotifications(_ => !_);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const handleSellerNotification = () => {
      setfetchNotifications(_ => !_);
    };

    window.addEventListener('seller_notification', handleSellerNotification);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('seller_notification', handleSellerNotification);
    };
  }, []);
  useEffect(() => {
    const handleClickOutside = event => {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
        setNotifications(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [notificationsRef]);

  return (
    <>
      <CenterModal
        open={createProductModal}
        setOpen={setCreateProductModal}
        title="Create new Product"
        width="900"
        iscloseAble={false}>
        <CreateNewProduct handleCreateProduct={handleCreateProduct} />
      </CenterModal>
      <CenterModal
        open={successModal}
        setOpen={setSuccessModal}
        title={<Image src={successImage} alt="successImage" />}
        width="500">
        <SuccessModal heading="Product Created Successfully!" />
      </CenterModal>
      <Container>
        <div className="barData">
          <div
            className="closedNav"
            onClick={() => {
              openSideNav();
            }}>
            <HiOutlineMenuAlt1 />
          </div>
          <div className="dataContainer">
            <div className="Heading">
              <h1>{title}</h1>
              {suffix && <Image src={suffix} alt="handicon" />}
            </div>
            <p>{tagLine}</p>
          </div>
        </div>

        <div className="barActions">
          <div className="textfeildWrapper">
            <div className="textFieldRight">
              <span className="heading">My KY{`${user?.sellerType === 'Individual' ? 'C' : 'B'}`} Level</span>
              <span>{user?.kycLevel}</span>
            </div>
            <KycLevel level={user?.kycLevel + 1} bg />
          </div>
          <div
            ref={notificationsRef}
            className={`notification ${isBadge && 'message'}`}
            onClick={() => {
              setNotifications(!notifications);
              handleReadAllNotification();
            }}>
            <Image src={bell} alt="bell" />
            {/* <Image src={bellWhite} alt="bell" className="bell-white" /> */}
          </div>
          <div className={notifications ? 'notificationWrapper-visible' : 'notificationWrapper'}>
            <Notifications fetchNotifications={fetchNotifications} setIsBadge={setIsBadge} />
          </div>
          <Button rounded sm btntype="new" width={'150px'} height={'35px'} onClick={() => setCreateProductModal(true)}>
            Create New Product
          </Button>
        </div>
      </Container>

      <DataContainer>
        <div className="Heading">
          <h1>{title}</h1>
          {suffix && <Image src={suffix} alt="handicon" />}
        </div>
        <p>{tagLine}</p>
      </DataContainer>
    </>
  );
};

export default SellerTopBar;
