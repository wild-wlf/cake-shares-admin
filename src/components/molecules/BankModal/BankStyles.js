import styled from "styled-components";

export const Container = styled.div`
  .ProfilePicture {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 16px;
  }
  .Heading {
    padding: 26px 0;
    font-size: 20px;
    font-weight: 300;
  }
  .feildContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 26px;
    .wrapper {
      width: 48%;
    }
    .fullWidth {
      width: 100%;
    }
  }

  @media (max-width: 580px) {
    .Heading {
      font-size: 17px;
    }
    .feildContainer {
      flex-direction: column;
      align-items: flex-start;
      padding-bottom: 16px;
      gap: 16px;
      .wrapper {
        width: 100%;
      }
    }
  }
`;
