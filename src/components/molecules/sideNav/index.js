import React from "react";
import logo from "../../../_assets/logo.svg";
import Image from "next/image";
import { Sidenav } from "./sideNav.style";
import line from "../../../_assets/sidenav-line.svg";
import store from "../../../_assets/store.svg";
import profile from "../../../_assets/profile.svg";

const index = () => {
  return (
    <Sidenav>
      <div className="nav-content">
        <div className="nav-logo">
          <Image src={logo} alt="logo" />
        </div>
      </div>
    </Sidenav>
  );
};

export default index;
