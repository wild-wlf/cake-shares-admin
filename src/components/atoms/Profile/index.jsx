/* eslint-disable react/jsx-key */
import React from "react";
import { StyledProfile } from "./Profile.styles";
import Button from "../Button";
import { useRouter } from "next/router";
import { IoIosArrowBack } from "react-icons/io";
import ProfileBanner from "./ProfileBanner";
import UserInfo from "./UserInfo";
import UserDetail from "./UserDetail";
import UserImage from "../../../_assets/userProfile.png";
import bgImage from "../../../_assets/banerImage.jpg";

const Profile = () => {
  const router = useRouter();
  return (
    <StyledProfile>
      <ProfileBanner image={bgImage} />
      <UserInfo userImage={UserImage} />
      <UserDetail />
    </StyledProfile>
  );
};

export default Profile;
