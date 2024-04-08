import styled from "styled-components";

export const Closer = styled.div``;

export const StyledModal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(50, 59, 75, 0.1);
  backdrop-filter: blur(4px);
  z-index: 1;
  padding: 20px;
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  opacity: ${({ open }) => (open ? "1" : "0")};
  transition: 0.3s all ease-in-out;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
`;

export const ContentHolder = styled.div`
  max-width: ${({ width }) => (width ? `${width}px` : "100%")};
  width: ${({ width }) => (width ? "100%" : "")};
  padding: ${({ padding }) => padding ?? ""}; // must prop
  background: ${({ bg }) => bg ?? ""}; // must props
  border-radius: ${({ radius }) => radius ?? "30px"};
  animation: myAnim 0.3s ease;
  background: var(--white);
  max-height: 100%;
  overflow-y: auto;

  @keyframes myAnim {
    0% {
      opacity: 0;
      transform: scale(0.5);
    }

    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const Head = styled.div`
  width: 100%;
  padding: 10px 50px 10px 10px;
  border-bottom: 1px solid var(--gray-2);
  min-height: 65px;
  position: relative;

  .closer {
    position: absolute;
    top: 24px;
    right: 18px;
    width: 20px;
    height: 20px;
    background: ${({ gray }) =>
      gray ? "var(--gray-2)" : "var(--danger-light)"};
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;
