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
  /* padding: 10px 50px 10px 10px; */
  /* border-bottom: 1px solid var(--gray-2); */
  min-height: 65px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .title {
    font-size: 32px;
    font-weight: 400;
  }
  .closer {
    position: absolute;
    top: 14px;
    right: 18px;
    width: 40px;
    border: 1px solid #dadada;
    height: 40px;
    /* background: ${({ gray }) =>
      gray ? "var(--gray-2)" : "var(--danger-light)"}; */
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  @media (max-width: 500px) {
    .title {
      font-size: 20px;
      font-weight: 400;
    }
  }
`;
