import React from "react";
import { StyledProductDetailModal } from "./ProductDetailModal.styles";
import Button from "@/components/atoms/Button";
import bellIcon from "../../../../_assets/bell-icon.svg";
import Image from "next/image";
import productImg1 from "../../../../_assets/product-img-1.png";
import productImg2 from "../../../../_assets/product-img-2.png";
import productImg3 from "../../../../_assets/product-img-3.png";

const ProductDetailModal = () => {
  const infoData = [
    {
      heading: "Product Name:",
      text: "Egypt Gov. Property",
    },
    {
      heading: "Investment Type:",
      text: "Property",
    },
    {
      heading: "Address:",
      text: "Sector 9, Faiyum, Egypt",
    },
    {
      heading: "Deadline:",
      text: "(12th March, 2024 / 05 days left)",
    },
    {
      heading: "KYC Level:",
      text: "Level 3 Required",
    },
  ];
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
    <StyledProductDetailModal>
      <div className="head">
        <span className="heading">Product Info:</span>
        <Button type="primary" width="300" rounded sm>
          <Image src={bellIcon} alt="bellIcon" />
          Product Advertised
        </Button>
      </div>
      <div className="product-info">
        {infoData?.map((item, index) => (
          <div className="col" key={index}>
            <span className="heading">{item.heading}</span>
            <span className="text">{item.text}</span>
          </div>
        ))}
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
    </StyledProductDetailModal>
  );
};

export default ProductDetailModal;
