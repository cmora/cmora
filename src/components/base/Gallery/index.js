import React from 'react';
import Slider from "react-slick";
import { isValidArray } from '../../../utils';
import GalleryArrow from './GalleryArrow';

import './Styles.scss';

const Gallery = ({
  items,
}) => {
  if (!isValidArray(items)) return null;

  const SLIDER_SETTINGS = {
    arrows: true,
    dots: true,
    infinite: false,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 600,
    prevArrow: <GalleryArrow className="slick-arrow slick-prev" />,
    nextArrow: <GalleryArrow className="slick-arrow slick-next" />,
  };

  return (
    <div
      className="gallery-project"
    >
      <Slider {...SLIDER_SETTINGS}>
        {items.map(i => (
          <div key={i?.id} className="gallery-project__item">
            <div
              className="gallery-project__item-media"
              style={{
                backgroundImage: `url(${i.image})`
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
