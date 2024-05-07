import styled, { css } from "styled-components";
import { PaginationList } from "../../molecules/Pagination/Pagination.styles";

export const StyledTableLayout = styled.div`
  width: 100%;
  padding: 15px 10px;
  border-radius: 20px;
  border: none;
  box-shadow: none;
  margin: ${({ noNegativeMargin }) => (noNegativeMargin ? "" : "0 0 0")};
  background: var(--white);
  overflow: hidden;
  font-family: "Outfit", sans-serif;

  @media (min-width: 768px) {
    padding: 20px;
    border: 1px solid #d9d9d9;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.05),
      -10px 10px 20px rgba(0, 0, 0, 0.05);
  }

  ${({ noPagination }) =>
    noPagination &&
    css`
      ${PaginationList} {
        display: none;
      }
    `}

  .head {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 20px 0;
    font-family: "Outfit", sans-serif;
    .table-heading {
      display: block;
      font-size: 22px;
      line-height: 25px;
      font-weight: 500;
      text-transform: capitalize;
      margin: 0 0 15px;
    }
    .actions {
      display: flex;
      align-items: center;
      gap: 10px;
      font-family: "Outfit", sans-serif;
      .Search {
        height: 40px;
        width: 291px;
        input {
          color: rgba(49, 49, 49, 1);
          background-color: rgba(246, 248, 250, 1);
        }
      }
    }

    ${({ filterBlock }) =>
      filterBlock &&
      css`
        @media only screen and (max-width: 576px) {
          .actions {
            flex-direction: column;
            button {
              width: 100%;
            }
          }
        }
      `}

    .icon-div {
      display: flex;
      justify-content: center;
      width: 40px;
      height: 40px;
      background-color: rgba(246, 248, 250, 1);
      border-radius: 50px;
    }

    /* @media (max-width: 992px) {
      .Search {
        width: 250px !important;
        height: 35px !important;
      }
    } */
    @media only screen and (max-width: 992px) {
      flex-direction: column;
      align-items: center;
      .item {
        width: 100%;
      }
    }

    @media (max-width: 800px) {
      /* flex-direction: column !important; */
      gap: 10px;
      /* .actions {
        .Search {
          width: 100% !important;
          height: 40px !important;
        }
      } */
      .table-heading {
        margin: 0;
      }
    }
  }

  .inner-wrap {
    @media (max-width: 992px) {
      padding: 5px 20px 20px;
      border-radius: 10px;
      /* background: var(--gray-4); */
      border-radius: 100px;
    }
    @media (max-width: 768px) {
      padding: 5px 10px 10px;
    }
    .pagination {
      /* background: var(--gray-4); */
      /* border-radius: 0 0 10px 10px; */
    }
  }
`;
