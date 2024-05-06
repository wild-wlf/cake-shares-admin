import styled from "styled-components";

export const StyledEditProductModal = styled.div`
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
        max-width: 50%;
      }
      .description {
        min-height: 200px;
        padding: 15px;
        border: 1px solid var(--gray-4);
        border-radius: 20px;
        @media (max-width: 991px) {
          font-size: 14px;
          line-height: 18px;
        }
      }
    }
  }

  .product-media {
    margin-bottom: 20px;
    .product-images {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 12px;
      @media (min-width: 768px) {
        flex-wrap: nowrap;
      }
      .img-holder {
        width: 100%;
        border-radius: 20px;
        overflow: hidden;
        @media (min-width: 576px) {
          width: 48%;
        }
        @media (min-width: 768px) {
          width: 33.33%;
        }
        img {
          display: block;
          width: 100%;
          height: auto;
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

      .product-property {
        background: var(--white);
        border: 1px solid #f1f1f1;
        border-radius: 60px;
        padding: 10px 23px;

        @media (max-width: 575px) {
          padding: 8px 15px;
          font-size: 14px;
          line-height: 18px;
        }
      }
    }
  }
`;
