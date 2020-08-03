import React, { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';
import HeroContainer from '../../base/HeroContainer';
import { isValidArray } from '../../../utils';

import './Styles.scss';

const Hero = ({
  size,
  loading,
  title,
  label,
  extraInfo,
  image,
}) => {

  const [bgPosition, setBgPosition] = useState(0);
  const velocityBG = 0.6;

  const handleScroll = debounce(e => {
    const sp = window.scrollY;
    setBgPosition(Math.round((sp) * velocityBG));
  }, 8);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <HeroContainer
      loading={loading}
      size={size}
    >
      <div className="hero-block">
        {image && (
          <div
            className="hero-block__image"
            style={{
              backgroundImage: `url(${image})`,
              backgroundPositionY: `${bgPosition}px`,
            }}
          />
        )}
        <div className="hero-block__container">
          <div className="row">
            <div className="column small-10 small-offset-1 medium-8 medium-offset-2 large-6 large-offset-3">
              {title && (
                <h1 className="hero-block__title">{ title }</h1>
              )}
              {label && (
                <h5 className="hero-block__label">{ label }</h5>
              )}
              {isValidArray(extraInfo) && (
                <div className="hero-block__extra">
                  {extraInfo.map(({ title, desc }) => (
                    <div key={title}>
                      <strong>{title}</strong>
                      { desc }
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </HeroContainer>
  );
};

export default Hero;
