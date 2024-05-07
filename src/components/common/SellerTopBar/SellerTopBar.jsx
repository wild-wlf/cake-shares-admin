import React, { useContext, useState } from "react";
import { Container, DataContainer } from "./SellerbarStyles";
import Image from "next/image";
import { KycContext } from "../../../context/KycContext";
import KycLevel from "@/components/atoms/KYC/KycLevel";
import Notifications from "../../../components/molecules/Notifications";
import bell from "../../../_assets/bell.svg";
import Button from "@/components/atoms/Button";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const SellerTopBar = ({ title, tagLine, suffix }) => {
  const [notifications, setNotifications] = useState(false);

  const { kycLevel, setKycLevel, kyc1, setKyc1, kyc2, setKyc2, kyc3, setKyc3 } =
    useContext(KycContext);

  const openSideNav = () => {
    document.body.classList.toggle("sideNav-active");
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <Container>
        <div className="barData">
          <div
            className="closedNav"
            onClick={() => {
              openSideNav();
            }}
          >
            <HiOutlineMenuAlt1 />
          </div>
          <div className="dataContainer">
            <div className="Heading">
              <h1>{title}</h1>
              {suffix && <Image src={suffix} alt="handicon" />}
            </div>
            <p>{tagLine}</p>
          </div>
        </div>

        <div className="barActions">
          <div className="textfeildWrapper">
            <div className="textFieldRight">
              <span className="heading">My Kyc Level</span>
              <span>{kycLevel - 1}</span>
            </div>
            <KycLevel level={kycLevel} bg />
          </div>
          <div
            className="notification"
            onClick={() => {
              setNotifications(!notifications);
            }}
          >
            <Image src={bell} alt="bell" className="bell" />
            {/* <Image src={bellWhite} alt="bell" className="bell-white" /> */}
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
          <Button rounded sm btntype="new" width={"160px"} height={"35px"}>
            Create New Product
          </Button>
        </div>
      </Container>

      <DataContainer>
        <div className="Heading">
          <h1>{title}</h1>
          {suffix && <Image src={suffix} alt="handicon" />}
        </div>
        <p>{tagLine}</p>
      </DataContainer>
    </>
  );
};

export default SellerTopBar;
