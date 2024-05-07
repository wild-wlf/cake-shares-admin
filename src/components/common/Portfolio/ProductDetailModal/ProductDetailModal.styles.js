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
    margin-bottom: 15px;
    @media (min-width: 576px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .heading {
      margin-bottom: 10;
      @media (min-width: 576px) {
        margin-bottom: 0;
      }
    }
    button {
      width: 100%;
      @media (min-width: 576px) {
        width: initial;
      }
    }
  }

  .product-info {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background: var(--gray-4);
    border-radius: 20px;
    padding: 20px;
    margin-bottom: 15px;
    @media (min-width: 992px) {
      flex-wrap: nowrap;
      justify-content: space-between;
      padding: 30px 25px;
    }

    .col {
      padding: 0 15px;
      position: relative;
      @media (max-width: 991px) {
        width: 33.33%;
        border: 1px solid var(--gray);
        margin: 0 0 -1px -1px;
        padding: 10px;
        text-align: center;
      }
      @media (max-width: 575px) {
        width: 50%;
        padding: 5px;
      }

      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: -13px;
        width: 1px;
        height: 47px;
        background: var(--gray);
        @media (max-width: 991px) {
          display: none;
        }
      }
      &:first-child {
        @media (min-width: 991px) {
          padding-left: 0;
        }
        &:before {
          display: none;
        }
      }
      &:last-child {
        @media (min-width: 991px) {
          padding-right: 0;
        }
      }

      .heading {
        font-size: 16px;
        line-height: 20px;
        font-weight: 400;
        margin-bottom: 5px;
      }
      .text {
        font-size: 14px;
        line-height: 17px;
        font-weight: 300;
      }
    }
  }

  .product-description {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 15px;
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
    margin-bottom: 16px;
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

  .amenities-holder {
    background: var(--gray-4);
    border-radius: 20px;
    padding: 20px;
    margin-bottom: 20px;
    @media (min-width: 768px) {
      padding: 30px 25px;
    }

    .amenities {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 15px;
      @media (min-width: 768px) {
        justify-content: flex-start;
      }

      .product-property {
        background: var(--white);
        padding: 8px 18px;
        border-radius: 60px;
        box-shadow: 0px 0px 5.787px 0px rgba(0, 0, 0, 0.1);
        @media (max-width: 575px) {
          width: 100%;
          text-align: center;
          padding: 8px 15px;
          font-size: 14px;
          line-height: 18px;
        }
      }
    }
  }

  .investment-info {
    .col {
      padding: 5px;
      @media (min-width: 576px) {
        padding: 10px;
      }
      @media (min-width: 992px) {
        padding: 0 10px;
      }

      &:before {
        left: -3px;
      }
    }
  }
`;
