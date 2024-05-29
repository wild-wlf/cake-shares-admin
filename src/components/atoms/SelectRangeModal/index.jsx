import React, {useState} from "react";
import {SelectRangeModalWrapper} from "./SelectRangeModal.style";
import DatePicker from "../../molecules/DatePicker";
import CalenderIcon from "../../../_assets/calander.svg";
import Image from "next/image";
import Button from "../Button";
import {format} from "date-fns";

const SelectRangeModal = ({startDate, endDate, onChange, onApplyDate, onClearDate}) => {
    return (
        <SelectRangeModalWrapper>
            <div className="filter-div">
                <h5>Filter</h5>
                <div className="inner-container">
                    <Image src={CalenderIcon} alt="Calender" />
                    <div className="desc">
                        <h6>Start Date</h6>
                        <span>{startDate ? format(startDate, "yyyy-MM-dd") : "Add Date"}</span>
                    </div>
                </div>
                <div className="inner-container">
                    <Image src={CalenderIcon} alt="Calender" />
                    <div className="desc">
                        <h6>End Date</h6>
                        <span>{endDate ? format(endDate, "yyyy-MM-dd") : "Add Date"}</span>
                    </div>
                </div>
                <div className="btn-wrapper">
                    <Button onClick={onApplyDate} sm rounded btntype={"green"}>
                        Apply
                    </Button>
                    <Button onClick={onClearDate} disable={!startDate && !endDate} sm rounded btntype={"cancel"}>
                        Reset
                    </Button>
                </div>
            </div>
            <div className="date-picker">
                <DatePicker
                    selected={startDate}
                    onChange={onChange}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                    selectsDisabledDaysInRange
                    inline
                />
            </div>
        </SelectRangeModalWrapper>
    );
};

export default SelectRangeModal;
