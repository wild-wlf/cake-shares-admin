import React from 'react';
import { LoaderStyled, LoaderWrap } from './Loader.styles';

const Loader = ({ noHeight  }) => {
  return (
    <LoaderWrap $noHeight={noHeight}>
      <LoaderStyled />
    </LoaderWrap>
  );
};

export default Loader;
