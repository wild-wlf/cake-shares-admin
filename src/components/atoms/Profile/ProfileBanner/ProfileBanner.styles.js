import styled from 'styled-components';

export const StyledProfileBanner = styled.div`
  position: relative;
  min-height: 550px;
  background: linear-gradient(180deg, #000 38.78%, rgba(0, 0, 0, 0) 78.11%),
    ${({ $image }) => $image && `url(${$image})`} lightgray 50%;
  background-size: cover;

  background-position: center;
  background-repeat: no-repeat;
  background-color: var(--dark);
  margin: -95px -15px 15px -15px;
  padding: 0 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: 'Oleo Script';
  color: var(--white);
  border-bottom-left-radius: 560px 250px;
  border-bottom-right-radius: 560px 250px;
  @media screen and (min-width: 576px) {
    background-image: ${({ $image }) => $image && `url(${$image}) `};
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    margin: 30px -15px 15px -15px;
    min-height: 306px;
  }
  @media screen and (min-width: 1300px) {
    margin: 30px -50px 15px -50px;
  }
  .title {
    display: block;
    max-width: 216px;
    margin: 0 auto 15px;
    font-size: 26px;
    line-height: 30px;
    font-weight: 700;
    text-align: center;
    @media screen and (min-width: 992px) {
      font-size: 42px;
      line-height: 58.09px;
      max-width: 334px;
    }
  }
  button {
    bottom: 20px;
    right: 50px;
    color: var(--white);
    padding: 10px 24px;
    cursor: pointer;
    border-radius: 60px;
    background: rgba(117, 131, 135, 0.5);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    @media screen and (min-width: 576px) {
      position: absolute;
      z-index: 5;
      right: 70px;
    }
    input {
      display: none;
    }

    label {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 12px;
    }
  }
  .rounded-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.5);
  }
`;
