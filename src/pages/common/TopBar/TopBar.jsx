import React, { useState } from "react";
import Notifications from "../../../components/molecules/Notifications";
import { StyledTopBar } from "./TopBar.styles";
import logo from "../../_assets/logo.svg";
import Image from "next/image";
import bell from "../../_assets/bell.svg";
import Button from "@/components/atoms/Button";
import store from "../../_assets/store.svg";
import closedNav from "../../_assets/closed-nav.svg";
import profile from "../../_assets/profile.png";
import dropDown from "../../_assets/dropDown.png";
import wallet from "../../_assets/wallet.png";
import SideNav from "../../../components/atoms/sideNav/index.js";

const TopBar = () => {
  const [sideNav, setSidenav] = useState(false);

  return (
    <StyledTopBar>
      <div className="logoWrapper">
        <div className="closedNav" onClick={() => setSidenav(true)}>
          <Image src={closedNav} />
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
        <div className="textfeildWrapper">
          <div className="textFieldRight">
            <span className="heading">My Kyc Level</span>
            <span>3</span>
          </div>
        </div>

        <div className="notification">
          <Image src={bell} alt="bell" />
          <div className="notificationWrapper">
            <Notifications />
          </div>
        </div>
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
      </div>

      <div
        className={sideNav ? "sideNav show" : "sideNav"}
        onMouseLeave={() => {
          setSidenav(false);
        }}
      >
        <SideNav />
      </div>
    </StyledTopBar>
  );
};

export default TopBar;
