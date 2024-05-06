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
  padding: 20px; // must prop
  background: ${({ bg }) => bg ?? ""}; // must props
  border-radius: ${({ radius }) => radius ?? "30px"};
  animation: myAnim 0.3s ease;
  background: var(--white);
  max-height: 100%;
  overflow-y: auto;
  @media (min-width: 768px) {
    padding: 30px; // must prop
  }

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
  min-height: 65px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 50px;

  .title {
    font-size: 32px;
    font-weight: 400;
  }
  .closer {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    width: 40px;
    border: 1px solid #dadada;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  @media (max-width: 500px) {
    .closer {
      width: 30px;
      height: 30px;
      .Icon {
        width: 20px;
        height: 20px;
      }
    }

    .title {
      font-size: 20px;
      font-weight: 400;
    }
  }
`;
