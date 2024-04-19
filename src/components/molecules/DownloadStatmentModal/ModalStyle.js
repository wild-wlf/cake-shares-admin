import styled from "styled-components";

export const ModalContainer = styled.div`
  padding-top: 26px;
  .text {
    font-size: 20px;
    font-weight: 300;
  }
`;

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 26px 0;
  .wrapper {
    width: 48%;
  }
  .feild {
    width: 290px;
    padding: 13px 23px;
    border-radius: 100px;
    border: 1px solid #f1f1f1;
    outline: none;
    margin-top: 16px;
  }
`;

export const MailContainer = styled.div`
  padding-bottom: 26px;
`;

export const Button = styled.button`
  width: 170px;
  height: 40px;
  background-color: #408f8c;
  border-radius: 52px;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #70aba9;
  }
`;
