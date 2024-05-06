import React from "react";
import { StyledEditProductModal } from "./EditProductModal.styles";
import Field from "@/components/molecules/Field";
import Select from "@/components/atoms/Select";
import productImg1 from "../../../../_assets/product-img-1.png";
import productImg2 from "../../../../_assets/product-img-2.png";
import productImg3 from "../../../../_assets/product-img-3.png";
import Image from "next/image";
import Button from "@/components/atoms/Button";
import { IoAdd } from "react-icons/io5";

const EditProductModal = () => {
  const productDescription = [
    {
      heading: "Product Description",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies et mi quis scelerisque. Integer vitae posuere est, nec mollis diam. Donec feugiat eu mauris sed rutrum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam auctor gravida nulla. Curabitur eu congue augue.",
    },
    {
      heading: "Why Invest in it?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies et mi quis scelerisque. Integer vitae posuere est, nec mollis diam. Donec feugiat eu mauris sed rutrum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam auctor gravida nulla. Curabitur eu congue augue.",
    },
  ];
  return (
    <StyledEditProductModal>
      <span className="heading">Product Info:</span>
      <div className="input-grid">
        <Field label="Product Name" />
        <Select label="Investment Type" />
        <Field label="Address" />
        <Field type="datePicker" label="Deadline" />
        <Select label="KYC Level" />
      </div>
      <div className="product-description">
        {productDescription?.map((item, index) => (
          <div className="description-holder" key={index}>
            <span className="heading">{item.heading}</span>
            <div className="description">
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="product-media">
        <span className="heading">Product Media:</span>
        <div className="product-images">
          <div className="img-holder">
            <Image src={productImg1} alt="productImg1" />
          </div>
          <div className="img-holder">
            <Image src={productImg2} alt="productImg1" />
          </div>
          <div className="img-holder">
            <Image src={productImg3} alt="productImg1" />
          </div>
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
          <div className="product-property">
            <span>Grade A Property</span>
          </div>
          <div className="product-property">
            <span>Premium Collection</span>
          </div>
          <div className="product-property">
            <span>Grade A Property</span>
          </div>
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
        Save Changes
      </Button>
    </StyledEditProductModal>
  );
};

export default EditProductModal;
