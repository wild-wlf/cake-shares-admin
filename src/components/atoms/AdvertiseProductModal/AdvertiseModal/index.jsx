import React, { useState } from "react";
import { AdvertiseModalWrapper } from "./AdvertiseModal.style";
import Button from "../../Button";
import Form, { useForm } from "@/components/molecules/Form";
import Select from "../../Select";

const AdvertiseModal = ({ handleAdvertiseModal }) => {
  const [selected, setSelected] = useState(null);
  const arr = [
    { label: "1 Day", value: "1-day" },
    { label: "2 Days", value: "2-day" },
    { label: "3 Days", value: "3-day" },
    { label: "5 Days", value: "5-day" },
    { label: "7 Days", value: "7-day" },
  ];
  return (
    <AdvertiseModalWrapper>
      <div>
        <span className="desc">Select the ad duration to begin</span>
      </div>
      <div className="field-div">
        <Form.Item
          label="Country"
          name="select"
          rules={[
            { required: true },
            {
              pattern: /^.{0,256}$/,
              message: "Maximum Character Length is 256",
            },
          ]}
          onChange={(e) => {
            setSelected(e);
          }}
        >
          <Select options={arr} />
        </Form.Item>
      </div>
      {selected === null ? (
        " "
      ) : (
        <div className="budget-desc">
          For a {selected.target.value.value} ad campaign, the estimated cost
          would be <span>$60.00</span>.
        </div>
      )}
      <div>
        <Button
          sm
          rounded
          btntype="green"
          width="170px"
          htmlType={"submit"}
          onClick={handleAdvertiseModal}
        >
          Continue
        </Button>
      </div>
    </AdvertiseModalWrapper>
  );
};

export default AdvertiseModal;
