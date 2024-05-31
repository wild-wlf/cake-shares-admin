import * as React from 'react';
import { StyledButton } from './Button.styles';

function Button({
  children,
  loading,
  htmlType,
  type,
  width,
  height,
  disabled,
  color,
  rounded,
  className,
  loader,
  style,
  ...rest
}) {
  return (
    <StyledButton
      type={htmlType === 'submit' ? 'submit' : 'button'}
      btntype={type}
      height={height}
      width={width}
      rounded={rounded?.toString()}
      color={color}
      className={className}
      disabled={disabled || loading || loader}
      style={style}
      {...rest}>
      {loader ? <span className="loader" /> : children}
    </StyledButton>
  );
}

export default Button;
