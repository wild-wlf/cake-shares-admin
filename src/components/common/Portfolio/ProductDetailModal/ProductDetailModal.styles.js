import styled from "styled-components";

export const StyledProductDetailModal = styled.div`
  padding-top: 30px;
  .heading {
    display: block;
    font-size: 18px;
    line-height: 22px;
    font-weight: 500;
    margin-bottom: 10px;
  }
  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
    .heading {
      margin-bottom: 0;
    }
  }

  .product-info {
    width: 100%;
    display: flex;
    background: var(--gray-4);
    border-radius: 20px;
    padding: 30px 25px;
    margin-bottom: 15px;
    .col {
      padding: 0 26px;
      border-right: 1px solid var(--gray);
      &:nth-child(1) {
        padding-left: 0;
      }
      &:nth-last-child(1) {
        padding-right: 0;
        border-right: none;
      }
      .heading {
        font-weight: 400;
        margin-bottom: 8px;
      }
      .text {
        font-size: 14px;
        line-height: 18px;
        font-weight: 300;
      }
    }
  }

  .product-description {
    display: flex;
    gap: 20px;
    margin-bottom: 15px;

    .description-holder {
      max-width: 50%;
      .description {
        min-height: 200px;
        padding: 15px;
        border: 1px solid var(--gray-4);
        border-radius: 20px;
      }
    }
  }

  .product-media {
    .product-images {
      display: flex;
      gap: 12px;
      .img-holder {
        width: 33.33%;
        border-radius: 20px;
        overflow: hidden;
        img {
          display: block;
          width: 100%;
          height: auto;
        }
      }
    }
  }
`;
