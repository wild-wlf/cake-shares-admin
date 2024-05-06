import styled from "styled-components";

export const CategoriesWrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: var(--font-size-xl);
    font-weight: 500;
  }

  .slick-track {
    display: flex;
    gap: 10px;
    max-width: 100%;
    padding: 20px 0 50px 0;

    @media (min-width: 992px) {
      padding: 20px 0 70px 0;
    }
    @media (min-width: 576px) {
      gap: 20px;
      /* margin: 0 -20px; */
    }
    .slick-slide {
      width: 100%;
      max-width: 221px;
    }
  }
  .slider {
    width: 100%;
    .slick-arrow.slick-next,
    .slick-arrow.slick-prev {
      background-color: #4e6199;
      background-position: center;
      background-size: 8px 10px;
      background-repeat: no-repeat;
      border-radius: 21px;
      width: 20px;
      height: 20px;
      border-radius: 100%;
      position: absolute;
      z-index: 1;
      top: -10px;
      @media (min-width: 992px) {
        background-size: 10px 12px;
      }
      @media (min-width: 576px) {
        width: 26px;
        height: 26px;
      }
    }
    .slick-arrow.slick-next {
      background-image: url(${(props) => props.image.src});
      right: 0;
    }
    .slick-arrow.slick-next {
      background-image: url(${(props) => props.image.src});
      right: 0;
    }
    .slick-arrow.slick-prev {
      background-image: url(${(props) => props.image.src});
      left: auto;
      transform: rotate(180deg);
      top: -20px;
      right: 25px;
      @media (min-width: 576px) {
        top: -23px;
        right: 36px;
      }
    }
    .slick-next:before,
    .slick-prev:before {
      opacity: 0;
    }
    .slick-next:after,
    .slick-prev:after {
      opacity: 0;
    }
    .slick-next:hover:before,
    .slick-prev:hover:before {
      opacity: 0;
    }
    .slick-next:hover:after,
    .slick-prev:hover:after {
      opacity: 0;
    }
    .slick-disabled {
      background-color: #cdcdcd !important;
    }
  }

  @media only screen and (max-width: 576px) {
    .title {
      font-size: var(--h5-font-size);
      font-weight: 500;
    }
  }
`;
