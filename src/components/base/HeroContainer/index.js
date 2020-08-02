import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useDispatch } from 'react-redux';
import { setSticky } from '../../../store/slices/page/page-slice';
import LoaderSpiner from '../LoaderSpiner';
import { HERO_SIZES  } from '../../../constants';

import './Styles.scss';

const HeroContainer = ({
  children,
  loading,
  size,
}) => {
  const dispatch = useDispatch();
  const element = useRef();

  useEffect(() => {
    const onchange = (entries) => {
      const el = entries[0];
      if (el && !el.isVisible && !el.isIntersecting) {
        dispatch(setSticky(true));
      } else {
        dispatch(setSticky(false));
      }
    }

    const observer = new IntersectionObserver(onchange, {
      rootMargin: `0px`,
    });

    observer.observe(element.current);

    return () => observer.disconnect();
  }, [dispatch]);

  return (
    <div
      className={classnames(
        'hero-container',
        `hero-size-${size}`,
      )}
      ref={element}
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
