import styled from "styled-components";

export const StyledProfile = styled.div`
  padding-top: 30px;
  overflow: hidden;
  .previousButton {
    display: none;
  }
  @media screen and (min-width: 576px) {
    padding-top: 0px;

    .previousButton {
      display: block;
    }
  }
`;
