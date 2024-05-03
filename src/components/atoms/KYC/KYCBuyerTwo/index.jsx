import React, { useState } from "react";
import {
  Step,
  StepWrapper,
  StepWrapperContainar,
  StyledKycBuyer,
} from "../KYCBuyer/KycBuyer.styles";
import UploadFile from "@/components/molecules/UploadFile";
import Button from "../../Button";
import { useForm } from "@/components/molecules/Form";
import Form from "@/components/molecules/Form/Form";
import Select from "../../Select";
import Field from "@/components/molecules/Field";

const KycBuyerLevelTwo = ({ setOpen, setKycLevel }) => {
  const [form] = useForm();

  const [step, setStep] = useState(1);
  const optionData = [{ label: "Buyer Level Two", value: "Buyer Level Two" }];
  function handelKycLevel() {
    setOpen(false);
    setKycLevel(3);
  }
  return (
    <StyledKycBuyer>
      <div className="twoCol">
        <span className="kycdiscreption">
          Verification required. Please provide some details.
        </span>
        <StepWrapperContainar>
          <span className="stepStatus">Step {step} of 2</span>
          <StepWrapper $width={step}>
            <Step $bg={step >= 1} />
            <Step $bg={step == 2} />
          </StepWrapper>
        </StepWrapperContainar>
      </div>
      <Form form={form}>
        {step == 1 && (
          <>
            <Form.Item
              type="text"
              label="Email Address"
              name="email"
              // placeholder="Your Email or Username"
              rules={[
                { required: true },
                {
                  pattern: /^.{0,256}$/,
                  message: "Maximum Character Length is 256",
                },
              ]}
            >
              <Select options={optionData} />
            </Form.Item>
            <div className="combineFields">
              <Form.Item
                type="text"
                label="Account Holder Name"
                name="AccountHolderName"
                placeholder="Alex Mertiz"
                rules={[
                  { required: true },
                  {
                    pattern: /^.{0,256}$/,
                    message: "Maximum Character Length is 256",
                  },
                ]}
              >
                <Field />
              </Form.Item>
              <Form.Item
                type="num"
                label="Account no"
                name="accountNo"
                placeholder="35402755003895"
                rules={[
                  { required: true },
                  {
                    pattern: /^.{0,256}$/,
                    message: "Maximum Character Length is 256",
                  },
                ]}
              >
                <Field />
              </Form.Item>
            </div>
            <Button
              className={"stepOneButton"}
              rounded
              sm
              btntype="primary"
              width="134"
              onClick={() => setStep(2)}
              // htmlType="submit"
            >
              Continue
            </Button>
          </>
        )}
        {step == 2 && (
          <>
            <label htmlFor="" className="fakelabel">
              Residence Proof
            </label>
            <div className="combineField">
              <UploadFile
                uploadTitle="Upload a copy of bills, bank statement"
                onChange={(e) => console.log(e)}
              />
            </div>
            <Button
              rounded
              md
              btntype="primary"
              width="214"
              onClick={handelKycLevel}
            >
              Complete Verification
            </Button>
          </>
        )}
      </Form>
    </StyledKycBuyer>
  );
};

export default KycBuyerLevelTwo;
