import React, { useContext } from "react";
import logo from "../../../_assets/logo.svg";
import Image from "next/image";
import { Sidenav, NavLinks, LinkContainer, UserDet } from "./sideNav.style";
import Link from "next/link";
import SellerProfile from "../../../_assets/SellerProfile.png";
import { useRouter } from "next/router";
import CenterModal from "../Modal/CenterModal";
import KycBuyerLevelOne from "@/components/atoms/KYC/KYCBuyer";
import KycBuyerLevelTwo from "@/components/atoms/KYC/KYCBuyerTwo";
import KYCBuyerThree from "@/components/atoms/KYC/KYCBuyerThree";
import { KycContext } from "@/context/KycContext";

const SideBar = ({ data }) => {
  const { pathname } = useRouter();

  const closeSideNav = () => {
    document.body.classList.toggle("sideNav-active");
    document.body.style.overflow = "auto";
  };

  const { kycLevel, setKycLevel, kyc1, setKyc1, kyc2, setKyc2, kyc3, setKyc3 } =
    useContext(KycContext);
  return (
    <>
      {/* KYC MODAL */}
      <CenterModal
        zIndex={9999}
        open={kyc1}
        setOpen={setKyc1}
        width="688"
        title="Upgrade KYC"
      >
        <KycBuyerLevelOne setKycLevel={setKycLevel} setOpen={setKyc1} />
      </CenterModal>
      <CenterModal
        zIndex={9999}
        open={kyc2}
        setOpen={setKyc2}
        width="688"
        title="Upgrade to KYC Level 2"
      >
        <KycBuyerLevelTwo setKycLevel={setKycLevel} setOpen={setKyc2} />
      </CenterModal>
      <CenterModal
        zIndex={9999}
        open={kyc3}
        setOpen={setKyc3}
        width="688"
        title="Upgrade to KYC Level 3"
      >
        <KYCBuyerThree setKycLevel={setKycLevel} setOpen={setKyc3} />
      </CenterModal>
      {/* KYC MODAL */}

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
          {data.map((data, index) => {
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
          <Image
            src={SellerProfile}
            height={40}
            width={40}
            alt="user-profile"
          />
          <div className="detailContainer">
            <span className="userName">John Michel</span>
            <span className="type">Induvial Seller</span>
            <span className="date"> Member since Feb 15, 2024</span>
          </div>
        </UserDet>
      </Sidenav>
    </>
  );
};

export default SideBar;
