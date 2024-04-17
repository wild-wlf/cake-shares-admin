import React from "react";
import {
  ModalContainer,
  DateContainer,
  MailContainer,
  Button,
} from "./ModalStyle";

const DownloadModal = ({ openNext }) => {
  return (
    <ModalContainer>
      <h3 className="text">Please fill up the details to proceed.</h3>
      <DateContainer>
        <div className="wrapper">
          <span>
            <span style={{ color: "red" }}>*</span>From
          </span>
          <br />
          <input
            type="date"
            name="fromDate"
            placeholder="Select Date"
            className="feild"
            required
          />
        </div>
        <div className="wrapper">
          <span>
            <span style={{ color: "red" }}>*</span>To
          </span>
          <br />
          <input
            type="date"
            name="tromDate"
            placeholder="Select Date"
            className="feild"
            required
          />
        </div>
      </DateContainer>
      <MailContainer>
        <div className="wrapper">
          <span>
            <span style={{ color: "red" }}>*</span>Email Address
          </span>
          <br />
          <input
            type="email"
            name="email"
            placeholder="alex123@gmail.com"
            className="feild"
            required
          />
        </div>
      </MailContainer>
      <Button onClick={openNext}> send Mail</Button>
    </ModalContainer>
  );
};

export default DownloadModal;
