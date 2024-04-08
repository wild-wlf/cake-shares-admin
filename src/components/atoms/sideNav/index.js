import React from "react";
import logo from "../../../pages/_assets/logo.svg";
import Image from "next/image";
import { Sidenav } from "./sideNav.style";
import line from "../../../pages/_assets/sidenav-line.svg";
import store from "../../../pages/_assets/store.svg";
import profile from "../../../pages/_assets/profile.svg";

const index = () => {
  return (
    <Sidenav>
      <div className="nav-content">
        <div className="nav-logo">
          <Image src={logo} alt="logo" />
          <div className="profile">
            <Image src={line} />
            <div className="profile-details">
              <Image src={profile} width={40} height={40} />
              <div className="user-details">
                <span>Guest Mode</span>
                <span className="sub">Guest Mode</span>
              </div>
            </div>
            <Image src={line} />
          </div>
          <div className="menu">
            <span>Menu</span>
            <div className="textField">
              <Image src={store} />
              <span>Marketplace</span>
            </div>
          </div>
        </div>
      </div>
    </Sidenav>
  );
};

export default index;
