import React from "react";
import { StyledKycLevel } from "./KycLevel.styles";

const KycLevel = ({ level = 1, bg }) => {
  return <StyledKycLevel $level={level} $bg={bg} />;
};

export default KycLevel;
