import styled from "styled-components";
import Form from "@/components/molecules/Form/Form";

export const StyledEditForm = styled(Form)`
  padding-top: 30px;
  .combine-fields {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    column-gap: 30px;

    @media screen and (min-width: 624px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  .fake-label {
    display: block;
    gap: 10px;
    margin-top: 30px;
    margin-bottom: 15px;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
    cursor: pointer;
    img {
      margin-left: 8px;
    }
  }
  .subTitle {
    display: block;
    margin-bottom: 15px;
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
    text-align: left;
    @media screen and (min-width: 500px) {
      font-size: 24px;
      line-height: 30px;
    }
  }
  .buttonWrap {
    width: 100%;
    button {
      &:first-child {
        margin-bottom: 10px;
      }
    }
    @media screen and (min-width: 500px) {
      display: flex;
      gap: 15px;
      button {
        &:first-child {
          margin-bottom: 0px;
        }
      }
    }
  }
  .discreption {
    display: block;
    margin-bottom: 15px;
  }
`;
