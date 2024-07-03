import React, { useContext } from 'react';
import { ProfileWrapper, StyledUserInfo } from './UserInfo.styles';

import chatIcon from '../../../../_assets/chat-icon.svg';
import Image from 'next/image';
import KycLevel from '../../KYC/KycLevel';
import { usePathname } from 'next/navigation';
import Button from '../../Button';
import { MdEdit } from 'react-icons/md';
import { KycContext } from '@/context/KycContext';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/context/authContext';
import { format } from 'date-fns';
import { convertToFormData } from '@/helpers/common';
import userService from '@/services/userService';
import profile from '../../../../_assets/profileplaceHolder.jpg';
import Toast from '@/components/molecules/Toast';

const UserInfo = ({ userImage }) => {
  const { user, refetch } = useContextHook(AuthContext, v => ({
    user: v.user,
    refetch: v.refetch,
  }));

  const { checkKycLevel } = useContext(KycContext);
  const router = usePathname();

  async function handelProfileImage(e, accept) {
    const file = e.target.files[0];
    if (!file) return;

    const acceptableExtensions = accept.split(',').map(ext => ext.trim());
    if (!acceptableExtensions?.includes(file?.type)) {
      const extensions = acceptableExtensions
        .map(ext => ext.split('/')[1].toUpperCase())
        .join(', ')
        .replace(/,(?=[^,]*$)/, ' and');

      Toast({
        type: 'error',
        message: `Image Must be in ${extensions} format!`,
      });
      return;
    }

    if (file) {
      let obj = {
        type: 'picture',
        profilePicture: file,
      };
      const data = convertToFormData(obj);
      try {
        await userService.uploadMedia(data, user._id);
        Toast({
          type: 'success',
          message: 'profile updated successfully',
        });

        refetch();
      } catch (error) {
        Toast({
          type: 'error',
          message: error.message,
        });
      }
    }
  }

  return (
    <StyledUserInfo>
      <div className="userInfo">
        <ProfileWrapper>
          <input
            type="file"
            id="bannerImg"
            accept="image/jpeg, image/jpg, image/png"
            onChange={e => handelProfileImage(e, 'image/jpeg, image/jpg, image/png')}
          />
          <span className="rounded-icon">
            <MdEdit color="var(--white)" size={26} />
          </span>
          {user.profilePicture ? (
            <Image src={user.profilePicture} alt="userImage" width={170} height={250} />
          ) : (
            <Image src={profile} alt="userImage" />
          )}
        </ProfileWrapper>
        <div className="textWrapper">
          <strong className="name">{user?.fullName || user?.username}</strong>
          <div className="discreption">
            <span className="active">{user?.sellerType || 'CakeShare'} Seller </span>
            <span className="addbefore">
              {' '}
              Member since {user?.created_at ? format(new Date(user.created_at), 'MMM d, yyyy') : ''}
            </span>
          </div>
        </div>
      </div>
      {router == '/profile' ? (
        <div className="kycWrapper">
          <div className="headingWrapper">
            <strong className="headingText">My KY{`${user?.sellerType === 'Individual' ? 'C' : 'B'}`} Level</strong>
            <strong className="headingText">{user?.kycLevel}</strong>
          </div>
          <div className="updgradeKyc">
            <KycLevel level={user?.kycLevel + 1} />
            {user?.kycLevel < 3 && (
              <>
                {!user?.isKycRequested && (
                  <span className="discreption" onClick={checkKycLevel}>
                    Upgrade KY{`${user?.sellerType === 'Individual' ? 'C' : 'B'}`}
                  </span>
                )}
              </>
            )}
          </div>
        </div>
      ) : (
        <Button type="primary" md rounded width="200">
          Chat with Lagan
          <Image src={chatIcon} alt="chatIcon" />
        </Button>
      )}
    </StyledUserInfo>
  );
};

export default UserInfo;
