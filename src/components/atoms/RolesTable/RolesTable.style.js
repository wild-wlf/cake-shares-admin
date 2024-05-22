import styled from "styled-components";

export const TableContainer = styled.div`
  padding: 20px 30px;
  width: 100%;
  position: relative;
  .tableStyle {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  @media only screen and (max-width: 1024px) {
    padding: 0px;
  }
  @media only screen and (max-width: 992px) {
    .tableStyle {
      display: none;
    }
  }
  @media (max-width: 530px) {
    padding: 50px 20px;
  }
`;

export const ModalText = styled.h3`
  padding-top: 20px;
  font-size: 24px;
  font-weight: 500;
`;
