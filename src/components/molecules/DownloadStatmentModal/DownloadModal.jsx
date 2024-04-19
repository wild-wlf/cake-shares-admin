import React, { useState } from "react";
import {
  ModalContainer,
  DateContainer,
  MailContainer,
  Button,
} from "./ModalStyle";
import Field from "../Field";
import Form, { useForm } from "../Form";
import { MdDateRange } from "react-icons/md";

const DownloadModal = ({ openNext }) => {
  const [form] = useForm();
  const [date1, setDate1] = useState();
  const [date2, setDate2] = useState();

  return (
    <ModalContainer>
      <h3 className="text">Please fill up the details to proceed.</h3>
      <Form form={form}>
        <DateContainer>
          <div className="wrapper">
            <Field
              noMargin
              selected={date1}
              onChange={({ target: { value } }) => {
                setDate1(value);
              }}
              suffix={<MdDateRange />}
              placeholderText="Select Date"
              type="datepicker"
              label="From"
              rules={[
                {
                  required: true,
                  message: "Email is Required",
                },
              ]}
            />
          </div>
          <div className="wrapper">
            <Form.Item
              minWidth
              noMargin
              selected={date2}
              onChange={({ target: { value } }) => {
                setDate2(value);
              }}
              suffix={<MdDateRange />}
              placeholderText="Select Date"
              type="datepicker"
              label="To"
              rules={[
                {
                  required: true,
                  message: "Email is Required",
                },
              ]}
            >
              <Field />
            </Form.Item>
          </div>
        </DateContainer>
        <MailContainer>
          <div className="wrapper">
            <Form.Item
              label="Email Address"
              type="email"
              rounded
              sm
              name="email"
              placeholder="michelgredes@gmail.com"
              rules={[
                {
                  required: true,
                  message: "Email is Required",
                },
              ]}
            >
              <Field />
            </Form.Item>
          </div>
        </MailContainer>
        <Button onClick={openNext}> Send Mail</Button>
      </Form>
    </ModalContainer>
  );
};

export default DownloadModal;
