import React from "react";
import { StyledCreateNewProduct } from "./CreateNewProduct.styles";
import Field from "@/components/molecules/Field";
import Select from "@/components/atoms/Select";
import Button from "@/components/atoms/Button";
import { IoAdd } from "react-icons/io5";
import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import UploadFile from "@/components/molecules/UploadFile";

const CreateNewProduct = () => {
  return (
    <StyledCreateNewProduct>
      <span className="heading">Product Info:</span>
      <div className="input-grid">
        <Field label="Product Name" />
        <Select label="Investment Type" />
        <Field label="Address" />
        <Field type="datepicker" suffix={<FaCalendarAlt />} label="Deadline" />
        <Select label="KYC Level" />
      </div>
      <div className="product-description">
        <div className="description-holder">
          <span className="heading">Product Description</span>
          <textarea placeholder="Enter Text" />
        </div>
        <div className="description-holder">
          <span className="heading">Why Invest in it?</span>
          <textarea placeholder="Enter Text" />
        </div>
      </div>
      <div>
        <UploadFile />
      </div>
      <div className="add-amenities-holder">
        <span className="heading">Investment Info:</span>
        <div className="add-amenities">
          <span>You can add up to 10 amenities only!</span>
          <div className="add-more">
            <IoAdd />
            <span>Add more</span>
          </div>
        </div>
        <div className="amenities">
          <Field placeholder="Enter text" />
          <Field placeholder="Enter text" />
          <Field placeholder="Enter text" />
        </div>
      </div>
      <span className="heading">Investment Info:</span>
      <div className="input-grid">
        <Field label="Minimum Backers" placeholder="01" />
        <Field label="Maximum Backers" placeholder="20" />
        <Field label="Total Asset Value" placeholder="$2,000,000" />
        <Field label="Min Investment" placeholder="$5,000" />
      </div>
      <Button type="primary" width="150px" sm rounded>
        Create Product
      </Button>
    </StyledCreateNewProduct>
  );
};

export default CreateNewProduct;
