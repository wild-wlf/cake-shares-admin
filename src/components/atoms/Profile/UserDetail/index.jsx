/* eslint-disable react/jsx-key */
import React, { useMemo } from 'react';
import { StyledUserDetail } from './UserDetail.styles';
import Button from '../../Button';
import { MdModeEdit } from 'react-icons/md';
import { FaCarAlt, FaFire } from 'react-icons/fa';
import { FaHouseChimney } from 'react-icons/fa6';
import { PiStorefrontFill } from 'react-icons/pi';
import { TbBuildingFactory } from 'react-icons/tb';
import bankIcon from '../../../../_assets/bankIcon.svg';
import numIcon from '../../../../_assets/numIcon.svg';
import userIcon from '../../../../_assets/userIcon.svg';
import userId from '../../../../_assets/userId.svg';
import userName from '../../../../_assets/userName.svg';
import emailAddress from '../../../../_assets/emailAddress.svg';
import password from '../../../../_assets/password.svg';
import dltIcon from '../../../../_assets/dltIcon.svg';
import accDelete from '../../../../_assets/accDelete.svg';
import Image from 'next/image';
// import Inheritance from "./Inheritance";
import { IoIosArrowBack } from 'react-icons/io';
import EditBank from './EditBank';
import EditProfile from './EditBank/EditProfile';
import { countries } from '@/components/Constant';
import ModalContainer from '@/components/molecules/ModalContainer';

const UserDetail = ({ userData }) => {
  const fromatDate = value => {
    const date = new Date(value);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed in JavaScript
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  const personalInfo = {
    Id: userData._id,
    fullName: userData?.fullName,
    username: userData?.username,
    email: userData?.email,
    country: userData?.country,
    countryLabel: countries.find(elem => elem.value === userData?.country)?.label,
    dob: fromatDate(userData?.dob),
  };

  const actionBtns = () => (
    // eslint-disable-next-line react/jsx-filename-extension
    <button type="button" className="chatButton">
      Chat
    </button>
  );

  return (
    <StyledUserDetail>
      <div className="colWrapper">
        <div className="colHeader">
          <strong className="colTitle">Personal Information:</strong>
          <ModalContainer
            lg
            width={673}
            title="Edit Profile"
            btnComponent={({ onClick }) => (
              <Button type="primary" rounded sm onClick={onClick} width={'127px'}>
                <MdModeEdit />
                Edit Info
              </Button>
            )}
            content={({ onClose }) => <EditProfile onClose={onClose} personalInfo={personalInfo} />}
          />
        </div>
        <div className="colBody">
          <div className="col-content">
            <div className="iconWrap">
              <Image src={userIcon} alt="userIcon" />
            </div>
            <div className="textWrap">
              <strong className="title">Full Name</strong>
              <span>{personalInfo?.fullName || personalInfo.username}</span>
            </div>
          </div>
          <div className="col-content">
            <div className="iconWrap">
              <Image src={userName} alt="userName" />
            </div>
            <div className="textWrap">
              <strong className="title">Username</strong>
              <span>{personalInfo?.username}</span>
            </div>
          </div>
          <div className="col-content">
            <div className="iconWrap">
              <Image src={emailAddress} alt="emailAddress" />
            </div>
            <div className="textWrap">
              <strong className="title">Email Address</strong>
              <span>{personalInfo?.email}</span>
            </div>
          </div>
          <div className="col-content">
            <div className="iconWrap">
              <Image src={password} alt="password" />
            </div>
            <div className="textWrap">
              <strong className="title">Password</strong>
              <span>**************</span>
            </div>
          </div>
          <div className="col-content danger">
            <div className="iconWrap">
              <Image src={dltIcon} alt="dltIcon" />
            </div>
            <div className="textWrap">
              <strong className="title">Account Deactivation</strong>
              <div className="discreptionWrap">
                <span>Deactivate Account</span>
                <Image src={accDelete} alt="accDelete" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="colWrapper">
        <div>
          <div className="colHeader">
            <strong className="colTitle">Financial Information:</strong>
          </div>
          <div className="colBody">
            <div className="col-content">
              <div className="iconWrap">
                <Image src={userIcon} alt="userIcon" />
              </div>
              <div className="textWrap">
                <strong className="title">42</strong>
                <span>Ongoing Products</span>
              </div>
            </div>

            <div className="col-content">
              <div className="iconWrap">
                <Image src={userName} alt="userName" />
              </div>
              <div className="textWrap">
                <strong className="title">$0.00</strong>
                <span>Total Return Made</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="colHeader">
            <strong className="colTitle">My Product Top Categories:</strong>
          </div>
          <div className="category-colBody">
            <div className="col-content">
              <div className="category-col">
                <FaFire size={20} />
                <span>Popular</span>
              </div>
            </div>

            <div className="col-content">
              <div className="category-col">
                <FaHouseChimney size={20} />
                <span>Properties</span>
              </div>
            </div>

            <div className="col-content">
              <div className="category-col">
                <TbBuildingFactory size={20} />
                <span>Ventures</span>
              </div>
            </div>

            <div className="col-content">
              <div className="category-col">
                <PiStorefrontFill size={20} />
                <span>Bazaar</span>
              </div>
            </div>

            <div className="col-content">
              <div className="category-col">
                <TbBuildingFactory size={20} />
                <span>Ventures</span>
              </div>
            </div>

            <div className="col-content">
              <div className="category-col">
                <FaCarAlt size={20} />
                <span>Vehicals</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledUserDetail>
  );
};

export default UserDetail;
