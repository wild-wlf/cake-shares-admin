import styled from "styled-components";

export const CreatePermissionModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 26px;

  .input-wrapper {
    display: flex;
    gap: 26px;
    @media only screen and (max-width: 576px) {
      flex-direction: column;
      gap: 0px;
      padding-bottom: 20px;
    }
  }
`;
