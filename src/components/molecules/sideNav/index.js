import React, { useState, useContext } from 'react';
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

const SideBar = ({ data }) => {
  const { user, onLogout, isLoggedIn } = useContextHook(AuthContext, v => ({
    user: v.user,
    onLogout: v.onLogout,
    isLoggedIn: v.isLoggedIn,
  }));
  const [successfullModal, setSuccessfullModal] = useState(false);
  const [kycData, setKycData] = useState();
  const { pathname } = useRouter();
  const closeSideNav = () => {
    document.body.classList.toggle('sideNav-active');
    document.body.style.overflow = 'auto';
  };

  const { kycLevel, setKycLevel, kyc0, setKyc0, kyc1, setKyc1, kyc2, setKyc2, kyc3, setKyc3 } = useContext(KycContext);
  return (
    <>
      <CenterModal
        open={successfullModal}
        setOpen={setSuccessfullModal}
        title={<Image src={SuccessIcon} alt="SuccessIcon" />}
        width="543">
        <SuccessfulModal title={'KYC Requested Successfully!'} />
      </CenterModal>
      {/* KYC MODAL */}
      <CenterModal
        zIndex={9999}
        open={kyc0}
        setOpen={setKyc0}
        width="688"
        title={`Upgrade KY${user?.sellerType === 'Individual' ? 'C' : 'B'}`}>
        <KycBuyerLevelZero setKycLevel={setKycLevel} setOpen={setKyc0} setKycData={setKycData} />
      </CenterModal>
      <CenterModal
        zIndex={9999}
        open={kyc1}
        setOpen={setKyc1}
        width="688"
        title={`Upgrade KY${user?.sellerType === 'Individual' ? 'C' : 'B'}`}>
        <KycBuyerLevelOne setKycLevel={setKycLevel} setOpen={setKyc1} setKycData={setKycData} />
      </CenterModal>
      <CenterModal
        zIndex={9999}
        open={kyc2}
        setOpen={setKyc2}
        width="688"
        title={`Upgrade to KY${user?.sellerType === 'Individual' ? 'C' : 'B'} Level 2`}>
        <KycBuyerLevelTwo setKycLevel={setKycLevel} setOpen={setKyc2} setKycData={setKycData} />
      </CenterModal>
      <CenterModal
        zIndex={9999}
        open={kyc3}
        setOpen={setKyc3}
        width="688"
        title={`Upgrade to KY${user?.sellerType === 'Individual' ? 'C' : 'B'} Level 3`}>
        <KYCBuyerThree
          setKycLevel={setKycLevel}
          setOpen={setKyc3}
          kycData={kycData}
          setSuccessfullModal={setSuccessfullModal}
        />
      </CenterModal>
      {/* KYC MODAL */}

      <Sidenav>
        <div
          className="layer"
          onClick={() => {
            closeSideNav();
          }}
        />
        <div className="nav-logo">
          <Image src={logo} alt="logo" />
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
                      <figure className="iconCon">
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
                  <span className="heading">My Kyc Level</span>
                  <span>{kycLevel}</span>
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
