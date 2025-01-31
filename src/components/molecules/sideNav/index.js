import React, { useState, useContext, useEffect } from 'react';
import logo from '../../../_assets/logo.svg';
import Image from 'next/image';
import { Sidenav, NavLinks, LinkContainer, UserDet } from './sideNav.style';
import Link from 'next/link';
import SellerProfile from '../../../_assets/profileplaceHolder.jpg';
import { useRouter } from 'next/router';
import CenterModal from '../Modal/CenterModal';
import KycBuyerLevelOne from '@/components/atoms/KYC/KYCBuyer';
import KycBuyerLevelTwo from '@/components/atoms/KYC/KYCBuyerTwo';
import KYCBuyerThree from '@/components/atoms/KYC/KYCBuyerThree';
import KycBuyerLevelZero from '@/components/atoms/KYC/KYCBuyerZero';
import { KycContext } from '@/context/KycContext';
import { AuthContext } from '@/context/authContext';
import { useContextHook } from 'use-context-hook';
import { format } from 'date-fns';
import KycLevel from '@/components/atoms/KYC/KycLevel';
import SuccessIcon from '../../../_assets/successIcon.png';
import SuccessfulModal from '@/components/atoms/ProductDeleteModal/SuccessfulModal';
import KycBuyerLevelFour from '@/components/atoms/KYC/KYCBuyer4';
import notificationService from '@/services/notificationservice';
const SideBar = ({ data }) => {
  const [text, setText] = useState(null);
  const [title, setTitle] = useState(null);
  const { unreadCounts, setUnreadCounts, user, onLogout, isLoggedIn } = useContextHook(AuthContext, v => ({
    unreadCounts: v.unreadCounts,
    setUnreadCounts: v.setUnreadCounts,
    user: v.user,
    onLogout: v.onLogout,
    isLoggedIn: v.isLoggedIn,
  }));

  const [successfulModal, setSuccessfulModal] = useState(false);
  const [kycData, setKycData] = useState();
  const { pathname } = useRouter();

  const closeSideNav = () => {
    document.body.classList.toggle('sideNav-active');
    document.body.style.overflow = 'auto';
  };

  const { setKycLevel, kyc0, setKyc0, kyc1, setKyc1, kyc2, setKyc2, kyc3, setKyc3, kyc4, setKyc4 } =
    useContext(KycContext);

  useEffect(() => {
    const fetchUnreadCounts = async () => {
      try {
        const response = await notificationService.getUnreadCounts({
          page: 1,
          itemsPerPage: 10,
        });
        console.log('RESPONSE: ', response);
        setUnreadCounts(response || { PRIV_CHAT: false, COM_CHAT: false, STAKE_CHAT: false });
      } catch (error) {
        console.error('Error fetching unread counts:', error);
      }
    };

    fetchUnreadCounts();
  }, []);

  useEffect(() => {
    const handleNewMessage = event => {
      const message = event.detail;
      const { channelName, message: msg } = message;

      const isPrivateChat = channelName.startsWith('com_');
      const isCommunityChat = channelName.startsWith('com_');
      const isInvestorChat = channelName.startsWith('stake_');

      setUnreadCounts(prevCounts => ({
        PRIV_CHAT: isPrivateChat && window.location.pathname !== '/private-chat' ? true : prevCounts.PRIV_CHAT,
        COM_CHAT: isCommunityChat && window.location.pathname !== '/community-chat' ? true : prevCounts.COM_CHAT,
        STAKE_CHAT: isInvestorChat && window.location.pathname !== '/investor-chat' ? true : prevCounts.STAKE_CHAT,
      }));
    };

    window.addEventListener('com_message_history', handleNewMessage);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('com_message_history', handleNewMessage);
    };
  }, []);

  useEffect(() => {
    const handleNewMessage = event => {
      const message = event.detail;
      // const { channelName, message: msg } = message;
      console.log('MESSAGE: ', message);

      setUnreadCounts(prevCounts => ({
        ...prevCounts,
        PRIV_CHAT: window.location.pathname !== '/private-chat' ? true : prevCounts.PRIV_CHAT,
      }));
    };

    window.addEventListener('direct_chat_history', handleNewMessage);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('direct_chat_history', handleNewMessage);
    };
  }, []);

  return (
    <>
      <CenterModal
        open={successfulModal}
        setOpen={setSuccessfulModal}
        title={<Image src={SuccessIcon} alt="SuccessIcon" />}
        width="543">
        <SuccessfulModal title={title || 'KYC Requested Successfully!'} text={text || ''} />
      </CenterModal>

      {/* KYC MODAL */}
      <CenterModal
        zIndex={9999}
        open={kyc0}
        setOpen={setKyc0}
        width="688"
        title={`Upgrade KY${user?.sellerType === 'Individual' ? 'C' : 'B'}`}>
        <KycBuyerLevelZero setKycLevel={setKycLevel} setOpen={setKyc0} setKycData={setKycData} kycData={kycData} />
      </CenterModal>

      <CenterModal
        zIndex={9999}
        open={kyc1}
        setOpen={setKyc1}
        width="688"
        title={`Upgrade KY${user?.sellerType === 'Individual' ? 'C' : 'B'}`}>
        <KycBuyerLevelOne
          setKycLevel={setKycLevel}
          setOpen={setKyc1}
          setKycData={setKycData}
          kycData={kycData}
          setKyc0={setKyc0}
        />
      </CenterModal>

      <CenterModal
        zIndex={9999}
        open={kyc2}
        setOpen={setKyc2}
        width="688"
        title={`Upgrade KY${user?.sellerType === 'Individual' ? 'C' : 'B'}`}>
        <KycBuyerLevelTwo
          setKycLevel={setKycLevel}
          setOpen={setKyc2}
          setKycData={setKycData}
          kycData={kycData}
          setKyc1={setKyc1}
        />
      </CenterModal>

      <CenterModal
        zIndex={9999}
        open={kyc3}
        setOpen={setKyc3}
        width="688"
        title={`Upgrade KY${user?.sellerType === 'Individual' ? 'C' : 'B'}`}>
        <KYCBuyerThree
          setKycLevel={setKycLevel}
          setOpen={setKyc3}
          kycData={kycData}
          setSuccessfulModal={setSuccessfulModal}
          setTitle={setTitle}
          setText={setText}
          setKyc2={setKyc2}
          setKycData={setKycData}
        />
      </CenterModal>

      {user.sellerType === 'Company' ? (
        <CenterModal
          zIndex={9999}
          open={kyc4}
          setOpen={setKyc4}
          width="688"
          title={`Upgrade KY${user?.sellerType === 'Individual' ? 'C' : 'B'}`}>
          <KycBuyerLevelFour
            setKycLevel={setKycLevel}
            setOpen={setKyc4}
            setKycData={setKycData}
            kycData={kycData}
            setKyc3={setKyc3}
            setSuccessfulModal={setSuccessfulModal}
            setTitle={setTitle}
            setText={setText}
          />
        </CenterModal>
      ) : (
        ''
      )}

      {/* KYC MODAL */}

      <Sidenav>
        <div
          className="layer"
          onClick={() => {
            closeSideNav();
          }}
        />
        <div className="nav-logo">
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
        </div>

        <LinkContainer>
          {data.map((data, index) => (
            <NavLinks key={index}>
              <li className="listHead">{data.name}</li>
              {data.link.map((data, index) => (
                <li className={`NavItem ${pathname === `${data.navigation}` && 'active'}`} key={index}>
                  {data.name === 'Log Out' ? (
                    <>
                      <Link className="Link" onClick={onLogout} href="">
                        <figure className="iconCon">
                          <Image src={data.icon} width={18} height={18} alt="icon" />
                        </figure>
                        {data.name}
                      </Link>
                    </>
                  ) : (
                    <Link className="Link" href={data.navigation}>
                      <figure
                        className={`iconCon ${
                          (data?.name === 'Private Chat' && unreadCounts.PRIV_CHAT) ||
                          (data?.name === 'Community Chat' && unreadCounts.COM_CHAT) ||
                          (data?.name === "Investor's Chat" && unreadCounts.STAKE_CHAT)
                            ? 'new'
                            : ''
                        }`}>
                        <Image src={data.icon} width={18} height={18} alt="icon" />
                      </figure>
                      {data.name}
                    </Link>
                  )}
                </li>
              ))}
            </NavLinks>
          ))}
        </LinkContainer>

        <UserDet>
          <div className="user-info">
            <figure className="imageWrapper">
              <Image src={user?.profilePicture || SellerProfile} height={40} width={40} alt="user-profile" />
            </figure>
            <div className="detailContainer">
              <span className="userName">{user?.fullName}</span>
              <span className="type">{user?.isIndividualSeller ? 'Individual Seller' : 'Company Seller'}</span>
              <span className="date">
                Member since {user?.created_at ? format(new Date(user.created_at), 'MMM d, yyyy') : ''}
              </span>
            </div>
          </div>
          {isLoggedIn ? (
            <>
              <div className="textfeildWrapper">
                <div className="textFieldRight">
                  <span className="heading">My KY{`${user?.sellerType === 'Individual' ? 'C' : 'B'}`} Level</span>
                  <span>{user?.kycLevel}</span>
                </div>
                <KycLevel level={user?.kycLevel + 1} bg />
              </div>
            </>
          ) : (
            ''
          )}
        </UserDet>
      </Sidenav>
    </>
  );
};

export default SideBar;
