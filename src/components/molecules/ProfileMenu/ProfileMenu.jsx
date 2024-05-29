import React, { useState } from "react";
import { ProfileSec } from "./ProfileMenu.Style";
import LogOut from "../../../_assets/logoutIcon.png";
import myProfileIcon from "../../../_assets/myProfileIcon.png";
import privacyPolicyIcon from "../../../_assets/privacyPolicyIcon.png";
import privacySettingIcon from "../../../_assets/privacySettingIcon.png";
import termsIcon from "../../../_assets/termsIcon.png";
import ProfileMenuImage from "../../../_assets/ProfileMenuImage.png";
import Image from "next/image";
import CenterModal from "../Modal/CenterModal";
import PrivacyPolicy from "../PrivacyPolicyModal/PrivacyPolicy";
import { AuthContext } from "@/context/authContext";
import { useContextHook } from "use-context-hook";

const ProfileMenu = ({ openProfile }) => {
  const { user, onLogout } = useContextHook(AuthContext, (v) => ({
    user: v.user,
    onLogout: v.onLogout,
  }));
  const [open, setOpen] = useState();
  const [openTerms, setOpenTerms] = useState();

  return (
    <>
      <CenterModal
        open={openTerms}
        setOpen={setOpenTerms}
        width="996"
        padding={"30px"}
        title={"Terms & Conditions"}
      >
        <PrivacyPolicy />
      </CenterModal>

      <CenterModal
        open={open}
        setOpen={setOpen}
        width="996"
        padding={"30px"}
        title={"Privacy Policy"}
      >
        <PrivacyPolicy />
      </CenterModal>

      <ProfileSec show={openProfile}>
        <div className="top">
          <div className="Dp">
            <Image
              src={user?.profilePicture || ProfileMenuImage}
              height={90}
              width={90}
              alt="Profile Picture"
              className="Profile-Picture"
            />
          </div>
          <div className="Edit">
            <h3>{user?.fullName}</h3>
            <h4>Buyer Account</h4>
          </div>
        </div>

        <hr />
        <div className="Dets">
          <div className="DarkTheme">
            <Image
              src={myProfileIcon}
              alt="My profile"
              width={17}
              height={17}
            />
            <h5>My Profile</h5>
          </div>
          <div className="DarkTheme" onClick={() => setOpen(true)}>
            <Image
              src={privacyPolicyIcon}
              alt="Privacy Policies"
              width={17}
              height={17}
            />
            <h5>Privacy Policy</h5>
          </div>
          <div className="DarkTheme">
            <Image
              src={privacySettingIcon}
              alt="Privacy Settings"
              width={17}
              height={17}
            />
            <h5>Privacy Settings</h5>
          </div>
          <div
            className="DarkTheme"
            onClick={() => setOpenTerms(true)}
            style={{ paddingBottom: "14px" }}
          >
            <Image
              src={termsIcon}
              alt="Terms & Conditions"
              width={17}
              height={17}
            />
            <h5>Terms & Conditions</h5>
          </div>
          <hr />
          <div className="LogOut">
            <Image
              className="Logo"
              width={20}
              height={20}
              src={LogOut}
              alt="Settings"
            />
            <h5 onClick={onLogout}>Logout</h5>
          </div>
        </div>
      </ProfileSec>
    </>
  );
};

export default ProfileMenu;
