import React from "react";
import { SelectRangeModalWrapper } from "./SelectRangeModal.style";
import DatePicker from "../../molecules/DatePicker";
import CalenderIcon from "../../../_assets/calander.svg";
import Image from "next/image";
import Button from "../Button";

const SelectRangeModal = () => {
  return (
    <SelectRangeModalWrapper>
      <div className="filter-div">
        <h5>Filter</h5>
        <div className="inner-container">
          <Image src={CalenderIcon} alt="Calender" />
          <div className="desc">
            <h6>Start Date</h6>
            <span>Add date</span>
          </div>
        </div>
        <div className="inner-container">
          <Image src={CalenderIcon} alt="Calender" />
          <div className="desc">
            <h6>End Date</h6>
            <span>Add date</span>
          </div>
        </div>
        <div className="btn-wrapper">
          <Button sm rounded btntype={"green"}>
            Apply
          </Button>
          <Button sm rounded btntype={"cancel"}>
            Reset
          </Button>
        </div>
      </div>
      <div className="date-picker">
        <DatePicker
          inline
          //   {...inputProps}
          //   prefix={prefix}
          //   $invalid={invalid || error}
        />
      </div>
    </SelectRangeModalWrapper>
  );
};

export default SelectRangeModal;
