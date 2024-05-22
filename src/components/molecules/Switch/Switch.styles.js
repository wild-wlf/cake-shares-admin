import styled from "styled-components";
export const ToggleSwitchStyle = styled.div`
  display: flex;
  align-items: center;
  input {
    display: none;
  }
  .title {
    margin-right: 8px;
    cursor: pointer;
  }
  .switch {
    display: inline-block;
    position: relative;
    width: 44px;
    height: 22px;
    border-radius: 20px;
    background: #c2c9d1;
    transition: background 0.28s cubic-bezier(0.4, 0, 0.2, 1);
    vertical-align: middle;
    cursor: pointer;
  }
  .switch::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 2px;
    width: 18px;
    height: 18px;
    background: var(--white);
    border-radius: 50%;
    box-shadow: 0px 24px 52px -14px rgba(29, 41, 57, 0.16);
    transition: left 0.28s cubic-bezier(0.4, 0, 0.2, 1),
      background 0.28s cubic-bezier(0.4, 0, 0.2, 1),
      box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .switch:active::before {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.28),
      0 0 0 20px rgba(128, 128, 128, 0.1);
  }
  input:checked + .switch {
    background: var(--green);
  }
  input:checked + .switch::before {
    left: 24px;
    background: #fff;
  }
  input:checked + .switch:active::before {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.28), 0 0 0 20px rgba(0, 150, 136, 0.2);
  }
`;
