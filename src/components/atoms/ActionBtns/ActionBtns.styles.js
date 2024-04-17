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
      background: rgba(54, 70, 154, 0.2);
    }
    &.lock {
      background: rgba(227, 123, 0, 0.2);
    }
    &.delete {
      background: rgba(233, 0, 0, 0.2);
    }
    &.view-more {
      background: rgba(54, 70, 154, 0.1);
    }
    &.wallet {
      background: #cbe2ea;
    }
  }
`;
