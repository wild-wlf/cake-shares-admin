import styled from "styled-components";

export const StyledUserInfo = styled.div`
  display: block;
  margin-bottom: 20px;
  padding: 0px 30px;
  @media screen and (min-width: 1200px) {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
  @media screen and (min-width: 1300px) {
    align-items: flex-end;
  }
  .userInfo {
    width: 100%;
    position: relative;
    margin-top: 0px;
    margin-bottom: 20px;
    z-index: 2;

    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    @media screen and (min-width: 1024px) {
      display: flex;
      align-items: flex-end;
      flex-grow: 1;
    }
    @media screen and (min-width: 1200px) {
      margin-bottom: 0;
    }
    @media screen and (min-width: 1300px) {
      margin-top: -100px;
    }

    .textWrapper {
      margin-bottom: 20px;
      @media screen and (min-width: 1024px) {
        padding: 0 20px;
        margin-bottom: 0px;
      }
      .discreption {
        span {
          padding: 0 10px 0 0;
        }
      }
    }
    .name {
      display: block;
      margin-bottom: 20px;
      font-size: 28px;
      font-weight: 600;
      line-height: 32px;
    }
  }
  .active {
    color: rgba(78, 97, 153, 1);
  }
  .addbefore {
    position: relative;
    padding-left: 0;
    @media screen and (min-width: 1024px) {
      padding-left: 15px !important;
    }
    &:before {
      display: none;

      position: absolute;
      content: "";
      width: 2px;
      left: 0;
      background: rgba(0, 0, 0, 0.1);
      top: 2px;
      bottom: 2px;
      @media screen and (min-width: 1024px) {
        display: block;
      }
    }
  }
  .categoriesWrapper {
    font-size: 12px;
    line-height: 16px;
    font-weight: 300;
    color: var(--secondary-50);
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    max-width: 220px;
    width: 100%;
    .categoriesList {
      text-align: center;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 8px;
    }
  }
  .categoriesText {
    display: block;
    margin-bottom: 10px;
  }
  .kycWrapper {
    max-width: 100%;
    width: 100%;
    padding: 13px 15px;
    background: rgba(64, 143, 140, 0.1);
    border-radius: 10px;
    @media screen and (min-width: 1200px) {
      max-width: 356px;
    }
    .updgradeKyc {
      display: flex;
      align-items: flex-end;
      gap: 10px;
    }
    .headingWrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 15px;
    }
    .discreption {
      font-size: 10px;
      font-weight: 500;
      line-height: 14px;
      text-decoration: underline;
      color: var(--secondary-50);
      cursor: pointer;
      white-space: nowrap;
    }
    .headingText {
      font-size: 14px;
      font-weight: 500;
      line-height: 17.64px;
    }
  }
`;

export const ProfileWrapper = styled.label`
  display: flex;
  flex-shrink: 0;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  background: var(--dark);
  margin-top: -100px;
  margin-bottom: 20px;
  position: relative;
  cursor: pointer;
  @media screen and (min-width: 576px) {
    margin-top: 0px;
  }
  @media screen and (min-width: 992px) {
    width: 170px;
    height: 170px;
  }
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  &::before {
    position: absolute;
    content: "";
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    visibility: hidden;
    transition: 0.3s all ease-in;
  }
  input {
    display: none;
  }
  .rounded-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    visibility: hidden;
  }

  &:hover {
    .rounded-icon,
    &::before {
      opacity: 1;
      visibility: visible;
    }
  }
`;
