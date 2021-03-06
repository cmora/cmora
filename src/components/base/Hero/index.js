import React from 'react';
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
            </div>
          </div>
          {isValidArray(extraInfo) && (
            <div className="hero-block__extra-container">
              <div className="row">
                <div className="column">
                  <div className="hero-block__extra">
                    {extraInfo.map(({ title, desc }) => (
                      <div className="hero-block__extra-item" key={title}>
                        {title && (<strong>{title} {desc && ' / '}</strong>)}
                        {desc && desc}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </HeroContainer>
  );
};

export default Hero;
