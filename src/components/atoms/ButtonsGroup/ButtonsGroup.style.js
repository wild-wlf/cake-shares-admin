import styled from 'styled-components';

export const ButtonsGroupWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .btn-Wrapper {
    display: flex;
    background-color: rgba(249, 250, 251, 1);
    border-radius: 50px;
    padding: 2px 0px 2px 2px;
    gap: 5px;
  }
  h1 {
    font-size: 22px;
    font-weight: 600;
  }

  @media (max-width: 992px) {
    flex-direction: column;
  }
  .button {
    width: 100%;
    color: rgba(49, 49, 49, 1);
    background-color: rgba(249, 250, 251, 1);

    @media (max-width: 768px) {
      padding: 7px 5px;
      gap: 5px;
    }
    &.active {
      background-color: rgba(64, 143, 140, 1);
      color: #fff;
    }
  }
`;
