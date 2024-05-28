import React from "react";
import { StyledProductDetailModal } from "./ProductDetailModal.styles";
import Button from "@/components/atoms/Button";
import bellIcon from "../../../../_assets/bell-icon.svg";
import Image from "next/image";
import productImg1 from "../../../../_assets/product-img-1.png";
import productImg2 from "../../../../_assets/product-img-2.png";
import productImg3 from "../../../../_assets/product-img-3.png";
import {daysLeft, formatDateWithSuffix} from "@/helpers/common";

const ProductDetailModal = ({data}) => {
    console.log(data);
    const infoData = [
        {
            heading: "Product Name:",
            text: data?.productName ? data.productName : "---------------",
        },
        {
            heading: "Investment Type:",
            text: data.investmentType,
        },
        {
            heading: "Address:",
            text: data?.address,
        },
        {
            heading: "Deadline:",
            text: `(${formatDateWithSuffix(data?.deadline)} / ${daysLeft(data?.deadline)} left) `,
        },
        {
            heading: "KYC Level:",
            text: `Level ${data?.kycLevel} Required`,
        },
    ];
    const investmentData = [
        {
            heading: "Return Rate (%):",
            text: "30%",
        },
        {
            heading: "Funding Ratio:",
            text: "56%",
        },
        {
            heading: "Minimum Backers:",
            text: "01",
        },
        {
            heading: "Maximum Backers:",
            text: "20",
        },
        {
            heading: "Annual Cost:",
            text: "$2,000",
        },
        {
            heading: "Min Investment:",
            text: "$5,000",
        },
        {
            heading: "Total Asset Value",
            text: "$2,000,000",
        },
    ];
    const productDescription = [
        {
            heading: "Product Description",
            text: data?.description,
        },
        {
            heading: "Why Invest in it?",
            text: data?.investmentReason,
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
                    {data?.media?.map((item, index) => (
                        <div className="img-holder" key={index}>
                            <Image src={item} alt="productImg1" width={319} height={191} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="amenities-holder">
                <span className="heading">Amenities:</span>
                <div className="amenities">
                    {data?.amenities.map((item, index) => (
                        <div className="product-property" key={index}>
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="product-info investment-info">
                {investmentData?.map((item, index) => (
                    <div className="col" key={index}>
                        <span className="heading">{item.heading}</span>
                        <span className="text">{item.text}</span>
                    </div>
                ))}
            </div>
        </StyledProductDetailModal>
    );
};

export default ProductDetailModal;
