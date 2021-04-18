import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import CustomLink from '../CustomLink';
import * as LABEL from '../../../constants/labels'

import './Styles.scss';

const HeroSliderItem = ({
  image,
  slug,
  title,
}) => {
  return (
    <div className="hero-slider-item">
      <div
        className="hero-slider-item__image"
        style={{
          backgroundImage: `url(${image})`
        }}
      />
      <div className="hero-slider-item__container wow fadeIn">
        <div className="row">
          <div className="column small-10 small-offset-1 medium-8 medium-offset-2 large-6 large-offset-3">
            <h2 className="hero-slider-item__title">{ title }</h2>
            <CustomLink
              to={`/project/${slug}`}
            >
              <Button
                className="hero-slider-item__button"
                label={LABEL.VIEW_PROJECT}
              />
            </CustomLink>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSliderItem.propTypes = {
  image: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default HeroSliderItem;
