import React from "react";
import logo from "../../../_assets/logo.svg";
import Image from "next/image";
import { Sidenav, NavLinks, LinkContainer, UserDet } from "./sideNav.style";
import Link from "next/link";
import SellerProfile from "../../../_assets/SellerProfile.png";
import { nav } from "@/helpers/nav";
import { useRouter } from "next/router";

const SideBar = () => {
  const { pathname } = useRouter();

  const closeSideNav = () => {
    document.body.classList.toggle("sideNav-active");
  };

  return (
    <Sidenav>
      <div
        className="layer"
        onClick={() => {
          closeSideNav();
        }}
      />
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
                  <li
                    className={`NavItem ${
                      pathname === `${data.navigation}` && "active"
                    }`}
                    key={index}
                  >
                    <Link className="Link" href={data.navigation}>
                      <figure className="iconCon">
                        <Image
                          src={data.icon}
                          width={15}
                          height={15}
                          alt="icon"
                        />
                      </figure>
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
        <Image src={SellerProfile} height={40} width={40} alt="user-profile" />
        <div className="detailContainer">
          <span className="userName">John Michel</span>
          <span className="type">Induvial Seller</span>
          <span className="date"> Member since Feb 15, 2024</span>
        </div>
      </UserDet>
    </Sidenav>
  );
};

export default SideBar;
