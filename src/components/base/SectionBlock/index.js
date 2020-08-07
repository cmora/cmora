import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { HERO_SIZES } from '../../../constants';

import './Styles.scss';

const SectionBlock = ({
  title,
  children,
  size,
  full,
  dark,
}) => {

  return (
    <div className={
      classnames(
        'section-block',
        {
          'section--full-width': full,
          'section--dark': dark,
        }
      )
    }>
      {title && <h2 className="section-block__title">{ title }</h2>}
      {children && (
        <div className="section-block__container">
          <div className="row">
            <div className={classnames(
              'column',
              {
                'medium-10 medium-offset-1 large-8 large-offset-2 align-center': size === HERO_SIZES.SMALL,
                'column large-10 large-offset-1 align-center': size === HERO_SIZES.MEDIUM,
                'large-12': size === HERO_SIZES.LARGUE,
              }
            )}>
              { children }
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

SectionBlock.propTypes = {
  children: PropTypes.element.isRequired,
  size: PropTypes.oneOf([HERO_SIZES.SMALL, HERO_SIZES.MEDIUM, HERO_SIZES.LARGUE]),
  title: PropTypes.string,
  full: PropTypes.bool,
  dark: PropTypes.bool,
}

SectionBlock.defaultProps = {
  size: HERO_SIZES.LARGUE,
  full: false,
  dark: false
}

export default SectionBlock;