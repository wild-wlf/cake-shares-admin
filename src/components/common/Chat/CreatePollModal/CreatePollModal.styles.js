import styled from 'styled-components';

export const StyledCreatePollModal = styled.div`
  padding-top: 20px;
  .options-holder {
    max-height: 260px;
    overflow: auto;
  }
  .add-more {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 3px;
    cursor: pointer;
  }
  .switch {
    margin: 15px 0;
  }
`;
