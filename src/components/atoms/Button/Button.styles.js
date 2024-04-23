import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  min-width: 200px;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-align: center;
  padding: 15px 24px;
  font-family: var(--base-font-family);
  font-size: 22px;
  line-height: 26px;
  cursor: pointer;
  font-weight: ${({ weight }) => weight || "600"};
  width: ${({ width }) => width && "100%"};
  /* max-width: ${({ width }) => width && `${width}px`}; */
  transition: filter 0.3s linear, box-shadow 0.3s linear;

  border-radius: ${({ rounded }) => {
    if (rounded) {
      return "100px";
    }
    return "10px";
  }};
  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      opacity: 0.6;
    `}
  color: ${({ btntype }) => {
    if (btntype === "primary") {
      return "var(--white)";
    }
    if (btntype === "green") {
      return "var(--white)";
    }
    if (btntype === "new") {
      return "rgba(64,143,140,1)";
    }

    if (btntype === "white") {
      return "var(--primary)";
    }
    if (btntype === "gray") {
      return "var(--primary)";
    }
    if (btntype === "light-danger") {
      return "#E90000";
    }
    if (btntype === "info") {
      return "var(--blue)";
    }
    if (btntype === "download") {
      return "#4E6199";
    }
    return "var(--white)";
  }};

  background: ${({ btntype }) => {
    if (btntype === "primary") {
      return "var(--primary)";
    }
    if (btntype === "new") {
      return "rgba(64,143,140,0.1)";
    }
    if (btntype === "green") {
      return "#408F8C";
    }

    if (btntype === "white") {
      return "var(--white)";
    }
    if (btntype === "danger") {
      return "var(--danger-dark)";
    }
    if (btntype === "secondary") {
      return "var(--purple)";
    }
    if (btntype === "gray") {
      return "var(--gray-2)";
    }
    if (btntype === "light-danger") {
      return "var(--danger-light)";
    }
    if (btntype === "blue-grt") {
      return "var(--blue-grt)";
    }
    if (btntype === "info") {
      return "var(--light-blue)";
    }
    if (btntype === "download") {
      return "#fff";
    }
    return "var(--primary)";
  }};

  border: ${({ btntype }) => {
    if (btntype === "download") {
      return "1.5px solid #4E6199";
    }
  }};

  transition: 0.3s all ease-in-out;
  ${({ md }) =>
    md &&
    css`
      font-size: 16px;
      line-height: 20px;
      font-weight: 400;
      padding: 10px 12px;
    `};

  ${({ sm }) =>
    sm &&
    css`
      min-width: 107px;
      font-size: 14px;
      line-height: 18px;
      font-weight: 400;
      padding: 9px 12px;
    `};

  &:hover {
    /* background: ${({ btntype }) => {
      if (btntype === "white") {
        return "var(--white)";
      }
      return "var(--primary)";
    }};
    color: ${({ btntype }) => {
      if (btntype === "outline") {
        return "var(--primary)";
      }
      return "var(--white)";
    }}; */

    opacity: 0.75;
  }
  .loader {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: inline-block;
    border-top: 3px solid var(--primary);
    border-top: ${({ color }) =>
      color ? `3px solid ${color}` : `3px solid var(--primary)`};
    /* border-top: 3px solid var(--primary); */
    border-right: 3px solid transparent;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
