import * as React from "react";
import { StyledButton } from "./Button.styles";

function Button({
  children,
  loading,
  htmlType,
  type,
  width,
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
      type={htmlType === "submit" ? "submit" : "button"}
      btntype={type}
      width={width}
      rounded={rounded?.toString()}
      color={color}
      className={className}
      disabled={disabled || loading}
      style={style}
      {...rest}
    >
      {loader ? <span className="loader" /> : children}
    </StyledButton>
  );
}

export default Button;
