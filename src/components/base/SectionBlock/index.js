import React from 'react';
import classnames from 'classnames';

import './Styles.scss';

const SectionBlock = ({
  title,
  children,
  centered,
}) => {

  return (
    <div className="section-block">
      {title && <h1 className="section-block__title">{ title }</h1>}
      {children && (
        <div className="section-block__container">
          <div className="row">
            <div className={classnames(
              'column',
              {
                'medium-10 medium-offset-1 large-8 large-offset-2 align-center': centered,
                'large-12': !centered,
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

export default SectionBlock;