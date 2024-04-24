import React from "react";
import logo from "../../../_assets/logo.svg";
import Image from "next/image";
import { Sidenav } from "./sideNav.style";
import line from "../../../_assets/sidenav-line.svg";
import store from "../../../_assets/store.svg";
import profile from "../../../_assets/profile.svg";

const index = ({ openSideNav }) => {
  return (
    <Sidenav open={openSideNav}>
      <div className="backdrop" />
      <div className="nav-content">
        <div className="nav-logo">
          <Image src={logo} alt="logo" />
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
          <div className="menu">
            <span>Menu</span>
            <div className="textField">
              <Image src={store} alt="store" />
              <span>Marketplace</span>
            </div>
          </div>
        </div>
      </div>
    </Sidenav>
  );
};

export default index;
