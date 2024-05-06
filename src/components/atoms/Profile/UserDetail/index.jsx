/* eslint-disable react/jsx-key */
import React, { useMemo } from "react";
import { StyledUserDetail } from "./UserDetail.styles";
import Button from "../../Button";
import { MdModeEdit } from "react-icons/md";
import bankIcon from "../../../../_assets/bankIcon.svg";
import numIcon from "../../../../_assets/numIcon.svg";
import userIcon from "../../../../_assets/userIcon.svg";
import userId from "../../../../_assets/userId.svg";
import userName from "../../../../_assets/userName.svg";
import emailAddress from "../../../../_assets/emailAddress.svg";
import password from "../../../../_assets/password.svg";
import flagIcon from "../../../../_assets/flagIcon.svg";
import countryflgIcon from "../../../../_assets/countryflgIcon.svg";
import dltIcon from "../../../../_assets/dltIcon.svg";
import accDelete from "../../../../_assets/accDelete.svg";
import Image from "next/image";
// import Inheritance from "./Inheritance";
import TableLayout from "../../TableLayout";
import Table from "@/components/molecules/Table";
import { IoIosArrowBack } from "react-icons/io";
import EditBank from "./EditBank";
import EditProfile from "./EditBank/EditProfile";
import ModalContainer from "@/components/molecules/ModalContainer";

const UserDetail = () => {
  const reports_data = [
    {
      product_name: "Gov. Egypt Property",
      category: "Properties",
      total_share: "Sales",
      amount: "$40,256.000",
    },
    {
      product_name: "Audi A8 Car",
      category: "Accessories",
      amount: "$40,256.000",
      total_share: "Refund",
    },
    {
      product_name: "Rolex Watch (GMT-Master II)",
      category: "Properties",
      total_share: "Sales",
      amount: "$40,256.000",
    },
    {
      product_name: "Audi A8 Car",
      category: "Car",
      total_share: "Refund",
      amount: "$40,256.000",
    },
  ];
  const actionBtns = () => (
    // eslint-disable-next-line react/jsx-filename-extension
    <button type="button" className="chatButton">
      Chat
    </button>
  );
  const { report_rows, totalItems } = useMemo(
    () => ({
      report_rows: reports_data?.map((report) => [
        report.product_name,
        report.category,
        report.total_share,
        report.amount,

        actionBtns(),
      ]),
      totalItems: reports_data?.length || 0,
    }),
    [reports_data]
  );
  const columnNames = [
    `Product`,
    `Category`,
    `Total Shares`,
    `Amount`,
    `Chat (Stakeholders)`,
  ];

  const bankInfo = [
    {
      icon: bankIcon,
      title: "Bank Name",
      discreption: "Bank of Americe",
    },
    {
      icon: numIcon,
      title: "IBAN",
      discreption: "PK033310084246213",
    },

    {
      icon: userIcon,
      title: "SWIFT / BIC Number",
      discreption: "PK033310084246213",
    },
    {
      icon: userId,
      title: "User ID",
      discreption: "33445554",
    },
  ];
  return (
    <StyledUserDetail>
      {/* <Inheritance /> */}
      <div className="colWrapper">
        <div className="colHeader">
          <strong className="colTitle">Personal Information:</strong>
          <ModalContainer
            lg
            width={673}
            title="Edit Profile"
            btnComponent={({ onClick }) => (
              <Button
                type="primary"
                rounded
                sm
                onClick={onClick}
                width={"127px"}
              >
                <MdModeEdit />
                Edit Info
              </Button>
            )}
            content={({ onClose }) => <EditProfile onClose={onClose} />}
          />
        </div>
        <div className="colBody">
          <div className="col-content">
            <div className="iconWrap">
              <Image src={userIcon} alt="userIcon" />
            </div>
            <div className="textWrap">
              <strong className="title">Full Name</strong>
              <span>Alex Mertiz</span>
            </div>
          </div>
          <div className="col-content">
            <div className="iconWrap">
              <Image src={userName} alt="userName" />
            </div>
            <div className="textWrap">
              <strong className="title">Username</strong>
              <span>alex123</span>
            </div>
          </div>
          <div className="col-content">
            <div className="iconWrap">
              <Image src={emailAddress} alt="emailAddress" />
            </div>
            <div className="textWrap">
              <strong className="title">Email Address</strong>
              <span>alex123@gmail.com</span>
            </div>
          </div>
          <div className="col-content">
            <div className="iconWrap">
              <Image src={password} alt="password" />
            </div>
            <div className="textWrap">
              <strong className="title">Password</strong>
              <span>**************</span>
            </div>
          </div>
          <div className="col-content danger">
            <div className="iconWrap">
              <Image src={dltIcon} alt="dltIcon" />
            </div>
            <div className="textWrap">
              <strong className="title">Account Deactivation</strong>
              <div className="discreptionWrap">
                <span>Deactivate Account</span>
                <Image src={accDelete} alt="accDelete" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledUserDetail>
  );
};

export default UserDetail;
