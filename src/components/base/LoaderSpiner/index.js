import React from 'react';
import classnames from 'classnames';

import './Styles.scss';

const LoaderSpiner = ({
  dark,
}) => {
  return (
    <div className={classnames(
      'loader-spiner__container',
      {
        'dark-mode': dark
      },
    )}>
      <div className="spinner">
        <div className="double-bounce1" />
        <div className="double-bounce2" />
      </div>
    </div>
  );
};

export default LoaderSpiner;
