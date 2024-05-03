import styled from "styled-components";

export const StyledKycLevel = styled.div`
  width: 100%;
  position: relative;
  height: 8px;
  border-radius: 8px;
  background: ${({ $bg }) => ($bg ? "rgba(241, 241, 241, 1)" : "var(--white)")};
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: ${({ $level }) => $level * 25 + "%"};
    background: ${({ $level }) =>
      $level <= 3 ? "var(--danger)" : "var(--green)"};
    border-radius: 8px;
  }
`;
