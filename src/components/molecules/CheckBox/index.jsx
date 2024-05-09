import React from "react";
import { StyledCheckBox } from "./CheckBox.styles";

const CheckBox = ({ label }) => {
  return (
    <StyledCheckBox>
      <div className="custom-checkbox">
        <input id={label} type="checkbox" value={label} />
      </div>
      {label && (
        <label className="title" htmlFor={label}>
          {label}
        </label>
      )}
    </StyledCheckBox>
  );
};

export default CheckBox;
