import React, { useContext, useEffect, useRef, useState } from "react";
import Notifications from "../../../components/molecules/Notifications";
import { NavLinks, StyledTopBar } from "./TopBar.styles";
import logo from "../../../_assets/logo.svg";
import Image from "next/image";
import bell from "../../../_assets/bell.svg";
// import bellWhite from "../../../_assets/bell-white.svg";
import Button from "@/components/atoms/Button";
import register from "../../../_assets/register.svg";
import { HiMenuAlt1, HiOutlineMenuAlt1 } from "react-icons/hi";
import KycBuyerLevelOne from "@/components/atoms/KYC/KYCBuyer";
import { KycContext } from "../../../context/KycContext";
import KycBuyerLevelTwo from "@/components/atoms/KYC/KYCBuyerTwo";
import KYCBuyerThree from "@/components/atoms/KYC/KYCBuyerThree";
// import ProfileMenu from "@/components/molecules/ProfileMenu/ProfileMenu";
import { MdArrowDropDown, MdStorefront } from "react-icons/md";
import profile from "../../../_assets/profile.png";
import KycLevel from "@/components/atoms/KYC/KycLevel";
import line from "../../../_assets/sidenav-line.svg";
import { FaWallet } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ProfileMenu from "@/components/molecules/ProfileMenu/ProfileMenu";

const TopBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [sideNav, setSideNav] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const ProfileRef = useRef(null);
  const handleClickOutsideProfile = (event) => {
    if (ProfileRef.current && !ProfileRef.current.contains(event.target)) {
      setOpenProfile(false);
    }
  };

  const [completeRegistrationModal, setCompleteRegistrationModal] =
    useState(false);
  const router = usePathname();

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideProfile);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideProfile);
    };
  }, []);

  useEffect(() => {
    if (sideNav) {
      document.body.classList.add("active-nav");
    } else {
      document.body.classList.remove("active-nav");
    }
  }, [sideNav]);

  const { kycLevel, setKycLevel, kyc1, setKyc1, kyc2, setKyc2, kyc3, setKyc3 } =
    useContext(KycContext);

  return (
    <>
      <StyledTopBar>
        <div className="logoWrapper">
          <div className="layer" onClick={() => setSideNav(false)} />
          <div className="closedNav" onClick={() => setSideNav(true)}>
            <HiOutlineMenuAlt1 />
          </div>
          <NavLinks $active={sideNav}>
            <div className="logo">
              <Image src={logo} alt="logo" />
            </div>
            <div className="profile">
              <Image src={line} alt="line" />
              <div className="profile-details">
                <Image src={profile} width={40} height={40} alt="profile" />
                <div className="user-details">
                  <span>Guest Mode</span>
                  <span className="sub">Guest Mode</span>
                </div>
              </div>
              <Image src={line} alt="line" />
            </div>
            <Link
              href="https://cake.webevis.com/"
              className={
                router === "" ? "textField textField-home" : "textField"
              }
            >
              <MdStorefront />
              <span>Marketplace</span>
            </Link>
          </NavLinks>
        </div>

        <div className="actions">
          {isLoggedIn ? (
            <>
              <div className="textfeildWrapper">
                <div className="textFieldRight">
                  <span className="heading">My Kyc Level</span>
                  <span>{kycLevel - 1}</span>
                </div>
                <KycLevel level={kycLevel} bg />
              </div>
            </>
          ) : (
            ""
          )}

          <div
            className="notification"
            onClick={() => {
              setNotifications(!notifications);
            }}
          >
            <Image src={bell} alt="bell" className="bell" />
            <div
              className={
                notifications
                  ? "notificationWrapper-visible"
                  : "notificationWrapper"
              }
            >
              <Notifications />
            </div>
          </div>

          {isLoggedIn ? (
            <>
              <div className="wallet">
                <FaWallet />
                <span>My Wallet</span>
              </div>
              <div className="buttonWrapper" ref={ProfileRef}>
                <Button
                  rounded
                  sm
                  btntype="new"
                  onClick={() => {
                    setOpenProfile(!openProfile);
                  }}
                >
                  <Image src={profile} alt="profile" />
                  Alex
                  <MdArrowDropDown />
                </Button>
                <ProfileMenu />
              </div>
            </>
          ) : (
            ""
          )}
        </div>
        <ProfileMenu openProfile={openProfile} />
      </StyledTopBar>
    </>
  );
};

export default TopBar;
