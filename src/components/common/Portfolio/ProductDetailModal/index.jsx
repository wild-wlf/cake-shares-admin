import React from 'react';
import { StyledProductDetailModal } from './ProductDetailModal.styles';
import Button from '@/components/atoms/Button';
import bellIcon from '../../../../_assets/bell-icon.svg';
import Image from 'next/image';
import { convertToCurrencyFormat, daysLeft, formatDateWithSuffix } from '@/helpers/common';

const ProductDetailModal = ({ data, setProductAdvertiseModal, setSelectedProduct }) => {
  const getRemainingDays = targetDate => {
    const target = new Date(targetDate);
    const now = new Date();
    const differenceInTime = target.getTime() - now.getTime();
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
  };

  const remainingDays = getRemainingDays(data?.endTime[0]);

  const infoData = [
    {
      heading: 'Product Name:',
      text: data?.productName ? data.productName : '---------------',
    },
    {
      heading: 'Investment Type:',
      text: data.investmentType?.name,
    },
    {
      heading: 'Address:',
      text: data?.address,
    },
    {
      heading: 'Deadline:',
      text: `(${formatDateWithSuffix(data?.deadline)} / ${daysLeft(data?.deadline)} left) `,
    },
    {
      heading: 'KYC Level:',
      text: `Level ${data?.kycLevel} Required`,
    },
  ];
  const investmentData = [
    {
      heading: 'Return Rate (%):',
      text: '0%',
    },
    {
      heading: 'Funding Ratio:',
      text: '0%',
    },
    {
      heading: 'Minimum Backers:',
      text: data?.minimumBackers,
    },
    {
      heading: 'Maximum Backers:',
      text: data?.isInfiniteBackers ? 'Infinite' : data?.maximumBackers,
    },
    {
      heading: 'Annual Cost:',
      text: '$0.00',
    },
    {
      heading: 'Min Investment:',
      text: `${convertToCurrencyFormat(data?.minimumInvestment)}`,
    },
    {
      heading: 'Total Asset Value:',
      text: `${convertToCurrencyFormat(data?.assetValue)}`,
    },
    ...(data?.remainingAdvertisementDays
      ? [
          {
            heading: 'Advertised Remaining Days:',
            text: `${data.remainingAdvertisementDays}`,
          },
        ]
      : []),
  ];
  const productDescription = [
    {
      heading: 'Product Description',
      text: data?.description,
    },
    {
      heading: 'Why Invest in it?',
      text: data?.investmentReason,
    },
  ];
  return (
    <StyledProductDetailModal>
      <div className="head">
        <span className="heading">Product Info:</span>

        {data && !data?.isAdvertised && data?.isVerified && data?.valueRaised !== data?.assetValue && (
          <Button
            disabled={new Date() > new Date(data?.deadline)}
            onClick={() => {
              setProductAdvertiseModal(true);
              setSelectedProduct(data);
            }}
            type="primary"
            width="300"
            rounded
            sm>
            <Image src={bellIcon} alt="bellIcon" />
            Product Advertisement
          </Button>
        )}
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
      {data?.media && data?.media?.length > 0 && (
        <div className="product-media">
          <span className="heading">Product Media:</span>
          <div className="product-images">
            {data?.media?.map((item, index) =>
              item ? (
                item.endsWith('.mp4') ? (
                  <video key={index} width={319} height={191} autoPlay>
                    <source src={item} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image key={index} src={item} alt="productImg1" width={319} height={191} />
                )
              ) : null,
            )}
          </div>
        </div>
      )}
      {data?.amenities && data?.amenities?.length > 0 && (
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
      )}
      <div className="product-info investment-info">
        {investmentData?.map((item, index) => (
          <div className="col" key={index}>
            <span className="heading">{item.heading}</span>
            <span className="text">{item.text}</span>
          </div>
        ))}
      </div>
      <div className="product-description">
        {data?.declineReason && (
          <div className="description-holder">
            <span className="heading">Approval Request Decline Reason</span>
            <div className="description">
              <p>{data?.declineReason}</p>
            </div>
          </div>
        )}
        {data?.editRequestDeclineReason && (
          <div className="description-holder">
            <span className="heading">Edit Request Decline Reason</span>
            <div className="description">
              <p>{data?.editRequestDeclineReason}</p>
            </div>
          </div>
        )}
      </div>
    </StyledProductDetailModal>
  );
};

export default ProductDetailModal;
