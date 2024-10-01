import React from 'react';
import { StyledMediaSlide } from './ChatMedia.styles';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import property from '../../../../_assets/property.png';
import Image from 'next/image';

const MediaSlide = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          fade: true,
        },
      },
    ],
  };
  const media = [
    {
      img: property,
      video: true,
    },
    {
      img: property,
      video: true,
    },
    {
      img: property,
      video: true,
    },
    {
      img: property,
      video: true,
    },
    {
      img: property,
      video: true,
    },
    {
      img: property,
      video: true,
    },
    {
      img: property,
      video: true,
    },
    {
      img: property,
      video: true,
    },
    {
      img: property,
      video: true,
    },
    {
      img: property,
      video: true,
    },
    {
      img: property,
      video: true,
    },
    {
      img: property,
      video: true,
    },
    {
      img: property,
      video: true,
    },
    {
      img: property,
      video: true,
    },
    {
      img: property,
      video: true,
    },
    {
      img: property,
      video: true,
    },
  ];
  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };
  const mediaChunks = chunkArray(media, 6);
  return (
    <StyledMediaSlide>
      {/* <label className="slideTitle">Photos & Multimedia</label>
      <Slider {...settings}>
        {mediaChunks.map((chunk, index) => (
          <div className="col-wrapper" key={index}>
            {chunk.map((item, itemIndex) => (
              <div className="col" key={itemIndex}>
                <Image src={item.img} alt={`property-${itemIndex}`} />
              </div>
            ))}
          </div>
        ))}
      </Slider> */}
    </StyledMediaSlide>
  );
};

export default MediaSlide;
