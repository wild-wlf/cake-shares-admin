import React, { useState } from "react";
// import Filters from '../../../pages/common/filters';
import TableHeader from "../TableHeader";
import Pagination from "../../molecules/Pagination";
import { StyledTableLayout } from "./TableLayout.styles";
import Button from "../Button";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import Field from "@/components/molecules/Field";

function TableLayout({
  children,
  currentPage = 1,
  pageSize = 10,
  totalCount = 0,
  onChangeFilters,
  customFilterKey = "",
  exportBtn,
  createBtn,
  extraFilters,
  filters = false,
  noNegativeMargin,
  onOptionClick,
  resetFilter = false,
  tableHeading,
  noPagination,
  placeholder,
  btnType,
  btnText,
  btnImg,
  btnWidth,
  iconImg,
  openModal,
  setResetFilter = () => {},
}) {
  const [filterState, setFilterState] = useState("");
  return (
    <>
      {/* {filters && (
        <Filters
          resetFilter={resetFilter}
          setResetFilter={setResetFilter}
          onChangeFilters={_ => {
            onChangeFilters({ ..._, page: 1 });
            setFilterState(_);
          }}
          customFilterKey={customFilterKey}
          extraFilters={extraFilters}
          onOptionClick={onOptionClick}
        />
      )} */}
      <StyledTableLayout
        noNegativeMargin={noNegativeMargin}
        noPagination={noPagination}
      >
        <div className="head">
          {tableHeading && (
            <strong className="table-heading">{tableHeading}</strong>
          )}
          <div className="actions">
            {placeholder && (
              <div className="item">
                <div className="Search">
                  <Field
                    type="search"
                    rounded
                    sm
                    name="search"
                    placeholder={placeholder}
                    suffix={<CiSearch className="icon" />}
                  />
                </div>
              </div>
            )}
            {btnText && (
              <Button
                rounded
                width={btnWidth ? btnWidth : "100%"}
                sm
                btntype={btnType}
                onClick={openModal}
              >
                {btnText}
                <Image src={btnImg} />
              </Button>
            )}
            {iconImg && (
              <div className="icon-div">
                <Image src={iconImg} />
              </div>
            )}
          </div>
        </div>

        <div className="inner-wrap">
          <TableHeader
            total={totalCount}
            page={currentPage}
            resultPerPage={pageSize}
            setPageSize={(_) => onChangeFilters({ pageSize: _, page: 1 })}
            exportBtn={exportBtn}
            createBtn={createBtn}
          />
          {children}
          <div className="pagination">
            <Pagination
              currentPage={currentPage}
              totalCount={totalCount}
              pageSize={pageSize}
              // onPageChange={_ => onChangeFilters({ page: _ })}
              // onPageChange={_ => onChangeFilters({ filter: filterState.filter, page: _ })}
            />
          </div>
        </div>
      </StyledTableLayout>
    </>
  );
}

export default TableLayout;
