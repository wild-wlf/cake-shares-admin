import React from "react";
import logo from "../../../_assets/logo.svg";
import Image from "next/image";
import { Sidenav } from "./sideNav.style";

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
