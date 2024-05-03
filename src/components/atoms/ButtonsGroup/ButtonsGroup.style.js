import styled from "styled-components";

export const ButtonsGroupWrapper = styled.div`
  display: flex;
  background-color: rgba(249, 250, 251, 1);
  border-radius: 50px;
  padding: 2px 0px 2px 2px;

  .button {
    width: 100%;
    color: rgba(49, 49, 49, 1);
    background-color: rgba(249, 250, 251, 1);

    @media (max-width: 768px) {
      padding: 7px 5px;
      gap: 5px;
    }
    &.active {
      background-color: rgba(64, 143, 140, 1);
      color: #fff;
    }
  }
`;
