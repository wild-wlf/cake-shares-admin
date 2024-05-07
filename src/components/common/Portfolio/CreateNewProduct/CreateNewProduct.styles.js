import styled from "styled-components";

export const StyledCreateNewProduct = styled.div`
  .heading {
    display: block;
    font-size: 18px;
    line-height: 22px;
    font-weight: 500;
    margin-bottom: 10px;
  }

  .input-grid {
    margin-bottom: 20px;
    @media (min-width: 576px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-columns: repeat(2, 1fr);
      column-gap: 20px;
    }
  }
  .product-description {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 20px;
    @media (min-width: 768px) {
      flex-direction: row;
    }

    .description-holder {
      @media (min-width: 768px) {
        width: 50%;
      }
      textarea {
        width: 100%;
        height: 200px;
        padding: 15px;
        border: 1px solid var(--gray-4);
        border-radius: 20px;
        outline: none;
        resize: none;
        @media (max-width: 991px) {
          font-size: 14px;
          line-height: 18px;
        }
      }
    }
  }
  .add-amenities-holder {
    margin-bottom: 20px;
    .add-amenities {
      margin-bottom: 16px;
      @media (min-width: 576px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      span {
        display: block;
        @media (max-width: 575px) {
          margin-bottom: 10px;
        }
      }
      .add-more {
        display: flex;
        align-items: center;
        color: var(--primary);
        cursor: pointer;
      }
    }

    .amenities {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
      @media (min-width: 768px) {
        justify-content: flex-start;
      }
    }
  }
`;
