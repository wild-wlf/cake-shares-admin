import React from 'react';
import { StyledProgress } from './Pole.styles';

const PoleProgress = ({ value }) => {
  return <StyledProgress $level={value} />;
};

export default PoleProgress;
