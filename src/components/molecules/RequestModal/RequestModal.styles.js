import styled from 'styled-components';
export const StyledReportModal = styled.div`
  .heading {
    display: block;
    font-size: 24px;
    line-height: 28px;
    font-weight: 500;
    margin-bottom: 15px;
  }

  .text {
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 20px;
  }
  textarea {
    width: 100%;
    height: 215px;
    padding: 20px;
    background: var(--gray-2);
    border-radius: 20px;
    font-size: 16px;
    line-height: 20px;
    outline: none;
    border: none;
    resize: none;
    margin-bottom: 20px;
  }

  .radio-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    label {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      cursor: pointer;
      font-size: 16px;

      input[type='radio'] {
        margin-right: 10px;
        accent-color: var(--primary);
      }
    }
  }
`;
