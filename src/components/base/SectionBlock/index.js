import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Styles.scss';

const SectionBlock = ({
  title,
  children,
  size,
}) => {

  return (
    <div className="section-block">
      {title && <h2 className="section-block__title">{ title }</h2>}
      {children && (
        <div className="section-block__container">
          <div className="row">
            <div className={classnames(
              'column',
              {
                'medium-10 medium-offset-1 large-8 large-offset-2 align-center': size === 'small',
                'column large-10 large-offset-1 align-center': size === 'medium',
                'large-12': size === 'large',
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
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  title: PropTypes.string,
}

SectionBlock.defaultProps = {
  size: 'large',
}

export default SectionBlock;