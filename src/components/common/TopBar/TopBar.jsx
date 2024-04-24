import React, { useEffect, useState } from "react";
import Notifications from "../../../components/molecules/Notifications";
import { StyledTopBar } from "./TopBar.styles";
import logo from "../../../_assets/logo.svg";
import Image from "next/image";
import bell from "../../../_assets/bell.svg";
import Button from "@/components/atoms/Button";
import store from "../../../_assets/store.svg";
import profile from "../../../_assets/profile.png";
import dropDown from "../../../_assets/dropDown.png";
import wallet from "../../../_assets/wallet.png";
import SideNav from "../../../components/atoms/sideNav/index.js";
import { HiMenuAlt1 } from "react-icons/hi";
import registerIcon from "../../../_assets/registerIcon.png";

const TopBar = () => {
  const [openSideNav, setOpenSidenav] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    if (openSideNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [openSideNav]);
  const handleOutsideClick = (e) => {
    if (!e.target.closest(".sideNav") && openSideNav) {
      setOpenSidenav(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [openSideNav]);

  return (
    <StyledTopBar>
      <div className="logoWrapper">
        <div className="closedNav" onClick={() => setOpenSidenav(true)}>
          <HiMenuAlt1 className="Icon" />
        </div>
        <div className="logo">
          <Image src={logo} alt="logo" />
        </div>

        <div className="textField">
          <Image src={store} />
          <span>Marketplace</span>
        </div>
      </div>

      <div className="actions" style={{ display: "Flex", gap: "10px" }}>
        {isLoggedIn ? (
          <div className="textfeildWrapper">
            <div className="textFieldRight">
              <span className="heading">My Kyc Level</span>
              <span>3</span>
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="notification">
          <Image src={bell} alt="bell" />
          <div className="notificationWrapper">
            <Notifications />
          </div>
        </div>

        {isLoggedIn ? (
          <>
            <div className="wallet">
              <Image src={wallet} alt="wallet" />
              <span>My Wallet</span>
              <div className="walletWrapper">{/* <Notifications /> */}</div>
            </div>
            <div className="buttonWrapper">
              <Button rounded sm btntype="new">
                <Image src={profile} />
                Alex
                <Image src={dropDown} />
              </Button>
            </div>
          </>
        ) : (
          <div className="authContainer">
            <Button rounded sm btntype="new">
              <Image src={registerIcon} />
              Register
            </Button>
            <Button rounded sm btntype="download">
              Login
            </Button>
          </div>
        )}
      </div>

      <SideNav openSideNav={openSideNav} />
    </StyledTopBar>
  );
};

export default TopBar;
