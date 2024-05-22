import React, { useContext, useState } from "react";
import { ProfileWrapper, StyledUserInfo } from "./UserInfo.styles";

import popular from "../../../../_assets/popular.svg";
import PropertyIcon from "../../../../_assets/PropertyIcon.svg";
import VentureIcon from "../../../../_assets/VentureIcon.svg";
import chatIcon from "../../../../_assets/chat-icon.svg";
import Image from "next/image";
import KycLevel from "../../KYC/KycLevel";
import { usePathname } from "next/navigation";
import Button from "../../Button";
import { MdEdit } from "react-icons/md";
import { KycContext } from "@/context/KycContext";

const UserInfo = ({ userImage }) => {
  const { kycLevel, setKycLevel, checkKycLevel } = useContext(KycContext);
  const router = usePathname();
  const [profileImg, setProfileImg] = useState("");
  function handelProfileImage(e) {
    const file = e.target.files[0];
    if (file) {
      setProfileImg(file);
    }
  }
  return (
    <StyledUserInfo>
      <div className="userInfo">
        <ProfileWrapper>
          <input
            type="file"
            id="bannerImg"
            accept=".png , .jpg"
            onChange={handelProfileImage}
          />
          <span className="rounded-icon">
            <MdEdit color="var(--white)" size={26} />
          </span>
          {profileImg ? (
            <Image
              src={URL.createObjectURL(profileImg)}
              alt="userImage"
              width={170}
              height={250}
            />
          ) : (
            <Image src={userImage} alt="userImage" width={170} height={250} />
          )}
        </ProfileWrapper>
        <div className="textWrapper">
          <strong className="name">Alex Mertiz</strong>
          <div className="discreption">
            <span className="active">CakeShare Buyer </span>
            <span className="addbefore"> Member since Feb 15, 2024</span>
          </div>
        </div>
      </div>
      {router == "/profile" ? (
        <div className="kycWrapper">
          <div className="headingWrapper">
            <strong className="headingText">My KYC Level</strong>
            <strong className="headingText">{kycLevel - 1}</strong>
          </div>
          <div className="updgradeKyc">
            <KycLevel level={kycLevel} />
            <span className="discreption" onClick={checkKycLevel}>
              Upgrade KYC
            </span>
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
