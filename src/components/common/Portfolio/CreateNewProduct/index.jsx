import React from "react";
import { StyledCreateNewProduct } from "./CreateNewProduct.styles";
import Field from "@/components/molecules/Field";
import Select from "@/components/atoms/Select";
import Button from "@/components/atoms/Button";
import { IoAdd } from "react-icons/io5";
import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import UploadFile from "@/components/molecules/UploadFile";
import Form, { useForm } from "@/components/molecules/Form";

const CreateNewProduct = () => {
  const [form] = useForm();
  const handleSubmit = (e) => {
    console.log("e", e);
  };

  return (
    <StyledCreateNewProduct>
      <Form form={form} onSubmit={handleSubmit}>
        <span className="heading">Product Info:</span>
        <div className="input-grid">
          <Form.Item
            type="text"
            label="Product Name"
            name="productName"
            sm
            rounded
            placeholder="Product Name"
            rules={[
              {
                required: true,
                message: "Please enter Product Name",
              },
              {
                pattern: /^.{0,40}$/,
                message: "Please enter a valid Product Name",
              },
            ]}
          >
            <Field />
          </Form.Item>
          <Form.Item
            type="text"
            label="Investment Type"
            name="investmentType"
            sm
            rounded
            placeholder="Investment Type"
            rules={[
              {
                required: true,
                message: "Please enter Investment Type",
              },
            ]}
          >
            <Select
              options={[
                { label: "Properties", value: "properties" },
                { label: "Vehicles", value: "vehicles" },
              ]}
            />
          </Form.Item>

          <Form.Item
            type="text"
            label="Address"
            name="address"
            sm
            rounded
            placeholder="Please enter address"
            rules={[
              {
                required: true,
                message: "Please enter Address",
              },
              {
                pattern: /^.{0,256}$/,
                message: "Please enter a valid Address",
              },
            ]}
          >
            <Field label="Address" />
          </Form.Item>
          <Form.Item
            type="date"
            label="Deadline"
            name="deadline"
            sm
            rounded
            rules={[
              {
                required: true,
                message: "Please enter Deadline",
              },
            ]}
          >
            <Field />
          </Form.Item>
          <Form.Item
            type="text"
            label="KYC Level"
            name="kycLevel"
            sm
            rounded
            placeholder="KYC Level"
            rules={[
              {
                required: true,
                message: "Please enter KYC Level",
              },
            ]}
          >
            <Select
              options={[
                { label: "Level 0", value: "level0" },
                { label: "Level 1", value: "level1" },
                { label: "Level 2", value: "level2" },
              ]}
            />
          </Form.Item>
        </div>
        <div className="product-description">
          <div className="description-holder">
            <span className="heading">Product Description</span>
            <Form.Item
              type="text"
              label="Product Description"
              name="productDescription"
              sm
              rounded
              placeholder="Enter Text"
              rules={[
                {
                  required: true,
                  message: "Please enter Product Description",
                },
                {
                  pattern: /^.{0,256}$/,
                  message: "Product Description must be between 0 to 256",
                },
              ]}
            >
              <textarea />
            </Form.Item>
          </div>
          <div className="description-holder">
            <span className="heading">Why Invest in it?</span>
            <Form.Item
              type="text"
              label="Why Invest in it?"
              name="whyInvest"
              sm
              rounded
              placeholder="Enter Text"
              rules={[
                {
                  required: true,
                  message: "Please enter Description",
                },
                {
                  pattern: /^.{0,256}$/,
                  message: "Description must be between 0 to 256",
                },
              ]}
            >
              <textarea placeholder="Enter Text" />
            </Form.Item>
          </div>
        </div>
        <span className="heading">Upload Media</span>
        <div className="upload-image">
          <div className="upload">
            <Form.Item
              type="file"
              name="media1"
              sm
              rounded
              rules={[
                {
                  required: true,
                  message: "Please upload media",
                },
              ]}
            >
              <UploadFile
                id="firstImg"
                bg
                noMargin
                disc="image should be up to 1mb only"
                onChange={(e) => console.log(e)}
              />
            </Form.Item>
          </div>
          <div className="upload">
            <Form.Item
              type="file"
              name="media2"
              sm
              rounded
              rules={[
                {
                  // required: true,
                  message: "Please upload media",
                },
              ]}
            >
              <UploadFile
                id="SecondImg"
                bg
                noMargin
                disc="image should be up to 1mb only"
                onChange={(e) => console.log(e)}
              />
            </Form.Item>
          </div>
          <div className="upload">
            <Form.Item
              type="file"
              name="media3"
              sm
              rounded
              rules={[
                {
                  // required: true,
                  message: "Please upload media",
                },
              ]}
            >
              <UploadFile
                id="thirdImg"
                bg
                noMargin
                disc="image should be up to 1mb only"
                onChange={(e) => console.log(e)}
              />
            </Form.Item>
          </div>
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
            <Form.Item
              type="text"
              name="amentity1"
              sm
              rounded
              placeholder="Enter text"
              rules={[
                {
                  required: true,
                  message: "Please enter Amentity",
                },
                {
                  pattern: /^.{0,40}$/,
                  message: "Please enter a valid Amentity",
                },
              ]}
            >
              <Field noMargin />
            </Form.Item>
            <Form.Item
              type="text"
              name="amentity2"
              sm
              rounded
              placeholder="Enter text"
              rules={[
                {
                  pattern: /^.{0,40}$/,
                  message: "Please enter a valid Amentity",
                },
              ]}
            >
              <Field noMargin />
            </Form.Item>
            <Form.Item
              type="text"
              name="amentity3"
              sm
              rounded
              placeholder="Enter text"
              rules={[
                {
                  pattern: /^.{0,40}$/,
                  message: "Please enter a valid Amentity",
                },
              ]}
            >
              <Field noMargin />
            </Form.Item>
          </div>
        </div>
        <span className="heading">Investment Info:</span>
        <div className="input-grid">
          <Form.Item
            type="number"
            label="Minimum Backers"
            name="minBackers"
            sm
            rounded
            placeholder="01"
            rules={[
              {
                required: true,
                message: "Please enter Minimum Backers Limit",
              },
              {
                pattern: /^.{0,2}$/,
                message: "Please enter a valid Backers Limit",
              },
            ]}
          >
            <Field />
          </Form.Item>
          <Form.Item
            type="number"
            label="Maximum Backers"
            name="maxBackers"
            sm
            rounded
            placeholder="01"
            rules={[
              {
                required: true,
                message: "Please enter Maximum Backers Limit",
              },
              {
                pattern: /^.{0,2}$/,
                message: "Please enter a valid Backers Limit",
              },
            ]}
          >
            <Field />
          </Form.Item>
          <Form.Item
            type="number"
            label="Total Asset Value"
            name="assetValue"
            sm
            rounded
            placeholder="10"
            rules={[
              {
                required: true,
                message: "Please enter Total Asset Value",
              },
              {
                pattern: /^.{0,8}$/,
                message: "Please enter a valid Backers Limit",
              },
            ]}
          >
            <Field />
          </Form.Item>
          <Form.Item
            type="number"
            label="Min Investment"
            name="minInvestment"
            sm
            rounded
            placeholder="10"
            rules={[
              {
                required: true,
                message: "Please enter Minimum Investment Value",
              },
              {
                pattern: /^.{0,8}$/,
                message: "Please enter a valid Minimum Investment",
              },
            ]}
          >
            <Field />
          </Form.Item>
        </div>
        <Button type="primary" width="150px" sm rounded htmlType="submit">
          Create Product
        </Button>
      </Form>
    </StyledCreateNewProduct>
  );
};

export default CreateNewProduct;
