import styled, { css } from "styled-components";
import { PaginationList } from "../../molecules/Pagination/Pagination.styles";

export const StyledTableLayout = styled.div`
  width: 100%;
  padding: 15px 10px;
  border-radius: 20px;
  border: 1px solid #d9d9d9;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2),
    -10px 10px 20px rgba(0, 0, 0, 0.2);
  margin: ${({ noNegativeMargin }) => (noNegativeMargin ? "" : "0 0 0")};
  background: var(--white);
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 20px;
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
    padding: 20px 0;
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

      .Search {
        height: 40px;
        width: 291px;
      }
    }

    @media (max-width: 992px) {
      .Search {
        width: 250px !important;
        height: 35px !important;
      }
    }

    @media (max-width: 800px) {
      flex-direction: column !important;
      gap: 16px;
      .actions {
        flex-direction: column !important;
        gap: 16px;
        .item {
          width: 100%;
        }
        .Search {
          width: 100% !important;
          height: 40px !important;
        }
      }
      .table-heading {
        margin: 0;
      }
    }
  }

  .inner-wrap {
    @media (max-width: 992px) {
      padding: 5px 20px 20px;
      border-radius: 10px;
      background: var(--gray-4);
      border-radius: 10px;
    }
    @media (max-width: 768px) {
      padding: 5px 10px 10px;
    }
    .pagination {
      /* background: var(--gray-4); */
      border-radius: 0 0 10px 10px;
      padding-bottom: 20px;
    }
  }
`;
