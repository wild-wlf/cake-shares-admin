import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 100%;
  border-radius: 24px;
  cursor: pointer;
  background-color: rgba(241, 241, 241, 1);
  box-shadow: 1px 8px 17px 0 rgba(0, 0, 0, 0.1),
    4px 31px 31px 0 rgba(0, 0, 0, 0.09);
  position: relative;
  padding: 10px;
  .image-div {
    height: 204px;
    border-radius: 20px 20px 0px 0px;
    position: relative;
    img {
      object-fit: cover;
      height: 100%;
      border-radius: 20px 20px 0px 0px;
    }
  }
  .tagWrapper {
    position: absolute;
    top: 16px;
    left: 16px;
    right: 16px;
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 95px;
  }
  .tag {
    font-size: 11px;
    width: 75px;
    height: 25px;
    background-color: rgba(255, 255, 255, 1);
    color: rgba(78, 97, 153, 1);
    border-radius: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .decription {
    border-radius: 0px 0px 20px 20px;
    padding: 10px;
    gap: 10px;
    font-weight: 400;
    font-size: 10px;
    background-color: var(--white);
    padding-top: 10px;
  }
  .title-div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 768px) {
    padding: 6px;
    border-radius: 16px;
    .image-div {
      height: 141px;
      border-radius: 14px 14px 0px 0px;
      position: relative;
    }
    .tag {
      width: 52.42px;
      height: 17.32px;
      font-size: 8px;
    }
    .tagWrapper {
      top: 12px;
      gap: 57px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .heart {
      width: 11.16px;
      height: 9.79px;
    }
    .icon-div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .decription {
      border-radius: 0px 0px 14px 14px;
      font-weight: 400;
      background-color: var(--white);
      .title-div {
        margin-bottom: 6px;
      }
    }
  }
`;
