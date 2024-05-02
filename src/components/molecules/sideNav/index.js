import React from "react";
import logo from "../../../_assets/logo.svg";
import Image from "next/image";
import { Sidenav, NavLinks, LinkContainer, UserDet } from "./sideNav.style";
import Link from "next/link";
import SellerProfile from "../../../_assets/SellerProfile.png";
import { nav } from "@/helpers/nav";

const index = () => {
  return (
    <Sidenav>
      <div className="nav-logo">
        <Image src={logo} alt="logo" />
      </div>

      <LinkContainer>
        {nav.map((data, index) => {
          return (
            <NavLinks key={index}>
              <li className="listHead">{data.name}</li>
              {data.link.map((data, index) => {
                return (
                  <li className="NavItem" key={index}>
                    <div className="iconCon">
                      <Image src={data.icon} width={15} height={15} />
                    </div>
                    <Link className="name" href={`/${data.navigation}`}>
                      {data.name}
                    </Link>
                  </li>
                );
              })}
            </NavLinks>
          );
        })}
      </LinkContainer>

      <UserDet>
        <Image src={SellerProfile} height={40} width={40} />
        <div className="detailContainer">
          <span className="userName">John Michel</span> 
          <span className="type">Induvial Seller</span> 
          <span className="date"> Member since Feb 15, 2024</span>
        </div>
      </UserDet>
    </Sidenav>
  );
};

export default index;
