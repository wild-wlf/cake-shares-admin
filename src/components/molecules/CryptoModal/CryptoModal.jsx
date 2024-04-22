import React, { useState } from "react";
import { Sort } from "../../atoms/ContentHeader/ContentHeader.styles";
import { Container } from "./CryptoMOdalStyles";
import Field from "../Field";
import Button from "@/components/atoms/Button";

const CryptoModal = () => {
  const [kycBox, setKycBox] = useState(false);
  const [selected, setSelected] = useState({
    kyc: "Select Level",
  });

  const handleKycChecked = (e) => {
    const { name } = e.target;
    setSelected((prev) => ({
      ...prev,
      kyc: name,
    }));
    setSearchQuery((prev) => ({
      ...prev,
      kyc: name,
    }));
    setKycBox(false);
  };

  return (
    <Container>
      <h3>
        Choose the crypto wallet you want to transfer funds from to top up your
        balance.
      </h3>

      <Sort className={kycBox && "active"}>
        <Button
          type="dropdown"
          rounded
          sm
          width="100%"
          onClick={() => setKycBox(!kycBox)}
          className="dropdown"
        >
          {selected.kyc}
          {/* <IoMdArrowDropdown size={20} /> */}
        </Button>
        <div className="sort-list">
          {kycBox && (
            <div className="list">
              <Field
                type="radio"
                label="Level 1"
                name="Level 1"
                radioBorder="var(--gray-2)"
                labelReverse
                onChange={handleKycChecked}
                value={selected.kyc === "Level 1"}
              />
              <Field
                type="radio"
                label="Level 2"
                name="Level 2"
                radioBorder="var(--gray-2)"
                labelReverse
                onChange={handleKycChecked}
                value={selected.kyc === "Level 2"}
              />
            </div>
          )}
        </div>
      </Sort>
    </Container>
  );
};

export default CryptoModal;
