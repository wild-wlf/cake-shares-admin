/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import { TooltipContainer, TooltipBtn, StyledTooltip } from './Tooltip.styles';

function ReactionTooltip({ active, setActive, delay, children, data, width, alignRight, type }) {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);
  let showTimeout;
  let hideTimeout;

  const showTip = () => {
    clearTimeout(hideTimeout); // Clear any existing hide timeout
    showTimeout = setTimeout(() => {
      setActive(true);
    }, delay || 100);
  };

  const hideTip = () => {
    clearTimeout(showTimeout); // Clear any existing show timeout
    hideTimeout = setTimeout(() => {
      setActive(false);
    }, delay || 100);
  };

  useEffect(() => {
    setHeight(ref?.current?.clientHeight);
  }, [ref]);

  return (
    <TooltipContainer onMouseEnter={showTip} onMouseLeave={hideTip} onClick={showTip}>
      <TooltipBtn>{children}</TooltipBtn>
      {active && (
        <StyledTooltip place="top" type={type} width={width} ref={ref} height={height} alignRight={alignRight}>
          {data}
        </StyledTooltip>
      )}
    </TooltipContainer>
  );
}

export default ReactionTooltip;
