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

  .table-heading {
    display: block;
    font-size: 22px;
    line-height: 25px;
    font-weight: 500;
    text-transform: capitalize;
    margin: 0 0 15px;
  }
  .head {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    .actions {
      display: flex;
      align-items: center;
      gap: 10px;
      .item {
        position: relative;
      }
      .icon {
        position: absolute;
        right: 20px;
        top: 12px;
      }
      .icon {
      }
      .Search {
        background-color: #f6f8fa;
        height: 40px;
        width: 291px;
        border-radius: 100px;
        border: none;
        outline: none;
        padding: 0px 27px;
        font-size: 12px;
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
