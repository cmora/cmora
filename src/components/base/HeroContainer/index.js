import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import LoaderSpiner from '../LoaderSpiner';
import { HERO_SIZES  } from '../../../constants';


import './Styles.scss';

const HeroContainer = ({
  children,
  loading,
  size,
}) => {
  return (
    <div
      className={classnames(
        'hero-container',
        `hero-size-${size}`,
      )}
    >
      {loading ? (
        <LoaderSpiner />
      ) : (
        children
      )}
    </div>
  );
};

HeroContainer.propTypes = {
  children: PropTypes.element.isRequired,
  loading: PropTypes.bool.isRequired,
  size: PropTypes.oneOf([HERO_SIZES.LARGE, HERO_SIZES.MEDIUM, HERO_SIZES.SMALL]),
};

HeroContainer.defaultProps = {
  size: HERO_SIZES.LARGE,
}

export default HeroContainer;
