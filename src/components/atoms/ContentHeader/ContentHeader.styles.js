import styled from 'styled-components';

export const SectionHeader = styled.div`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  color: var(--dark);
  padding: 5px 0 15px;

  @media (min-width: 768px) {
    padding: 20px 15px;
  }
  @media (min-width: 992px) {
    display: flex;
  }

  .heading-holder {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0 0 10px;

    @media (min-width: 768px) {
      margin: 0;
    }

    .button-holder {
      display: flex;
      gap: 10px;

      button {
        font-size: 12px;
        line-height: 16px;
        color: var(--white);
        padding: 10px 14px;
        border-radius: 50px;
        transition: 0.4s;

        &:hover,
        &.active {
          background: var(--primary);
        }
      }
    }
  }
  .title-holder {
    display: flex;
    align-items: center;
    gap: 10px;
    .title {
      font-size: 18px;
      line-height: 22px;
      font-weight: 500;
    }
    .back-arrow {
      width: 25px;
      height: 25px;
      cursor: pointer;
    }
  }

  h1 {
    font-size: 18px;
    line-height: 22px;
    font-weight: 500;
    margin: 0;

    @media (min-width: 768px) {
      font-size: 22px;
      line-height: 25px;
    }

    span {
      display: block;
      font-size: 16px;
      line-height: 20px;
      text-transform: capitalize;
      font-weight: 300;

      @media (min-width: 768px) {
        font-size: 20px;
        line-height: 23px;
      }
    }
  }
  .btn-input {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (min-width: 768px) {
      align-items: center;
      flex-direction: row;
      gap: 16px;
    }
  }

  .btn-holder {
    display: inline-flex;
    align-items: center;
    gap: 16px;

    @media (min-width: 768px) {
    }
  }
`;
export const Sort = styled.div`
  position: relative;
  &.active {
    .sort-list {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .sort-list {
    position: absolute;
    top: 50px;
    right: 0;
    transform: translateY(50px);
    transition: all 0.3s ease-in-out;
    opacity: 0;
    z-index: 1;
    .list {
      width: 160px;
      padding: 15px;
      border-radius: 15px;
      background: var(--white);
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      span {
        display: block;
        color: var(--matte-black);
      }
    }
  }
`;
