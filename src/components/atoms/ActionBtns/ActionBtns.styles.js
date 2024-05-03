import styled from "styled-components";

export const ActionBtnList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 10px;

  li {
    margin: 0;
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    padding: 5px;
    border-radius: 50px;
    text-transform: capitalize;

    &.edit {
      background: rgba(64, 143, 140, 0.1);
    }
    &.file {
      background: rgba(78, 97, 153, 0.1);
    }
    &.delete {
      background: rgba(215, 65, 32, 0.1);
    }
    &.speaker {
      background: rgba(65, 148, 0, 0.1);
    }
    &.wallet {
      background: #cbe2ea;
    }

    @media only screen and (max-width: 992px) {
      flex-wrap: wrap;
    }
  }
`;
