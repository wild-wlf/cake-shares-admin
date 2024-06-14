import styled from 'styled-components';

export const AttachmentsWrapper = styled.div`
  h6 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 15px;
  }
  .fileName {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 15px;

    span {
      font-size: 14px;
      font-weight: 400;
    }
  }
  .attachmentWrap {
    max-height: 240px;
    overflow: auto;
  }
`;
